<script lang="ts">
	import Description from '$lib/components/core/description.svelte';
	import Units from '$lib/components/core/units.svelte';
	import { colorsMap, projects } from '$lib/utils/consts';
	import { onMount } from 'svelte';
	let description = `Discover a range of projects spanning web development, cyber security, and machine learning. 
	`;

	onMount(() => {
		document.documentElement.style.setProperty('--primary', colorsMap.get('projects'));
	});
</script>

<div class="projects">
	<Description header="My projects" {description} />
	<Units units={projects} />
</div>

<style>
	.projects {
		width: 80%;
		display: flex;
		flex-direction: column;
		padding-left: 5%;
		gap: 30px;
	}
	@media screen and (width < 768px) {
		.projects {
			width: 95%;
		}
	}
</style>
