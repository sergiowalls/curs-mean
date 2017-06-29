const dbcontext = require("../database/dbcontext"),
    httpResponse = require("../httpResponse");

const QUOTE_DB_MODEL = "quote";

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
            if (!data.length) httpResponse.notFound(res, {message: "No quotes found"});
            else httpResponse.ok(res, data);
        } catch (e) {
            httpResponse.internalError(res, e);
        }
    }

    async get(req, res) {
        try {
            let data = await dbcontext.get(QUOTE_DB_MODEL, req.params.id);
            httpResponse.ok(res, data);
        } catch (e) {
            httpResponse.notFound(res, {message: "Quote not found"});
        }
    }

    async create(req, res) {
        try {
            let data = await dbcontext.create(QUOTE_DB_MODEL, req.body);
            httpResponse.created(res, data);
        } catch (e) {
            if (e.type === "validation") httpResponse.badRequest(res, e);
            else httpResponse.internalError(res, e);
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
            httpResponse.ok(res, data);
        } catch (e) {
            if (e.type === "validation") httpResponse.badRequest(res, e);
            httpResponse.notFound(res, {message: "Quote not found"});
        }
    }

    async remove(req, res) {
        try {
            let data = await dbcontext.remove(QUOTE_DB_MODEL, req.params.id);
            httpResponse.ok(res, data);
        } catch (e) {
            httpResponse.notFound(res, {message: "Quote not found"});
        }
    }
}

module.exports = new QuoteController();