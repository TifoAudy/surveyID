const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  respon: { type: Boolean, default: false }
});

module.exports = recipientSchema;