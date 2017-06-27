const express = require("express");

const quotesController = require("./controllers/quoteController");

class Router {

    constructor() {
        this.router = express.Router();
        this.addRoutes();
    }

    addRoutes() {
        this.router.route("/quotes/:id")
            .get(quotesController.get)
            .put(quotesController.update)
            .delete(quotesController.remove);

        this.router.route("/quotes")
            .get(quotesController.getAll)
            .post(quotesController.create);
    }
}

module.exports = new Router().router;