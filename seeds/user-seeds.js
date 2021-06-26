const { User } = require('../models');

const userData = [
    {
        username: 'dhartley',
        password: 'dani123'
    },
    {
        username: 'shiro123',
        password: 'shiro123'
    },
    {
        username: 'julian234',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;