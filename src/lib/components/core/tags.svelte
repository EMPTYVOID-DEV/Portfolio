<script lang="ts">
	let { tags }: { tags: string[] } = $props();
</script>

<div class="tags">
	{#each tags as tag}
		<span class="tag">{tag}</span>
	{/each}
</div>

<style>
	.tags {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
	}
	.tag {
		color: var(--black);
		font-weight: 500;
		padding-inline: 14px;
		padding-block: 5px;
		text-align: center;
		border-radius: 22px;
		text-transform: capitalize;
		background-color: color-mix(in srgb, var(--primary) 60%, white 0%);
	}
</style>
