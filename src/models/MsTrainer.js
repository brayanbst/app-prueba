'use strict';

const BaseModel = require('./base');
const helper = require('./helper');

class MsTrainer extends BaseModel {
	static get tableName() {
		return 'ms_trainers';
	}

	static get jsonSchema() {
		const defaultProperties = helper.defaultFields();
		const schema = {
			type: 'object',
			required: ['name'],
			properties: {
				name: {
					type: 'string',
				},
				urlImage: {
					type: ['string', 'null'],
				},
				biography: {
					type: ['string', 'null'],
				},
				urlVideo: {
					type: ['string', 'null'],
				},
				facebookAccount: {
					type: ['string', 'null'],
				},
				...defaultProperties,
			},
		};
		return schema;
	}

	static defaultColumns(otherColumns = []) {
		let columns = ['id', 'name', 'url_image', 'biography', 'url_video', 'facebook_account'].map(c => `${this.tableName}.${c}`);

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
}

module.exports = MsTrainer;
