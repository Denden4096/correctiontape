import htmlMinimize from "@sergeymakinen/vite-plugin-html-minimize"
import * as devcert from "devcert"
import AutoImport from "unplugin-auto-import/vite"
import type { ConfigEnv, UserConfigExport } from "vite"
import solidPlugin from "vite-plugin-solid"
import tsconfigPaths from "vite-tsconfig-paths"

type FixedConfig = {
	build: {
		rollupOptions: {
			output: {
				assetFileNames: ({ name }: { name: string }) => string
			}
		}
	}
}

export default async ({ command }: ConfigEnv): Promise<UserConfigExport | FixedConfig> => ({
	plugins: [
		tsconfigPaths(),
		AutoImport({
			imports: [
				"solid-js",
				{
					"~/style": ["style"]
				}
			]
		}),
		solidPlugin(),
		htmlMinimize({
			minifierOptions: {
				collapseWhitespace: true,
				html5: true,
				keepClosingSlash: false,
				minifyCSS: true,
				minifyJS: true,
				removeAttributeQuotes: false,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: false
			}
		})
	],
	build: {
		assetsInlineLimit: 0,
		cssCodeSplit: false,
		minify: "terser",
		target: "es2016",
		terserOptions: {
			compress: {
				arguments: true,
				drop_console: true,
				hoist_funs: true,
				passes: 7,
				unsafe: true,
				unsafe_arrows: true,
				unsafe_comps: true,
				unsafe_Function: true,
				unsafe_math: true,
				unsafe_symbols: true,
				unsafe_methods: true,
				unsafe_proto: true,
				unsafe_regexp: true,
				unsafe_undefined: true
			},
			format: {
				ascii_only: true,
				comments: false,
				webkit: true
			},
			mangle: {
				toplevel: true
			},
			module: true,
			toplevel: true
		},
		rollupOptions: {
			output: {
				assetFileNames: ({ name }: { name: string }): string => {
					const genericFileName = "assets/[hash].[ext]"
					if (!name) return genericFileName

					const filters: [RegExp, string][] = [
						[/\.css$/g, "assets/style.css"],
						[/\.woff2?$/g, "assets/font/[hash].[ext]"]
					]

					for (const filter of filters) if (filter[0].test(name)) return filter[1]

					return genericFileName
				},
				entryFileNames: "assets/main.js"
			}
		}
	},
	server: {
		open: true,
		https: command === "serve" && (await devcert.certificateFor("localhost"))
	}
})
