'use strict';

const helper = require('./../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_ingredients', (table) => {
		table.increments().primary();
		table.text('name').nullable();
		table.decimal('energy_value', 18, 2).nullable();
		table.decimal('carbs_value', 18, 2).nullable();
		table.decimal('lips_value', 18, 2).nullable();
		table.decimal('protein_value', 18, 2).nullable();
		helper.defaultColumns(table, false);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_ingredients');
