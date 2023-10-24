const products = [
    {title: 'product: - 1 '},
    {title: 'product: - 2 '},
    {title: 'product: - 3 '},
];

const addProduct = (product) => {
    products.push(product)
}

module.exports = {
    products,
    addProduct
}