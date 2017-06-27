const express = require("express");

const quotesController = require("./controllers/quoteController");
const categoriesController = require("./controllers/categoryController");
const moviesController = require("./controllers/movieController");

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

        this.router.route("/movies/:id")
            .get(moviesController.get)
            .put(moviesController.update)
            .delete(moviesController.remove);

        this.router.route("/movies")
            .get(moviesController.getAll)
            .post(moviesController.create);
    }
}

module.exports = new Router().router;