<script lang="ts">
	import { quadInOut } from 'svelte/easing';

	function write(node: HTMLSpanElement, { speed }: { speed: number }) {
		const child = node.childNodes.item(0);
		const text = child.textContent;
		const duration = (text.length / speed) * 150;
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

<div transition:write={{ speed: 2 }}>
	<slot />
</div>
