const Book = require('../../models/book')

async function ViewBook (req, res) {
  try {
    const books = await Book.find()
    res.json(books)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  ViewBook
}
