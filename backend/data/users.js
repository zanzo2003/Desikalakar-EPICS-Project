import bcrypt from 'bcryptjs';

const users=[
    {
        name:'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name:'John Doe',
        email: 'john@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },
    {
        name:'Jane Doe',
        email: 'jane@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },
];

export default users;