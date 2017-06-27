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
}

module.exports = new QuoteController();