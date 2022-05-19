//异步函数
// const fs=require('fs')

// fs.open("test1.js",function(err,fd){
//     if(!err){
//         console.log(fd)
//     }
//     else{
//         console.log(err.message)
//     }
    
// })
// console.log("other working...")


function open(name,callback){
    let err=null;
    setTimeout(function(){

        let fd=Math.floor(Math.random()*10)
        if(fd<8) err=new Error("系统占用")
        callback(err,fd)
    },1000)
}
function open1(name){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let fd=Math.floor(Math.random()*10)
            if(fd<5) reject(new Error("系统占用"))
            else resolve(fd)
        },1000)
    })
}


function write(fd,content){
    console.log(`使用${fd},写入内容：${content}`)
}

// open('abc.txt',function(err,fd){
//     if(!err)write(fd,"ok")
//     else console.log(err.message)
    
// })

// open1("xxx")
// .then(fd=>write(fd,"ok"))
// .catch(err=>console.log(err.message))
// console.log("other work...")

async function main(){
    try{
        let fd=await open1("sss")
        write(fd,"ok")
    }catch(e){
        console.log(e.message)
    }
    
}

main()
console.log("other working...")