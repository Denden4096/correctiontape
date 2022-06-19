import { Options } from "./Options"
import { showingElem } from "~/signals"
import { mixins, style, transition, variables } from "~/styles"

const socials = {
	"https://twitter.com/Denden4096": [
		"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
	],
	"https://github.com/Denden4096/correctiontape/tree/master/packages/periodic-table": [
		"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
	]
} as const

const iconSize = "2rem"
const strokeWidth = "0.125rem"

const isDarkMode = matchMedia("(prefers-color-scheme: dark)").matches

export const Footer = (): JSX.Element => (
	<footer>
		<Options />
		<div
			class={style({
				position: "absolute",
				right: "3rem",
				bottom: "2rem",
				...mixins.centering.FLEX,
				gap: "3rem",

				"@media print": {
					display: "none"
				}
			})}
		>
			<p
				class={style({
					opacity: 0.7
				})}
			>
				Adding "?clean" after the URL makes it a little cleaner for screenshots.
			</p>
			<ul
				class={style({
					display: "flex",
					gap: "1.5rem",

					"& li": {
						...transition({
							opacity: ["200ms", variables.easing.EASE]
						}),

						":is(:hover,:active,:focus)": {
							opacity: isDarkMode ? 0.5 : 0.75
						}
					}
				})}
			>
				<For each={Object.entries(socials)}>
					{({ 0: url, 1: paths }): JSX.Element => (
						<li>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								tabindex={showingElem() === null ? 0 : -1}
							>
								<svg
									width={iconSize}
									height={iconSize}
									viewBox="0 0 24 24"
									class={style({
										fill: "none",
										stroke: "currentColor",
										strokeWidth,
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})}
								>
									<For each={paths}>{(path): JSX.Element => <path d={path} />}</For>
								</svg>
							</a>
						</li>
					)}
				</For>
			</ul>
		</div>
	</footer>
)
