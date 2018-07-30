// Replaces variables of the form {{VARIABLE}} with the content of `process.env.VARIABLE`
module.exports = function envsubst(stringContent) {
	const regex = /\{\{(\w+)\}\}/g;

	const variables = regex.exec(stringContent);

	return stringContent.replace(regex, (original, g) => {
		const variable = g;

		return process.env.hasOwnProperty(variable)
			? process.env[variable]
			: original;
	});
};
