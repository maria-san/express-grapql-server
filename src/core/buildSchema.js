'use strict'

const scan = require('scan-dir-recursive/sync')
const { readFileSync, readdirSync, existsSync } = require('fs')
const { mergeResolvers, mergeTypes } = require('merge-graphql-schemas')
const { makeExecutableSchema } = require('graphql-tools')

const getTypes = () => {

	const types = []

	readdirSync(`${__dirname}/../schema`)
		.forEach(file => {
			const path = `${__dirname}/../schema/${file}`
			existsSync(path) && types.push(readFileSync(path, 'utf8'))
		})

	return mergeTypes(types)

}

const getResolvers = () => {

	const resolvers = []

	scan(`${__dirname}/../resolvers`)
		.filter(file => file.endsWith('.resolver.js'))
		.forEach(file => {
			const {
				resolver
			} = require(file)
			resolvers.push(resolver)
		})

	return mergeResolvers(resolvers)

}

const buildSchema = () => {

	const typeDefs = getTypes()
	const resolvers = getResolvers()
	const schema = makeExecutableSchema({
		typeDefs,
		resolvers
	})
	return schema
}

module.exports = {
	buildSchema
}
