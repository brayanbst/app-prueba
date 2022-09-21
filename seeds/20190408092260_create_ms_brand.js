'use strict';

exports.seed = knex =>
	knex('ms_brand')
		.del()
		.then(() =>
			knex('ms_brand').insert([
				{
					id: 1, 
					name: 'COCA COLA'
				},
			]));
