const dbcontext = require("../database/dbcontext");

const CATEGORY_DB_MODEL = 'category';

class CategoryController {
    constructor() {
    }

    async getAll(req, res) {
        try {
            let data = await dbcontext.find(CATEGORY_DB_MODEL, {});
            res.json(data)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async get(req, res) {
        try {
            let data = await dbcontext.get(CATEGORY_DB_MODEL, req.params.id);
            res.json(data)
        } catch (e) {
            res.status(404).json(e)
        }
    }

    async create(req, res) {
        try {
            let data = await dbcontext.create(CATEGORY_DB_MODEL, req.body);
            res.json(data)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            let data = await dbcontext.update(CATEGORY_DB_MODEL, req.params.id, {name: req.body.name});
            res.json(data)
        } catch (e) {
            res.status(404).json(e)
        }
    }

    async remove(req, res) {
        try {
            let data = await dbcontext.remove(CATEGORY_DB_MODEL, req.params.id);
            res.json(data)
        } catch (e) {
            res.status(404).json(e)
        }
    }
}

module.exports = new CategoryController();