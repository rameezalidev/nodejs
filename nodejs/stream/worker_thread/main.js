const http = require("http");
const {Worker} = require("worker_threads");

const worker = new Worker('./worker.js');
worker.on("message",(value)=>{
    console.log(value)
})
console.log("End...")