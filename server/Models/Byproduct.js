const mongoose = require("mongoose");

const ByproductSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  itemByproduct: {
    type: String,
    required: true
  },
  use: {
    type: String,
    required: true
  },
  videoURL: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Byproduct", ByproductSchema);
