'use strict';

function failAction(request, h, error) {
	const newError = error;
	newError.reformat();
	newError.output.payload.code = 'error_validation';
	return newError;
}

const methods = {
	failAction,
};

module.exports = methods;
