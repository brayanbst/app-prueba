'use strict';

const Joi = require('joi');
const handler = require('./contact-create.handler');
const { createRoute } = require('../shared/httpHelper');

const documentation = {
	description: 'Crear un contacto',
	notes: [],
};

const route = {
	handler,
	method: 'POST',
	options: {
		pre: [],
		validate: {
			payload: {
				name: Joi.string().allow('', null),
				email: Joi.string().allow('', null),
				typeContact: Joi.number()
					.integer()
					.description('1: PERSONA, 2: PROFESIONAL')
					.example(1)
					.default(1),
				phone: Joi.string().allow('', null),
			},
		},
	},
	path: '/',
};

module.exports = createRoute(route, documentation);
