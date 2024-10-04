const express=require('express')
const enrutador=express.Router()
const resp=require('../src/util/rsp')

enrutador.post('/login', (req,res)=>{
    console.log(req.body)
    if(req.body.email=='j.camilo.g.perez@gmail.com'& req.body.contrasena=='12345'){
        resp.success(req,res,200,'Exitoso')
    }
    resp.success(req,res,500,'Error Interno')
})

enrutador.post('/create', (req,res)=>{
    resp.success(req,res,200,'Exitoso')
})

enrutador.post('/contacto', (req,res)=>{
    resp.success(req,res,200,'Exitoso')
})

module.exports=enrutador