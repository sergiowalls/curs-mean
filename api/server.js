const express = require("express"),
    http = require("http"),
    bodyParser = require("body-parser");

const router = require("./router"),
    dbcontext = require("./database/dbcontext");

class Server {
    constructor() {
        this.init()
    }

    init() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(express.static("./api/public"));
        this.app.use("/api", router);
        this.app.use((req, res, next) => res.sendFile(__dirname + "/public/index.html"))
    }

    start(port = 3000) {
        this.app.set('port', port);
        let server = http.createServer(this.app);
        server.listen(port);
        server.on("listening", () => console.log("Server listening on port " + port));
    }
}

module.exports = Server;