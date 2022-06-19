import { createApp } from "solid-utils"

import { App } from "./App"
import { registerServiceWorker } from "./registerServiceWorker"
import { enableGrabScroll } from "./setupGrabScroll"
import { getLocale } from "~/locales"
import { globalStyles, renderStatic, renderer, styleRender } from "~/styles"

document.querySelector("html")?.setAttribute("lang", getLocale())

document.querySelector("noscript")?.remove()

createApp(App).mount("#wrapper")

for (const [selector, style] of Object.entries(globalStyles)) renderStatic(style, selector)

styleRender(renderer)

enableGrabScroll()

registerServiceWorker().catch((e) => {
	throw new Error(e)
})
