const http = require("http");

const server = http.createServer((req, res) => {

    try {

        throw new Error("Database failed");

    } catch (error) {

        console.error(error);

        res.writeHead(500, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "Something went wrong. Please try again."
        }));
    }

});

server.listen(3000);