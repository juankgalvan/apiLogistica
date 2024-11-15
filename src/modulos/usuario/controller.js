const db = require('../../DB/db');
const Entidad = 'usuarios';

function getAll(){
    return db.getAll(Entidad);
}

function getById(id){
    return db.getById(Entidad,id)
}

function log(user,pass){
    return db.log(Entidad,user,pass)
}

function reg(nom,ed,mail,pass){
    return db.reg(Entidad,nom,ed,mail,pass)
}

module.exports = {
    getAll,
    getById,
    log,
    reg
}