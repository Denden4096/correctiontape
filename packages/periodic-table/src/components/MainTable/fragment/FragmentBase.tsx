import { CellElement } from "./cell/CellElement"
import { details, sets } from "~/data"
import { tableExtended } from "~/signals"

export const FragmentBase = (): JSX.Element => {
	let elementsFiltered = details
		.filter((elem): boolean => typeof elem["undiscovered"] === "undefined" || tableExtended())
		.map((elem): number => elem.atomicNumber)

	for (const set of sets)
		elementsFiltered = elementsFiltered.filter(
			(elem: number): boolean =>
				!(set.range[0] <= elem && set.range[1] >= elem && ![139, 140].includes(elem))
		)

	return (
		<For each={elementsFiltered}>
			{(elem): JSX.Element => (
				<CellElement
					atomicNumber={elem}
					flexible={false}
				/>
			)}
		</For>
	)
}
