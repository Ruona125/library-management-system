const Book = require('../../models/book')

async function DeleteBook (req, res) {
  try {
    const book = await Book.findByIdAndDelete(req.params.id)
    if (!book) return res.status(404).json({ message: 'Book not found' })
    res.json({ message: 'Book deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  DeleteBook
}
