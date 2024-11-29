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


const allowedOrigins = "*"

app.use(cors({
    origin : allowedOrigins,
    methods:["GET","POST","PUT","PATCH","DELETE"]
}))



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

