const express = require('express');
const router = express.Router();
const db = require('../config/db');
const User = require('../models/user');

// Get list of users
router.get('/', (req, res, err) => {
    // res.send("Hello User");
    User.
        // findOrCreate({ where: { username: 'Test' } })
        findAll()
        .then(user => {
            console.log(user);
            res.send(user);
        })
        .catch(err => {
            throw err;
        });
});

// Add a user

router.get('/add', (req, res, err) => {
    const data = {
        username: 'User 1',
        firstName: 'First 1',
        lastName: 'Last 1',
        email: 'test@test.com',
        phone: '123445556'
    }

    let { username, firstName, lastName, email, phone } = data;

    User.create({
        username,
        firstName,
        lastName,
        email,
        phone
    }).then(user => {
        res.redirect('/user');
    })
        .catch(err => {
            throw err
        });
});

module.exports = router;