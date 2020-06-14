// import express from 'express';
var express = require('express');
var signinController = require( './controller/signincontroller');
var mongoose = require( 'mongoose');
var bodyParser = require( 'body-parser');
var cors = require( 'cors');
// import signupRoute from './routes/signuproute';

var priceRoute = require( './controller/pricecontroller');

const app = express()
const PORT = 3001

app.use(require("body-parser").text());
 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/testusers')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
// app.use('/product',signupRoute);

app.use('/price',priceRoute);
app.use('/',signinController);

app.use(require("body-parser").text());

app.listen(PORT, () => {
    console.log(`your server is running on ${PORT}`);
})
