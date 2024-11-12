const mysql = require('mysql2')
const config = require('../config')

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conn;
let reintentos = 0;
const maxreintentos = 3;

function conDB(){
    conn = mysql.createConnection(dbConfig);

    conn.connect((error) => {
        if(error){
            reintentos ++;
            console.log(`Error de conexion a la DB: ${error}`);
            if(reintentos >= maxreintentos)            
                process.exit(1);
            setTimeout(conDB, 200);
        }
        else{
            console.log('Conexion a la DB exitosa');
        }
    });
}

conDB();

function getAll(entidad){
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${entidad}`, (error, result) => {
            if(error)
                return reject(error);
            
            return resolve(result);
        })
    } );
}

function getById(entidad,id){
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${entidad} where id=${id}`, (error, result) => {
            if(error)
                return reject(error);
            
            return resolve(result);
        })
    } );
}

function log(entidad,user,pass){
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${entidad} where email='${user}' and password='${pass}'`, (error, result) => {
            if(error)
                return reject(error);
            
            return resolve(result);
        })
    } );
}

module.exports = {
    getAll,
    getById,
    log
}