
import mysql from 'mysql/promise'

const cors = await mysql.createConnection({
    host: process.env.mysql_HOST,
    user:process.env.mysql_USER,
    passoword: process.env.mysql_PWD,
    database: process.env.mysql_db
});

console.log('BANCO DE DADOS OLINE');
export{con}
