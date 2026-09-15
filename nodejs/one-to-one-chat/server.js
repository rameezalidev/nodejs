const http = require("http");
const {Server} = require("socket.io");

const server = http.createServer();

const users = new Map();
const io = new Server(server,{
    cors:{
        origin: "*"
    }
})

io.on("connection",(socket)=>{
    console.log("User connected: ",socket.id);

  socket.on("register", (userId) => {

        users.set(userId, socket.id);

        console.log(userId, "=>", socket.id);

    });



   socket.on("send_message", (message) => {

        console.log("Message:", message);
    socket.emit("receive_message", message);
    });


    socket.on("disconnect",()=>{
        console.log("User disconnected: ",socket.id);
    });

});

server.listen(5000,()=>console.log("Server running on port...."))