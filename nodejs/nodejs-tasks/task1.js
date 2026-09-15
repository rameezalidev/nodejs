console.log("Node.js Runtime Information");
console.log("----------------------------");

console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Current directory:", process.cwd());

console.log("File directory:", __dirname);
console.log("Current file:", __filename);

console.log("----------------------------");

const name = process.argv[2];

if (!name) {
    console.log("Usage: node app.js <name>");
} else {
    console.log(`Hello, ${name}!`);
}
