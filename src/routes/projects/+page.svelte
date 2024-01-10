<script lang="ts">
	import Description from '$lib/components/core/description.svelte';
	import Units from '$lib/components/core/units.svelte';
	import ListMdHandler from '$lib/components/md/ListMdHandler.svelte';
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
	<div class="details">
		<h3>Challenge system?</h3>
		<p>
			To put it simply each month i create a new personal project.Each project needs to respect
			these constraints :
		</p>
		<ol>
			<li>1- It needs to be Open source</li>
			<li>2- Take no more than a month to complet</li>
			<li>3- It needs to be unique (certaintly no app clones)</li>
		</ol>
	</div>
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
	.details {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.details h3 {
		color: var(--primary);
	}
	.details p {
		color: var(--black);
		white-space: normal;
	}
	.details ol {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.details ol li {
		color: var(--black);
		padding: 5px;
		border-radius: 4px;
	}
	.details ol li {
		background-color: color-mix(in srgb, var(--primary) 70%, white 0%);
	}
	@media screen and (width < 768px) {
		.projects {
			width: 95%;
		}
	}
</style>
