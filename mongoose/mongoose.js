const mongoose = require('mongoose')
const Product = require('./models/product')
mongoose.connect('mongodb+srv://gruningzen:Esfera3010@cluster0.uo1tr.mongodb.net/products_test?retryWrites=true&w=majority')
    .then(()=>console.log('connected to DB') )
    .catch(()=> console.log('connection to DB faildes'))
const createProduct = async(req,res,next)=>{
    const createProduct = new Product({
        name :req.body.name,
        price:req.body.price,
    })
    const result = createProduct.save()
}

exports.createProduct = createProduct;