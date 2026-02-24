let userModel = require("../models/users")

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




module.exports = {getAllUsers , getUserById , deleteUserById , updateUserById  , saveNewUser}