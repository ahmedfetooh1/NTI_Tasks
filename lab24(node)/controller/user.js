let userModel = require("../models/users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


let getAllUsers = async (req,res)=>{
    let users = await userModel.find()
    try {
        res.status(200).json({message:"all users",data:users})
    } catch (error) {
        
    }
    
}

let saveNewUser = async (req,res)=>{
    let newUser = req.body

    try {
        let saveNewUser = await userModel.create(newUser)
        res.status(200).json({message:"success", data:saveNewUser})
    } catch (error) {
        console.log(error)
    }
}

let getUserById = async (req,res)=>{
    let {id} = req.params;
    try {
        let user = await userModel.findById(id)
        return res.status(200).json({message : "here is user ",data:user})
    } catch (error) {
        return res.status(404).json({message:"todo not found"})
    }
}


let updateUserById = async (req, res) => {
    const { id } = req.params;
    let updatedData = req.body

    try {
        let updatedUser = await userModel.findByIdAndUpdate(id, updatedData, { new: true });  
        
        return res.status(200).json({message:"updated success" , data:updatedUser})

    }catch(error){
            return res.status(404).json({ message: "user not found" });
        }
    }





let deleteUserById = async (req, res) => {

    const { id } = req.params; 
    try {
        await userModel.findByIdAndDelete(id);
        return res.status(200).json({ message: "Deleted successfully"});

    } catch (error) {
        return res.status(404).json({ message: "user not found" });
    }
}





let login = async (req,res) =>{
    let {username , password } = req.body
    if (!username || !password){
        return res.status(400).json({message:"Enter username and password"})
    }

    let user = await userModel.findOne({username:username})

    if (!user){
        return res.status(404).json({message:"invalid username or password"})
    }

    let isValid = await bcrypt.compare(password , user.password)

    if(!isValid){
        return res.status(401).json({message:"invalid username or password"})
    }
    let token = jwt.sign({id:user._id ,username : user.username },process.env.SECRET)
    res.status(200).json({token:token})
}






let updatePassword= async (req , res)=>{
    let {currentPassword , password} = req.body

    if(!currentPassword || !password){
        res.status(400).json({status:"Error" , message:"please enter current or password"})
    }

    let user = await userModels.findById(req.id)

    if(!user){
        return res.status(404).json({status:"Error" ,message:"inValid please login first" })
    }

    let isValid = await bcrypt.compare(currentPassword , user.password)

    if(!isValid){
        return res.status(400).json({status:"faild", message:"please enter right currentPassword"})
    }

    user.password= password 

    await user.save()

    let token = jwt.sign({id:user._id , email: user.email , role:user.role}, process.env.SECRET , { expiresIn: '1h' })

    res.status(200).json({token: token})

}

module.exports = {getAllUsers , getUserById , deleteUserById , updateUserById  , saveNewUser , login , updatePassword}