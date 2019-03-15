'use strict';

const helper = require('../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_lessons', (table) => {
		table.increments().primary();
		table.text('url_video').nullable();
		table.text('name').nullable();
		table.text('description').nullable();
		table.integer('trainer_id').unsigned();
		table.foreign('trainer_id').references('ms_trainers.id');
		table.integer('section_id').unsigned();
		table.foreign('section_id').references('ms_sections.id');
		helper.defaultColumns(table, false);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_lessons');
