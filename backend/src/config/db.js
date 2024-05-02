const mongoose = require('mongoose')
require('dotenv').config()

const database = async ()=>{
    mongoose.connect(process.env.API_URL)
}

module.exports = database