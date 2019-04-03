'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')

const { buildSchema } = require('./core/buildSchema')
const { createServer } = require('http')
const { HTTP_PORT } = require('./config')

const start = async() => {

	// Build schema
	const schema = buildSchema()

	// Setup server
	const app = express()
	const server = createServer(app)
    
	// Setup middlewares
	app.use(cors())
	app.use(bodyParser.json())

	app.use('/graph', graphqlHTTP({
		schema,
		graphiql: false,
		formatError: err => {
			console.log(err)
			return err
		}
	}))

	server.listen(HTTP_PORT, () => console.log(`[HTTP] Listening on port ${HTTP_PORT}`))
}

module.exports = {
	start
}
