const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const productsData = require('../utils/products')
const { getAddProductPage, postAddProductPage, getAdminProductsPage, getEditProductPage, postEditProductPage } = require('../controllers/admin/ProductController')

const router = express.Router();

// router.get('/', (req, res, next) => {
//     const viewsData = {
//         pageTitle: 'Product'
//     }
//     res.render('product', viewsData)
// });

router.get('/', getAdminProductsPage)

router.get('/add', getAddProductPage);
router.post('/add', postAddProductPage);
router.get('/edit/:productId', getEditProductPage)
router.post('/edit', postEditProductPage);

module.exports = router;
