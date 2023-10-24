const { fetchAllProducts, getProductById } = require('../../models/Product');
const productsData = require('../../utils/products')

exports.getHomePage = (req, res) => {
    fetchAllProducts(products => {
        const viewsData = {
            products,
            pageTitle: 'Home Page - prodList'
        }
        res.render('homepage', viewsData);
    })
}

exports.getProductDatailPage = (req, res) => {
    const productId = req.params.productId;

    getProductById(productId, product => {
            const viewsData = {
                product,
                pageTitle: product.title
            }
            res.render('ProductDetails', viewsData)
        })
}