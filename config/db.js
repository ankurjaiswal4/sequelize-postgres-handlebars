const Sequelize = require('sequelize');

module.exports = new Sequelize('postgres', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

//Alternatively
//module.exports = new Sequelize('postgres://user:pass@example.com:5432/dbname');
