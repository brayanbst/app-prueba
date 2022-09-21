'use strict';

const BaseModel = require('./base');
const helper = require('./helper');

class MsProduct extends BaseModel {
	static get tableName() {
		return 'ms_product';
	}

	static get jsonSchema() {
		const defaultProperties = helper.defaultFields();
		const schema = {
			type: 'object',
			required: ['name', 'categoryId', 'brandId'],
			properties: {
				name: {
					type: ['string', 'null'],
				},
				categryId: {
					type: ['integer'],
				},
				brandId: {
					type: ['integer'],
				},
				slug: {
					type: ['string', 'null'],
				},
				status: {
					type: ['integer', 'null'],
				},
				...defaultProperties,
			},
		};
		return schema;
	}

	static defaultColumns(otherColumns = []) {
		let columns = ['id', 'name', 'category_id', 'brand_id', 'slug', 'status'].map(c => `${this.tableName}.${c}`);
		columns = columns.concat(otherColumns);
		return columns;
	}

	static create(data) {
		return this.query().insert(data);
	}

	static getAll(filter = {}) {
		let query = this.query().select(this.defaultColumns());
		query = this.includePaginationAndSort(query, filter);
		return query;
	}

	static edit(id, data) {
		return this.query()
			.patch(data)
			.where('id', id);
	}

	static remove(id) {
		return this.query()
			.softDelete()
			.where('id', id);
	}

	static getById(id) {
		return this.query()
			.select(this.defaultColumns())
			.findById(id);
	}
}

module.exports = MsProduct;
