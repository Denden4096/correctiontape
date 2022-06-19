import type { CSSProperties } from "fela"

export const transition = (transitions: {
	[K in keyof CSSProperties]: string[] | [0]
}): {
	transition: string
} => {
	const cssVal: string[] = []

	for (const key in transitions) {
		const property = key as keyof typeof transitions

		cssVal.push(
			[
				property.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
				transitions[property]!.join(" ")
			].join(" ")
		)
	}

	return { transition: cssVal.join(",") }
}

export const mediaQuery = (breakpoint: number, operator: ">=" | "<") =>
	`@media (${["max", "min"][operator.length - 1]!}-width:${
		breakpoint - (operator.length - 1 ? 0 : 0.05)
	}rem)` as const
