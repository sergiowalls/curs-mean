const dbcontext = require("../database/dbcontext");

const QUOTE_DB_MODEL = 'quote';

class QuoteController {
    constructor() {
    }

    async getAll(req, res) {
        try {
            let data = await dbcontext.find(QUOTE_DB_MODEL, {});
            res.json(data)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async get(req, res) {
        try {
            let data = await dbcontext.get(QUOTE_DB_MODEL, req.params.id);
            res.json(data)
        } catch (e) {
            res.status(404).json(e)
        }
    }

    async create(req, res) {
        try {
            let data = await dbcontext.create(QUOTE_DB_MODEL, req.body);
            res.json(data)
        } catch (e) {
            res.status(500).json(e)
        }
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

    async remove(req, res) {
        try {
            let data = await dbcontext.remove(QUOTE_DB_MODEL, req.params.id);
            res.json(data);
        } catch (e) {
            res.status(404).json(e)
        }
    }
}

module.exports = new QuoteController();