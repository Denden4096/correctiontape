import { subcategories } from "~/data"
import { t } from "~/locales"
import { tableExtended } from "~/signals"
import { mixins, palettes, style, variables } from "~/styles"

export const Subcategories = (): JSX.Element => (
	<div
		class={style({
			...mixins.centering.GRID,
			gridColumn: "3/13",
			gridRow: "1/6",
			height: `${
				variables.constants.GOLDEN_RATIO * variables.constants.TABLE_COLUMN_WIDTH * 3 +
				variables.constants.TABLE_GAP * 2
			}rem`,
			paddingTop: "6rem"
		})}
	>
		<div
			class={style({
				display: "grid",
				gridTemplateColumns: "repeat(3,1fr)",
				gridTemplateRows: "repeat(4,1fr)",
				gridAutoFlow: "column",
				gap: "1rem 3rem",
				padding: "2rem 6rem",
				borderRadius: "0.5rem",
				backgroundColor: `${palettes.SECONDARY}19`
			})}
		>
			<For
				each={
					Object.keys(subcategories).slice(
						0,
						tableExtended() ? Infinity : -2
					) as (keyof typeof subcategories)[]
				}
			>
				{(label: string): JSX.Element => (
					<div
						class={style({
							...mixins.centering.GRID,
							padding: "0.5em 1em",
							backgroundColor: subcategories[label],
							borderRadius: "0.25rem",
							color: ["alkalineEarthMetal", "transitionMetal"].includes(label)
								? palettes.PRIMARY
								: palettes.SECONDARY,
							fontWeight: 500,
							letterSpacing: "-0.025em"
						})}
					>
						{t().subcategories[label]}
					</div>
				)}
			</For>
		</div>
	</div>
)
