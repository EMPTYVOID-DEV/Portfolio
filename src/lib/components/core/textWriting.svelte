<script lang="ts">
	import { quadInOut } from 'svelte/easing';
	export let speed = 2;
	export let durationPerWord = 120;
	function write(node: HTMLSpanElement) {
		const child = node.childNodes.item(0);
		const text = child.textContent;
		const duration = (text.length / speed) * durationPerWord;
		return {
			duration,
			easing: quadInOut,
			tick: (t: number) => {
				const currentIndex = Math.floor(t * text.length);
				child.textContent = text.substring(0, currentIndex);
			}
		};
	}
</script>

<div transition:write>
	<slot />
</div>
