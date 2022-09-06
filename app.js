const express = require('express')

//Routers
const {registrationUsers} = require('./routes/registration.routes')

const app = express()

app.use(express.json())

//Define EndPoints
app.use('/api/v1/registrations', registrationUsers);

app.all('*', (req, res)=>{
    res.status(404).json({
        status: 'Error',
        message: `${req.method} ${req.url} Does not exist in our Server`
    })
})

module.exports = {app}