import bcrypt from 'bcryptjs'
// Acá hay en encriptar la clave del usuario

const users = [

    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Loki',
        email: 'user1@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Ori',
        email: 'user2@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users