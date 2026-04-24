<script lang="ts">
	import Description from '$lib/components/core/description.svelte';
	import Unit from '$lib/components/core/unit.svelte';
	import Units from '$lib/components/core/units.svelte';
	import { colorsMap, projects } from '$lib/utils/consts';

	let description = `Discover a range of projects spanning web development, cloud and cyber security.`;

	$effect(() => {
		document.documentElement.style.setProperty('--primary', colorsMap.get('projects'));
	});

	const sortedProjects = [...projects].sort((a, b) => {
		// 1) Sort by finish date (desc). If a project has no endDate, treat it as finishing on its start date.
		const endA = (a.endDate ?? a.date).getTime();
		const endB = (b.endDate ?? b.date).getTime();
		const endDiff = endB - endA;
		if (endDiff !== 0) return endDiff;

		// 2) Tie-breaker: start date (desc)
		return b.date.getTime() - a.date.getTime();
	});
</script>

<div class="projects">
	<Description header="My projects" {description} />
	<Units>
		{#each sortedProjects as project}
			<Unit
				date={project.date}
				endDate={project.endDate}
				title={project.title}
				description={project.description}
				tags={project.tags}
				href={`/projects/${project.id}`}
			/>
		{/each}
	</Units>
</div>

<style>
	.projects {
		width: 80%;
		display: flex;
		flex-direction: column;
		padding-left: 5%;
		gap: 30px;
	}
	@media screen and (width < 768px) {
		.projects {
			width: 95%;
		}
	}
</style>
