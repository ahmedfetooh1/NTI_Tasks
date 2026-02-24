let todoModels =require("../models/todos")




let getAllTodos = async (req,res)=>{
    let todos = await todoModels.find().populate('userId') 

    res.status(200).json({message:"success" , data: todos})
    
    
}

let saveNewTodo = async (req,res)=>{
    let newTodo = req.body

    try {
        let saveNewTodo = await todoModels.create(newTodo)
        res.status(200).json({message:"success", data:saveNewTodo})
    } catch (error) {
        console.log(error)
    }
}

let getTodoById = async (req,res)=>{
    let {id} = req.params;
    try {
        let todo = await todoModels.findById(id)
        return res.status(200).json({message : "here is todo",data:todo})
    } catch (error) {
        return res.status(404).json({message:"todo not found"})
    }
}


let updatedTodoById = async (req, res) => {
    const { id } = req.params;
    let updatedData = req.body

    try {
        let updatedTodo = await todoModels.findByIdAndUpdate(id, updatedData, { new: true });  
        
        return res.status(200).json({message:"updated success" , data:updatedTodo})

    }catch(error){
            return res.status(404).json({ message: "Todo not found" });
        }
    }





let deleteTodoById = async (req, res) => {

    const { id } = req.params; 
    try {
        let deletedTodo = await todoModels.findByIdAndDelete(id);
        return res.status(200).json({ message: "Deleted successfully"});

    } catch (error) {
        return res.status(404).json({ message: "Todo not found" });
    }
}



module.exports = {getAllTodos,getTodoById , saveNewTodo , updatedTodoById , deleteTodoById }

