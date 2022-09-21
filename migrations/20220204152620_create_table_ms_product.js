'use strict';

const helper = require('../src/shared/helperMigration');

exports.up = knex =>
	knex.schema.createTable('ms_product', (table) => {
		table.increments().primary();
		table.text('name').nullable();
		table.integer('category_id').unsigned().nullable();
		table.foreign('category_id').references('ms_category.id');
		table.integer('brand_id').unsigned().nullable();
		table.foreign('brand_id').references('ms_brand.id');
		table.text('slug').nullable();
		table.integer('status').nullable();
		helper.defaultColumns(table, true);
	});

exports.down = knex =>
	knex.schema.dropTable('ms_product');
