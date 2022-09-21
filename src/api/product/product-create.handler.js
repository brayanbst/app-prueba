'use strict';

const Boom = require('boom');
const MsProduct = require('../../models/msProduct');

async function handler(request, h) {
	try {
		const data = request.payload;
		const respons = await MsProduct.create(data);
		return h.response(respons).code(201);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
