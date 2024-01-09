<script lang="ts">
	import type { units } from '$lib/utils/consts';
	import { compareDates } from '$lib/utils/functions';
	import Tags from './tags.svelte';
	export let units: units = [];
	units = units.sort((a, b) => compareDates(a.date, b.date));
</script>

<div class="units">
	{#each units as unit}
		<a class="unit" href={unit.href}>
			<span class="date">{unit.date.month}-{unit.date.day}-{unit.date.year}</span>
			<div class="des">
				<span class="title">{unit.title}</span>
				<p>{unit.description}</p>
				<Tags tags={unit.tags} />
			</div>
		</a>
	{/each}
</div>

<style>
	.units {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding-bottom: 20px;
	}
	.unit {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px;
		gap: 20px;
		border-bottom: 2px solid var(--primary);
	}
	.date {
		color: var(--primary);
		font-weight: 600;
		min-width: 150px;
	}
	.des {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.title {
		color: color-mix(in srgb, var(--primary) 80%, var(--black) 20%);
		text-transform: capitalize;
		font-size: var(--h3);
		font-weight: bold;
		transition: all 0.2s ease;
		position: relative;
		width: fit-content;
	}

	.title::after {
		content: '';
		display: inline-block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 4px;
		transition: all 0.3s ease-in-out;
		background-color: var(--primary);
	}
	.unit:hover .title::after {
		width: 100%;
	}
	.des p {
		color: var(--black);
	}
	@media screen and (width < 768px) {
		.unit {
			flex-direction: column;
			align-items: start;
			gap: 20px;
		}
		.date {
			order: 2;
		}
	}
</style>
