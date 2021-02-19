// build your `Project` model here
const db = require("../../data/dbConfig"); 

module.exports = {
    getAll() {
        return db('projects');

    }
}; 