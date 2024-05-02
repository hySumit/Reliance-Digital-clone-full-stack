const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  product_name: { type: String, required: true },
  product_image: { type: String, required: true },
  price: { type: String, required: true },
  stars: { type: Number },
  mrp: { type: String },
  disscount: { type: String },
  offer: { type: Boolean, required: true },
  category: { type: String, required: true },
});

const product_model = model("products",productSchema)

module.exports = product_model