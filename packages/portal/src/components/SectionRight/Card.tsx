export const Card = (props: { name: string; url: string; children: JSX.Element }) => {
	const [hovering, setHovering] = createSignal<boolean>(false)

	return (
		<article
			class={style({
				position: "relative",
				width: "100%",
				borderRadius: "0.5rem"
			})}
		>
			<a
				href={props.url}
				class={style({
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: "2rem",
					width: "100%",

					"@media (min-aspect-ratio: 4/3)": {
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}
				})}
				{...(props.url.indexOf(":") !== -1 && { target: "_blank", rel: "noopener noreferrer" })}
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
			>
				<div
					class={style({
						display: "grid",
						placeItems: "center",
						width: "100%",
						backgroundColor: "#f4ead1",
						borderRadius: "0.5rem",
						aspectRatio: 1,
						transition: "opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
					})}
					classList={{
						[style({
							opacity: 0.5
						})]: hovering()
					}}
				>
					{props.children}
				</div>
				<div
					class={style({
						"@media not (min-aspect-ratio: 4/3)": {
							display: "flex",
							justifyContent: "left",
							alignItems: "center"
						},

						"@media (min-aspect-ratio: 4/3)": {
							position: "absolute",
							inset: 0,
							zIndex: 3,
							display: "grid",
							placeItems: "center",
							opacity: 0,
							transition: "opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
						}
					})}
					classList={{
						[style({
							opacity: "1!important"
						})]: hovering()
					}}
				>
					<div
						class={style({
							display: "inline-flex",
							gap: "0.3em",
							alignItems: "center",
							fontSize: "3rem",
							fontWeight: 600,

							"@media (min-aspect-ratio: 4/3)": {
								fontSize: "1.5rem",
								padding: "0.5em 1em",
								margin: "10%",
								color: "#f4ead1",
								backgroundColor: "#5a3428",
								borderRadius: "0.25rem"
							}
						})}
					>
						{props.name}
						<Show when={props.url.indexOf(":") !== -1}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
								class={style({
									fill: "none",
									stroke: "currentcolor",
									strokeWidth: "0.125rem",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})}
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
