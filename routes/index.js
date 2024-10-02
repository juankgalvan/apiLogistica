const express=require('express')
const enrutador=express.Router()
const resp=require('../src/util/rsp')

enrutador.post('/login', (req,res)=>{
    if(req.body.user=='j.camilo.g.perez@gmail.com'& req.body.pass=='12345'){
        resp.success(req,res,200,'Exitoso')
    }
    resp.success(req,res,500,'Error Interno')
})

/*enrutador.post('/create', (req,res)=>{
    resp.success(req,res,200,'Usuario Creado')
})*/

module.exports=enrutador