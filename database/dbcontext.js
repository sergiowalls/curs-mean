const orm = require("orm");

class DBcontext {

    constructor() {
        this.init();
    }

    init() {
        orm.connect("mysql://root@localhost/quotes", function (err, db) {
            if (err) console.log(`Error connecting to the database \n ${err}`);
            else console.log("Connected successfully")
        })
    }
}

module.exports = new DBcontext();