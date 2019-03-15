'use strict';

const helper = require('./../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_ingredients_dishes', (table) => {
		table.increments().primary();
		table.integer('ingredient_id').unsigned();
		table.foreign('ingredient_id').references('ms_ingredients.id');
		table.integer('dish_id').unsigned();
		table.foreign('dish_id').references('ms_dishes.id');
		helper.defaultColumns(table, false);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_ingredients_dishes');
