const express = require("express");
const productRouter = express.Router();
const _ = require("lodash");
const {Product} = require("../models/products");
const jwt = require("jsonwebtoken"); 

// PRODUCTS ENDPOINTS
// ADD NEW PRODUCT
productRouter.post("/addnewproduct", async(req, res)=>{

    let product = new Product({
        productName : req.body.productName,
        companyName : req.body.companyName,
        type: req.body.type,
        description: req.body.description,
        price : req.body.price,
    })


 try {
     product = await product.save();

     res.setHeader('Access-Control-Allow-Origin', '*')
   
    return res.send(product);

 }
 catch(ex){
     console.log(ex.message)
 }
 
});


// GET A PRODUCT

productRouter.get("/getproduct/:id",async (req, res)=>{

    
    const prod = await Product.findOne({_id: req.params.id}); 
    if(!prod) 
    {
        return res.status(404).send("Not found")  ;
   
    }
   
    res.header('Access-Control-Allow-Origin', '*')
    return res.send(prod);
 
});


// GET ALL PRODUCTS
productRouter.get("/getallproducts",  async (req, res)=>{



    const products = await Product.find().select("-__v");

    if(!products) return res.status(404).send("Not found")

   res.header('Access-Control-Allow-Origin', '*')
    return res.send(products);

})


//UPDATE A PRODUCT
productRouter.put("/updateproduct/:id", async (req, res)=>{

    const product = await Product.findByIdAndUpdate({_id: req.params.id},{
        $set:{
            productName: req.body.productName,
            companyName: req.body.companyName,
            type: req.body.type,
            description: req.body.description,
            price: req.body.price

        }
    },{new: true});

    res.header('Access-Control-Allow-Origin', '*')

    return res.send(product);

});

//DELETE A PRODUCT

productRouter.delete("/deleteproduct/:id", async (req, res) => {
    const prod = await Product.findByIdAndRemove(req.params.id);
  
    if (!prod) return res.status(404).send("Already deleted")
 
     res.header('Access-Control-Allow-Origin', '*')
     return res.send(prod);
  });
  




module.exports = productRouter;
