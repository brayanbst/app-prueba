'use strict';

const Boom = require('boom');
const msProduct = require('../../models/msProduct');

async function handler(request) {
	try {
		const { id } = request.params;
		const variableDelete = await msProduct.remove(id);
		return variableDelete || Boom.badRequest('PRODUCT_NOT_FOUND');
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
