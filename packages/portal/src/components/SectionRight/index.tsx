import { Card } from "./Card"

const cards: Readonly<
	{
		name: string
		url: string
		card: string | JSX.Element
	}[]
> = [
	{
		name: "Periodic Table (Designer’s ver.)",
		url: "/periodic-table/",
		card: "periodic-table.png"
	},
	{
		name: "GitHub",
		url: "https://github.com/Denden4096/correctiontape",
		card: (
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
		)
	},
	{
		name: "Twitter",
		url: "https://twitter.com/Denden4096",
		card: (
			<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
		)
	},
	{
		name: "YouTube",
		url: "https://www.youtube.com/c/DendenTech",
		card: (
			<>
				<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
				<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
			</>
		)
	},
	{
		name: "Contact",
		url: "mailto:hello@correctiontape.me",
		card: (
			<>
				<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
				<polyline points="22,6 12,13 2,6" />
			</>
		)
	}
]

export const SectionRight = (): JSX.Element => (
	<main class="relative flex flex-col gap-[2.5vmax] p-[2.5vmax] text-vanilla bg-chocolate-dark dark:(text-chocolate-dark bg-vanilla) overflow-y-scroll scrollbar-hide">
		<For each={cards}>
			{(props) => (
				<Card
					name={props.name}
					url={props.url}
				>
					{typeof props?.card === "string" ? (
						<img
							src={`/assets/works/${props.card}`}
							alt={props.name}
							class="w-full rounded-lg"
						/>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="35%"
							height="35%"
							viewBox="0 0 24 24"
							class="fill-none stroke-chocolate-shade dark:stroke-vanilla stroke-2 stroke-cap-round stroke-join-round"
						>
							{props.card}
						</svg>
					)}
				</Card>
			)}
		</For>
	</main>
)
