//jshint esversion:10

const express = require('express');
const router = express.Router();
const homeCtrl = require('../controller/homeController');

router.use(express.static('public'));


router
    .route('/')
    .get(homeCtrl.homePage);

router
    .route('/products')
    .get(homeCtrl.products);

router  
    .route('/mobile')
    .get(homeCtrl.mobile);

module.exports = router;