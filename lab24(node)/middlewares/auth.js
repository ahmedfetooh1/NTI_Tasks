const jwt = require("jsonwebtoken")
let util = require("util")



async function auth(req,res,next){
    let {token} = req.headers
    // console.log(token)
    if(!token){
        return res.status(401).json({message:"you must be login first"})
    }

    try {
        let decoded = await util.promisify(jwt.verify)(token , process.env.SECRET)
        // console.log(decoded);
        req.id = decoded.id 
        req.role = decoded.role
        next()
        
    } catch (err) {
        return res.status(401).json({message:"you are not authenticated try again"})
    }
    // jwt.verify(authorization, process.env.SECRET)

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
