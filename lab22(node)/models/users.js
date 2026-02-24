const mongoose = require("mongoose")

let userModel = mongoose.Schema({
    name:{
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
    updatedAt : Date
},{collection:"User"})

let usersModel = mongoose.model("User", userModel)

module.exports = usersModel