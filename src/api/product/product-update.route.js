'use strict';

const Joi = require('joi');
const handler = require('./product-update.handler');

const route = {
	handler,
	method: 'PATCH',
	options: {
		validate: {
			params: {
				id: Joi.number()
					.integer()
					.required()
					.description('Id  a actualizar')
					.example(1),
			},
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
	path: '/{id}',
};

module.exports = route;
