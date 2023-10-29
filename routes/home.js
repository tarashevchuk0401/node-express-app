const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const { getHomePage, getProductDatailPage } = require('../controllers/admin/HomeController');
const { postCartPage, getCartPage, deleteCartItem } = require('../controllers/admin/CartController');


const router = express.Router();

router.get('/', getHomePage);
router.get('/product/details/:productId', getProductDatailPage)

router.post('/cart', postCartPage);
router.get('/cart', getCartPage);
router.post('/cart/delete-item', deleteCartItem)

module.exports = router;