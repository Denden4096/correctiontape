import { Transition } from "solid-transition-group"

import { ElemDetail } from "~/components/ElemDetail"
import { Footer } from "~/components/Footer"
import { Table } from "~/components/MainTable"
import { Title } from "~/components/Title"
import { showingElem } from "~/signals"
import { style } from "~/styles"
import { transitionFade } from "~/utils/transitionFade"

export const App = (): JSX.Element => (
	<>
		<main
			class={style({
				display: "inline-flex",
				flexDirection: "column",
				gap: "2rem",
				minWidth: "100vw",
				padding: "3rem 2rem 10rem"
			})}
		>
			<Title />
			<Table />
		</main>
		<div
			class={style({
				"@media print": {
					display: "none"
				},

				...transitionFade({
					name: "elem-detail",
					duration: 400
				})
			})}
		>
			<Transition name="elem-detail">
				<Show when={showingElem() !== null}>
					<ElemDetail />
				</Show>
			</Transition>
		</div>
		<Show when={!new URLSearchParams(window.location.search).has("clean")}>
			<Footer />
		</Show>
	</>
)
