//jshint esversion:10

//all required modules initialization
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const mysql = require('mysql');
const app = express();
const db = require('./config/db');
const { json } = require('express');
require('dotenv').config();

//setting up the templating engine
app.set('view engine','ejs');

//initializing middlewares
app.use(morgan('dev'));
app.use(session({
    secret:"abc",
    saveUninitialized:false,
    resave:false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

// setting up the connect-flash middleware function
app.use(flash()); 
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash('error_msg');
    res.locals.warning_msg = req.flash('warning_msg');
    res.locals.error = req.flash('error');
    next();
});

//setting up connection with mysql database
// db.db.getConnection(err =>{
//     if(err) throw err;
//     console.log('Database is connected');
// });

// initializing port on server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 9090;
}

//initializing routes for the web app
app.use('/', require('./routes/homePage'));

//setting up the port connection to the server
app.listen(port, ()=> console.log(`The app is running on localhost:${port}`));