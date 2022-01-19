const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  category: {
    type: String,
    required: false
  },
  calories: {
    type: Number,
    required: false
  },
  imageURL: {
    type: String,
    required: false
  },
  canServe: {
    type: Number,
    required: false
  },
  booked: {
    type: Boolean,
    required: false
  },
  bookedBy: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Donation", donationSchema);
