const EventEmitter = require("events");

const eventBus = new EventEmitter();

// Login listener
eventBus.on("login", (username) => {
    console.log(`[LOG] ${username} logged in`);
    console.log(`[NOTIFICATION] Welcome back, ${username}!`);
});

// Logout listener
eventBus.on("logout", (username) => {
    console.log(`[LOG] ${username} logged out`);
});

// Error listener
eventBus.on("errorEvent", (message) => {
    console.log(`[ERROR] ${message}`);
});

// Read CLI arguments
const command = process.argv[2];
const value = process.argv.slice(3).join(" ");

switch (command) {
    case "login":
        if (!value) {
            console.log("Please provide a username.");
            break;
        }

        eventBus.emit("login", value);
        break;

    case "logout":
        if (!value) {
            console.log("Please provide a username.");
            break;
        }

        eventBus.emit("logout", value);
        break;

    case "error":
        if (!value) {
            console.log("Please provide an error message.");
            break;
        }

        eventBus.emit("errorEvent", value);
        break;

    default:
        console.log(`
Event System CLI

Usage:

  node app.js login <username>
  node app.js logout <username>
  node app.js error <message>
        `);
}
