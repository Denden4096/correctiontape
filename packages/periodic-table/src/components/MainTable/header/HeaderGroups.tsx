import { mixins, style, variables } from "~/styles"
import { emptyArray } from "~/utils/emptyArray"

export const HeaderGroups = (): JSX.Element => (
	<div
		class={style({
			display: "flex",
			gap: `${variables.constants.TABLE_GAP}rem`
		})}
	>
		<For each={emptyArray(18)}>
			{(_, index: () => number): JSX.Element => (
				<div
					class={style({
						position: "relative",
						bottom: `${
							[0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0][index()]! *
							-(
								variables.constants.GOLDEN_RATIO * variables.constants.TABLE_COLUMN_WIDTH +
								variables.constants.TABLE_GAP
							)
						}rem`,
						...mixins.centering.GRID,
						width: `${variables.constants.TABLE_COLUMN_WIDTH}rem`,
						fontWeight: 500,
						fontSize: "1.5rem",
						aspectRatio: `${variables.constants.GOLDEN_RATIO}`
					})}
				>
					{index() + 1}
				</div>
			)}
		</For>
	</div>
)
