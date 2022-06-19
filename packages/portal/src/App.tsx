/* eslint-disable import/order */

import "destyle.css/destyle.min.css"
import "@fontsource/public-sans/variable.css"
import "./global.scss"

import { SectionLeft } from "~/components/SectionLeft"
import { SectionRight } from "~/components/SectionRight"

export const App = (): JSX.Element => (
	<>
		<div
			class={style({
				position: "relative",

				"@media (min-aspect-ratio: 4/3)": {
					display: "grid",
					height: "100vh",
					gridTemplateColumns: "80% 1fr"
				}
			})}
		>
			<SectionLeft />
			<SectionRight />
		</div>
	</>
)
