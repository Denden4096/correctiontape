const motto = "Learn from the past, Create something new."
const mottoSplitted = motto.split(" ")

export const Motto = (): JSX.Element => (
	<h1 class="max-w-384 w-full portrait:(pt-24 pb-16) text-verycool font-800 leading-snug tracking-tighter">
		<For each={mottoSplitted}>
			{(word: string, i: () => number): JSX.Element => (
				<>
					<span class="relative inline-block overflow-clip pr-[0.03em] pb-[0.07ex] whitespace-nowrap">
						<For each={word.split("")}>
							{(char: string, j: () => number): JSX.Element => (
								<span
									class="inline-block whitespace-nowrap translate-y-[1.3em] translate-y-[1lh] animate-verycool"
									style={{
										"animation-delay": `${i() * 150 + j() * 75}ms`
									}}
									aria-hidden="true"
								>
									{char}
								</span>
							)}
						</For>
					</span>{" "}
				</>
			)}
		</For>
		<div class="sr-only">{motto}</div>
	</h1>
)
