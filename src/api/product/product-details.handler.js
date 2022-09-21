'use strict';

const Boom = require('boom');
const MsContact = require('../../models/msProduct');

async function handler(request) {
	try {
		const data = await MsContact.getById(request.params.id);
		return data || Boom.badRequest('PRODUCT_NOT_FOUND');
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
