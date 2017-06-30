const dbcontext = require("../database/dbcontext"),
    httpResponse = require("../httpResponse");

const CATEGORY_DB_MODEL = 'category';

class CategoryController {
    constructor() {
    }

    async getAll(req, res) {
        try {
            let data = await dbcontext.find(CATEGORY_DB_MODEL, {});
            if (!data.length) httpResponse.notFound(res, {message: "No quotes found"});
            else httpResponse.ok(res, data);
        } catch (e) {
            httpResponse.internalError(res, e);
        }
    }

    async get(req, res) {
        try {
            let data = await dbcontext.get(CATEGORY_DB_MODEL, req.params.id);
            httpResponse.ok(res, data);
        } catch (e) {
            httpResponse.notFound(res, {message: "Category not found"});
        }
    }

    async create(req, res) {
        try {
            let data = await dbcontext.create(CATEGORY_DB_MODEL, req.body);
            httpResponse.created(res, data);
        } catch (e) {
            httpResponse.internalError(res, e);
        }
    }

    async update(req, res) {
        try {
            let data = await dbcontext.update(CATEGORY_DB_MODEL, req.params.id, {name: req.body.name});
            httpResponse.ok(res, data);
        } catch (e) {
            if (e.type === "validation") httpResponse.badRequest(res, e);
            httpResponse.notFound(res, {message: "Category not found"});
        }
    }

    async remove(req, res) {
        try {
            let data = await dbcontext.remove(CATEGORY_DB_MODEL, req.params.id);
            httpResponse.ok(res, data);
        } catch (e) {
            httpResponse.notFound(res, {message: "Category not found"});
        }
    }
}

module.exports = new CategoryController();