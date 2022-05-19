const mongoose=require('mongoose')
let connection=mongoose.createConnection("mongodb://localhost:27017/bj1")

let UserSchema=mongoose.Schema({name:{type:String,default:"john"},age:{type:Number,default:8}})
connection.model("Users",UserSchema)

let UserModel=connection.model("Users")
connection.on("connected",function(err){
    if(!err){
        console.log("数据库已经连接！")
        // UserModel.create({name:'tom',age:23},function(err,newUser){
        //     console.log(newUser)
        //     connection.close()
        // })

        UserModel.find({},function(err,users){
            console.log(users)
            connection.close()
        })

        // UserModel.findByIdAndUpdate("6285fde000354ed30b8bdae8",{name:'jackson',age:65},{new:true},
        // function(err,user){
        //     console.log(user)
        //     connection.close()
        // })

        // UserModel.remove({age:65},function(err,xx){
        //     console.log(xx)
        //     connection.close()
        // })




        // connection.close()
    }
})