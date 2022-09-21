'use strict';

const Joi = require('joi');
const handler = require('./product-details.handler');

const route = {
	handler,
	method: 'GET',
	options: {
		validate: {
			params: {
				id: Joi.number()
					.required()
					.integer(),
			},
		},
	},
	path: '/{id}',
};

module.exports = route;
