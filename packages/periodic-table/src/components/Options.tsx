import { tableExtended, setTableExtended, showingElem } from "~/signals"
import { mixins, palettes, style, transition, variables } from "~/styles"

const styleFocusing = style({
	borderBottomColor: "currentcolor!important"
})

export const Options = (): JSX.Element => (
	<div
		class={style({
			position: "absolute",
			left: "3rem",
			bottom: "2rem",
			display: "flex",
			alignItems: "center",
			gap: "2rem"
		})}
	>
		<form
			class={style({
				display: "inline-grid",
				gridTemplateColumns: "1fr 1fr",
				gap: "1.5rem",

				"@media print": {
					display: "none"
				},

				"& > div": {
					...mixins.centering.GRID,

					borderBottom: "solid 0.2em transparent",

					...transition({
						borderBottomColor: ["300ms", variables.easing.EASE]
					}),

					"& > a": {
						display: "block",
						width: "100%",
						padding: "0.5rem 1.5rem",
						fontSize: "1.5em",
						fontWeight: 500,
						textAlign: "center",
						letterSpacing: "-0.05em",
						borderRadius: "0.5rem",

						...transition({
							backgroundColor: ["200ms", variables.easing.EASE],
							boxShadow: [variables.easing.EASE, "250ms"]
						})
					},

					[`&:not(.${styleFocusing.split(" ").join(".")}) > a`]: {
						cursor: "pointer",

						":hover": {
							backgroundColor: `${palettes.PRIMARY}19`
						},

						":is(:active, :focus)": {
							boxShadow: "0 0 0 3px #0a84ff,0 0 0 6px #0a84ff4c"
						}
					}
				}
			})}
		>
			<div classList={{ [styleFocusing]: !tableExtended() }}>
				<a
					onClick={() => tableExtended() && setTableExtended(false)}
					tabindex={showingElem === null ? 0 : -1}
				>
					Basic
				</a>
			</div>
			<div classList={{ [styleFocusing]: tableExtended() }}>
				<a
					onClick={() => !tableExtended() && setTableExtended(true)}
					tabindex={showingElem === null ? 0 : -1}
				>
					Extended
				</a>
			</div>
		</form>
		<Show when={tableExtended()}>
			<div
				class={style({
					fontSize: "1.25em"
				})}
			>
				Based on{" "}
				<a
					href="https://w.wiki/5GJX"
					target="_blank"
					rel="noopener noreferrer"
					tabindex={showingElem === null ? 0 : -1}
					class={style({
						color: "#0d6efd",
						...transition({
							color: ["100ms", variables.easing.EASE]
						}),

						":not(:is(:hover,:active,:focus))": {
							textDecorationLine: "underline",
							textDecorationThickness: "0.08em"
						},

						":is(:hover,:active,:focus)": {
							color: "#0a58ca"
						}
					})}
				>
					Pekka Pyykkö’s extended periodic table
				</a>
				.
			</div>
		</Show>
	</div>
)
