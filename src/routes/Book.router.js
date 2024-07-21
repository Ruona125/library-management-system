const express = require('express')
const { CreateBook } = require('../modules/Book/CreateBook')
const { DeleteBook } = require('../modules/Book/DeleteBook')
const { UpdateBook } = require('../modules/Book/UpdateBook')
const { ViewBook } = require('../modules/Book/ViewBook')
const { ViewBookById } = require('../modules/Book/ViewBookById')
const { Authorize } = require('../Middlewares/Authorize')

const BookRouter = express.Router()

BookRouter.get('/books', Authorize, ViewBook)
BookRouter.get('/books/:id', Authorize, ViewBookById)
BookRouter.post('/books', Authorize, CreateBook)
BookRouter.delete('/books/:id', Authorize, DeleteBook)
BookRouter.put('/books/:id', Authorize, UpdateBook)

module.exports = {
  BookRouter
}
