import { keyframe } from "~/style"

const appearAnim: string = keyframe({
	"0%": {
		transform: "translateY(4rem)"
	},

	"100%": {
		transform: "translateY(0)"
	}
})

export const Menu = (): JSX.Element => (
	<nav
		class={style({
			position: "absolute",
			inset: "0 0 auto",
			display: "flex",
			alignItems: "center",
			width: "100%",
			height: "4rem",
			padding: "0.5rem 4vw",
			color: "#794f3f",

			"@media (min-aspect-ratio: 4/3)": {
				position: "fixed",
				inset: "auto auto 0 0",
				width: "80%"
			}
		})}
	>
		<div
			class={style({
				display: "flex",
				gap: "1rem",
				alignItems: "baseline",
				overflow: "clip",
				fontWeight: 500
			})}
		>
			<div
				class={style({
					fontSize: "1.5rem",
					fontWeight: 600,
					animation: `${appearAnim} 1s 2.35s cubic-bezier(0.4, 0, 0.2, 1) both`
				})}
			>
				correctiontape / portal
			</div>
			<div
				class={style({
					letterSpacing: "-0.03em",
					animation: `${appearAnim} 1s 2.5s cubic-bezier(0.4, 0, 0.2, 1) both`
				})}
			>
				A <s>correction</s> collection of my personal projects.
			</div>
		</div>
	</nav>
)
