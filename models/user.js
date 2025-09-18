const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({
    name :  String,
})

const Users = new mongoose.model("myusers" , UserModel)
module.exports = Users