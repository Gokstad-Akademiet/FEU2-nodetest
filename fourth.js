const http = require("http");

const ip = "localhost";
const port = 8080;

const hello = ((req, res) => {
    res.writeHead(200);
    res.end("Hei fra nettleseren!");
});

const server = http.createServer(hello)

server.listen(port, () => {
    console.log("Server on port:", "http://" + ip + ":" + port);
});



// Oppgave:
// Les denne artikkelen og forsøk å kopiere eksempelet:
// https://www.geeksforgeeks.org/node-js-fs-writefile-method/
