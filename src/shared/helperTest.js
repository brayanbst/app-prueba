'use strict';

const configServer = require('./../api/server');

function fakeCredentials(data = { cms_companies_id: 101 }) {
	return data;
}

function mockServer() {
	return configServer;
}

const methods = {
	fakeCredentials,
	mockServer,
};

module.exports = methods;
