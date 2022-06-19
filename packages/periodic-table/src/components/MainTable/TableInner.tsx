import { FragmentBase, FragmentPlaceholders, FragmentSets } from "./fragment"
import { HeaderGroups, HeaderPeriods } from "./header"
import { Subcategories } from "./Subcategories"
import { mixins, style, variables } from "~/styles"

export const TableInner = (): JSX.Element => (
	<div
		class={style({
			...mixins.centering.GRID,
			paddingTop: "3rem"
		})}
	>
		<div
			class={style({
				display: "flex"
			})}
		>
			<HeaderPeriods />
			<div
				class={style({
					display: "flex",
					flexDirection: "column"
				})}
			>
				<HeaderGroups />
				<div
					class={style({
						display: "grid",
						gap: `${variables.constants.TABLE_GAP}rem`,
						gridTemplateColumns: `repeat(18, ${variables.constants.TABLE_COLUMN_WIDTH}rem)`,
						marginBottom: `${variables.constants.TABLE_COLUMN_WIDTH}rem`
					})}
				>
					<Subcategories />
					<FragmentBase />
					<FragmentPlaceholders />
				</div>
				<FragmentSets />
			</div>
		</div>
	</div>
)
