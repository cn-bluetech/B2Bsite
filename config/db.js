//jshint esversion:10

const mysql = require('mysql');

var options = {
    connectionLimit : 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database:'bluetech'
};

module.exports.db = mysql.createPool(options);