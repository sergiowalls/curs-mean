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

    update(req, res) {
        dbcontext.db.models.category.get(req.params.id, (err, category) => {
            if (err) res.status(500).json(err);
            else {
                category.save({name: req.body.name}, err => {
                    if (!err) console.log("Saved!");
                });
                res.json(category);
            }
        })
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