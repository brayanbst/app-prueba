'use strict';

const helper = require('./../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_dishes', (table) => {
		table.increments().primary();
		table.text('name').nullable();
		table.text('description').nullable();
		table.text('is_favorite').nullable();
		table.integer('ms_sections').unsigned();
		table.foreign('ms_sections').references('ms_sections.id');
		helper.defaultColumns(table, false);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_dishes');
