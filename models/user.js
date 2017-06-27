class User {

    define(db) {
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
            age: {
                type: "integer",
                required: false
            }
        });
    }
}

module.exports = new User();