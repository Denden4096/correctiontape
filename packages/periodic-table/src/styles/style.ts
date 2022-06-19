import { createRenderer } from "fela"
import type { IStyle } from "fela"
import hoverMedia from "fela-plugin-hover-media"
import prefixer from "fela-plugin-prefixer"

// Renderer ==============================

export const renderer = createRenderer({
	plugins: [hoverMedia(), prefixer()]
})

const { renderRule, renderKeyframe } = renderer

export const { renderFont, renderStatic } = renderer

// style() ==============================

export type CSSRules = IStyle

export const style = <P extends Record<string, unknown>>(
	styles: CSSRules | ((props: P) => CSSRules),
	props?: P
): string => {
	if (typeof styles !== "function") return renderRule(() => styles, {})

	if (typeof props === "undefined")
		throw new TypeError(
			"If you specify the styles with a function, you must also specify the props"
		)

	return renderRule(styles, props)
}

// keyframe() ==============================

type Keyframes = Record<string, CSSRules>

export const keyframe = <P extends Record<string, unknown>>(
	keyframes: Keyframes | ((props: P) => Keyframes),
	props?: P
): string => {
	if (typeof keyframes !== "function") return renderKeyframe(() => keyframes, {})

	if (typeof props === "undefined")
		throw new TypeError(
			"If you specify the keyframes with a function, you must also specify the props"
		)

	return renderKeyframe(keyframes, props)
}
