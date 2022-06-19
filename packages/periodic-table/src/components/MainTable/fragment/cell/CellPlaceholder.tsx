import { t } from "~/locales"
import { mixins, palettes, style, variables } from "~/styles"
import { prng } from "~/utils/prng"

export const CellPlaceholder = (props: {
	set: {
		readonly range: readonly [number, number]
		readonly pos: readonly [number, number]
		readonly color: string
	}
	index: number
}): JSX.Element => (
	<div
		class={style({
			...mixins.centering.FLEX,
			flexDirection: "column",
			gap: "0.25rem",
			gridColumn: props.set.pos[0],
			gridRow: props.set.pos[1],
			borderRadius: "0.25rem",
			color: palettes.PRIMARY,
			backgroundColor: `${props.set.color}33`,
			aspectRatio: `${1 / variables.constants.GOLDEN_RATIO}`
		})}
	>
		<div
			class={style({
				...mixins.centering.FLEX,
				flexDirection: "column",
				fontSize: `${variables.constants.SET_RANGE_FONTSIZE}rem`,
				fontWeight: 649, // If a variable weight font cannot be loaded, to match the thinner one
				lineHeight: 1
			})}
		>
			<div>{props.set.range[0]}</div>
			<div
				class={style({
					height: `${variables.constants.SET_RANGE_FONTSIZE / 2}rem`,

					// Cryptographically secure...
					[["borderRight", "borderLeft"][Math.round(prng())]!]: "solid 0.125em currentColor",

					margin: `${variables.constants.SET_RANGE_FONTSIZE / 8}rem 0 ${
						variables.constants.SET_RANGE_FONTSIZE / 4
					}rem`
				})}
			/>
			<div>{props.set.range[1]}</div>
		</div>
		<div
			class={style({
				marginTop: "0.5rem",
				fontSize: "0.75rem",
				fontWeight: 600,
				textAlign: "center"
			})}
		>
			{t().sets[props.index]}
		</div>
	</div>
)
