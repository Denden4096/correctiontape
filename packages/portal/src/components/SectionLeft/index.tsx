import { Menu } from "./Menu"
import { VeryCoolText } from "./VeryCoolText"

export const SectionLeft = (): JSX.Element => (
	<header
		class={style({
			position: "relative",
			display: "flex",
			alignItems: "center",
			padding: "max(4vh + 2rem, 6rem) 4vw",

			"@media (min-aspect-ratio: 4/3)": {
				height: "100vh"
			}
		})}
	>
		<Menu />
		<VeryCoolText />
	</header>
)
