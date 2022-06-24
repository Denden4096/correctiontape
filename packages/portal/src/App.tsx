/* eslint-disable import/order */

import "destyle.css/destyle.min.css"
import "@fontsource/public-sans/variable.css"

// Windi CSS
import "virtual:windi.css"

import "./style.css"

import { SectionLeft } from "~/components/SectionLeft"
import { SectionRight } from "~/components/SectionRight"

export const App = (): JSX.Element => (
	<>
		<div class="relative landscape:(grid grid-cols-[80%,1fr] h-screen)">
			<SectionLeft />
			<SectionRight />
		</div>
	</>
)
