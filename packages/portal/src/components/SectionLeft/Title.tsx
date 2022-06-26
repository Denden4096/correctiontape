export const Title = (): JSX.Element => (
	<nav class="landscape:(fixed bottom-3) portrait:(absolute top-3) left-0 flex justify-start items-center landscape:w-[80%] portrait:(w-full h-16) px-4vw py-2">
		<div class="flex gap-4 items-baseline overflow-clip font-500">
			<div class="landscape:text-2xl portrait:text-xl font-600 motion-safe:animate-nav-appear !animate-delay-[2.35s]">
				correctiontape / portal
			</div>
			<div class="portrait:hidden tracking-tight motion-safe:animate-nav-appear !animate-delay-[2.5s]">
				A <s>correction</s> collection of my personal projects.
			</div>
		</div>
	</nav>
)
