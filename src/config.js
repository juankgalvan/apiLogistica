require('dotenv')

const config={
    port: process.env.PORT || 3200,
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '1234',
        database: process.env.MYSQL_DB || 'logistica',
    }
}


module.exports=config