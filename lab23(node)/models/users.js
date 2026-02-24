const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

let userModel = mongoose.Schema({
    username:{
        type:String ,
        required : true ,
        unique : true ,
        minLength : 3 ,
        maxLength : 20 ,
    },
    password :{
        type : String ,
        required : true , 

    },
    firstName : {
        type : String , 
        required : true ,
        minLength : 3 , 
        maxLength : 15
    },
    lastName : {
        type : String , 
        required : true ,
        minLength : 3 , 
        maxLength : 15
    },
    dob : Date ,
    createdAt : Date ,
    updatedAt : Date ,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
},{collection:"User"})




userModel.pre("save",async function(){
    let salt = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(this.password , salt)
    this.password = hashedPassword
})

let usersModel = mongoose.model("User", userModel)
module.exports = usersModel