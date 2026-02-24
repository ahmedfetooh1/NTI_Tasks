const express = require("express")
const Router = express.Router()


let {getAllUsers , getUserById , deleteUserById , updateUserById  , saveNewUser} = require("../controller/user")



Router.get('/',getAllUsers)

Router.get("/:id",getUserById)

Router.post('/',saveNewUser)

Router.patch('/:id',updateUserById)

Router.delete("/:id",deleteUserById)

module.exports = Router
