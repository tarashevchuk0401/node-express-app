const { saveProduct, fetchAllProducts, getProductById, updateProductById, deleteProductById } = require('../../models/Product')

exports.getAddProductPage = (req, res) => {
    const viewsData = {
        edit: false,
        pageTitle: 'Add product'
    }
    res.render('AddProduct', viewsData)
}

exports.postAddProductPage = (req, res) => {

    const product = {
        title: req.body.title,
        imageURL: req.body.image,
        price: req.body.price,
        description: req.body.description,
        id: Date.now(),
    }
    saveProduct(product).then(() => {
        res.redirect('/')
    }).catch(error => {
        console.log(error)
    })
}

exports.getAdminProductsPage = (req, res) => {
    fetchAllProducts().then(([products]) => {
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

exports.getEditProductPage = (req, res) => {
    const productId = req.params.productId;

    getProductById(productId, product => {
        const viewsData = {
            edit: true,
            product,
            pageTitle: 'Edit product'
        }
        res.render('AddProduct', viewsData);
    })
}

exports.postEditProductPage = (req, res) => {
    const product = {
        id: req.body.productId,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    }
    updateProductById(product, req.body.productId);
    res.redirect('/products');
}

exports.postDeleteProductPage = (req, res) => {
    const productId = req.body.productId;
    deleteProductById(productId, () => {
        res.redirect('/products');
    })
}