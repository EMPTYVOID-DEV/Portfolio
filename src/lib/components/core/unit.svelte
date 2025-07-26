<script lang="ts">
	import Tags from './tags.svelte';

	let {
		href,
		date,
		duration = null,
		title,
		description,
		tags
	}: {
		href: string;
		date: Date;
		duration?: string | null;
		title: string;
		description: string;
		tags: string[];
	} = $props();
</script>

<a class="unit" {href}>
	<div class="date">
		<span>{date.toISOString().split('T')[0]}</span>
		{#if duration}
			<span>{duration}</span>
		{/if}
	</div>
	<div class="des">
		<span class="title">{title}</span>
		<p>{description}</p>
		<Tags {tags} />
	</div>
</a>

<style>
	.unit {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px;
		gap: 20px;
		border-bottom: 2px solid var(--primary);
	}

	.date {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.date span {
		color: var(--primary);
		font-weight: 600;
		min-width: 150px;
	}
	.des {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.title {
		color: color-mix(in srgb, var(--primary) 80%, var(--black) 20%);
		text-transform: capitalize;
		font-size: var(--h3);
		font-weight: bold;
		transition: all 0.2s ease;
		position: relative;
		width: fit-content;
	}

	.title::after {
		content: '';
		display: inline-block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 4px;
		transition: all 0.3s ease-in-out;
		background-color: var(--primary);
	}
	.unit:hover .title::after {
		width: 100%;
	}
	.des p {
		color: var(--black);
	}
	@media screen and (width < 768px) {
		.unit {
			flex-direction: column;
			align-items: start;
			gap: 20px;
		}
		.date {
			order: 2;
		}
	}
</style>
