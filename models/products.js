const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({

    
    productName:{
        type: String,
        maxlength: 50, 
        minlength: 1,
        required: true
    },
    type: {
        type: String,
        maxlength:10,
        required:true
    },
    description: {
        type: String,
        maxlength:100,
        required:true
    },
    price:{
        type: String,
        maxlength: 6,
        minlength: 1,
        required: true
    },
    companyName:{
        type: String,
        maxlength: 50,
        minlength: 1,
        required: true
    }
});

const Product = mongoose.model("product", productSchema);

module.exports.Product = Product;


