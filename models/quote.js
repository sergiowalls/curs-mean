class Quote {

    define(db) {
        db.define("quote", {
            text: {
                type: "text",
                required: true
            },
            character: {
                type: "text",
                required: true
            },
            movie: {
                type: "text",
                required: true
            },
            year: {
                type: "integer",
                required: true
            }
        });
    }
}

module.exports = new Quote()