import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import User from '../models/user.model';

router.get('/', asyncHandler(async (req, res) => {
    const users = await User.find();
    return res.json(users);
}));

router.post('/register/', asyncHandler(async (req, res) => {
    if (req.body.password != req.body.repeatPassword)
        return res.status(400).json({ msg: 'The passwords do not match'});
    const user = await User.findOne({ email: req.body.email});
    if (user) 
        return res.status(400).json({ msg: 'The user does exist'});

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    });

    newUser.password = await newUser.encryptPassword(req.body.password);
    await newUser.save();
    return res.status(200).json({ msg: 'User saved successfully'});
}));

router.post('/login/', asyncHandler(async (req, res) => {
    if (!req.body.password || !req.body.email)
    return res.status(400).json({ msg: 'The password and email are required' });

    const user = await User.findOne({ email: req.body.email });
    if (!user)
        return res.status(404).json({ msg: 'The user does not exist'});
    const isAuth = await user.authenticate(req.body.password);
    if (!isAuth)
        return res.status(404).json({ msg: 'Credentials are not valid'});
    const token = jwt.sign(user.userToken(), process.env.JWT_SECRET, {expiresIn: '15m'});
    const refreshToken = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '365d'});
    return res.status(200).json({ authToken: token, refreshToken });

}))