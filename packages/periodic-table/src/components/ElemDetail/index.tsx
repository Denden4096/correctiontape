import { ElectronConfig } from "./ElectronConfig"
import { ElemName } from "./ElemName"
import { details } from "~/data"
import { setShowingElem, showingElem } from "~/signals"
import { style, mixins, palettes, variables, transition, mediaQuery } from "~/styles"

export const ElemDetail = (): JSX.Element => {
	const elementData = details[showingElem()!]!

	return (
		<div
			class={style({
				position: "fixed",
				inset: 0,
				...mixins.centering.GRID,
				width: "100vw",
				height: "100vh",
				color: palettes.SECONDARY,
				backgroundColor: "#0c0c0de5",
				zIndex: 114514,
				cursor: "default"
			})}
		>
			<div
				class={style({
					display: "flex",
					justifyContent: "center",

					[mediaQuery(variables.breakpoint[3], ">=")]: {
						gap: "5vw"
					},
					[mediaQuery(variables.breakpoint[3], "<")]: {
						flexDirection: "column"
					}
				})}
			>
				<ElectronConfig {...elementData} />
				<ElemName {...elementData} />
			</div>
			<a
				onKeyUp={(e) => ["Enter", "Space"].includes(e.code) && setShowingElem(null)}
				class={style({
					position: "absolute",
					top: "1rem",
					right: "1rem",
					display: "block",
					padding: "0.25rem",
					borderRadius: "0.25rem",
					cursor: "pointer",

					":focus": {
						"& > svg": {
							stroke: `${palettes.SECONDARY}66`
						}
					},

					":is(:hover,:active)": {
						"& > svg": {
							stroke: `${palettes.SECONDARY}99`
						}
					}
				})}
				tabindex={0}
			>
				<svg
					width="8rem"
					height="8rem"
					viewBox="0 0 24 24"
					class={style({
						fill: "none",
						stroke: palettes.SECONDARY,
						strokeWidth: "0.05rem",
						strokeLinecap: "round",
						strokeLinejoin: "round",

						...transition({
							stroke: ["200ms", variables.easing.EASE]
						})
					})}
				>
					<path d="M18 6 6 18M6 6l12 12" />
				</svg>
			</a>
		</div>
	)
}
