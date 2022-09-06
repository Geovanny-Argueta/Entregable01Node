const express = require('express');
const {} = require('../Moduls/registration.modul')

const {registrationUsers} = require('../Moduls/registration.modul')

const getRegistration = async(req, res) =>{
    try {
        const registration = await registrationUsers.findAll()
        res.status(200).json({
            status:'Success',
            data:{
                registration
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const postRegistration = async(req, res) =>{
    try {
        const {entranceTime, exitTime} = req.body
        const registrationNew = await registrationUsers.create({entranceTime, exitTime})

        //Success
        res.status(201).json({
            status:'Success',
            data: {
                registrationNew
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const updateRegistration = async(req, res)=>{
    try {
        const {entranceTime, exitTime} = req.body;
        const {id} = req.params;
        const registrationUserNew = await registrationUsers.findOne({where:{id}})
        if(!registrationUserNew){
            return res.status(404).json({
                status:'Error',
                message: 'User was not found'
            })
        }
        await registrationUserNew.update({entranceTime, exitTime})
        res.status(202).json({
            status:'Success',
            data:{
                registrationUserNew
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteRegistration = async(req, res)=>{
    try {
        const {id} = req.params;
        const deleteUserNew = await registrationUsers.findOne({where: {id}})
        if(!deleteUserNew){
            return res.status(404).json({
                status:'Error',
                message:'The User was not found'
            })
        }
        await deleteUserNew.update({status:'deleted'})
        res.status(202).json({
            status:'Success'
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports= {
    getRegistration,
    postRegistration,
    updateRegistration,
    deleteRegistration,
}