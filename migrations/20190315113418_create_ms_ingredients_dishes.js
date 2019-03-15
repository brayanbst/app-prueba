'use strict';

const helper = require('./../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_ingredients_dishes', (table) => {
		table.increments().primary();
		table.integer('ms_ingredients').unsigned();
		table.foreign('ms_ingredients').references('ms_ingredients.id');
		table.integer('ms_dishes').unsigned();
		table.foreign('ms_dishes').references('ms_dishes.id');
		helper.defaultColumns(table, false);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_ingredients_dishes');
