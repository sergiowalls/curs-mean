const dbcontext = require("../database/dbcontext");

class CategoryController {
    constructor() {
    }

    getAll(req, res, next) {
        dbcontext.find('category', {})
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
    }

    get(req, res, next) {
        dbcontext.get('category', req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    }

    create(req, res, next) {
        dbcontext.create('category', req.body)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
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
        dbcontext.remove('category', req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    }
}

module.exports = new CategoryController();