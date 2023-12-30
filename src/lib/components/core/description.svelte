<script lang="ts">
	export let header: string;
	export let description: string = '';
</script>

<div class="description">
	<div class="header">
		<h1>{header}</h1>
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
	.header h1 {
		font-size: var(--huge);
		color: var(--orange);
	}
	.header span {
		width: 20px;
		aspect-ratio: 1/1;
		border-radius: 100%;
		background-color: var(--orange);
	}
	.description p {
		color: var(--black);
	}
</style>
