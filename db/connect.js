//Lets connect to the Database. 
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    // Your username from MySQL goes here,
    user:'root',
    // Your MySQL password is used here.
    password:'$Nick0608',
    database: 'employee_tracker' 
});

module.exports = db;