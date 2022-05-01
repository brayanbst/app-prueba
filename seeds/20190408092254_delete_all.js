'use strict';

exports.seed = knex =>
	knex('lic_ms_template')
		.del()
		.then(() => knex('ms_contact').del());
