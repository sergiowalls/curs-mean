const dbcontext = require("../database/dbcontext");

const QUOTE_DB_MODEL = 'quote';

class QuoteController {
    constructor() {
    }

    getAll(req, res) {
        dbcontext.find(QUOTE_DB_MODEL, {})
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
    }

    get(req, res) {
        dbcontext.get(QUOTE_DB_MODEL, req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    }

    create(req, res) {
        dbcontext.create(QUOTE_DB_MODEL, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
    }

    update(req, res) {
        dbcontext.db.models.quote.get(req.params.id, (err, quote) => {
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

    remove(req, res) {
        dbcontext.remove(QUOTE_DB_MODEL, req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    }
}

module.exports = new QuoteController();