const express = require("express")
const cors = require("cors")
const Users = require("./models/user")
require("./configuration/mongoconnect")
const bodyParser = require("body-parser")
const productRoutes = require("./routes/productroute.js")
const router = express.Router()

const server = express()
server.use(cors(origin = "*"))
server.use(bodyParser.json())


server.get("/" , (req,res)=>{
    res.send("hello")
})

server.use("/product" , productRoutes)


// server.get("/",(req,res)=>{
//     res.send([
//         {id : "45",
//             username : "nirmal",
//             password : "12345",
//         },
//         {id : "45",
//             username : "nirmalkkk",
//             password : "12345k"
//         }
//     ])
// })

// server.post("/data",async(req,res)=>{
//     const data = Users(req.body)
//     const saveddata = await data.save()
//     if(saveddata){
//         res.status(200).json({
//             data : saveddata,
//             message : "username created successfulyy"
//         })
//     }else{
//         console.log("intenral issue")
//     }
// })

// server.get("/myproducts" ,async(req,res)=>{
//     const data = await Users.find({})
//     res.json({
//         "data" : data
//     })
// })

// server.get("/myproducts/:id",async(req,res)=>{
//     const id = req.params.name
//     const data = await Users.findOne(id)
//     res.json({
//         "particular data" : data
//     })
// })

// server.delete("/myproducts/:id",async(req,res)=>{
//     const id = req.params.id
//     const deleted = await Users.findByIdAndDelete(id)
//     if(deleted){
//         res.status(200).json({
//             message : "data deleted"
//         })
//     }
// })



const port = 8000

server.listen(port,(req,res)=>{
   console.log(`server started of port http://localhost:${port}`)
})