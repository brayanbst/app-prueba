'use strict';

function getCompanyId(request) {
	return request.auth.credentials.cms_companies_id;
}

const methods = {
	getCompanyId,
};

module.exports = methods;
