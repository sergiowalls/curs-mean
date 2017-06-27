const dbcontext = require("../database/dbcontext");

class QuoteController {
    constructor() {
    }

    getAll(req, res, next) {
        dbcontext.db.models.quote.find({}, function (err, quotes) {
            if (err) res.status(500).json(err);
            else res.json(quotes)
        })
    }

    get(req, res, next) {
        dbcontext.db.models.quote.get(req.params.id, function (err, quote) {
            if (err) res.status(500).json(err);
            else res.json(quote)
        })
    }

    create(req, res, next) {
        dbcontext.db.models.quote.create(req.body,
            function (err, quote) {
                if (err) res.status(500).json(err);
                else res.json(quote)
            })
    }

    update(req, res, next) {
        dbcontext.db.models.quote.get(req.params.id, function (err, quote) {
            if (err) res.status(500).json(err);
            else {
                quote.save({
                    text: req.body.text,
                    character: req.body.character,
                    movie: req.body.movie,
                    year: req.body.year
                }, function (err) {
                    if (!err) console.log("Saved!");
                });
                res.json(quote);
            }
        })
    }

    remove(req, res, next) {
        dbcontext.db.models.quote.get(req.params.id, function (err, quote) {
            if (err) res.status(500).json(err);
            else {
                quote.remove(err => {
                    if (!err) console.log("Removed!");
                });
                res.json(quote);
            }
        })
    }
}

module.exports = new QuoteController();