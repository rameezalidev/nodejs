const WebSocket = require("ws");

const socket = new WebSocket("ws://localhost:8080");

socket.on("open", () => {
    console.log("Connected to server");

    socket.send("Hello Server!");
});

socket.on("message", (message) => {
    console.log("Server:", message.toString());
});

socket.on("error", (error) => {
    console.log("WebSocket error:", error.message);
});