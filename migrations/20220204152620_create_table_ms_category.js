'use strict';

const helper = require('../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_category', (table) => {
		table.increments().primary();
		table.text('name').nullable();
		helper.defaultColumns(table, true);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_category');
