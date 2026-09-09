const fs = require('fs')
fs.writeFile("data.txt", "This is text written by fs module",(err)=>{err ? console.log("Error") : console.log("Success")})


fs.readFile("data.txt","utf-8",(err,data)=>{
    err ?
    console.log("Error") :
    console.log(data)
})

fs.appendFile("data.txt", "\nthis is new line", (err)=>{
    if(err) return;
    console.log("Added new line in file")
})


fs.unlink("data.txt",(err)=>{
    console.log("File delted")
})


fs.mkdir("uploads",(err)=>{
    if(err) return;
    console.log("Create folder");
})

fs.readdir(".",(err,files)=>{
    if(err)return;
    console.log(files)
})

fs.rmdir("uploads",(err)=>{
    if(err) return;
    console.log("Folder deleted");
})