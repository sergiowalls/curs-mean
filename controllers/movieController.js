const dbcontext = require("../database/dbcontext");

const MOVIE_DB_MODEL = 'movie';

class MovieController {
    constructor() {
    }

    async getAll(req, res) {
        try {
            let data = await dbcontext.find(MOVIE_DB_MODEL, {});
            res.json(data)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async get(req, res) {
        try {
            let data =
                await dbcontext.get(MOVIE_DB_MODEL, req.params.id);
            res.json(data)
        } catch (e) {
            res.status(404).json(e)
        }
    }

    async create(req, res) {
        try {
            let data = await dbcontext.create(MOVIE_DB_MODEL, req.body);
            res.json(data)
        } catch (e) {
            res.status(500).json(e)
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
            res.json(data)
        } catch (e) {
            res.status(404).json(e)
        }
    }

    async remove(req, res) {
        try {
            let data = await dbcontext.remove(MOVIE_DB_MODEL, req.params.id);
            res.json(data)
        } catch (e) {
            res.status(404).json(e)
        }
    }
}

module.exports = new MovieController();