<script>
	import { colorsMap } from '$lib/utils/consts';
	import { onMount } from 'svelte';

	onMount(() => {
		document.documentElement.style.setProperty('--primary', colorsMap.get('skills'));
	});
</script>

<h1>skills</h1>
