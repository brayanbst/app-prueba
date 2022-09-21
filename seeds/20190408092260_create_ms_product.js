'use strict';

exports.seed = knex =>
	knex('ms_product')
		.del()
		.then(() =>
			knex('ms_product').insert([
				{
					id: 1, 
					name: 'BRAYAN 1', 
					category_id: 1, //GASEOSAS
					brand_id: 1, //COCA COLA
					slug: '9243484493',
					status: 1
				},
			]));
