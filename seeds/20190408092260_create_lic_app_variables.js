'use strict';

exports.seed = knex =>
	knex('ms_contact')
		.del()
		.then(() =>
			knex('ms_contact').insert([
				{
					id: 1, name: 'BRAYAN 1', email: 'SAGITARIO20', type_contact: 1, phone: '9243484493', company_id: 101,
				},
			]));
