const Author = require('../../models/author')

async function AuthorWithBooks (req, res) {
  try {
    const authors = await Author.find().populate('books')
    res.json(authors)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  AuthorWithBooks
}
