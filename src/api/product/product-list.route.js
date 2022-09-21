'use strict';

const { createRoute } = require('../shared/httpHelper');
const handler = require('./product-list.handler');

const documentation = {
	description: 'Retorna un listado de product',
	notes: [],
};

const route = {
	handler,
	method: 'GET',
	path: '/',
};

module.exports = createRoute(route, documentation);
