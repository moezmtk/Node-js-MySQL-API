const mysql = require('mysql');
//create mysql connection

const connected = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'node_mysql_crud_db'
});

connected.connect(function(error){
    if(error) throw error;
    console.log('Datebase connected Successfully!!!');
})

module.exports = connected;



