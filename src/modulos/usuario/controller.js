const db = require('../../DB/db');
const Entidad = 'usuarios';

function getAll(){
    return db.getAll(Entidad);
}

module.exports = {
    getAll,
}