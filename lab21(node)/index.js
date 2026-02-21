const express= require("express")
const app = express()

app.use(express.json())

const fs = require("fs")




app.get("/todo",(req,res)=>{
    
    let todos = JSON.parse(fs.readFileSync("./todos.json" , {encoding:"utf-8"}))
    res.json(todos)
})

app.post("/todo",(req,res)=>{
    let newTodo = req.body
    let todos = JSON.parse(fs.readFileSync("./todos.json",{encoding:"utf-8"}))
    todos.push(newTodo)
    fs.writeFileSync("./todos.json",JSON.stringify(todos))
    res.json({message:"success",data:newTodo})
})


app.patch('/todo/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body; 

        let todos = JSON.parse(fs.readFileSync("./todos.json","utf-8"))

    let todo = todos.find(todos => todos.id === parseInt(id));
    if (todo) {
        todo.title = title || todo.title; 
        fs.writeFileSync("./todos.json",JSON.stringify(todos))
        res.status(200).send(`User with ID ${id} has been updated.`);
    } else {
        res.status(404).send('User not found');
    }
});



app.delete('/todo/:id', (req, res) => {
    const todos = JSON.parse(fs.readFileSync("./todos.json","utf-8"))
    const { id } = req.params; 
    todos = todos.filter(todo => todo.id !== parseInt(id)); 
    fs.writeFileSync("./todos.json" , JSON.stringify(todos));
    
    res.status(200).send(`User with ID ${id} has been deleted.`);
});


app.listen(4000,()=>{
    console.log("server run successfully");
    
})