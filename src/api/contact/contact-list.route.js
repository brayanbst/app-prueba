'use strict';

const { createRoute } = require('../shared/httpHelper');
const handler = require('./contact-list.handler');

const documentation = {
	description: 'Retorna un listado de contactos',
	notes: [],
};

const route = {
	handler,
	method: 'GET',
	path: '/',
};

module.exports = createRoute(route, documentation);
