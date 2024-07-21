const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  }
})

authorSchema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'authorID'
});

authorSchema.set('toObject', { virtuals: true });
authorSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Author', authorSchema)
