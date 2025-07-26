<script lang="ts">
	import Description from '$lib/components/core/description.svelte';
	import Unit from '$lib/components/core/unit.svelte';
	import Units from '$lib/components/core/units.svelte';
	import { colorsMap, writings } from '$lib/utils/consts';

	let description = `Embark on a journey through the dynamic landscape of web development , cloud and cyber security.`;

	$effect(() => {
		document.documentElement.style.setProperty('--primary', colorsMap.get('writings'));
	});

	const sortedWritings = writings.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});
</script>

<div class="writings">
	<Description header="My writings" {description} />
	<Units>
		{#each sortedWritings as writing}
			<Unit
				date={writing.date}
				title={writing.title}
				description={writing.description}
				tags={writing.tags}
				href={`/writings/${writing.id}`}
			/>
		{/each}
	</Units>
</div>

<style>
	.writings {
		width: 80%;
		display: flex;
		flex-direction: column;
		padding-left: 5%;
		gap: 40px;
	}

	@media screen and (width < 768px) {
		.writings {
			width: 95%;
		}
	}
</style>
