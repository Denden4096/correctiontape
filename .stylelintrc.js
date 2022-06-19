module.exports = {
	plugins: ["stylelint-prettier"],
	extends: ["stylelint-config-standard", "stylelint-config-prettier"],
	customSyntax: "@stylelint/postcss-css-in-js",
	rules: {
		"font-family-name-quotes": null,
		"font-family-no-missing-generic-family-keyword": null,
		"function-name-case": null,
		"function-no-unknown": null,
		"function-whitespace-after": null,
		"property-no-unknown": null,
		"string-no-newline": null,
		"value-keyword-case": null,
		"unit-no-unknown": null
	}
}
