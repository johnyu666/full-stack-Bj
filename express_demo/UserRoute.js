const express=require('express')


let router=express.Router()

let users=[{id:1,name:'john',age:23},{id:2,name:'tom',age:23}]
let idIndex=2;

router.get("/",function(req,res){
    res.json(users)
})

router.post("/",function(req,res){
    let user=req.body;
    user.id=++idIndex;
    users.push(user)
    res.json(user)
})

router.delete("/:id",function(req,res){
    let id=req.params.id;
    let index=users.findIndex(user=>user.id==id)
    users.splice(index,1)
    res.json({})

})

router.put("/:id",function(req,res){
    let id=req.params.id;
    let user=req.body;
    let index=users.findIndex(user=>user.id==id)
    users.splice(index,1,user)
    res.json(user)
})


module.exports=router;