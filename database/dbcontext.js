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
        orm.connect(process.env.DB_CONNECTION_STRING, (err, db) => {
            if (err) console.log(`Error connecting to the database \n ${err}`);
            else console.log("Connected successfully");
            this.db = db;

            quote.define(this.db);
            user.define(this.db);

            this.db.drop(err =>{
                this.db.sync(err =>{
                    if (err) console.log(err);
                    else console.log("Models added successfully");
                    this.db.models.quote.create(quotes, function (err) {
                        if (err) console.log(err);
                        else console.log("Quote seed completed successfully");
                    });
                    this.db.models.user.create(users, function (err) {
                        if (err) console.log(err);
                        else console.log("User seed completed successfully");
                    });
                })
            });

        })
    }
}

module.exports = new DBcontext();