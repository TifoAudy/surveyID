const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define a properties of user using mongoose.schema
const userSchema = new Schema({
  googleID: String,
  credit: { type: Number, default: 0 }
});

//create a model class called users with schema called userSchema
mongoose.model('users', userSchema);