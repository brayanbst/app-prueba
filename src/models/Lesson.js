'use strict';

const BaseModel = require('./base');
const helper = require('./helper');

class Lesson extends BaseModel {
	static get tableName() {
		return 'ms_lessons';
	}

	static get jsonSchema() {
		const defaultProperties = helper.defaultFields();
		const schema = {
			type: 'object',
			required: ['name'],
			properties: {
				urlVideo: {
					type: ['string', 'null'],
				},
				name: {
					type: 'string',
				},
				description: {
					type: ['string', 'null'],
				},
				trainerId: {
					type: ['integer', 'null'],
				},
				sectionId: {
					type: ['integer', 'null'],
				},
				...defaultProperties,
			},
		};
		return schema;
	}

	static defaultColumns(otherColumns = []) {
		let columns = ['id', 'url_video', 'name', 'description', 'trainer_id', 'section_id'].map(c => `${this.tableName}.${c}`);

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

module.exports = Lesson;
