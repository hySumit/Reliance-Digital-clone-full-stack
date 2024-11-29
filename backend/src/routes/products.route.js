const express = require('express')
const product_model = require("../model/products.model")
const auth = require('../middleware/auth.middleware')
const product_router = express.Router()


// get all products by category

// product_router.get("/",async(req,res)=>{
//     try {
//         let query = {}
//         if(req.query.category){
//             query.category = {$regex:req.query.category, $options:"i"}
//         }
//         const products = await product_model.find(query);
//         res.status(200).json({
//             products
//         })
//     } catch (error) {
//         res.status(500).json({
//             message:"error finding products",
//             error
//         })
//     }
// })

product_router.get("/:category?", async (req, res) => {
    try {
        let query = {};
        if (req.params.category) {
            query.category = { $regex: req.params.category, $options: "i" };
        }
        const products = await product_model.find(query);
        res.status(200).json({
            products
        });
    } catch (error) {
        res.status(500).json({
            message: "Error finding products",
            error
        });
    }
});


// 

product_router.post("/create",auth, async(req,res)=>{
    const {product_name,product_image,price,mrp,stars,disscount,offer,category,username,userID} = req.body

    try {
        const products = new product_model({
            product_name,product_image,price,mrp,stars,disscount,offer,category,username, userID
        })
        await products.save()
        res.status(201).send("Product added successfully")
    } catch (error) {
        res.status(500).json({
            message:"Error adding prodcts",
            error
        })
    }
})

product_router.patch("/update/:id",auth, async (req, res) => {
    const { id } = req.params;
    try {
        const updateProduct = await product_model.findByIdAndUpdate(id, req.body);

        res.status(201).json({
            message: `Product updated successfully with id: ${id}`
        });
    } catch (error) {
        res.status(500).send("Error updating product");
    }
});

product_router.delete("/delete/:id",auth, async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await product_model.findByIdAndDelete(id);

        res.status(201).json({
            message: `Product deleted successfully with id: ${id}`
        });
    } catch (error) {
        res.status(500).send("Error deleting product");
    }
});



module.exports = product_router