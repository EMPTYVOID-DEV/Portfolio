<script>
	export let ordered;
	export let start;
</script>

{#if ordered}
	<ol {start}><slot /></ol>
{:else}
	<ul><slot /></ul>
{/if}

<style>
	ul,
	ol {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	:is(ol, ul) :global(li) {
		background-color: color-mix(in srgb, var(--primary) 70%, white 0%);
		padding-block: 2px;
		padding-inline: 4px;
		border-radius: 4px;
	}
</style>
