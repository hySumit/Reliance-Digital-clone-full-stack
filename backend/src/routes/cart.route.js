const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware'); // Assuming authMiddleware is in the same directory

const cartModel = require('../model/cart.model'); // Assumed

router.post('/add', auth, async (req, res) => {
  try {
    const { product_id, quantity } = req.body; // Ensure this matches the request body field name
    const userId = req.body.userID;

    const cart = await cartModel.findOneAndUpdate(
      { user: userId },
      { $addToSet: { items: { product: product_id, quantity: quantity } } },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "Item added to cart", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post('/remove', auth, async (req, res) => {
  try {
    const { product_id } = req.body;
    const userId = req.body.userID;

    const cart = await cartModel.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: product_id } } },
      { new: true }
    );

    res.status(200).json({ message: "Item removed from cart", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get('/', auth, async (req, res) => {
    try {
      const userId = req.body.userID;
  
      const cart = await cartModel.findOne({ user: userId }).populate({
        path: 'items.product', // Populate the 'product' field in each item
        model: 'products',
        select: 'product_name product_image price' // Select specific product fields
      });
  
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }
  
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  

module.exports = router;
