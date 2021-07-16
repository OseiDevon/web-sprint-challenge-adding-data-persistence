// build your `Project` model here
const db = require("../../data/dbConfig");

const find = () => {
	return db("projects")
}

const findById = (project_id) => {
	return db("projects").where({ project_id });
}

const add = (project) => {
	return db("projects")
		.insert(project)
		.then(([project_id]) => {
			return findById(project_id);
		})
}

module.exports =  {
	find,
	add,
}
