<script lang="ts">
	import type { units } from '$lib/utils/types';
	import { compareDates } from '$lib/utils/functions';
	export let units: units = [];
	units = units.sort((a, b) => compareDates(a.date, b.date));
</script>

<div class="units">
	{#each units as unit}
		<a class="unit" href={unit.href} target="_blank">
			<span class="date">{unit.date.month}-{unit.date.day}-{unit.date.year}</span>
			<div class="des">
				<h3>{unit.title}</h3>
				<p>{unit.description}</p>
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
		border-bottom: 2px solid var(--black);
		gap: 20px;
	}
	.unit:hover {
		border: 2px solid var(--black);
		border-radius: 4px;
	}
	.date {
		color: var(--orange);
		min-width: 150px;
	}
	.des {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.des h3 {
		color: color-mix(in srgb, var(--orange) 80%, var(--black) 20%);
		text-transform: capitalize;
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
