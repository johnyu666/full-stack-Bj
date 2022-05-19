const mongoose=require('mongoose')

let connection=mongoose.createConnection("mongodb://localhost:27017/bj")

module.exports=connection;