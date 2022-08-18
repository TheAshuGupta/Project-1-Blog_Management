const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ['Mr', 'Mrs', 'Miss']
  },
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Author', authorSchema);