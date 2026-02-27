const jwt = require("jsonwebtoken")
let util = require("util")



async function auth(req,res,next){
    let {token} = req.headers
    // console.log(token)
    if(!token){
        return res.status(401).json({message:"you should be login first"})
    }

    try {
        let decoded = await util.promisify(jwt.verify)(token , process.env.SECRET)
        
        req.id = decoded.id 
        req.role = decoded.role
        next()
        
    } catch (err) {
        return res.status(401).json({message:"you are not authenticated try again"})
    }


}






let authorize = (...roles)=>{
    return function(req,res,next){
        if(!roles.includes(req.role)){
            return res.status(403).json({status:"Error", message:"you dont have perimssion to do this action"})
        }
        next()
    }
}

module.exports = {auth , authorize}
