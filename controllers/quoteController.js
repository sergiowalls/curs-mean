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
}

module.exports = new QuoteController();