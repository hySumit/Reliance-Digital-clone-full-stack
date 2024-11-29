const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  items: [{
    product: { type: Schema.Types.ObjectId, ref: 'products', required: true }, 
    quantity: { type: Number, default: 1 }
  }]
}, { versionKey: false });

const cartModel = model("carts", cartSchema);

module.exports = cartModel;
