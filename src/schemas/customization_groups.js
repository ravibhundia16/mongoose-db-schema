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
  product_id: {
    type: Number
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
  collection: 'customization_groups'
})

module.exports = mongoose.model('customization_groups', customizationGroupSchema)