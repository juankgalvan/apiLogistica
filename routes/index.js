const express=require('express')
const enrutador=express.Router()
const resp=require('../src/util/rsp')

enrutador.get('/login', (req,res)=>{
    if(req.body.user=='juankgalvan'){
        resp.success(req,res,200,'Exitoso')
    }
    resp.success(req,res,500,'Error Interno')
})

enrutador.post('/create', (req,res)=>{
    resp.success(req,res,200,'Usuario Creado')
})

module.exports=enrutador