<script lang="ts">
	export let name: string;
	export let src: string;
	export let contrast: number = 1;
</script>

<div class="card">
	<img {src} alt={name} style="filter: contrast({contrast});" />
	<span>{name}</span>
</div>

<style>
	.card {
		width: 150px;
		aspect-ratio: 3/4;
		background-color: transparent;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		padding-block: 5px;
		border-radius: 6px;
		cursor: pointer;
	}
	.card:hover {
		border: 2px solid var(--primary);
		box-shadow: 4px 4px 10px var(--primary);
	}
	.card img {
		width: 90%;
		aspect-ratio: 1/1;
		object-position: center;
		object-fit: contain;
	}
	.card span {
		text-transform: capitalize;
		color: var(--black);
	}
	@media screen and (width < 768px) {
		.card {
			width: 120px;
		}
	}
</style>
