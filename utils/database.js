const mysql = require("mysql2");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Probook4520s',
    database: 'node-e-comerce-app',
});

module.exports = db.promise()

// db.execute('Select * from products where id > ?', [0], (error, result, fields) => {
//     console.log(error);
//     console.log(result);
//     console.log(fields);
// })
