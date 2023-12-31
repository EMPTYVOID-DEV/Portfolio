<script lang="ts">
	import Description from '$lib/components/core/description.svelte';
	import { colorsMap } from '$lib/utils/consts';
	import { onMount } from 'svelte';
	let description =
		'Here you can see all my skills in frontend development,backend development , cyber security and machine learning.';
	onMount(() => {
		document.documentElement.style.setProperty('--primary', colorsMap.get('skills'));
	});
</script>

<div class="skills">
	<Description header="Skills" {description} />
</div>

<style>
	.skills {
		width: 80%;
		display: flex;
		flex-direction: column;
		gap: 40px;
		padding-left: 5%;
	}
</style>
