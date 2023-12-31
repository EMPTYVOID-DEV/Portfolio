<script lang="ts">
	import { page } from '$app/stores';
	import CoreMd from '$lib/components/md/coreMd.svelte';
	import { colorsMap } from '$lib/utils/consts.js';
	import { getColorLevels } from '$lib/utils/functions.js';
	import { onMount } from 'svelte';
	export let data;
	onMount(() => {
		const colors = getColorLevels(colorsMap.get('writings'));
		document.documentElement.style.setProperty('--primary', colors[0]);
		document.documentElement.style.setProperty('--primary800', colors[0]);
		document.documentElement.style.setProperty('--primary400', colors[1]);
		document.documentElement.style.setProperty('--primary100', colors[2]);
	});
</script>

<div class="writingMd">
	<div class="md">
		<CoreMd source={data.md} />
	</div>
</div>

<style>
	.writingMd {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-block: 40px;
		gap: 10px;
	}
	.md {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 60%;
	}
	@media screen and (width < 768px) {
		.md {
			width: 95%;
		}
	}
</style>
