const commitTypes = {
	feat: {
		description: "A new feature",
		title: "Features",
		emoji: "✨"
	},
	fix: {
		description: "A bug fix",
		title: "Bug Fixes",
		emoji: "🐛"
	},
	docs: {
		emoji: "📝",
		title: "Documentation",
		description: "Documentation only changes"
	},
	refactor: {
		description: "A code change that neither fixes a bug nor adds a feature",
		title: "Code Refactoring",
		emoji: "♻️"
	},
	perf: {
		description: "A code change that improves performance",
		title: "Performance Improvements",
		emoji: "⚡️"
	},
	test: {
		description: "Adding missing tests or correcting existing tests",
		title: "Tests",
		emoji: "✅"
	},
	build: {
		description:
			"Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
		title: "Builds",
		emoji: "🔧"
	},
	chore: {
		description: "Other changes that don't modify src or test files",
		title: "Chores",
		emoji: "✏️"
	},
	revert: {
		description: "Reverts a previous commit",
		title: "Reverts",
		emoji: "⏪️"
	}
}

const types = Object.entries(commitTypes).map(([type, { emoji, title, description }]) => ({
	value: [emoji, type].join(" "),
	name: [emoji, `${title}:`, description].join(" ")
}))

const packagesList = require("fs").readdirSync("./packages")

module.exports = {
	types,
	scopes: [
		{ value: "", name: "Global" },
		...packagesList.map((package) => ({
			value: package,
			name: `Commits on @correctiontape/${package}`
		}))
	],
	skipQuestions: ["body", "footer"],
	subjectLimit: 100,
	upperCaseSubject: true
}
