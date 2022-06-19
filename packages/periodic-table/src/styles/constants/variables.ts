const font = {
	DISPLAY: ["Merriweather", "sans-serif"].join()
} as const

const easing = {
	EASE: `cubic-bezier(${[0.4, 0, 0.2, 1].join()})`
} as const

// Unit is rem
const breakpoint = [40, 48, 64, 80] as const

const constants = {
	// Unit is rem
	TABLE_COLUMN_WIDTH: 7,
	TABLE_GAP: 0.5,
	SET_RANGE_FONTSIZE: 2.25,

	GOLDEN_RATIO: (1 + Math.sqrt(5)) / 2
} as const

export const variables = {
	font,
	easing,
	breakpoint,
	constants
} as const
