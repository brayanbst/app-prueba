'use strict';

const baseModel = require('./base');
const helper = require('./helper');

class Dishes extends baseModel {
	static get tableName() {
		return 'ms_dishes';
	}

	static get jsonSchema() {
		const defaultProperties = helper.defaultFields();
		const schema = {
			type: 'object',
			require: ['name'],
			properties: {
				name: {
					type: 'string',
				},
				description: {
					type: ['string', 'null'],
				},
				is_favorite: {
					type: ['boolean', 'null'],
				},
				...defaultProperties,
			},
		};
		return schema;
	}

	static defaultColumns(otherColumns = []) {
		let columns = [
			'id',
			'name',
			'description',
			'is_favorite',

		].map(c => `${this.tableName}.${c}`);
		columns = columns.concat(otherColumns);
		return columns;
	}

	static get namedFilters() {
		return {
			selectColumns: builder => builder.select(this.defaultColumns()),
		};
	}
}
module.exports = Dishes;
