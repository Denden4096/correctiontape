import { CellElement } from "./cell/CellElement"
import { details, sets } from "~/data"
import { isCJK, t } from "~/locales"
import { tableExtended } from "~/signals"
import { style, variables } from "~/styles"

export const FragmentSets = (): JSX.Element => (
	<div
		class={style({
			display: "flex",
			flexDirection: "column",
			gap: `${variables.constants.TABLE_GAP * 6}rem`
		})}
	>
		<For each={tableExtended() ? sets : sets.slice(0, -1)}>
			{(
				set: {
					readonly range: readonly [number, number]
					readonly pos: readonly [number, number]
				},
				index: () => number
			): JSX.Element => (
				<div
					class={style({
						display: "flex",
						gap: `${variables.constants.TABLE_GAP}rem`
					})}
				>
					<div
						class={style({
							display: "flex",
							alignItems: "center",
							justifyContent: "right",
							width: `${
								variables.constants.TABLE_COLUMN_WIDTH * 2 + variables.constants.TABLE_GAP
							}rem`,
							paddingRight: "1rem",
							fontSize: "1.333rem",
							fontWeight: 600,
							letterSpacing: `${isCJK() ? -0.05 : 0.02}em`
						})}
					>
						{t().sets[index()]}
					</div>
					<div
						class={style({
							display: "grid",
							gap: `${variables.constants.TABLE_GAP}rem`,
							gridTemplateColumns: `repeat(15,${variables.constants.TABLE_COLUMN_WIDTH}rem)`
						})}
					>
						<For
							each={details.filter(
								(elem) =>
									elem.atomicNumber >= set.range[0] &&
									elem.atomicNumber <= set.range[1] &&
									elem.group === 3 &&
									elem.period >= 6
							)}
						>
							{(elem): JSX.Element => (
								<CellElement
									atomicNumber={elem.atomicNumber}
									flexible={true}
								/>
							)}
						</For>
					</div>
				</div>
			)}
		</For>
	</div>
)
