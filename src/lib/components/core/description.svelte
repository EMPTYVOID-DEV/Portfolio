<script lang="ts">
	export let header: string;
	export let description: string = '';
	export let size = 1;
</script>

<div class="description">
	<div class="header">
		<span style="font-size: var(--h{size});">{header}</span>
		<span></span>
	</div>
	<p>{description}</p>
</div>

<style>
	.description {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.header {
		display: flex;
		gap: 10px;
		align-items: center;
	}
	.header span:first-child {
		color: var(--primary);
		text-transform: capitalize;
		font-weight: bold;
	}
	.header span:last-child {
		width: 20px;
		aspect-ratio: 1/1;
		border-radius: 100%;
		background-color: var(--primary);
	}
	.description p {
		color: var(--black);
	}
</style>
