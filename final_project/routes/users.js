var express = require('express');
var router = express.Router();
const UserModel=require("../db/UserModle")

router.get('/', function(req, res) {
  UserModel.find({},function(err,users){
    res.json(users)
  })
});
router.post("/",function(req,res){
  UserModel.create(req.body,function(err,user){
    res.json(user)
  })
})
router.put("/:id",function(req,res){
  let id=req.params.id
  let user=req.body;
  UserModel.findByIdAndUpdate(id,user,{new:true},
    function(err,u){
      res.json(u)
    })

})

router.delete("/:id",function(req,res){
  UserModel.remove({_id:req.params.id},function(err,msg){
    res.json({})
  })
})

module.exports = router;
