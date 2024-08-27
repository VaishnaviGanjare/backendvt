const { Sequelize } = require('sequelize');
const sequelize= new Sequelize('book-app', 'root', 'vaishnavii2704',{
    dialect:'mysql',
    host:'localhost'

})

module.exports = sequelize;

