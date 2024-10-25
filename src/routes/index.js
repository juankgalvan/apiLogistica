const express=require('express')
const enrutador=express.Router()
const resp=require('../util/rsp')
const controller =  require('../modulos/usuario/controller')

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

enrutador.get('/listar', (req,res)=>{
    const getAllUser = controller.getAll().then((items) => {
        resp.success(req, res, 200, items);
    })
})

module.exports=enrutador