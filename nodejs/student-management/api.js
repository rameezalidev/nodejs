let students = [
    {
        id: 1,
        name: "Ali",
        age: 21,
        department: "CS"
    },
    {
        id: 2,
        name: "Ahmed",
        age: 22,
        department: "SE"
    }
];

const http = require('http');
const server = http.createServer((req, res) => {
    // if (req.url === "/") {
    //     return res.end("Welcome message!");
    // }
    if(req.method==="QUERY") {
        res.end("Hello from query method");
        return;
    }
    if (req.url === "/students" && req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(students))
    }

    if (req.url.startsWith("/students/") && req.method === "GET") {
        const id = req.url.replace("/students/", "");
        const found = students.filter((el) => el.id == id)

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(found))
    }

    if (req.url === "/about") {
        res.statusCode = 200;
        return res.end("this is student api using node.js")
    }

    if (req.method === "POST" && req.url === "/students") {
        let body = ""
        req.on("data", (chunk) => {
            body += chunk;
        })

        req.on("end", () => {
            const student = JSON.parse(body);

            console.log(student);

            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");

            res.end(JSON.stringify({
                message: "Student created",
                student: student
            }));
        })
        return;
    }


    if(req.method === "DELETE" && req.url.startsWith("/students/")) {
        const id = req.url.replace("/students/","");
        const std = students.filter((el)=> el.id != id);
        students = [...std];
        console.log(students);

        res.end(JSON.stringify({
            message: "User deleted"
        }))
        return;
    }
    res.statusCode = 404;
    res.end("Page not found")
})

server.listen(5000, () => {
    console.log("Server listening requests");
})