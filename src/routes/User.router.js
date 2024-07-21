const express = require('express')
const { login } = require('../modules/user/login')
const { registerUser } = require('../modules/user/Register')

const UserRouter = express.Router()

UserRouter.post('/login', login)
UserRouter.post('/register', registerUser)

module.exports = {
  UserRouter
}
