const express = require("express")
const Router = express.Router()


let {getAllTodos , saveNewTodo , getTodoById , deleteTodoById , updatedTodoById } = require("../controller/todos")



Router.get("/",getAllTodos)

Router.post("/",saveNewTodo)

Router.get("/:id",getTodoById)

Router.patch("/:id",updatedTodoById)

Router.delete("/:id",deleteTodoById)

module.exports = Router
