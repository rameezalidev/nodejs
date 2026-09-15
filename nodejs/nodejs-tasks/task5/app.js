const os = require("os");
const path = require("path");

function showSystem() {
    console.log("===== SYSTEM INFORMATION =====");
    console.log("Platform:", os.platform());
    console.log("Architecture:", os.arch());
    console.log("CPU Cores:", os.cpus().length);
    console.log("Hostname:", os.hostname());
    console.log("OS Release:", os.release());
}

function showCpu() {
    console.log("===== CPU INFORMATION =====");
    console.log("CPU Cores:", os.cpus().length);
    console.log("CPU Model:", os.cpus()[0].model);
    console.log("CPU Speed:", os.cpus()[0].speed, "MHz");
}

function showMemory() {
    console.log("===== MEMORY INFORMATION =====");

    const total = os.totalmem() / 1024 / 1024 / 1024;
    const free = os.freemem() / 1024 / 1024 / 1024;
    const used = total - free;

    console.log("Total:", total.toFixed(2), "GB");
    console.log("Used:", used.toFixed(2), "GB");
    console.log("Free:", free.toFixed(2), "GB");
}

function showPaths() {
    console.log("===== PATH INFORMATION =====");

    console.log("Current Directory:", process.cwd());
    console.log("App Directory:", __dirname);
    console.log("App File:", __filename);

    console.log(
        "Joined Path:",
        path.join(__dirname, "data", "system.json")
    );

    console.log(
        "Resolved Path:",
        path.resolve("data", "system.json")
    );
}

const command = process.argv[2];

switch (command) {
    case "system":
        showSystem();
        break;

    case "cpu":
        showCpu();
        break;

    case "memory":
        showMemory();
        break;

    case "path":
        showPaths();
        break;

    default:
        console.log(`
System Info CLI

Usage:

  node app.js system
  node app.js cpu
  node app.js memory
  node app.js path
        `);
}
