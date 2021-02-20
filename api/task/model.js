// build your `Task` model here

const db = require("../../data/dbConfig");

module.exports = {
    getAll()
    {
        return db("tasks as t")
        .join('projects as p', 'p.proj_id', 't.proj_id')
        .select('t.*', 'p.proj_name', 'p.proj_description')
    }
};