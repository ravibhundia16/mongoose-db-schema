const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodItemsRestaurantSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  status: {
    type: Number
  },
  created_on: {
    type: Date
  },
  is_deleted: {
    type: Boolean,
    required: true,
    default: false
  },
  quantity: {
    type: Number
  },
  description: {
    type: String
  },
  cost: {
    type: Number
  },
  main_price: {
    type: Number
  },
  special_price: {
    type: Number
  },
  discount: {
    type: Number
  },
  discount_percent: {
    type: Number
  },
  food_item_id: {
    type: Number
  },
  fooditem_name: {
    type: String,
    required: true
  },
  cusine_id: {
    type: Number,
    required: true
  },
  cusine_name: {
    type: String,
    required: true
  },
  restaurant_id: {
    type: Number,
    required: true
  },
  restaurant_name: {
    type: String,
    required: true
  },
  date: {
    type: Date
  },
  modified_on: {
    type: Date
  }
}, {
  timestamps: true
})

foodItemsRestaurantSchema.plugin(global.db.autoIncrement, {
  model: 'fooditems_restaurants',
  field: 'id',
  startedAt: 1
})

module.exports = mongoose.model('fooditems_restaurants', foodItemsRestaurantSchema)