const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 8080
const database = require('./src/config/db')
const userRouter = require('./src/routes/user.route')
const product_router = require('./src/routes/products.route')
const router = require('./src/routes/cart.route')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use("/user",userRouter)
app.use("/products",product_router)
app.use("/cart",router)
// app.use(cors())
// dot dot dot
const allowedOrigins= ["http://localhost:5174","https://reliance-digital-clone-full-stack-api.onrender.com","https://reliance-digital-clone-full-stack.vercel.app/"]
app.use(cors({
    origin:(origin,callback)=>{
        console.log("Origin is", origin);
        if(allowedOrigins.indexOf(origin)!==-1||!origin){
            console.log("Origin allowed");
            callback(null,true)
        }
        else{
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials:true
}));

// dot dot dot/

app.get('/',(req,res)=>{
    res.send("Hello World!")
})


app.listen(PORT,()=>{ 
    try {
        database()
        console.log(`Server is running on PORT :${PORT}`);
    } catch (error) {
        console.log(error);
    }
})   

