import { keyframe, variables } from "~/styles"

export const transitionFade = ({ name, duration }: { name: string; duration: number }) => ({
	[`& .${name}-enter-active`]: {
		animation: `${keyframe({
			"0%": {
				opacity: 0
			},
			"100%": {
				opacity: 1
			}
		})} ${duration}ms ${variables.easing.EASE}`
	},

	[`& .${name}-exit-active`]: {
		animation: `${keyframe({
			"0%": {
				opacity: 1
			},
			"100%": {
				opacity: 0
			}
		})} ${duration}ms ${variables.easing.EASE}`
	}
})
