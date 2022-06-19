/* eslint-disable import/order */

import "destyle.css/destyle.min.css"

import "@fontsource/merriweather/700.css"

import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/variable-full.css"

import "@fontsource/murecho/400.css"
import "@fontsource/murecho/500.css"
import "@fontsource/murecho/600.css"
import "./murecho-variable.css"

import { palettes } from "../constants/palette"

export const globalStyles = {
	[["*", "::before", "::after"].join()]: {
		outline: "0 !important"
	},

	html: {
		fontFamily: ["InterVariable", "Inter", "MurechoVariable", "Murecho", "sans-serif"].join(),
		fontSize: "max(1rem, 16px)",
		textRendering: "optimizeLegibility",
		WebkitTapHighlightColor: "transparent",
		WebkitPrintColorAdjust: "exact",
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
		msOverflowStyle: "none",
		scrollbarWidth: "none"
	},

	"::-webkit-scrollbar,::-webkit-resizer": {
		display: "none"
	},

	body: {
		minHeight: "100vh",
		lineHeight: 1.5,
		color: palettes.PRIMARY,
		backgroundColor: palettes.BACKGROUND,
		letterSpacing: "-0.02em"
	},

	"#wrapper": {
		position: "relative",
		display: "inline-block",
		minHeight: "100vh",
		cursor: "grab",
		userSelect: "none"
	},

	"#wrapper.grabbing": {
		cursor: "grabbing"
	}
} as const
