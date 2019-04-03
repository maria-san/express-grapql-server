'use strict'

const hello = async (obj, args, context) => {

	return { 
		message: 'Hello world' 
	}

}

const resolver = {
	Query: {
		hello
	}
}

module.exports = { 
	resolver 
}
