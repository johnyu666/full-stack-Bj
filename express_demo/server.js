const express=require('express')
const cors=require("cors")
const userRouter=require("./UserRoute")

let app=express()

let tokens=["123","abc"]
app.use(cors())
app.use(express.json())
app.use(function(req,res,next){
    if("DELETE"===req.method){
        let token=req.get("Token")
        if(tokens.includes(token)){
            next()
        }
        else{
            res.json({error:"权限不足"})
        }
    }else{
        next()
    }
    
})



app.use(express.urlencoded())
app.use(express.static("public"))

app.use("/users",userRouter)

app.get('/books',function(req,res){
    // let id=req.params.id
    let id=req.query.id;
    let name=req.query.name

    console.log(typeof id)
    // res.send("Hello App: "+id+","+name)
    res.json({id:1,name:name})
    
})
app.post("/books",function(req,res){
    let body=req.body;
    console.log(body)
    res.json(req.body)
})



app.listen(8000,err=>{
    if(!err) console.log("express 启动")
})

