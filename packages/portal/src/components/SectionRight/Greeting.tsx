export const Greeting = () => (
	<div
		class={style({
			fontSize: "10vw",
			fontWeight: 600,
			whiteSpace: "pre",

			"@media (min-aspect-ratio: 4/3)": {
				fontSize: "5vw",
				writingMode: "vertical-rl",

				"& br": {
					display: "inline"
				}
			}
		})}
	>
		Hello!{" "}
		<br
			class={style({
				display: "none"
			})}
		/>
		I'm Denden.
	</div>
)
