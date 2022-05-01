'use strict';

const { createRoute } = require('../shared/httpHelper');
const Joi = require('joi');
const handler = require('./contact-delete.handler');

const documentation = {
	description: 'Crear un contacto',
	notes: [],
};

const route = {
	handler,
	method: 'DELETE',
	options: {
		validate: {
			params: {
				id: Joi.number()
					.integer()
					.positive(),
			},
		},
	},
	path: '/{id}',
};

module.exports = createRoute(route, documentation);
