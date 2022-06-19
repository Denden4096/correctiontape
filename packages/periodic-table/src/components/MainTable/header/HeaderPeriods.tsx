import { tableExtended } from "~/signals"
import { mixins, style, variables } from "~/styles"

export const HeaderPeriods = (): JSX.Element => (
	<div
		class={style({
			display: "flex",
			flexDirection: "column",
			gap: `${variables.constants.TABLE_GAP}rem`,
			marginTop: `${variables.constants.TABLE_COLUMN_WIDTH / variables.constants.GOLDEN_RATIO}rem`
		})}
	>
		<For
			each={["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"].slice(
				0,
				tableExtended() ? Infinity : -2
			)}
		>
			{(header: string): JSX.Element => (
				<div
					class={style({
						...mixins.centering.GRID,
						width: `${variables.constants.TABLE_COLUMN_WIDTH / 2}rem`,
						fontWeight: 500,
						fontSize: "1.5rem",
						aspectRatio: `${1 / variables.constants.GOLDEN_RATIO / 2}`
					})}
				>
					{header}
				</div>
			)}
		</For>
	</div>
)
