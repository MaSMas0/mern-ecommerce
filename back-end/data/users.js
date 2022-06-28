import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456789', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        password: bcrypt.hashSync('123456789', 10),
    },
    {
        name: 'jane Doe',
        password: bcrypt.hashSync('123456789', 10),
    },
]

export default users