<script lang="ts">
	import Description from '$lib/components/core/description.svelte';
	import Unit from '$lib/components/core/unit.svelte';
	import Units from '$lib/components/core/units.svelte';
	import { awards, colorsMap } from '$lib/utils/consts';

	let description = `I'm Keskas Aymen, a 22-year-old independent web developer based in Algeria. My passion lies in crafting exceptional user interfaces, utilizing the latest and most advanced tools available, this year i am pursing a master's degree in cybersecurity.`;

	const sortedAwards = awards.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime(); // Sort in descending order
	});

	$effect(() => {
		document.documentElement.style.setProperty('--primary', colorsMap.get('about'));
	});
</script>

<div class="about">
	<Description header="About" {description} />
	<div class="awards">
		<h3>Awards</h3>
		<Units>
			{#each sortedAwards as award}
				<Unit
					date={award.date}
					title={award.title}
					description={award.description}
					tags={award.tags}
					href={award.href}
				/>
			{/each}
		</Units>
	</div>
</div>

<style>
	.about {
		width: 80%;
		display: flex;
		flex-direction: column;
		padding-left: 5%;
		gap: 40px;
	}
	.awards {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.awards h3 {
		color: var(--primary);
		align-self: center;
		padding-bottom: 5px;
		border-bottom: 3px solid var(--primary);
	}

	@media screen and (width < 768px) {
		.about {
			width: 95%;
		}
	}
</style>
