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
  },
  is_deleted: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
})

restaurantDetailSchema.plugin(global.indexedDB.autoIncrement, {
  model: 'cusines',
  field: 'id',
  startedAt: 1
})

module.exports = mongoose.model('cusines', cusineSchema)