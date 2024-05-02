const {Schema,model} = require('mongoose')

const blacklisted = new Schema({
    token:{type:String,required:true, unique:true},
    expires:{type:Date,required:true}
},{versionKey:false})

const blackListedToken = model("blackListedToken",blacklisted);

module.exports = blackListedToken