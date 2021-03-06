const express = require("express");

const authController = require("./controllers/authController"),
    quotesController = require("./controllers/quoteController"),
    categoriesController = require("./controllers/categoryController"),
    moviesController = require("./controllers/movieController");

class Router {

    constructor() {
        this.router = express.Router();
        this.addRoutes();
    }

    addRoutes() {
        this.router.post("/login", authController.login);

        this.router.route("/quotes/:id")
            .get(authController.authenticate, quotesController.get)
            .put(authController.authenticate, quotesController.update)
            .delete(authController.authenticate, quotesController.remove);

        this.router.route("/quotes")
            .get(authController.authenticate, quotesController.getAll)
            .post(authController.authenticate, quotesController.create);

        this.router.route("/categories/:id")
            .get(authController.authenticate, categoriesController.get)
            .put(authController.authenticate, categoriesController.update)
            .delete(authController.authenticate, categoriesController.remove);

        this.router.route("/categories")
            .get(authController.authenticate, categoriesController.getAll)
            .post(authController.authenticate, categoriesController.create);

        this.router.route("/movies/:id")
            .get(authController.authenticate, moviesController.get)
            .put(authController.authenticate, moviesController.update)
            .delete(authController.authenticate, moviesController.remove);

        this.router.route("/movies")
            .get(authController.authenticate, moviesController.getAll)
            .post(authController.authenticate, moviesController.create);
    }
}

module.exports = new Router().router;