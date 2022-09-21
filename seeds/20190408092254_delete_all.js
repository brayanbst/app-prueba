'use strict';

exports.seed = knex =>
	knex('ms_contact')
		.del()
		.then(() => knex('ms_contact').del());
