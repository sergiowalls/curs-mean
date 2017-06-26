const orm = require("orm");

const quote = require("../models/quote");

class DBcontext {

    constructor() {
        this.init();
    }

    init() {
        orm.connect("mysql://root@localhost/quotes", function (err, db) {
            if (err) console.log(`Error connecting to the database \n ${err}`);
            else console.log("Connected successfully");

            quote.define(db);
            db.sync(err =>{
                if (err) console.log(err);
                else console.log("Models added successfully")
            })
        })
    }
}

module.exports = new DBcontext();