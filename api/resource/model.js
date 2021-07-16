// build your `Resource` model here
const db = require('../../data/dbConfig')

const findById = (resource_id) => {
	return db("resources").where({ resource_id }).first();
};

const add = (resource) => {
	return db("resources")
		.insert(resource)
		.then(([resource_id]) => {
			return findById(resource_id);
		});

module.exports = { findById, add }
