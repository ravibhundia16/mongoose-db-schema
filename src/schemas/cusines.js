const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cusineSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: Number
  },
  created_on: {
    type: Date
  },
  cusine_image: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('cusines', cusineSchema)