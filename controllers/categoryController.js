const dbcontext = require("../database/dbcontext");

const CATEGORY_DB_MODEL = 'category';

class CategoryController {
    constructor() {
    }

    getAll(req, res) {
        dbcontext.find(CATEGORY_DB_MODEL, {})
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
    }

    get(req, res) {
        dbcontext.get(CATEGORY_DB_MODEL, req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    }

    create(req, res) {
        dbcontext.create(CATEGORY_DB_MODEL, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
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

    remove(req, res) {
        dbcontext.remove(CATEGORY_DB_MODEL, req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    }
}

module.exports = new CategoryController();