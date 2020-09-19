const mongoose = require('mongoose')
const Product = require('./models/product')
mongoose.connect('mongodb+srv://gruningzen:Esfera3010@cluster0.uo1tr.mongodb.net/products_test?retryWrites=true&w=majority')
    .then(()=>console.log('connected to DB') )
    .catch(()=> console.log('connection failed'))
const createProduct = async(req,res,next)=>{
    const createProduct = new Product({
        name :req.body.name,
        price:req.body.price,
    })
    const result = await  createProduct.save()

    res.json(result)
}

const getProducts = async(req,res,next)=>{
    const products = await Product.find().exec()
    res.json(products)
}

exports.createProduct = createProduct
exports.getProducts = getProducts
