'use strict';

const MsContact = require('../../models/msConcat');

async function handler(request) {
	try {
		console.log('ENTROO');
		const data = await MsContact.getAll(request.query, 101);
		console.log('addddasdasdvdsadads', data);
		return data;
	} catch (error) {
		return error;
	}
}

module.exports = handler;
