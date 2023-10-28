const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./utils/path')
const adminRoutes = require('./routes/admin');
const homeRoute = require('./routes/home');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views')

// Static files
app.use(express.static(path.join(rootDir, 'public')))
app.use('/css', express.static(path.join(rootDir, 'node_modules', 'bootstrap', 'dist', 'css')))
app.use(bodyParser.urlencoded({ extended: false })); // Configure body-parser for JSON requests


// Routes
app.use( homeRoute);
app.use('/products', adminRoutes);
app.use((req, res, next) => {
    const viewsData  = {
        pageTitle: 'Pa!gge not found//'
    }
    res.status(404).render('404', viewsData)
});

app.listen(3000, () => {
    console.log('port 3000');
});
