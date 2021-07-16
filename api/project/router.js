const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.use('/:project_id', Projects.checkId);

// [GET] all projects
router.get('/', (req, res, next) => {
	Projects.find()
		.then((projects) => {
			res.status(200).json(trueOrFalse(projects));
		})
		.catch(next);
});

// [POST] a project
router.post('/', (req, res, next) => {
	Projects.add(req.body)
		.then((project) => {
			res.status(201).json(trueOrFalse(project)[0]);
		})
		.catch(next);


module.exports = Router
