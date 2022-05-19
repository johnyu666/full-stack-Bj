const mongoose=require("mongoose")
const connection=require('./Connection')
let UserSchema=mongoose.Schema({name:{type:String,default:""}
,age:{type:Number,default:0}})
let UserModel=connection.model("Users",UserSchema)
module.exports=UserModel


