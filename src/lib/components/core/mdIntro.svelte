<script lang="ts">
	export let title: string;
	export let date: Date;
	export let readingTime: number = 0;
	export let isProjects = false;
</script>

<div class="intro">
	<h1 class:project={isProjects}>{title}</h1>
	<div class="timing">
		<span>{date.toISOString().split('T')[0]}</span>
		{#if !isProjects}
			<span>Reading time is about {readingTime} min</span>
		{/if}
	</div>
</div>

<style>
	.intro {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 10px;
		rotate: 1deg;
		transform: skew(6deg);
	}
	h1 {
		color: var(--black);
		position: relative;
		text-transform: capitalize;
		padding: 5px;
		text-shadow: 0;
		transition: all 400ms cubic-bezier(0.39, 0.575, 0.565, 1);
		text-align: center;
	}
	h1:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0%;
		height: 100%;
		background: linear-gradient(
			to right,
			var(--contact) 0%,
			var(--contact) 30%,
			var(--about) 30%,
			var(--about) 60%,
			var(--writings) 60%,
			var(--writings) 100%
		);
		border-radius: 4px;
		z-index: -1;
		width: 8%;
		transition: all 400ms cubic-bezier(0.39, 0.575, 0.565, 1);
	}
	.project::after {
		background: linear-gradient(
			to right,
			var(--contact) 0%,
			var(--contact) 30%,
			var(--writings) 30%,
			var(--writings) 60%,
			var(--projects) 60%,
			var(--projects) 100%
		);
	}
	h1:hover {
		color: var(--white);
		text-shadow:
			2px 2px var(--black),
			4px 4px var(--black),
			6px 6px var(--black);
	}
	h1:hover::after {
		width: 100%;
	}
	.timing {
		display: flex;
		flex-direction: column;
		align-self: flex-end;
		gap: 5px;
	}
	.timing span {
		color: var(--primary);
		font-weight: bold;
	}
</style>
