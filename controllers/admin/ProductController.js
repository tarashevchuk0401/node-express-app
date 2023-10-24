const { saveProduct } = require('../../models/Product')

exports.getAddProductPage = (req, res) => {
    const viewsData = {
        pageTitle: 'Add product'
    }
    res.render('AddProduct', viewsData)
}

exports.postAddProductPage = (req, res) => {

    const product = {
        title: req.body.title,
        image : req.body.image,
        price : req.body.price,
        description: req.body.description,
        id: Date.now(),
    }
    saveProduct(product)
    res.redirect('/');
}