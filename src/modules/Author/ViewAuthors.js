const Author = require('../../models/author')

async function ViewAuthors (req, res) {
  try {
    const authors = await Author.find()
    res.json(authors)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  ViewAuthors
}
