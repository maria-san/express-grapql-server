'use strict'

const hi = async (obj, args, context) => {

	const { name } = args
    
	return {
		message: `hi ${name}`
	}

}

const resolver = {
	Mutation: {
		hi
	}
}

module.exports = { 
	resolver
}
