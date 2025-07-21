const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    maxlength: 20,
  },
  title: {
    type: String,
    maxlength: 100,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  lastAccesDate: {
    type: Date,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
