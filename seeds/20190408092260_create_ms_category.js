'use strict';

exports.seed = knex =>
	knex('ms_category')
		.del()
		.then(() =>
			knex('ms_category').insert([
				{
					id: 1, 
					name: 'GASEOSA', 
				},
			]));
