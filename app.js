const express = require('express')
const routes= require('./routes/index')
const config= require('./src/config')
const app= express()
//const port=3000

app.use(express.json())

app.use('/', routes)

app.listen(config.port, () =>{
    console.log(`Servicio escuchando por el puerto: ${config.port}`)
})