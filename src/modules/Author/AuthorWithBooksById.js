const Author = require('../../models/author')

async function AuthorWithBooksById (req, res) {
  try {
    const authors = await Author.findById(req.params.id).populate('books')
    res.json(authors)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
    AuthorWithBooksById
}
