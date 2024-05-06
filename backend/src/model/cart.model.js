const { Schema, model } = require("mongoose");
const cartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    items: [{
      productID: { type: String, ref: 'products' },
      quantity: { type: Number, default: 1 }
    }]
  }, { versionKey: false });
  
  const cartModel = model("carts", cartSchema);

  module.exports = cartModel