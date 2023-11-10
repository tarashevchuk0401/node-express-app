const { fetchAllProducts, getProductById } = require('../../models/Product');
const Product = require('../../models/ProductModel');
const productsData = require('../../utils/products')

exports.getHomePage = (req, res) => {

    Product.findAll().then(products => {
        const viewsData = {
            admin: false,
            products,
            pageTitle: 'Home Page - prodList'
        }
        res.render('product-list', viewsData);
    }).catch((error) => {
        console.log(error);
    });
}

exports.getProductDatailPage = (req, res) => {
    const productId = req.params.productId;
    
    Product.findByPk(productId).then(product => {
        const viewsData = {
            product: product,
            pageTitle: product.title
        }
        res.render('ProductDetails', viewsData)
    }).catch(error => {
        console.log(error);
    })
}

