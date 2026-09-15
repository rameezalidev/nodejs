const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (socket) => {
    console.log("Client connected");

    socket.send("Hello from WebSocket server!");

    socket.on("message", (message) => {
        console.log("Client:", message.toString());
    });
});

console.log("WebSocket server running on ws://localhost:8080");