export const animateClass = "animate" as const

export const observer: IntersectionObserver = new IntersectionObserver(
	(entries: IntersectionObserverEntry[]): void =>
		entries.forEach(
			({ isIntersecting, target }: IntersectionObserverEntry): false | void =>
				isIntersecting &&
				!target.classList.contains(animateClass) &&
				target.classList.add(animateClass)
		),
	{
		threshold: 0.25
	}
)

export const [navOpening, setNavOpening] = createSignal<boolean>(false)
