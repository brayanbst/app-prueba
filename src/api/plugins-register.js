'use strict';

const pagiJapi = require('./shared/paginate');
const templatePlugin = require('./contact/contact.plugin');
const productPlugin = require('./product/product.plugin');

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
	{
		plugin:  productPlugin,
		routes: {
			prefix: '/product',
		},
	},
];

module.exports = plugins;
