<script lang="ts">
	import Description from '$lib/components/core/description.svelte';
	import Units from '$lib/components/core/units.svelte';
	import { colorsMap, projects, type units } from '$lib/utils/consts';
	import { onMount } from 'svelte';
	let description =
		'Discover a range of projects spanning web development, cyber security, and machine learning. From interactive React and Svelte Kit applications to robust Express backend systems, witness the fusion of innovative technologies';
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
		gap: 40px;
	}
	@media screen and (width < 768px) {
		.projects {
			width: 95%;
		}
	}
</style>
