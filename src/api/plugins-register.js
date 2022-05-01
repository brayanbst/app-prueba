'use strict';

const pagiJapi = require('./shared/paginate');
const templatePlugin = require('./contact/contact.plugin');

const plugins = [
	{
		plugin: pagiJapi,
	},
	{
		plugin: templatePlugin,
		routes: {
			prefix: '/contact',
		},
	},
];

module.exports = plugins;
