const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const productsData = require('../utils/products')
const {getAddProductPage, postAddProductPage} = require('../controllers/admin/ProductController')

router.get('/', (req, res, next) => {
    const viewsData = {
        pageTitle: 'Product'
    }
    res.render('product', viewsData)
});

router.get('/add', getAddProductPage);

router.post('/add', postAddProductPage );

module.exports = router;
