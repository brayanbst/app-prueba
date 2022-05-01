'use strict';

const BaseModel = require('./base');
const helper = require('./helper');

class MsContact extends BaseModel {
	static get tableName() {
		return 'ms_contact';
	}

	static get jsonSchema() {
		const defaultProperties = helper.defaultFields();
		const schema = {
			type: 'object',
			required: ['name', 'typeContact'],
			properties: {
				name: {
					type: 'string',
				},
				email: {
					type: ['string', 'null'],
				},
				typeContact: {
					type: ['integer', 'null'],
				},
				phone: {
					type: ['string', 'null'],
				},
				...defaultProperties,
			},
		};
		return schema;
	}

	static defaultColumns(otherColumns = []) {
		let columns = ['id', 'name', 'email', 'type_contact', 'phone'].map(c => `${this.tableName}.${c}`);

		columns = columns.concat(otherColumns);

		return columns;
	}

	static create(data) {
		return this.query().insert(data);
	}

	static getAll(filter = {}, companyId) {
		let query = this.query()
			.select(this.defaultColumns())
			.skipUndefined()
			.where('ms_contact.type_contact', filter.typeConcat)
			.where('company_id', companyId);
		query = this.includePaginationAndSort(query, filter);
		return query;
	}

	static edit(id, data) {
		return this.query()
			.patch(data)
			.where('id', id);
	}

	static remove(id, companyId) {
		return this.query()
			.softDelete()
			.where('id', id)
			.where('company_id', companyId);
	}

	static getById(id, companyId) {
		return this.query()
			.select(this.defaultColumns())
			.findById(id)
			.where('company_id', companyId);
	}
}

module.exports = MsContact;
