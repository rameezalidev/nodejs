const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Home route
    if (req.method === "GET" && req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");

        res.end("Welcome to my Node.js server!");

        return;
    }

    // API route
    if (req.method === "GET" && req.url === "/api") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        const response = {
            success: true,
            message: "API is working",
            data: {
                name: "Node.js",
                version: process.version
            }
        };

        res.end(JSON.stringify(response));

        return;
    }

    // 404 route
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify({
        success: false,
        message: "Route not found"
    }));
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
