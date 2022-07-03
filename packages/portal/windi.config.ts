import { defineConfig } from "windicss/helpers"
import aspectRatioPlugin from "windicss/plugin/aspect-ratio"
import scrollSnapPlugin from "windicss/plugin/scroll-snap"

export default defineConfig({
	darkMode: "media",
	corePlugins: {
		preflight: false // Disable default styles
	},
	theme: {
		extend: {
			colors: {
				vanilla: {
					DEFAULT: "#f4ead1",
					light: "#fffaee"
				},
				chocolate: {
					DEFAULT: "#794f3f",
					light: "#8e624f",
					shade: "#694133",
					dark: "#5a3428"
				}
			},
			fontFamily: {
				sans: ["Public SansVariable", "sans-serif"]
			}
		}
	},
	plugins: [scrollSnapPlugin, aspectRatioPlugin],
	extract: {
		include: ["*.html", "src/**/*.{html,jsx,tsx}"],
		exclude: ["node_modules"]
	}
})
