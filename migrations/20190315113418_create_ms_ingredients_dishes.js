'use strict';

const helper = require('./../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_ingredients_dishes', (table) => {
		table.increments().primary();
		table.integer('ingredient_id').unsigned();
		table.foreign('ingredient_id').references('ingredient_id.id');
		table.integer('dish_id').unsigned();
		table.foreign('dish_id').references('dish_id.id');
		helper.defaultColumns(table, false);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_ingredients_dishes');
