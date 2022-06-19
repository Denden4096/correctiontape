import { animateClass, observer } from "~/globals"
import { keyframe } from "~/style"

const coolText: string[] = "Learn from the past, Create something new.".split(" ")

const wordAppear: string = keyframe({
	"0%": {
		transform: "translateY(1.3em);transform:translateY(1lh)"
	},

	"100%": {
		transform: "translateY(0)"
	}
})

export const VeryCoolText = (): JSX.Element => (
	<h1
		class={style({
			maxWidth: "96rem",
			width: "100%",
			fontSize: "min(10vmax,12rem)",
			fontWeight: 800,
			lineHeight: 1.3,
			letterSpacing: "-0.06em",
			wordSpacing: "0.1em",

			"& > span": {
				position: "relative",
				display: "inline-block",
				overflow: "clip",
				padding: "0 0.03em 0.07ex 0", // To avoid missing letters
				whiteSpace: "pre",

				"&>span": {
					display: "inline-block",
					whiteSpace: "nowrap",
					transform: "translateY(1.3em);transform:translateY(1lh)"
				}
			},

			[`&.${animateClass}>span>span`]: {
				animation: `${wordAppear} 1s cubic-bezier(0.4, 0, 0.2, 1) both`
			}
		})}
		ref={(elem: HTMLHeadingElement): void => observer.observe(elem)}
	>
		<For each={coolText}>
			{(word: string, i: () => number): JSX.Element => (
				<>
					<span>
						<For each={word.split("")}>
							{(char: string, j: () => number): JSX.Element => (
								<span
									class={style({
										animationDelay: `${i() * 150 + j() * 75}ms!important`
									})}
								>
									{char}
								</span>
							)}
						</For>
					</span>{" "}
				</>
			)}
		</For>
	</h1>
)
