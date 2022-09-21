'use strict';

const productCreateRoute = require('./product-create.route');
const productListRoute = require('./product-list.route');
const productUpdateRoute = require('./product-update.route');
const productDetailsRoute = require('./product-details.route');
const productDeleteRoute = require('./product-delete.route');

function register(server) {
	server.route(productCreateRoute);
	server.route(productListRoute);
	server.route(productUpdateRoute);
	server.route(productDetailsRoute);
	server.route(productDeleteRoute);
}

const plugin = {
	name: 'product',
	register,
	version: '1.0.0',
};

module.exports = plugin;
