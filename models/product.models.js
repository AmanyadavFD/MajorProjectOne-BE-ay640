const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { type: String },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    stock: {
      stock: Number,
    },
    image: String,
    size: { type: String, enum: ["XS", "S", "M", "L", "XL", "XXL"] },
    discountPercentage: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
