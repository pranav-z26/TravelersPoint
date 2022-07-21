const mongoose = require('mongoose');

//created new instance of schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  phone: { type: String, required: true },
  admin: { type: Boolean, default: false },
  address: { type: String, default: '' },
  city: { type: String, default: '' },
  country: { type: String, default: '' }
})

//setting virtual property using get method
//to set id manually, needed to set virtual n then covert to hexstring
userSchema.virtual("id").get(function () {
  return this._id.toHexString();
})


userSchema.set("toJSON", {
  virtuals: true,
})

//creating model- its a wrapper on the mongoose schema/ create a mongo collection for doing crud operations
const User = mongoose.model('User', userSchema);


module.exports = User;
