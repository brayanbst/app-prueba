'use strict';

const helper = require('./../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_contact', (table) => {
		table.increments().primary();
		table.text('name').nullable();
		table.text('email').nullable();
		table.text('phone').nullable();
		table.integer('type_contact').nullable();
		helper.defaultColumns(table, true);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_contact');
