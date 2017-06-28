const dbcontext = require("../database/dbcontext");

class QuoteController {
    constructor() {
    }

    getAll(req, res, next) {
        dbcontext.find('quote', {})
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
    }

    get(req, res, next) {
        dbcontext.get('quote', req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    }

    create(req, res, next) {
        dbcontext.create('quote', req.body)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
    }

    update(req, res, next) {
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

    remove(req, res, next) {
        dbcontext.remove('quote', req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    }
}

module.exports = new QuoteController();