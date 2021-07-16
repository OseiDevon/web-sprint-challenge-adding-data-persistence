// build your server here and require it from index.js
const express = require('express')
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/task', tasksRouter)

server.use('/project', projectsRouter)

server.use('/resource', resourcesRouter)

server.use ('*', (res, req) => { //eslint-disable-line
  res.status(404).json({
    message:'catch-all'
  })
})


module.exports = server
