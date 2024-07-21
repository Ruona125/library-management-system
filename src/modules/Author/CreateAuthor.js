const Author = require('../../models/author')

async function CreateAuthor (req, res) {
  const { name, bio } = req.body
  const author = new Author({ name, bio })
  try {
    const savedAuthor = await author.save()
    res.status(201).json(savedAuthor)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = {
  CreateAuthor
}
