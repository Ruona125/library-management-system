const Book = require('../../models/book')

async function UpdateBook (req, res) {
  const { title, authorID, summary, isbn } = req.body
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, authorID, summary, isbn },
      { new: true }
    )
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' })
    res.json(updatedBook)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = {
  UpdateBook
}
