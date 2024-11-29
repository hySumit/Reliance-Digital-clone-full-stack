const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const database = require('./src/config/db');
const userRouter = require('./src/routes/user.route');
const product_router = require('./src/routes/products.route');
const cartRouter = require('./src/routes/cart.route');
const cors = require('cors');

const app = express();

const allowedOrigins = ["https://reliance-digital-clone-full-stack.vercel.app/", "https://reliance-digital-clone-full-stack.onrender.com/products/monitor","https://reliance-digital-clone-full-stack.onrender.com/products/cooler","https://reliance-digital-clone-full-stack.onrender.com/products/ac","https://reliance-digital-clone-full-stack.onrender.com/products/phones","https://reliance-digital-clone-full-stack.onrender.com/products/watch","https://reliance-digital-clone-full-stack.onrender.com/products/ro", "*"]; 

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true, 
}));

app.use(express.json());
app.use("/user", userRouter);
app.use("/products", product_router);
app.use("/cart", cartRouter);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    try {
        database(); 
        console.log(`Server is running on PORT: ${PORT}`);
    } catch (error) {
        console.log("Error starting server:", error);
    }
});
