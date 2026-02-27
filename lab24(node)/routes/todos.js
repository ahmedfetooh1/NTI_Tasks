const express = require("express")
const Router = express.Router()
let {auth , authorize} = require("../middlewares/auth")

let {getAllTodos , saveNewTodo , getTodoById , deleteTodoById , updatedTodoById } = require("../controller/todos")


Router.get("/",getAllTodos)

Router.post("/",saveNewTodo)
// Router.post(auth ,authorize('user' , 'admin') , saveNewTodo)

Router.delete("/:id",deleteTodoById)

Router.get("/:id",authorize(['admin', 'user']),getTodoById)

Router.patch("/:id",auth,updatedTodoById)



module.exports = Router
