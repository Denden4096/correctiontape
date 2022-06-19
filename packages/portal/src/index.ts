import { render as styleRender } from "fela-dom"
import { createApp } from "solid-utils"

import { App } from "./App"
import { renderer } from "~/style"

document.querySelector("noscript")?.remove()

createApp(App).mount("#wrapper")

styleRender(renderer)
