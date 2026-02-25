const express = require("express")
const Router = express.Router()
let {auth , authorize} = require("../middlewares/auth")


let {getAllUsers , getUserById , deleteUserById , updateUserById  , saveNewUser , login , updatePassword} = require("../controller/user")



Router.get('/',getAllUsers)

Router.post('/',saveNewUser)
Router.post("/login" , login)
Router.patch("/update" ,auth ,updatePassword)

Router.get("/:id",getUserById)

Router.patch('/:id',updateUserById)

Router.delete("/:id",deleteUserById)



module.exports = Router
