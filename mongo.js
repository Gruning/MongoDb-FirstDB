const MongoClient = require('mongodb').MongoClient

const url = 'mongodb+srv://gruningzen:Esfera3010@cluster0.uo1tr.mongodb.net/products_test?retryWrites=true&w=majority'

const createProduct = async (req,res,next)=>{
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    }
    const client = new MongoClient(url);
    try {
        await client.connect()
        const db = client.db()
        const result = db.collection('products').insertOne(newProduct)
    } catch (error) {
       return res.json({message:'Could not store data.'}) 
    }
}

const getProducts = async(req, res,next)=>{

}

exports.createProduct = createProduct 
exports.getProduct = getProducts