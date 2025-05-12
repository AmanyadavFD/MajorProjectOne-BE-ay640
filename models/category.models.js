// models/Category.js
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String }, // Added this to store the categoryImage
});

module.exports = mongoose.model("Category", categorySchema);
