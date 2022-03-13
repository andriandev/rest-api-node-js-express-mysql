const { Sequelize } = require('sequelize');

const db = new Sequelize('node_rest_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;