const express = require("express");

const quotesController = require("./controllers/quoteController");

class Router {

    constructor() {
        this.router = express.Router();
        this.addRoutes();
    }

    addRoutes() {
        this.router.route("/quotes/:id")
            .get(quotesController.get);

        this.router.route("/quotes")
            .get(quotesController.getAll)
            .post((req, res) => res.json({message: "Post"}))
            .put((req, res) => res.json({message: "Put"}))
            .delete((req, res) => res.json({message: "Delete"}));
    }
}

module.exports = new Router().router;