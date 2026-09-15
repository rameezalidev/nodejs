const fs = require('fs');

const stream = fs.createReadStream('file.txt')
stream.on("data",(chunk)=>{
    console.log(chunk.toString());
})



stream.on("end",(chunk)=>{
    console.log("File read...");
})


const write  = fs.createWriteStream('file.txt');

write.write("hello from stream\n");
write.write("i am text added from stream\n");
write.end();