'use strict';

const helper = require('./../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_trainers', (table) => {
		table.increments().primary();
		table.text('name').nullable();
		table.text('url_image').nullable();
		table.text('biography').nullable();
		table.text('url_video').nullable();
		table.text('facebook_account').nullable();
		helper.defaultColumns(table, false);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_trainers');
