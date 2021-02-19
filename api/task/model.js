// build your `Task` model here

const db = require("../../data/dbConfig");

module.exports = {
    getAll()
    {
        return db("tasks");
    }
};