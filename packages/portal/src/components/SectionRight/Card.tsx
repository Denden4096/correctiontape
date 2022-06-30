export const Card = (props: { name: string; url: string; children: JSX.Element }) => {
	const [hovering, setHovering] = createSignal<boolean>(false)

	return (
		<article class="relative w-full landscape:rounded-lg">
			<a
				href={props.url}
				class="landscape:(flex justify-center items-center gap-8) portrait:(grid grid-cols-[50%,1fr] gap-[6vmin]) w-full"
				{...(props.url.indexOf(":") !== -1 && { target: "_blank", rel: "noopener noreferrer" })}
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
				onFocus={() => setHovering(true)}
				onBlur={() => setHovering(false)}
			>
				<div
					class="grid place-items-center w-full bg-vanilla dark:bg-chocolate-dark rounded-lg aspect-square transition-opacity duration-200"
					classList={{
						"landscape:opacity-50": hovering()
					}}
				>
					{props.children}
				</div>
				<div
					class="landscape:(absolute inset-0 z-3 grid place-items-center opacity-0 transition-opacity duration-200) portrait:(flex justify-start items-center)"
					classList={{
						"!landscape:opacity-100": hovering()
					}}
				>
					<div class="inline-flex items-center font-600 !leading-relaxed landscape:(gap-1.5 text-2xl px-6 py-2 m-[10%] text-vanilla bg-chocolate-dark rounded) shadow-card portrait:(gap-0.25em text-4vw)">
						{props.name}
						<Show when={props.url.indexOf(":") !== -1}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
								class="fill-none stroke-current stroke-2 stroke-cap-round stroke-join-round"
							>
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
							</svg>
						</Show>
					</div>
				</div>
			</a>
		</article>
	)
}
