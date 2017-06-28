const dbcontext = require("../database/dbcontext");

const MOVIE_DB_MODEL = 'movie';

class MovieController {
    constructor() {
    }

    getAll(req, res, next) {
        dbcontext.find(MOVIE_DB_MODEL, {})
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
    }

    get(req, res, next) {
        dbcontext.get(MOVIE_DB_MODEL, req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    }

    create(req, res, next) {
        dbcontext.create(MOVIE_DB_MODEL, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
    }

    update(req, res, next) {
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

    remove(req, res, next) {
        dbcontext.remove(MOVIE_DB_MODEL, req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    }
}

module.exports = new MovieController();