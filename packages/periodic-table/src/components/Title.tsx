import { mixins, style, variables } from "~/styles"

const titleText = "Periodic Table of the Elements"
const subtitleText = "Designer's version"

export const Title = (): JSX.Element => (
	<div
		class={style({
			...mixins.centering.GRID
		})}
	>
		<h1
			class={style({
				marginBottom: "-4.25em",
				fontFamily: variables.font.DISPLAY,
				fontSize: "6rem",
				fontWeight: 700,
				letterSpacing: "-0.05em"
			})}
		>
			{titleText}
		</h1>
		<div
			class={style({
				marginBottom: "-35rem",
				fontSize: "1.5rem",
				fontWeight: "500",
				letterSpacing: "0.1em"
			})}
		>
			{subtitleText}
		</div>
	</div>
)
