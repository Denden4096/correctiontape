module.exports = {
	root: true,
	env: {
		browser: true
	},
	parserOptions: {
		ecmaVersion: 13,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: ["eslint:recommended", "plugin:import/recommended", "standard", "prettier"],
	plugins: ["unused-imports"],
	settings: {
		"import/resolver": {
			node: {
				paths: ["node_modules/", "node_modules/@types"]
			},
			typescript: {
				alwaysTryTypes: true,
				project: "packages/*/tsconfig.json"
			}
		}
	},
	rules: {
		"arrow-body-style": ["error", "as-needed"],
		complexity: ["error", 20],
		"import/no-unresolved": "off",
		"import/newline-after-import": "error",
		"import/no-default-export": "error",
		"import/order": [
			"warn",
			{
				groups: [
					["builtin", "external", "internal"],
					["parent", "sibling"]
				],
				pathGroups: [
					{
						pattern: "~/**",
						group: "parent"
					}
				],
				pathGroupsExcludedImportTypes: ["builtin"],
				"newlines-between": "always",
				alphabetize: {
					order: "asc",
					caseInsensitive: true
				},
				warnOnUnassignedImports: true
			}
		],
		"jsx-quotes": ["error", "prefer-double"],
		quotes: ["error", "double", { avoidEscape: true }],
		"unused-imports/no-unused-imports": "warn"
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "packages/*/tsconfig.json"
			},
			extends: [
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:import/typescript"
			],
			rules: {
				"dot-notation": "off",
				"no-return-await": "off",
				"@typescript-eslint/consistent-type-exports": [
					"error",
					{ fixMixedExportsWithInlineTypeSpecifier: true }
				],
				"@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
				"@typescript-eslint/no-non-null-assertion": "off",
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-argument": "off",
				"@typescript-eslint/no-unsafe-call": "off",
				"@typescript-eslint/no-unsafe-member-access": "off",
				"@typescript-eslint/no-unused-vars": "warn",
				"@typescript-eslint/unbound-method": "off"
			}
		},
		{
			files: "./packages/*/**/*.tsx",
			extends: ["plugin:solid/typescript"],
			rules: {
				"no-return-await": "off",
				"solid/jsx-no-undef": "off",
				"solid/no-innerhtml": "off", // Watch out for XSS :)
				"solid/reactivity": "off",
				"@typescript-eslint/no-unsafe-return": "off"
			}
		},
		{
			files: ["vite.config.ts", "astro.config.ts"],
			rules: {
				"@typescript-eslint/naming-convention": "off",
				"import/no-default-export": "off"
			}
		}
	]
}
