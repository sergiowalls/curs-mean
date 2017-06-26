const express = require("express");

class Router {

    constructor() {
        this.router = express.Router();
        this.addRoutes();
    }

    addRoutes() {
        this.router.get(
            "/quotes/1",
            (req, res) => res.json({message: "Hello world"})
        );

        this.router.route("/quotes")
            .get((req, res) => res.json([{message: "Foo"}, {message: "Bar"}]))
            .post((req, res) => res.json({message: "Post"}))
            .put((req, res) => res.json({message: "Put"}))
            .delete((req, res) => res.json({message: "Delete"}));
    }
}

module.exports = new Router().router;