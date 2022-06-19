import type { DetailTypes } from "~/data"
import { sets, subcategories, getSignificantDigit } from "~/data"
import { t } from "~/locales"
import { mixins, palettes, style, variables, mediaQuery } from "~/styles"

export const ElemName = (props: DetailTypes): JSX.Element => (
	<div
		class={style({
			...mixins.centering.FLEX,
			flexDirection: "column",
			gap: "1.5rem",
			width: "100vmin",
			height: "100vmin",
			zIndex: 2,

			[mediaQuery(variables.breakpoint[3], "<")]: {
				marginBottom: "-1vh"
			}
		})}
	>
		<div
			class={style({
				display: "flex",
				alignItems: "baseline",

				[mediaQuery(variables.breakpoint[3], ">=")]: {
					gap: "2rem"
				},
				[mediaQuery(variables.breakpoint[3], "<")]: {
					gap: "1rem"
				}
			})}
		>
			<div
				class={style({
					fontWeight: 600,
					letterSpacing: "-0.025em",
					lineHeight: 1,
					whiteSpace: "pre",

					[mediaQuery(variables.breakpoint[3], ">=")]: {
						fontSize: "5rem"
					},
					[mediaQuery(variables.breakpoint[3], "<")]: {
						fontSize: "3rem"
					}
				})}
			>
				{props.atomicNumber}
			</div>
			<div
				class={style({
					fontFamily: variables.font.DISPLAY,
					fontWeight: 700,
					letterSpacing: "-0.025em",
					lineHeight: 1,
					whiteSpace: "pre",

					[mediaQuery(variables.breakpoint[3], ">=")]: {
						fontSize: "12rem"
					},
					[mediaQuery(variables.breakpoint[3], "<")]: {
						fontSize: "8rem"
					}
				})}
			>
				{props.symbol}
			</div>
		</div>
		<div
			class={style({
				...mixins.centering.FLEX,
				flexDirection: "column",
				gap: "1.5rem"
			})}
		>
			<div
				class={style({
					display: "flex",
					alignItems: "center",
					gap: "1.5rem",

					...(/[gpqy]/g.test(props.symbol) && {
						marginTop: "2rem"
					})
				})}
			>
				<div
					class={style({
						fontSize: "2rem",
						fontWeight: 500,
						letterSpacing: "-0.025em",
						lineHeight: 1,
						textAlign: "center",
						whiteSpace: "pre",

						[mediaQuery(variables.breakpoint[3], ">=")]: {
							fontSize: "2rem"
						},
						[mediaQuery(variables.breakpoint[3], "<")]: {
							fontSize: "1.5rem"
						}
					})}
				>
					{t().elements[props.atomicNumber - 1]}
				</div>
				<div
					class={style({
						padding: "0.5em 1em",
						backgroundColor: subcategories[props.category],
						borderRadius: "0.25rem",
						color: ["alkalineEarthMetal", "transitionMetal"].includes(props.category)
							? palettes.PRIMARY
							: palettes.SECONDARY,
						fontSize: "1.5rem",
						fontWeight: 500,
						letterSpacing: "-0.025em",
						lineHeight: 1,
						whiteSpace: "pre"
					})}
				>
					{t().subcategories[props.category]}
				</div>
			</div>
			<div
				class={style({
					...mixins.centering.FLEX,
					flexDirection: "column",
					gap: "1.5rem",
					marginTop: "1rem"
				})}
			>
				<div
					class={style({
						display: "flex",
						gap: "0.75em",
						fontSize: "1.25rem",
						fontWeight: 500,
						letterSpacing: "-0.025em",
						lineHeight: 1,
						textAlign: "center",
						whiteSpace: "pre"
					})}
				>
					<div
						class={style({
							display: "flex",
							gap: "0.5em"
						})}
					>
						<span>
							{t()
								.position[0]!.replace("$0", props.group.toString())
								.replace("$1", props.period.toString())}
						</span>
						<span>
							{t()
								.position[1]!.replace("$0", props.group.toString())
								.replace("$1", props.period.toString())}
						</span>
					</div>
					<div>
						{((data): string =>
							data.atomicNumber >= 121 && data.atomicNumber <= 138
								? "g"
								: data.group === 3 &&
								  data.period >= 6 &&
								  !sets
										.map(
											({ range }: { range: readonly [number, number] }) =>
												range[1] === data.atomicNumber
										)
										.includes(true)
								? "f"
								: data.atomicNumber <= 2 || [1, 2].includes(data.group)
								? "s"
								: (data.group >= 13 && data.group <= 18) || [139, 140].includes(data.atomicNumber)
								? "p"
								: data.group >= 3 && data.group <= 12
								? "d"
								: "unknown")(props)}
						{t().block}
					</div>
				</div>
			</div>
			<Show when={props.atomicMass !== null}>
				<div
					class={style({
						display: "flex",
						alignItems: "baseline",
						gap: props.atomicMass![1] === null ? "0.25em" : "0.5em",
						fontSize: "1.25rem",
						fontWeight: 500,
						letterSpacing: "-0.025em",
						lineHeight: 1,
						textAlign: "center",
						whiteSpace: "pre"
					})}
				>
					<span>{t().atomicMass}:</span>
					<Show
						when={props.atomicMass![1] === null}
						fallback={
							<>
								<span>
									{props.atomicMass![0]!.toFixed(getSignificantDigit(props.atomicMass![1]!))}
								</span>
								<span
									class={style({
										fontSize: "1.25em",
										lineHeight: 1
									})}
								>
									±
								</span>
								<span>{props.atomicMass![1]}</span>
							</>
						}
					>
						{
							<>
								<span>[</span>
								<span>{props.atomicMass![0]}</span>
								<span>]</span>
							</>
						}
					</Show>
				</div>
			</Show>
		</div>
	</div>
)
