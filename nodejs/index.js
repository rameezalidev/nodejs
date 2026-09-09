const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/") {
        res.end("Home page");
    }else if(req.url == "/about") {
        res.end("About page");
    }else if(req.url == "/service") {
        res.end("<h1>Services !</h1>services page");
    }else{
        res.end("<h1>404</h1> Page not found");
    }
})


server.listen(5000,()=>{
    console.log("PORT listening")
})
