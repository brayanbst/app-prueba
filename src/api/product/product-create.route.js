'use strict';

const Joi = require('joi');
const handler = require('./product-create.handler');
const { createRoute } = require('../shared/httpHelper');

const documentation = {
	description: 'Crear un producto',
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
				categoryId: Joi.number()
					.integer(),
				brandId: Joi.number()
					.integer(),
				slug: Joi.string().allow('', null),
				status: Joi.number()
					.integer(),
			},
		},
	},
	path: '/',
};

module.exports = createRoute(route, documentation);
