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
        } catch (err) {
            return console.log(err);
        }

        quote.define(this.db);
        user.define(this.db);
        category.define(this.db);
        movie.define(this.db);

        await this._drop();

        this.db.sync(err => {
            if (err) console.log(err);
            else console.log("Models added successfully");
            this.db.models.quote.create(quotes, err => {
                if (err) console.log(err);
                else console.log("Quote seed completed successfully");
            });
            this.db.models.user.create(users, err => {
                if (err) console.log(err);
                else console.log("User seed completed successfully");
            });
            this.db.models.category.create(categories, err => {
                if (err) console.log(err);
                else console.log("Category seed completed successfully");
            });
            this.db.models.movie.create(movies, err => {
                if (err) console.log(err);
                else console.log("Movie seed completed successfully");
            });
        })

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
                if (error) reject(error);
                else resolve(data)
            });
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
}

module.exports = new DBcontext();