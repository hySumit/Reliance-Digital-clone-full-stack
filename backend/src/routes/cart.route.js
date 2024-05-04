const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware'); // Assuming authMiddleware is in the same directory

const  cartModel  = require('../model/cart.model'); // Assuming models are in the same directory

// Add item to cart
router.post('/add', auth, async (req, res) => {
    try {
        const { product_id, quantity } = req.body;
        const userId = req.body.userID; // Assuming userID is decoded from the token by the auth middleware
        
        // Add validation for product_id and quantity
        
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

// Remove item from cart
router.post('/remove', auth, async (req, res) => {
    try {
        const { product_id } = req.body;
        const userId = req.body.userID; // Assuming userID is decoded from the token by the auth middleware
        
        // Add validation for product_id
        
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

// Get user's cart
router.get('/', auth, async (req, res) => {
    try {
        const userId = req.body.userID; // Assuming userID is decoded from the token by the auth middleware

        const cart = await cartModel.findOne({ user: userId }).populate('items.product');

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