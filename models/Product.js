const fs = require("fs");
const rootDir = require('../utils/path');
const path = require("path");
const { deleteProductFromCart } = require("./Cart");
const db = require("../utils/database")



exports.saveProduct = (product) => {
    return db.execute('INSERT INTO products (title, description, price, imageURL) values(?,?,?,?)',
        [
            product.title,
            product.description,
            product.price,
            product.imageURL
        ]);
}

exports.fetchAllProducts = () => {
    return db.execute('Select * FROM products');
}

exports.getProductById = (productId) => {
    return db.execute('select * from products where id = ?', [productId]);
    
}

exports.updateProductById = (product, productId) => {
    const productsPath = path.join(rootDir, 'data', 'products.json');
    getProductsFromFile(products => {
        const existingProductIndex = products.findIndex(prod => prod.id.toString() === productId.toString())

        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = product;
        fs.writeFile(productsPath, JSON.stringify(updatedProducts), error => {
            console.log(error);
        })
    })
}

exports.deleteProductById = (productId, callBack) => {
    const productsPath = path.join(rootDir, 'data', 'products.json');

    getProductsFromFile(products => {
        let updatedProducts = products.filter(product => product.id.toString() !== productId.toString())

        deleteProductFromCart(productId)

        fs.writeFile(productsPath, JSON.stringify(updatedProducts), error => {
            console.log(error);
        })
        callBack()
    })
}

