import { Title } from "./Title"
import { VeryCoolText } from "./VeryCoolText"

export const SectionLeft = (): JSX.Element => (
	<header class="relative flex portrait:flex-col items-center px-4vw landscape:h-screen">
		<Title />
		<VeryCoolText />
	</header>
)
