const express = require("express"),
    http = require("http");

class Server {
    constructor() {
        this.init()
    }

    init() {
        this.app = express();
        this.app.use(express.static("./public"));
        this.app.use("/helloworld", ((req, res) => res.status(200).json({message: "Hello world"})));
        this.app.use("/api/quotes", ((req, res) => res.json([{message: "Foo"},{message: "Bar"}])));
        this.app.use((req, res, next) => res.status(404).json({message: "Resource not found"}))
    }

    start(port = 3000) {
        this.app.set('port', port);
        let server = http.createServer(this.app);
        server.listen(port);
        server.on("listening", () => console.log("Server listening on port " + port));
    }
}

module.exports = Server;