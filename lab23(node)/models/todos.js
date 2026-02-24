const mongoose = require("mongoose")


let todoModel = mongoose.Schema({
    userId:{
        type: mongoose.Schema.ObjectId,
        ref: "User",

    },
    title: {
        type: String,
        required: [true , "title is required"],
        unique: [true , "todo must be unique "] ,
        minLength: 3,
        maxLength: 16
    } ,

    status:{
        type: String,
        enum: ["todo" , "in progress" , "done"],
        default: "todo"
    },

    time: Date ,
})

let todosModel = mongoose.model('Todo' , todoModel)

module.exports = todosModel