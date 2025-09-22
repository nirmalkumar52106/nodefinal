const express = require("express")
const cors = require("cors")
const Users = require("./models/user")
require("./configuration/mongoconnect")
const bodyParser = require("body-parser")
const productRoutes = require("./routes/productroute.js")
const Authuser = require("./middleware/authuser.js")
const router = express.Router()

const server = express()
server.use(cors(origin = "*"))
server.use(bodyParser.json())


server.get("/" , (req,res)=>{
    res.send("hello")
})

server.use("/product" , Authuser ,  productRoutes)



const port = 8000

server.listen(port,(req,res)=>{
   console.log(`server started of port http://localhost:${port}`)
})