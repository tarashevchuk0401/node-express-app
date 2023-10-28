const fs = require("fs");
const rootDir = require('../utils/path');
const path = require("path");

exports.addProductToCart = (productId, productPrice) => {

    const cartPath = path.join(rootDir, 'data', 'cart.json')
    fs.readFile(cartPath, (error, cartContent) => {
        // cart Da=etails
        let cart = { products: [], totalPrice: 0 }
        console.log(cart)
        //if cart data exist 
        if (!error) {
            cart = JSON.parse(cartContent);
            console.log(cart)
        }

        let existingProductIndex = cart.products.findIndex(prod => prod.id.toString() === productId)
        let updatedProduct;

        if (existingProductIndex !== -1) {
            console.log(existingProductIndex)
            updatedProduct = {...cart.products[existingProductIndex]};
            updatedProduct.quantity += 1;
            cart.products = [...cart.products];
            cart.products[existingProductIndex] = updatedProduct;
        } else {
            updatedProduct = { id: productId, quantity: 1 };
            cart.products = [...cart.products, updatedProduct];
        }
        cart.totalPrice = Number(cart.totalPrice)  + Number(productPrice);
        fs.writeFile(cartPath, JSON.stringify(cart), (error) => {
            console.log(error)
        });
    })
}