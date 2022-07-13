import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Order from '../models/order.model';

router.get('/', asyncHandler(async (req, res) => {
    const order = await Order.find();
    return res.json(order);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const order = await Order.findOne({_id: req.params.id});
    if (!order)
        return res.status(404).json({error:'Order not found'});
    return res.send(order);
}));