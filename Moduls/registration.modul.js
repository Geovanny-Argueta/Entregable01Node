const express =require('express');
const {db, DataTypes} = require('../utils/database.utils');

const registrationUsers = db.define('/api/v1/registrations',{
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false,
    },
    entranceTime:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    exitTime:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    status: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: 'activate' 
    }
})

module.exports={registrationUsers}
