const fs = require("fs");

const readableStream = fs.createReadStream("source.txt");
const writableStream = fs.createWriteStream("copy.txt");

readableStream.pipe(writableStream);

readableStream.on("end", () => {
    console.log("File copied successfully!");
});

readableStream.on("error", (error) => {
    console.log("Read Error:", error.message);
});

writableStream.on("error", (error) => {
    console.log("Write Error:", error.message);
});