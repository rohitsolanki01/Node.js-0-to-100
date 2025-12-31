const http = require("node:http");



const server = http.createServer((req, res) => {

    if (req.url === "/getSecrate") {
        res.end("There is no secrate is there");
    }
    res.end("Hello word");
});

server.listen(8080)