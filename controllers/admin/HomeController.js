const { fetchAllProducts, getProductById } = require('../../models/Product');
const productsData = require('../../utils/products')

exports.getHomePage = (req, res) => {
    fetchAllProducts()
    .then(([products]) => {
        const viewsData = {
            admin: false,
            products,
            pageTitle: 'Home Page - prodList'
        }
        res.render('product-list', viewsData);
    })
    .catch((error) => {
        console.log(error);
    });
}

exports.getProductDatailPage = (req, res) => {
    const productId = req.params.productId;

    getProductById(productId).then(([product]) =>{
        const viewsData = {
            product: product[0],
            pageTitle: product.title
        }
        res.render('ProductDetails', viewsData)
    }).catch(error => {
        console.log(error);
    })
}