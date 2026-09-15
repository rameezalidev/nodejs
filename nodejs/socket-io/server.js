const http = require("http");
const {Server} = require("socket.io");

const server = http.createServer();
const io = new Server(server,{
    cors: {
        origin: "*"
    }
})

io.on("connection",(socket)=>{
    console.log(socket.id);

    socket.on("message",(message)=>{
        console.log(message, " from client...");
    })
    socket.on("send_message",(data)=>{
        console.log(data);
    })
    socket.emit("message", "hello from server")
})


server.listen(5000,()=>console.log("Server running..."));
