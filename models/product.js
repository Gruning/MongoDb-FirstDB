const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: Strin},
    price: { type: numb},
})

module.exports = mongoose.model('Product', productSchema)