const centering = {
	FLEX: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},

	INLINE_FLEX: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center"
	},

	GRID: {
		display: "grid",
		placeItems: "center"
	},

	INLINE_GRID: {
		display: "inline-grid",
		placeItems: "center"
	}
} as const

export const mixins = {
	centering
} as const
