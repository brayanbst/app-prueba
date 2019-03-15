'use strict';

const helper = require('./../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_ingredients', (table) => {
		table.increments().primary();
		table.text('name').nullable();
		table.integer('energy').nullable();
		table.integer('carbs').nullable();
		table.integer('lips').nullable();
		table.integer('protein').nullable();
		helper.defaultColumns(table, false);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_ingredients');
