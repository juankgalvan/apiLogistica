const express=require('express')
const enrutador=express.Router()
const resp=require('../util/rsp')
const controller =  require('../modulos/usuario/controller')

enrutador.post('/login', (req,res)=>{
    user=req.body.email
    pass=req.body.contrasena
    const getUser = controller.log(user,pass).then((items) => {
        if(items=1){
            resp.success(req,res,200,'Exitoso')
        }else
        resp.success(req,res,500,'Error Interno')
    })
    
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
 
enrutador.get('/byId/:id', (req,res)=>{
    const id = req.params.id
    const getUser = controller.getById(id).then((items) => {
        resp.success(req, res, 200, items);
    })
})

module.exports=enrutador