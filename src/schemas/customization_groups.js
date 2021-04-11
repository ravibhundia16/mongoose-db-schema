const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customizationGroupSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  pos_group_id: {
    type: Number
  },
  group_name: {
    type: String
  },
  group_type: {
    type: String
  },
  group_type_code: {
    type: String
  },
  select_max: {
    type: String
  },
  group_values: {
    type: String
  },
  status: {
    type: Number
  },
  created_on: {
    type: Date
  },
  product_id: {
    type: Number
  },
  is_deleted: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
})

customizationGroupSchema.plugin(global.indexedDB.autoIncrement, {
  model: 'customization_groups',
  field: 'id',
  startedAt: 1
})

module.exports = mongoose.model('customization_groups', customizationGroupSchema)