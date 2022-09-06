const {Sequelize, DataTypes} = require('sequelize');

//Establish Connection
const db = new Sequelize({
    dialect:'postgres',
    host: '127.0.0.1',
    username: 'postgres',
    password: 'edge$1950+',
    port: 5432,
    database: 'entregable01',
    logging:false,
})

module.exports = {db, DataTypes}