const Author = require('../../models/author')

async function ViewAuthorsById (req, res) {
  try {
    const author = await Author.findById(req.params.id)
    if (!author) return res.status(404).json({ message: 'Author not found' })
    res.json(author)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  ViewAuthorsById
}
