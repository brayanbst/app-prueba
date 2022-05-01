'use strict';

const Boom = require('boom');
const msConcat = require('../../models/msConcat');

async function handler(request) {
	try {
		const { id } = request.params;
		const variableDelete = await msConcat.remove(id, 101);
		return variableDelete || Boom.badRequest('CONTACT_NOT_FOUND');
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
