const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://kumarnirmal52106_db_user:PNu6PeaRve2ITkkH@cluster0.uthqxyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    family  : 4,
}).then(()=>{
    console.log("mongodb connected..!")
}).catch(()=>{
    console.log("mongo not connected")
})