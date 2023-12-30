<script lang="ts">
	import Description from '$lib/components/core/description.svelte';
	import Units from '$lib/components/core/units.svelte';
	import type { units } from '$lib/utils/types';
	let description = `
Embark on a journey through the dynamic landscape of web development, cyber security, and machine learning with a focus on React and Svelte. As an Indie creator, I share insights into crafting seamless user interfaces, securing digital landscapes, and applying machine learning in real-world scenarios`;
	let writings: units = [
		{
			title: 'malware evasion and persistence techniques',
			date: { day: 21, month: 'Oct', year: 2023 },
			description:
				'In this writing we discuss how malware evade detection and persist in your system.',
			href: '/writings/malware-persistant-evasion'
		}
	];
</script>

<div class="writings">
	<Description header="My writings" {description} />
	<Units units={writings} />
</div>

<style>
	.writings {
		width: 80%;
		display: flex;
		flex-direction: column;
		padding-left: 5%;
		gap: 40px;
	}
</style>
