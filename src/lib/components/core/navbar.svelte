<script>
	import { page } from '$app/stores';
	import BackArrow from '$lib/components/icons/backArrow.svelte';
</script>

<div class="nav">
	<a class="logo" href="/">
		<h3>EMPTY</h3>
		<h3>VOID</h3>
	</a>
	{#if $page.url.pathname != '/'}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span
			class="back"
			on:click={() => {
				window.history.back();
			}}
		>
			<BackArrow />
		</span>
	{/if}
</div>

<style>
	.nav {
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: 2%;
	}
	.back {
		padding: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 1px solid var(--black);
		cursor: pointer;
	}
	.back:hover {
		background-color: var(--orange);
	}
	.logo {
		display: flex;
		flex-direction: column;
		font-family: var(--defaultFont);
		letter-spacing: 2px;
		color: var(--orange);
		cursor: pointer;
	}
	.logo:hover {
		color: transparent;
		-webkit-text-stroke: 2px var(--orange);
	}
</style>
