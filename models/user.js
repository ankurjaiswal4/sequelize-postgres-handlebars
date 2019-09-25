const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('user', {
    username: {
        type: Sequelize.STRING
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
});

User.sync({ force: false }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    /* return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    }); */
});

module.exports = User;