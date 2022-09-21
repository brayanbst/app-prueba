'use strict';

const MsProduct = require('../../models/msProduct');

async function handler(request, h) {
	try {
		const data = await MsProduct.getAll(request.query);
		return h.paginate(data, request.query);
	} catch (error) {
		return error;
	}
}

module.exports = handler;
