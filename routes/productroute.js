const express = require("express")
const Products = require("../models/product")
const router = express.Router()

router.post("/add" , async(req,res)=>{
    const data = new Products(req.body);
    const savedata = await data.save()
    if(savedata){
        res.status(200).json({
            message : "Product uploadded successfulyy..!",
            dataa : savedata
        })
    }else{
        res.status(505).json({
            message : "Something went wrong"
        })
    }
})

module.exports = router