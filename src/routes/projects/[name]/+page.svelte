<script lang="ts">
	import MdIntro from '$lib/components/core/mdIntro.svelte';
	import CoreMd from '$lib/components/md/coreMd.svelte';
	import { colorsMap } from '$lib/utils/consts.js';
	import { getColorLevels } from '$lib/utils/functions.js';
	import { onMount } from 'svelte';
	export let data;
	onMount(() => {
		const colors = getColorLevels(colorsMap.get('projects'));
		document.documentElement.style.setProperty('--primary', colors[0]);
		document.documentElement.style.setProperty('--primary800', colors[0]);
		document.documentElement.style.setProperty('--primary400', colors[1]);
		document.documentElement.style.setProperty('--primary100', colors[2]);
	});
</script>

<div class="projectMd">
	<div class="projectIntro">
		<MdIntro isProjects={true} title={data.info.title} date={data.info.date} />
	</div>

	<div class="md">
		<CoreMd source={data.md} />
	</div>
</div>

<style>
	.projectMd {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 120px;
		padding-bottom: 40px;
		gap: 40px;
	}
	.md {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 60%;
	}

	.projectIntro {
		width: 60%;
	}
	@media screen and (width < 768px) {
		.md {
			width: 95%;
		}

		.projectIntro {
			width: 95%;
		}
	}
</style>
