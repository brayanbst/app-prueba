'use strict';

const Boom = require('boom');
const MsContact = require('../../models/msConcat');

async function handler(request, h) {
	try {
		const data = request.payload;
		data.companyId = 101;
		const respons = await MsContact.create(data);
		console.log('tesdddtdd', respons);
		return h.response(respons).code(201);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
