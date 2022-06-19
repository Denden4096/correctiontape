export const [tableExtended, setTableExtended] = createSignal<boolean>(false)

const localStorageKey = "periodicTableConfigs"

if (localStorage[localStorageKey])
	setTableExtended(JSON.parse(localStorage[localStorageKey]).tableExtended)

createEffect(
	() =>
		(localStorage[localStorageKey] = JSON.stringify({
			tableExtended: tableExtended()
		}))
)

export const [showingElem, setShowingElem] = createSignal<number | null>(null, {
	equals: (prev: number | null, next: number | null): boolean => prev === next
})
