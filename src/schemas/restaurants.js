'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantsSchema = new Schema({

}, {
  timestamps: true
})

module.exports = mongoose.model('resturants', restaurantsSchema)