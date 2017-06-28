const dbcontext = require("../database/dbcontext");

class CategoryController {
    constructor() {
    }

    getAll(req, res, next) {
        dbcontext.db.models.category.find({}, (err, categories) => {
            if (err) res.status(500).json(err);
            else res.json(categories)
        })
    }

    get(req, res, next) {
        dbcontext.get('category', req.params.id, (err, category) => {
            if (err) res.status(500).json(err);
            else res.json(category)
        })
    }

    create(req, res, next) {
        dbcontext.db.models.category.create(req.body, (err, category) => {
            if (err) res.status(500).json(err);
            else res.json(category)
        })
    }

    update(req, res, next) {
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

    remove(req, res, next) {
        dbcontext.db.models.category.get(req.params.id, (err, category) => {
            if (err) res.status(500).json(err);
            else {
                category.remove(err => {
                    if (!err) console.log("Removed!");
                });
                res.json(category);
            }
        })
    }
}

module.exports = new CategoryController();