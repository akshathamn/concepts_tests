const mongoose = require('mongoose')
const Schema = mongoose.Schema

const priceSchema = new Schema({
  product: String,
  amount :  Number,
  address: String 
    
})

module.exports = mongoose.model('Price', priceSchema)