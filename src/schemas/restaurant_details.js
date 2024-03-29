const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantDetailSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  status: {
    type: Number
  },
  cusines: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  home_delivery: {
    type: String
  },
  miles: {
    type: String
  },
  is_restaurant_verified: {
    type: Number,
    required: true
  },
  pos_rest_id: {
    type: String
  },
  minimum_order: {
    type: Number
  },
  max_people: {
    type: Number
  },
  dine_in: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  mobile_number: {
    type: Number
  },
  restaurant_location: {
    type: String
  },
  till_number: {
    type: String
  },
  preparation_time_id: {
    type: Number
  },
  open_time: {
    type: String
  },
  close_time: {
    type: String
  },
  restaurant_image: {
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
  collection: 'restaurant_details'
})

module.exports = mongoose.model('restaurant_details', restaurantDetailSchema)