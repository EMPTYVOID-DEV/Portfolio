<script lang="ts">
	export let depth: number;
	export let raw: string;
	export let text;
	let id = text
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[@#:\$%\^&,\.\/*_?]/g, '');
</script>

{#if depth === 1}
	<h1 class="header" {id}><slot /></h1>
{:else if depth === 2}
	<h2 class="header" {id}><slot /></h2>
{:else if depth === 3}
	<h3 class="header"><slot /></h3>
{:else if depth === 4}
	<h4 class="header" {id}><slot /></h4>
{:else if depth === 5}
	<h5 class="body" {id}><slot /></h5>
{:else if depth === 6}
	<h6 class="body" {id}><slot /></h6>
{:else}
	{raw}
{/if}

<style>
	.header,
	.body {
		color: var(--primary);
	}
	.body {
		font-size: var(--body);
		font-family: var(--font);
		font-weight: bold;
	}
	h1 {
		font-size: var(--mh1);
		margin-block: 10px; /* Adjust the margin as needed */
	}

	h2 {
		font-size: var(--mh2);
		margin-block: 8px; /* Adjust the margin as needed */
	}

	h3 {
		font-size: var(--mh3);
		margin-block: 6px; /* Adjust the margin as needed */
	}

	h4 {
		font-size: var(--mh4);
		margin-block: 4px; /* Adjust the margin as needed */
	}
</style>
