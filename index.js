const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Customer = sequelize.define('contactDetails', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING
});

sequelize.sync();

module.exports = { Customer };
