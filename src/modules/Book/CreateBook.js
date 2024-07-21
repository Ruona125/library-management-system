const Book = require('../../models/book')

async function CreateBook (req, res) {
  const { title, authorID, summary, isbn } = req.body

  // check if the ISBN already exists
  const existingISBN = await Book.findOne({isbn})
  if(existingISBN){
    return res.status(409).json({ message: 'ISBN already in use' })
  }
  const book = new Book({ title, authorID, summary, isbn })
  try {
    const savedBook = await book.save()
    res.status(201).json(savedBook)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = {
  CreateBook
}
