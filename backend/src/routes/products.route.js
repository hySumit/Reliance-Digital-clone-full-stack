const express = require('express')
const product_model = require("../model/products.model")

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


module.exports = product_router