import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"

import { details, getSignificantDigit, subcategories } from "~/data"
import { isCJK, t } from "~/locales"
import { enableGrabScroll, disableGrabScroll } from "~/setupGrabScroll"
import { setShowingElem, showingElem } from "~/signals"
import { mixins, palettes, style, transition, variables } from "~/styles"
import { escapeFromDetail } from "~/utils/escapeFromDetail"

export const CellElement = (props: { atomicNumber: number; flexible: boolean }): JSX.Element => {
	const elementData = details[props.atomicNumber - 1]

	if (!elementData) throw new Error(`Data not found: atomic number ${props.atomicNumber}`)

	createEffect(() => {
		if (showingElem() !== null) return

		document.removeEventListener("click", escapeFromDetail)

		setTimeout(() => {
			enableGrabScroll()
			enableBodyScroll(document.querySelector("#wrapper"))
		}, 400)
	})

	return (
		<div
			role="button"
			onClick={() => {
				setShowingElem(props.atomicNumber - 1)
				disableGrabScroll()
				disableBodyScroll(document.querySelector("#wrapper"))
				setTimeout(() => document.addEventListener("click", escapeFromDetail), 400)
			}}
			onKeyUp={(e) => {
				if (!["Enter", "Space"].includes(e.code)) return

				setShowingElem(props.atomicNumber - 1)
				disableGrabScroll()
				disableBodyScroll(document.querySelector("#wrapper"))
				setTimeout(() => document.addEventListener("click", escapeFromDetail), 400)
			}}
			tabindex={showingElem() === null ? 0 : -1}
			class={style({
				position: "relative",
				...mixins.centering.GRID,
				...(!props.flexible && {
					gridColumn: elementData.group,
					gridRow: elementData.period
				}),
				borderRadius: "0.5rem",
				aspectRatio: `${1 / variables.constants.GOLDEN_RATIO}`,
				color: palettes.PRIMARY,
				backgroundColor: `${subcategories[elementData.category] as string}33`,
				cursor: "pointer",
				overflow: "hidden",

				...transition({
					color: ["200ms", variables.easing.EASE],
					backgroundColor: ["200ms", variables.easing.EASE],
					boxShadow: [variables.easing.EASE, "250ms"],
					opacity: ["200ms", variables.easing.EASE]
				}),

				"::after": {
					position: "absolute",
					bottom: 0,
					width: "100%",
					height: "0.667rem",
					content: '""',
					backgroundColor: subcategories[elementData.category],
					borderRadius: "0 0 0.5rem 0.5rem"
				},

				"& > svg > g": {
					...transition({
						fill: ["200ms", variables.easing.EASE]
					})
				},

				":is(:hover,:active,:focus)": {
					color: elementData.category === "transitionMetal" ? palettes.PRIMARY : palettes.SECONDARY,
					backgroundColor: subcategories[elementData.category],
					opacity: 1,

					"& > svg > g": {
						fill: `${palettes.SECONDARY}${elementData.category === "transitionMetal" ? "66" : "4c"}`
					}
				},

				":is(:active, :focus)": {
					boxShadow: "0 0 0 3px #0a84ff,0 0 0 6px #0a84ff4c"
				}
			})}
		>
			<Show when={elementData.radioactive}>
				<svg
					viewBox="0 0 600 600"
					width="8rem"
					height="8rem"
					class={style({
						position: "absolute",
						top: "-2rem",
						right: "-2.5rem"
					})}
				>
					<g
						transform="translate(300 300)"
						class={style({
							fill: `${subcategories[elementData.category] as string}4c`
						})}
					>
						<circle r="50" />
						<path
							d="M75 0a75 75 0 0 0-37.5-64.952L125-216.506A250 250 0 0 1 250 0z"
							id="a"
						/>
						<use
							href="#a"
							transform="rotate(120)"
						/>
						<use
							href="#a"
							transform="rotate(240)"
						/>
					</g>
				</svg>
			</Show>
			<div
				class={style({
					position: "absolute",
					top: "0.75rem",
					left: "0.5rem",
					fontSize: "1.125rem",
					fontWeight: 500,
					lineHeight: 1,
					whiteSpace: "pre"
				})}
			>
				{props.atomicNumber}
			</div>
			<div
				class={style({
					position: "relative",
					width: `${variables.constants.TABLE_COLUMN_WIDTH}rem`,

					...(typeof elementData.atomicMass !== "undefined" && {
						paddingTop: "0.333rem"
					})
				})}
			>
				<div
					class={style({
						...mixins.centering.GRID,
						fontFamily: variables.font.DISPLAY,
						fontSize: "3rem",
						fontWeight: 600,
						letterSpacing: "-0.025em",
						lineHeight: 1,
						whiteSpace: "pre"
					})}
				>
					{elementData.symbol}
				</div>
				<div
					class={style({
						marginTop: `${props.atomicNumber > 118 ? 0.667 : 0.5}rem`,
						textAlign: "center",
						letterSpacing: `${0.05 * (isCJK() ? -1 : 1)}em`,
						fontSize: "0.667rem",
						fontWeight: 500,
						lineHeight: 1,
						whiteSpace: "pre"
					})}
				>
					{t().elements[props.atomicNumber - 1]}
				</div>
				<Show when={elementData.atomicMass !== null}>
					<div
						class={style({
							display: "flex",
							justifyContent: "center",
							alignItems: "baseline",
							gap: "0.2em",
							marginTop: "0.75rem",
							fontWeight: 500,
							textAlign: "center",
							lineHeight: 1.2,
							whiteSpace: "pre"
						})}
					>
						<Show
							when={elementData.atomicMass![1] === null}
							fallback={
								<span>
									{elementData.atomicMass![0]!.toFixed(
										getSignificantDigit(elementData.atomicMass![1]!)
									)}
								</span>
							}
						>
							{
								<>
									<span>[</span>
									<span>{elementData.atomicMass![0]!.toString()}</span>
									<span>]</span>
								</>
							}
						</Show>
					</div>
				</Show>
			</div>
		</div>
	)
}
