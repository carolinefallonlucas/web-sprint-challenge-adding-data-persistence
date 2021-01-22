// Complete your db configuration using the `environment` variable.
const knex = require('knex');

const config = require('../knexfile');

module.exports = knex(config.development);
