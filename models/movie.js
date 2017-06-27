class Movie {

    define(db) {
        db.define("movie", {
            title: {
                type: "text",
                required: true
            },
            year: {
                type: "text",
                required: true
            },
            genre: {
                type: "text",
                required: true
            },
            running_time: {
                type: "integer",
                required: true
            }
        });
    }
}

module.exports = new Movie();