//event loop
const fs=require('fs')
const path=require('path')

fs.open(path.join(__dirname,'data.txt'),'r',function(err,fd){
    if(!err){
        fs.read(fd,function(err,num,buffer){
            fs.open("data2.txt",'w',function(err,fd2){
               fs.write(fd2,buffer,0,num,function(err){
                   if(!err) {
                       fs.close(fd,function(){console.log("data.txt关闭")})
                       fs.close(fd2,function(){console.log("data2.txt关闭")})
                   }
               }) 
            })
        })
    }
})


console.log("other work....")




