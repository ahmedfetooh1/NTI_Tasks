const jwt = require("jsonwebtoken")
let util = require("util")


async function auth(req,res,next){
    let {authorization} = req.headers

    if(!authorization){
        res.status(401).json({message : "you should be login"})
    }

    try {
        let decoded = await util.promisify(jwt.verify)(authorization,process.env.SECRET)
        req.id = decoded.id
        next()
    } catch (error) {
        res.status(401).json({message:'you are unauthorized'})
    }
}


const authorize = (roles = []) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (roles.length && !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: You don't have permission" });
        }
        next();
    };
};

module.exports = {auth , authorize}
