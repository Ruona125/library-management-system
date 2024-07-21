const http = require('http')
const { mongoose } = require('mongoose')
const { app } = require('./app')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT
const server = http.createServer(app)
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Connected to database!')
    server.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
    })
  })
  .catch(error => {
    console.log(error)
  })
