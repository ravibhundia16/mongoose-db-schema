const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  user_id: {
    type: Number,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: Number
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  country: {
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
  collection: 'users'
})

module.exports = mongoose.model('users', userSchema)