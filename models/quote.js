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

    createRelationships(db) {
        db.models.quote.hasOne('category', db.models.category);
    }
}

module.exports = new Quote();