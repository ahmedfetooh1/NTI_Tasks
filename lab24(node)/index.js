const express= require("express");
const mongoose = require('mongoose');
const cors = require("cors")
const dotenv = require("dotenv")


mongoose.connect('mongodb://127.0.0.1:27017/TodoApp').then(()=>{
    console.log("connect to db successfully");
    
}).catch((err)=>{
    console.log(err);
})


const app = express()

app.use(express.json())

app.use(cors())
dotenv.config()




let todosRoutes = require("./routes/todos");
let usersRoutes = require("./routes/users");

app.use("/todo" , todosRoutes);

app.use("/user", usersRoutes);




app.listen(4000,()=>{
    console.log("server run successfully");
    
})