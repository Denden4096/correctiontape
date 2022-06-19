const wrapper: HTMLElement = document.getElementById("wrapper")!
wrapper.classList.remove("grabbing")

let pos = { top: 0, left: 0, x: 0, y: 0 }

const grabScroll = (e): void => {
	const dx: number = e.clientX - pos.x
	const dy: number = e.clientY - pos.y

	window.scrollTo({
		left: pos.left - dx,
		top: pos.top - dy,
		// @ts-expect-error https://mzl.la/3MwXs8t
		behavior: "instant"
	})
}

const grabScrollEnd = (): void => {
	wrapper.removeEventListener("mousemove", grabScroll)
	wrapper.removeEventListener("mouseup", grabScrollEnd)

	wrapper.classList.remove("grabbing")
}

const grabScrollStart = (e): void => {
	if (e.button !== 0) return wrapper.addEventListener("mouseup", grabScrollEnd)

	wrapper.classList.add("grabbing")

	pos = {
		left: window.scrollX,
		top: window.scrollY,
		x: e.clientX,
		y: e.clientY
	}

	wrapper.addEventListener("mousemove", grabScroll)
	wrapper.addEventListener("mouseup", grabScrollEnd)
}

export const enableGrabScroll = () => {
	wrapper.addEventListener("mousedown", grabScrollStart)
	wrapper.addEventListener("mouseleave", grabScrollEnd)
}

export const disableGrabScroll = () => {
	wrapper.removeEventListener("mousedown", grabScrollStart)
	wrapper.removeEventListener("mouseleave", grabScrollEnd)
}
