const dbcontext = require("../database/dbcontext");

const QUOTE_DB_MODEL = 'quote';

class QuoteController {
    constructor() {
    }

    async getAll(req, res) {
        let {categoryId, character} = req.query;
        let where = {};
        if (categoryId) where.category_id = categoryId;
        if (character) where.character = character;

        try {
            let data = await dbcontext.find(QUOTE_DB_MODEL, where);
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

    async update(req, res) {
        try {
            let data = await dbcontext.update(QUOTE_DB_MODEL, req.params.id, {
                text: req.body.text,
                character: req.body.character,
                movie: req.body.movie,
                year: req.body.year
            });
            res.json(data)
        } catch (e) {
            res.status(404).json(e)
        }
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