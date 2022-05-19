//TCP,UDP
const net=require("net")

let server=net.createServer()

server.on('connection',function(socket){
    socket.write("I am sever123!\n")
    socket.on('data',function(chunk){
        let msg=chunk.toString();
        socket.write("hello: ")
        socket.write(msg)
        socket.write("\n")
    })
})

server.listen(8000,function(err){
    if(!err) console.log("服务器在8000端口启动")
})