const Book = require('../../models/book')

async function ViewBookById (req, res) {
  try {
    const book = await Book.findById(req.params.id)
    if (!book) return res.status(404).json({ message: 'Book not found' })
    res.json(book)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  ViewBookById
}
