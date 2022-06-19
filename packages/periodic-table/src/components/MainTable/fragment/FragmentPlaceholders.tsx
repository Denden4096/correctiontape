import { CellPlaceholder } from "./cell/CellPlaceholder"
import { sets } from "~/data"
import { tableExtended } from "~/signals"

export const FragmentPlaceholders = (): JSX.Element => (
	<For each={sets.slice(0, 1 / (~!tableExtended() + 1))}>
		{(set: typeof sets[number], index: () => number): JSX.Element => (
			<CellPlaceholder
				set={set}
				index={index()}
			/>
		)}
	</For>
)
