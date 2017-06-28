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

    update(req, res) {
        dbcontext.db.models.movie.get(req.params.id, (err, movie) => {
            if (err) res.status(500).json(err);
            else {
                movie.save({
                    title: req.body.title,
                    year: req.body.year,
                    genre: req.body.genre,
                    running_time: req.body.running_time
                }, function (err) {
                    if (!err) console.log("Saved!");
                });
                res.json(movie);
            }
        })
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