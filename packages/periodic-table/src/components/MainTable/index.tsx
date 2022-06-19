import { Transition } from "solid-transition-group"

import { TableInner } from "./TableInner"
import { tableExtended } from "~/signals"
import { style } from "~/styles"
import { transitionFade } from "~/utils/transitionFade"

export const Table = (): JSX.Element => (
	<div
		class={style(
			transitionFade({
				name: "table-switch",
				duration: 400
			})
		)}
	>
		<Transition
			name="table-switch"
			mode="outin"
			onBeforeExit={(): void => {
				window.scrollTo({
					top: document.documentElement.scrollHeight - document.documentElement.clientHeight,
					behavior: "smooth"
				})
			}}
			onAfterExit={(): void => {
				setTimeout(
					() =>
						window.scrollTo({
							top: document.documentElement.scrollHeight - document.documentElement.clientHeight
						}),
					1
				)
			}}
		>
			<Show
				when={tableExtended()}
				fallback={<TableInner />}
			>
				<TableInner />
			</Show>
		</Transition>
	</div>
)
