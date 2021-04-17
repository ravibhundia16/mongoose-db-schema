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
  cusine_image: {
    type: String
  },
  is_deleted: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: {
    createdAt: 'created_on',
    updatedAt: 'updated_on'
  },
  collection: 'cusines'
})

module.exports = mongoose.model('cusines', cusineSchema)