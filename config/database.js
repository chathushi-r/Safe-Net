const mysql = require('mysql2');

const connectionPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Usc@7249',
    database:'safenetdb',
    connectionLimit: 10, 
})

module.exports = connectionPool;