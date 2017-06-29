const dbcontext = require("../database/dbcontext"),
    httpResponse = require("../httpResponse");

const MOVIE_DB_MODEL = 'movie';

class MovieController {
    constructor() {
    }

    async getAll(req, res) {
        try {
            let data = await dbcontext.find(MOVIE_DB_MODEL, {});
            if (!data.length) httpResponse.notFound(res, {message: "No quotes found"});
            else httpResponse.ok(res, data);
        } catch (e) {
            httpResponse.internalError(res, e);
        }
    }

    async get(req, res) {
        try {
            let data = await dbcontext.get(MOVIE_DB_MODEL, req.params.id);
            httpResponse.ok(res, data);
        } catch (e) {
            httpResponse.notFound(res, {message: "Movie not found"});
        }
    }

    async create(req, res) {
        try {
            let data = await dbcontext.create(MOVIE_DB_MODEL, req.body);
            httpResponse.created(res, data);
        } catch (e) {
            httpResponse.internalError(res, e);
        }
    }

    async update(req, res) {
        try {
            let data = await dbcontext.update(MOVIE_DB_MODEL, req.params.id, {
                title: req.body.title,
                year: req.body.year,
                genre: req.body.genre,
                running_time: req.body.running_time
            });
            httpResponse.ok(res, data);
        } catch (e) {
            if (e.type === "validation") httpResponse.badRequest(res, e);
            httpResponse.notFound(res, {message: "Movie not found"});
        }
    }

    async remove(req, res) {
        try {
            let data = await dbcontext.remove(MOVIE_DB_MODEL, req.params.id);
            httpResponse.ok(res, data);
        } catch (e) {
            httpResponse.notFound(res, {message: "Movie not found"});
        }
    }
}

module.exports = new MovieController();