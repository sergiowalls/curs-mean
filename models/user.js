const bcrypt = require("bcrypt-nodejs")

class User {

    define (db) {
        db.defineType("password", {
            datastoreType: () => 'TEXT',
            propertyToValue: value => bcrypt.hashSync(value)
        });
        db.define("user", {
            username: {
                type: "text",
                required: true,
                unique: true
            },
            name: {
                type: "text",
                required: true
            },
            email: {
                type: "text",
                required: true
            },
            password: {
                type: "password",
                required: true
            },
        })
    }
}

module.exports = new User();