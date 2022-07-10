import { Motto } from "./Motto"
import { Title } from "./Title"

export const SectionLeft = (): JSX.Element => (
	<header class="relative flex portrait:flex-col items-center px-4vw landscape:h-screen">
		<Title />
		<Motto />
	</header>
)
