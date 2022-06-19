import { prng } from "../../utils/prng"
import type { DetailTypes } from "~/data"
import { keyframe, mixins, style, transition, variables } from "~/styles"
import { emptyArray } from "~/utils/emptyArray"

const sizes = [175, 150] as const

const circularAnim = keyframe({
	"0%": {
		transform: "rotate(0deg)"
	},
	"100%": {
		transform: "rotate(360deg)"
	}
})

export const ElectronConfig = (props: DetailTypes): JSX.Element => (
	<div
		class={style({
			position: "absolute",
			animation: `${keyframe({
				"0%": {
					inset: `${(100 - sizes[0]) / 2}vmin`
				},
				"100%": {
					inset: `${(100 - sizes[1]) / 2}vmin`
				}
			})} 400ms ${variables.easing.EASE} both`,
			...mixins.centering.GRID
		})}
	>
		<svg
			viewBox="0 0 1000 1000"
			class={style({
				animation: `${keyframe({
					"0%": {
						width: `${sizes[0]}vmin`,
						height: `${sizes[0]}vmin`
					},
					"100%": {
						width: `${sizes[1]}vmin`,
						height: `${sizes[1]}vmin`
					}
				})} 400ms ${variables.easing.EASE} both`
			})}
		>
			<g>
				<For each={props.electrons}>
					{(orbital: number, index: () => number): JSX.Element => (
						<g>
							<circle
								r={50 * (index() + 2)}
								cx={500}
								cy={500}
								class={style({
									fill: "none",
									stroke: "#38383d99",
									strokeWidth: "0.25rem",

									...transition({
										stroke: ["100ms", variables.easing.EASE]
									})
								})}
							/>
							<g
								class={style({
									"& > g": {
										animationDelay: `${prng() * -60}s`
									},

									"& circle": {
										fill: "#4a4a4f",
										transformOrigin: "center",

										...transition({
											fill: ["100ms", variables.easing.EASE]
										})
									}
								})}
							>
								<For each={emptyArray(orbital)}>
									{(_, electron: () => number): JSX.Element => (
										<g
											class={style({
												transformOrigin: "center",
												animation: `${circularAnim} ${10 * (index() + 1) + 2}s linear infinite`
											})}
										>
											<circle
												r={"0.4rem"}
												cx={500}
												cy={500 - 50 * (index() + 2)}
												class={style({
													transform: `rotate(${(360 / orbital) * electron()}deg)`
												})}
											/>
										</g>
									)}
								</For>
							</g>
						</g>
					)}
				</For>
			</g>
		</svg>
	</div>
)
