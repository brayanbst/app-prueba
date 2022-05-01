'use strict';

const Boom = require('boom');
const MsContact = require('../../models/msConcat');

async function handler(request) {
	try {
		// const companyId = request.auth.credentials.cms_companies_id;
		// console.log('adsadads', companyId);
		const data = await MsContact.getById(request.params.id, 101);
		console.log('adsadasdadasdads', data);
		return data || Boom.badRequest('CONTACT_NOT_FOUND');
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;
