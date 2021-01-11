'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cusinesSchema = new Schema({

}, {
  timestamps: true
})

module.exports = mongoose.model('cuisines', cusinesSchema)