import { createApp } from "solid-utils"

import { App } from "./App"

document.querySelector("noscript")?.remove()

createApp(App).mount("#wrapper")
