'use strict';

const helper = require('../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_lessons', (table) => {
		table.increments().primary();
		table.text('url_video').nullable();
		table.text('name').nullable();
		table.text('description').nullable();
		table.integer('ms_trainers').unsigned();
		table.foreign('ms_trainers').references('ms_trainers.id');
		table.integer('ms_sections').unsigned();
		table.foreign('ms_sections').references('ms_sections.id');
		helper.defaultColumns(table, false);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_lessons');
