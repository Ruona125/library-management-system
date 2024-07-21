const express = require('express')
const { CreateAuthor } = require('../modules/Author/CreateAuthor')
const { ViewAuthors } = require('../modules/Author/ViewAuthors')
const { ViewAuthorsById } = require('../modules/Author/ViewAuthorsById')
const { AuthorWithBooks } = require('../modules/Author/AuthorWithBooks')
const { AuthorWithBooksById } = require('../modules/Author/AuthorWithBooksById')
const { Authorize } = require('../Middlewares/Authorize')

const AuthorRouter = express.Router()

AuthorRouter.get('/author', Authorize, ViewAuthors)
AuthorRouter.get('/author/with-books', Authorize, AuthorWithBooks)
AuthorRouter.get('/author/with-books/:id', Authorize, AuthorWithBooksById)
AuthorRouter.get('/author/:id', Authorize, ViewAuthorsById)
AuthorRouter.post('/author', Authorize, CreateAuthor)

module.exports = {
  AuthorRouter
}
