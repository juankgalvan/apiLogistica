const db = require('../../DB/db');
const Entidad = 'usuarios';

function getAll(){
    return db.getAll(Entidad);
}

function getById(id){
    return db.getById(Entidad,id)
}

module.exports = {
    getAll,
    getById
}