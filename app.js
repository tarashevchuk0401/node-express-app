const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./utils/path')
const adminRoutes = require('./routes/admin');
const homeRoute = require('./routes/home');
const sequelize = require('./utils/database');
const Product = require('./models/ProductModel');
const app = express();
// const db = require("./utils/database")

app.set('view engine', 'ejs');
app.set('views', 'views');



// Static files
app.use(express.static(path.join(rootDir, 'public')))
app.use('/css', express.static(path.join(rootDir, 'node_modules', 'bootstrap', 'dist', 'css')))
app.use(bodyParser.urlencoded({ extended: false })); // Configure body-parser for JSON requests


// Routes
app.use(homeRoute);
app.use('/products', adminRoutes);
app.use((req, res, next) => {
    const viewsData = {
        pageTitle: 'Pa!gge not found//'
    }
    res.status(404).render('404', viewsData)
});

// sequelize.authenticate().then(() => {
//     console.log('conect success');
// }).catch(error => {
//     console.log(error);
//     console.log('error in establishing connection ');
// })

sequelize.sync().then(result => {
}).catch(error => console.log(error))

const sampleProduct = {
    title: 'sample prod 2',
    description: 'sample prod 1',
    price: 13.99,
    imageURL: 'dsds'
};

Product.create(sampleProduct).then(result => {
}).catch(error => console.log(error));

app.listen(3000, () => {
    console.log('port 3000');
});
