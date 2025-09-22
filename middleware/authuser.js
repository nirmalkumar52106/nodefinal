
function Authuser(req,res,next){

    const authorized = req.headers["authorization"]
    const token = authorized.split(" ")[1];
  
    if(token === "nirmal"){
        next()
    }else{
        res.status(200).json({
            message :"user not verified"
        })
    }

}

module.exports = Authuser