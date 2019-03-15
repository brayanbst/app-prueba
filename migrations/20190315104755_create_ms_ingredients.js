'use strict';

const helper = require('./../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_ingredients', (table) => {
		table.increments().primary();
		table.text('name').nullable();
		table.decimal('energy_value').nullable();
		table.decimal('carbs_value').nullable();
		table.decimal('lips_value').nullable();
		table.decimal('protein_value').nullable();
		helper.defaultColumns(table, false);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_ingredients');
