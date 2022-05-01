'use strict';

const contactCreateRoute = require('./contact-create.route');
const contactListRoute = require('./contact-list.route');
const contactUpdateRoute = require('./contact-update.route');
const contactDetailsRoute = require('./contact-details.route');
const contactDeleteRoute = require('./contact-delete.route');

function register(server) {
	server.route(contactCreateRoute);
	server.route(contactListRoute);
	server.route(contactUpdateRoute);
	server.route(contactDetailsRoute);
	server.route(contactDeleteRoute);
}

const plugin = {
	name: 'contact',
	register,
	version: '1.0.0',
};

module.exports = plugin;
