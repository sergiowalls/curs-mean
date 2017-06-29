const orm = require("orm");

const quote = require("../models/quote"),
    quotes = require("../models/quoteSeed"),
    user = require("../models/user"),
    users = require("../models/userSeed"),
    category = require("../models/category"),
    categories = require("../models/categorySeed"),
    movie = require("../models/movie"),
    movies = require("../models/movieSeed");

class DBcontext {

    constructor() {
        this.init();
    }

    async init() {
        try {
            this.db = await this._connect(process.env.DB_CONNECTION_STRING);

            user.define(this.db);
            category.define(this.db);
            movie.define(this.db);
            quote.define(this.db);

            quote.createRelationships(this.db);

            await this._drop();

            await this._sync();
            console.log("Models added successfully");

            await this.create('category', categories);
            await Promise.all([
                this.create('user', users),
                this.create('quote', quotes),
                this.create('movie', movies)]);
            console.log("Models seeded successfully");
        } catch (err) {
            return console.log(err);
        }
    }

    get(model, id) {
        return new Promise((resolve, reject) => {
            this.db.models[model].get(id, (error, data) => {
                if (error) reject(error);
                else resolve(data);
            });
        });
    }

    find(model, where) {
        return new Promise((resolve, reject) => {
            this.db.models[model].find(where, (error, data) => {
                if (error) reject(error);
                else resolve(data);
            });
        })
    }

    create(model, data) {
        return new Promise((resolve, reject) => {
            this.db.models[model].create(data, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    console.log("Created!");
                    resolve(data)
                }
            });
        })
    }

    update(model, id, values) {
        return new Promise((resolve, reject) => {
            this.get(model, id)
                .then(data => data.save(values, err => {
                    if (err) reject(err);
                    else {
                        console.log("Updated!");
                        resolve(data);
                    }
                }))
                .catch(err => reject(err))
        })
    }

    remove(model, id) {
        return new Promise((resolve, reject) => {
            this.get(model, id)
                .then(data => data.remove(err => {
                    if (err) reject(err);
                    else {
                        console.log("Removed!");
                        resolve(data);
                    }
                }))
                .catch(err => reject(err))
        })
    }

    _connect(connectionString) {
        return new Promise((resolve, reject) => {
            orm.connect(connectionString, (error, db) => {
                if (error) reject(error);
                else resolve(db);
            })
        })
    }

    _drop() {
        return new Promise((resolve, reject) => {
            this.db.drop(error => {
                if (error) reject(error);
                else resolve()
            })
        })
    }

    _sync() {
        return new Promise((resolve, reject) => {
            this.db.sync(error => {
                if (error) reject(error);
                else resolve()
            })
        })
    }
}

module.exports = new DBcontext();