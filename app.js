const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const { AuthorRouter } = require('./src/routes/Author.router')
const { BookRouter } = require('./src/routes/Book.router')
const { UserRouter } = require('./src/routes/User.router')

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())

app.use(AuthorRouter)
app.use(BookRouter)
app.use(UserRouter)

app.use('/', (req, res) => {
  res.send('welcome')
})

module.exports = {
  app
}
