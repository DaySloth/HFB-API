const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  uid: { type: String, trim: true },
  title: { type: String, trim: true },
  price: Number,
  quantity: Number,
  category: { type: String, trim: true },
  part_num: { type: String, trim: true },
  sub_category: { type: String, trim: true },
  finish: { type: String, trim: true },
  length: Number,
  width: Number,
  height: Number,
  image: { type: String, trim: true },
  image_id: { type: String, trim: true },
  date_Updated: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
