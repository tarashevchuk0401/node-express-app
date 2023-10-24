const express = require('express');
const app = express();
const bodyParser = require('body-parser')


const home = require('./routes/home')
const text = require('./routes/text')

app.use(home);
app.use(text);
app.use(bodyParser.urlencoded({extended: false}));


app.listen(4000, ()=>{
    console.log(4000)
})