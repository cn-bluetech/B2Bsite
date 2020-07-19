//jshint esversion:10
const db = require('../config/db');

exports.homePage = async(req,res)=>{
    try {
        // let sql = 'SELECT * FROM home_page';
        // let query = await db.db.query(sql,(err,result)=>{
        //     if(err) throw err;
        //     if(!result.length){
        //         req.flash('error_msg','No data found');
        //         res.redirect('/');
        //     }else{
                res.render('home');
            // }
        // });
    } catch (error) {
        console.error(error);
    }
};

exports.mobile = async(req,res)=>{
    try {
        await res.render('./mobile/homePage');
    } catch (error) {
        res.status(404).send();
    }
};

exports.products = async(req,res)=>{
    try {
        await res.render('products');
    } catch (error) {
        res.status(404).send();
    }
};