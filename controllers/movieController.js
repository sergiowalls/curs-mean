const dbcontext = require("../database/dbcontext");

class MovieController {
    constructor() {
    }

    getAll(req, res, next) {
        dbcontext.db.models.movie.find({}, (err, movies) => {
            if (err) res.status(500).json(err);
            else res.json(movies)
        })
    }

    get(req, res, next) {
        dbcontext.get('movie', req.params.id, (err, movie) => {
            if (err) res.status(500).json(err);
            else res.json(movie)
        })
    }

    create(req, res, next) {
        dbcontext.db.models.movie.create(req.body, (err, movie) => {
            if (err) res.status(500).json(err);
            else res.json(movie)
        })
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
        dbcontext.db.models.movie.get(req.params.id, (err, movie) => {
            if (err) res.status(500).json(err);
            else {
                movie.remove(err => {
                    if (!err) console.log("Removed!");
                });
                res.json(movie);
            }
        })
    }
}

module.exports = new MovieController();