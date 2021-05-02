const mongoose = require('mongoose')
const Product = require('./models/product')

const connectionStringAtlas = 'mongodb+srv://gruningzen:Esfera3010@cluster0.uo1tr.mongodb.net?retryWrites=true&w=majority' 

const connectionStringLocal= 'mongodb://localhost:27017/products_test'

mongoose.connect(
   // connectionStringLocal,{
   connectionStringAtlas, {
    dbName:'products_test',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log('connected to DB') )
    .catch(()=> console.log('connection failed'))

    
const createProduct = async(req,res,next)=>{
    const createdProduct = new Product({
        name :req.body.name,
        price:req.body.price,
    })
    const result = await  createdProduct.save()

    res.json(result)
}

const getProducts = async(req,res,next)=>{
    const products = await Product.find().exec()
    res.json(products)
}

exports.createProduct = createProduct
exports.getProducts = getProducts
