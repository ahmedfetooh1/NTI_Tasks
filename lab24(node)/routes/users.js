const express = require("express")
const Router = express.Router()
let {auth , authorize} = require("../middlewares/auth")


let {getAllUsers , getUserById , deleteUserById , updateUserById  , saveNewUser , login , updatePassword} = require("../controller/user")



Router.get('/',getAllUsers)

Router.get("/:id",getUserById)

Router.post("/login" , login)

Router.post('/',saveNewUser)

Router.patch('/:id',updateUserById)

Router.delete("/:id",deleteUserById)

Router.patch("/updateMyPassword", auth ,updatePassword)

module.exports = Router
