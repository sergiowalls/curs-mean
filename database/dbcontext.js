const orm = require("orm");

const quote = require("../models/quote"),
    quotes = require("../models/quoteSeed"),
    user = require("../models/user"),
    users = require("../models/userSeed");

class DBcontext {

    constructor() {
        this.init();
    }

    init() {
        orm.connect(process.env.DB_CONNECTION_STRING, function (err, db) {
            if (err) console.log(`Error connecting to the database \n ${err}`);
            else console.log("Connected successfully");

            quote.define(db);
            user.define(db);
            db.sync(err =>{
                if (err) console.log(err);
                else console.log("Models added successfully");
                db.models.quote.create(quotes, function (err) {
                    if (err) console.log(err);
                });
                db.models.user.create(users, function (err) {
                    if (err) console.log(err);
                });
            })
        })
    }
}

module.exports = new DBcontext();