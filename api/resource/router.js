// build your `/api/resources` router here
const express = require('express')

const Resources = require('./model')

const router = express.Router()

router.use('/:resource_id', Resources.checkId)

// [GET] all resources
router.get('/', (req, res, next) => {
	Resources.find()
		.then((resources) => {
			res.status(200).json(resources)
		})
		.catch(next)
})

// [POST] a resource
router.post('/', (req, res, next) => {
	Resources.add(req.body)
		.then((resource) => {
			res.status(201).json(resource);
		})
		.catch(next)
})


module.exports = router;
