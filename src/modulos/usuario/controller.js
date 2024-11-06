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

module.exports = {
    getAll,
    getById,
    log
}