'use strict';

/* istanbul ignore next */
const bluebird = require('bluebird');
const redis = require('redis');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
let client = null;

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
	client = redis.createClient({
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
	});
	client.on('error', (err) => {
		/* eslint-disable no-console */
		console.log(`Error Redis ${err}`);
	});
}

async function authenticate(request, token) {
	try {
		let isValid = false;
		const artifacts = {};
		if (token) {
			const currentKey = `${process.env.REDIS_DB}${token}`;
			const data = await client.getAsync(currentKey);
			let credentials = {};
			if (data) {
				isValid = true;
				credentials = JSON.parse(data);
				credentials.cms_companies_id = credentials.company_id;
				credentials.token = token;
			}
			return { isValid, credentials, artifacts };
		}
	} catch (error) {
		/* eslint-disable no-console */
		console.log(`Error to validate token ${error}`);
	}
	return { isValid: false };
}

module.exports = authenticate;
