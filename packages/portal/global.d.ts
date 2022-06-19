import type { JSX as solidJSX } from "solid-js/jsx-runtime"

declare global {
	namespace JSX {
		type Element = solidJSX.Element
		type DOMAttributes = solidJSX.DOMAttributes
	}
}
