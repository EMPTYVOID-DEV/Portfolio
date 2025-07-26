<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import BackArrow from '$lib/components/icons/backArrow.svelte';
</script>

<div class="nav">
	<a class="logo" href="/">
		<h3>KESKAS</h3>
		<h3>AYMEN</h3>
	</a>
	{#if $page.url.pathname != '/'}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span
			class="back"
			onclick={() => {
				let paths = $page.url.pathname.split('/');
				paths = paths.filter((el) => el != '');
				paths.pop();
				goto('/' + paths.join('/'));
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
		background-color: color-mix(in srgb, var(--primary) 50%, white 0%);
	}
	.logo {
		display: flex;
		flex-direction: column;
		font-family: var(--defaultFont);
		letter-spacing: 2px;
		color: var(--primary);
		cursor: pointer;
	}
</style>
