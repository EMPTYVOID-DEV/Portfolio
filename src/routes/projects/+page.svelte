<script lang="ts">
	import Description from '$lib/components/core/description.svelte';
	import Units from '$lib/components/core/units.svelte';
	import type { units } from '$lib/utils/types';
	let description = `
Discover a range of projects spanning web development, cyber security, and machine learning. From interactive React and Svelte Kit applications to robust Express backend systems, witness the fusion of innovative technologies`;
	let projects: units = [
		{
			title: 'i3 Setup',
			date: { day: 5, month: 'Dec', year: 2023 },
			description:
				'This is package used to automate the configuration for i3 tailing window manager with polybar,rofi,betterlockscreen,kitty. ',
			href: '/projects/i3-setup'
		},
		{
			title: 'altron',
			date: { day: 19, month: 'Nov', year: 2023 },
			description:
				'Altron is a robust and versatile rich text editor designed for Svelte applications. It empowers users to effortlessly create, edit, and manage structured text content by seamlessly incorporating various blocks with associated dat',
			href: '/projects/altron'
		},
		{
			title: 'svelte docs maker',
			date: { day: 20, month: 'Sep', year: 2023 },
			description:
				'Sveltedocsmaker is a package that simplifies the process of building your documentation route using Svelte components',
			href: '/projects/sveltedocsmaker'
		},
		{
			title: 'create split app',
			date: { day: 6, month: 'Sep', year: 2023 },
			description:
				'The Split Stack CLI Tool is a command-line utility designed to streamline the process of initializing a project that combines bleeding edge technologies around sveltekit',
			href: '/projects/create-split-app'
		}
	];
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
</style>
