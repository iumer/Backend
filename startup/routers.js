const express = require("express");

const productRouter = require("../routes/productsapi");
const cors = require('cors')
const bodyParser = require("body-parser")


module.exports = function(app, ){


app.use(express.json());
app.use("/apis/product", productRouter);
app.use(cors());

   
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
  });


}