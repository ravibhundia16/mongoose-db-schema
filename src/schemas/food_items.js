'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodItemsSchema = new Schema({

},{
  timestamps: true
})

module.exports = mongoose.model('food_items', foodItemsSchema)