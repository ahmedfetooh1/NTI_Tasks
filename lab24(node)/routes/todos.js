const express = require("express")
const Router = express.Router()
let {auth , authorize} = require("../middlewares/auth")

let {getAllTodos , saveNewTodo , getTodoById , deleteTodoById , updatedTodoById } = require("../controller/todos")


Router.get("/",getAllTodos)

// Router.post("/",saveNewTodo)
Router.route("/").get(getAllTodos).post(auth ,authorize('user' , 'admin') , saveNewTodo)

Router.get("/:id",authorize(['admin', 'user']),getTodoById)

Router.patch("/:id",auth,updatedTodoById)

Router.delete("/:id",authorize('admin'),deleteTodoById)


module.exports = Router
