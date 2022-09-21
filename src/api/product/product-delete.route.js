'use strict';

const Joi = require('joi');
const handler = require('./product-delete.handler');

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

module.exports = route;
