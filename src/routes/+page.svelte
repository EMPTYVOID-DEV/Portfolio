<script lang="ts">
	import Card from '$lib/components/core/card.svelte';
	import TextWriting from '$lib/components/core/textWriting.svelte';
	import { quartInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { colorsMap } from '$lib/utils/consts';
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
		document.documentElement.style.setProperty('--primary', colorsMap.get('home'));
	});
</script>

<div class="home">
	{#if visible}
		<div class="cards">
			{#each cards as card, idx}
				<a
					href="/{card.name}"
					in:fly|global={{
						duration: 1000,
						delay: 100 * idx,
						x: -100 * (idx + 1),
						y: -100 * (idx + 1),
						easing: quartInOut
					}}><Card {...card} /></a
				>
			{/each}
		</div>
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
		letter-spacing: 2px;
		color: var(--primary);
		text-align: center;
	}
	@media screen and (width<768px) {
		.home {
			padding-bottom: 20px;
		}
		.quote {
			width: 100%;
		}
	}
</style>
