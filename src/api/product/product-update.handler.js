'use strict';

const Boom = require('boom');
const MsProduct = require('../../models/msProduct');

async function handler(request, h) {
	try {
		const data = request.payload;
		const updateContact = await MsProduct.edit(request.params.id, data);
		return h.response(updateContact).code(200);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
