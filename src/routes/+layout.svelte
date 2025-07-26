<script lang="ts">
	import Navbar from '$lib/components/core/navbar.svelte';
	import '../app.css';
</script>

<div class="main">
	<Navbar />
	<slot />
</div>

<style>
	.main {
		width: 100vw;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 30px;
		background-color: var(--white);
	}
</style>
