const mongoose = require("mongoose")

const Productmodel = new mongoose.Schema({
    title : String,
    desc : String,
})

const Products = new mongoose.model("products" , Productmodel)
module.exports = Products
