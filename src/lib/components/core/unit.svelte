<script lang="ts">
	import Tags from './tags.svelte';

	let {
		href,
		date,
		endDate = null,
		showEnd = true,
		showStartLabel = true,
		title,
		description,
		tags
	}: {
		href: string;
		date: Date;
		endDate?: Date | null;
		showEnd?: boolean;
		showStartLabel?: boolean;
		title: string;
		description: string;
		tags: string[];
	} = $props();

	function formatDate(d: Date): string {
		// Example: "Jan 2025"
		return new Intl.DateTimeFormat(undefined, { month: 'short', year: 'numeric' }).format(d);
	}

	function isSameDay(a: Date, b: Date): boolean {
		return (
			a.getFullYear() === b.getFullYear() &&
			a.getMonth() === b.getMonth() &&
			a.getDate() === b.getDate()
		);
	}

	function endLabel(d: Date | null): string {
		// Show "Present" if end is not provided or if it equals "today" (same calendar day)
		if (!d) return 'Present';
		const today = new Date();
		if (isSameDay(d, today)) return 'Present';
		return formatDate(d);
	}

	let shouldShowEnd = $derived(showEnd && !!endDate);
</script>

<a class="unit" {href}>
	<div class="date">
		{#if showStartLabel}
			<div class="date-row">
				<span class="label">Start</span>
				<span class="value">{formatDate(date)}</span>
			</div>
		{:else}
			<div class="date-row single">
				<span class="value">{formatDate(date)}</span>
			</div>
		{/if}

		{#if shouldShowEnd}
			<div class="date-row">
				<span class="label">End</span>
				<span class="value">{endLabel(endDate)}</span>
			</div>
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
		gap: 0.35rem;
		min-width: 180px;
	}

	.date-row {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		justify-content: space-between;
		gap: 12px;
		padding: 2px 0;
	}

	.date-row.single {
		justify-content: flex-start;
	}

	.label {
		color: color-mix(in srgb, var(--primary) 70%, var(--black) 30%);
		font-weight: 700;
		letter-spacing: 0.02em;
		font-size: 0.9rem;
		text-transform: uppercase;
	}

	.value {
		color: var(--primary);
		font-weight: 700;
		white-space: nowrap;
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
			min-width: auto;
			width: 100%;
		}
		.date-row {
			justify-content: flex-start;
		}
	}
</style>
