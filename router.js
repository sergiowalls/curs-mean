const express = require("express");

const quotesController = require("./controllers/quoteController");
const categoriesController = require("./controllers/categoryController");

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

        this.router.route("/categories/:id")
            .get(categoriesController.get)
            .put(categoriesController.update)
            .delete(categoriesController.remove);

        this.router.route("/categories")
            .get(categoriesController.getAll)
            .post(categoriesController.create);
    }
}

module.exports = new Router().router;