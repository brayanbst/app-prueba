'use strict';

const pagiJapi = require('./shared/paginate');
const notificationTypePlugin = require('./notification-types/notification-types.plugin');
const notificationPlugin = require('./notifications/notifications.plugin');
const templatePlugin = require('./templates/templates.plugin');
const blackListPlugin = require('./black-list/black-list.plugin');

const plugins = [
	pagiJapi,
	notificationTypePlugin,
	notificationPlugin,
	templatePlugin,
	blackListPlugin,
];

module.exports = plugins;
