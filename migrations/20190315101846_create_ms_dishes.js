'use strict';

const helper = require('./../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_dishes', (table) => {
		table.increments().primary();
		table.text('name').nullable();
		table.text('description').nullable();
		table.boolean('is_favorite').nullable();
		table.boolean('section_id').unsigned().nullable();
		table.foreign('section_id').references('ms_sections.id');
		helper.defaultColumns(table, false);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_dishes');
