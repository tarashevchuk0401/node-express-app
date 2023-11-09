// const mysql = require("mysql2");

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'Probook4520s',
//     database: 'node-e-comerce-app',
// });

// module.exports = db.promise()


const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('node-e-comerce-app', 'root', 'Probook4520s', {
    dialect: 'mysql',
    host: 'localhost',
});


module.exports = sequelize;