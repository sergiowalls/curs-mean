class Category {

    define(db) {
        db.define("category", {
            name: {
                type: "text",
                required: true,
                unique: true
            }
        });
    }
}

module.exports = new Category();