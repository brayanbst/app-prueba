'use strict';

const Joi = require('joi');
const handler = require('./contact-update.handler');

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
				email: Joi.string().allow('', null),
				typeContact: Joi.number()
					.integer()
					.description('1: PERSONA, 2: PROFESIONAL')
					.example(1)
					.default(1),
				phone: Joi.string(),
			},
		},
	},
	path: '/{id}',
};

module.exports = route;
