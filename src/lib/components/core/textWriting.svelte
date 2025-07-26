<script lang="ts">
	import type { Snippet } from 'svelte';
	import { quadIn } from 'svelte/easing';

	let {
		speed = 2,
		children,
		durationPerWord = 125
	}: {
		children:Snippet,
		speed?: number;
		durationPerWord?: number;
	} = $props();

	function write(node: HTMLSpanElement) {
		const child = node.childNodes.item(0);
		const text = child.textContent;
		const duration = (text.length / speed) * durationPerWord;
		return {
			duration,
			easing: quadIn,
			tick: (t: number) => {
				const currentIndex = Math.floor(t * text.length);
				child.textContent = text.substring(0, currentIndex);
			}
		};
	}
</script>

<div transition:write>
	{@render children()}
</div>
