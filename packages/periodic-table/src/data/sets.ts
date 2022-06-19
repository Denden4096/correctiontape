import { subcategories } from "./subcategories"

export const sets = [
	{ range: [57, 71], pos: [3, 6], color: subcategories.lanthanide },
	{ range: [89, 103], pos: [3, 7], color: subcategories.actinide },
	{ range: [121, 155], pos: [3, 8], color: subcategories.superactinide }
] as const
