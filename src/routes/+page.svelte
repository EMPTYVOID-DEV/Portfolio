<script lang="ts">
	import Card from '$lib/components/core/card.svelte';
	import TextWriting from '$lib/components/core/textWriting.svelte';
	import { onMount } from 'svelte';
	let quote =
		'A famous explorer once said that the extraordinary is in what we do, not who we are.';
	let cards: { name: string; src: string; contrast?: number }[] = [
		{
			name: 'about',
			src: '/images/about.png'
		},
		{
			name: 'skills',
			src: '/images/skill2.png',
			contrast: 20
		},
		{
			name: 'projects',
			src: '/images/project.png',
			contrast: 20
		},
		{
			name: 'writings',
			src: '/images/blog.png'
		},
		{
			name: 'contact',
			src: '/images/contact.png'
		}
	];
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<div class="home">
	<div class="cards">
		{#each cards as card}
			<a href="/{card.name}"><Card {...card} /></a>
		{/each}
	</div>
	{#if visible}
		<TextWriting>
			<h4 class="quote">{quote}</h4>
		</TextWriting>
	{/if}
</div>

<style>
	.home {
		width: 100%;
		height: fit-content;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 40px;
		padding-inline: 10px;
	}
	.cards {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
	}
	.quote {
		max-width: 600px;
		color: var(--orange);
		text-align: center;
	}
</style>
