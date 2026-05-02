<script lang="ts">
	import { base } from '$app/paths';
	import Description from '$lib/components/core/description.svelte';
	import Unit from '$lib/components/core/unit.svelte';
	import Units from '$lib/components/core/units.svelte';
	import { awards, colorsMap } from '$lib/utils/consts';

	let description = `I'm Keskas Aymen, a 24-year-old full-stack engineer based in France. I specialize in building production-grade SaaS platforms — multi-tenant architectures, real-time systems, CI/CD pipelines, and developer tooling. Currently pursuing a Master's in Cloud Computing in Avignon.`;

	const sortedAwards = awards.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime(); // Sort in descending order
	});

	$effect(() => {
		document.documentElement.style.setProperty('--primary', colorsMap.get('about'));
	});
</script>

<div class="about">
	<Description header="About" {description} />

	<div class="cv">
		<h3>CV</h3>
		<div class="cv-list">
			<div class="cv-unit">
				<h4 class="cv-title">Full Stack Engineer</h4>
				<p>
					Backend-focused full stack engineer with hands-on experience building multi-tenant SaaS
					platforms, real-time systems, and developer tooling, from architecture through to
					production.
				</p>
				<div class="cv-actions">
					<a class="btn btn--small" href={`${base}/pdf/full_stack_engineer.pdf`} download>
						Download (English)
					</a>
					<a class="btn btn--small" href={`${base}/pdf/full_stack_engineer_fr.pdf`} download>
						Download (French)
					</a>
				</div>
			</div>

			<div class="cv-unit">
				<h4 class="cv-title">Full Stack Web Developer</h4>
				<p>
					Full stack web developer specializing in modern, performant applications, with end-to-end
					ownership across UI, backend, deployment, and performance optimization.
				</p>
				<div class="cv-actions">
					<a class="btn btn--small" href={`${base}/pdf/full_stack_web_developer.pdf`} download>
						Download (English)
					</a>
					<a class="btn btn--small" href={`${base}/pdf/full_stack_web_developer_fr.pdf`} download>
						Download (French)
					</a>
				</div>
			</div>

			<div class="cv-unit">
				<h4 class="cv-title">Full Stack Engineer (DevOps &amp; Infrastructure)</h4>
				<p>
					Full stack engineer with a DevOps focus, experienced in containerized environments,
					infrastructure automation, and CI/CD pipelines on cloud production systems.
				</p>
				<div class="cv-actions">
					<a class="btn btn--small" href={`${base}/pdf/devops.pdf`} download>
						Download (English)
					</a>
					<a class="btn btn--small" href={`${base}/pdf/devops_fr.pdf`} download>
						Download (French)
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="awards">
		<h3>Awards</h3>
		<Units>
			{#each sortedAwards as award (award.title)}
				<Unit
					date={award.date}
					title={award.title}
					description={award.description}
					tags={award.tags}
					href={award.href}
				/>
			{/each}
		</Units>
	</div>
</div>

<style>
	.about {
		width: 80%;
		display: flex;
		flex-direction: column;
		padding-left: 5%;
		gap: 40px;
	}
	.cv {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.cv h3 {
		color: var(--primary);
		align-self: center;
		padding-bottom: 5px;
		border-bottom: 3px solid var(--primary);
	}

	.cv-list {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.cv-unit {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
		border-bottom: 2px solid var(--primary);
	}

	.cv-title {
		color: color-mix(in srgb, var(--primary) 80%, var(--black) 20%);
		text-transform: capitalize;
		font-size: var(--h3);
		font-weight: bold;
		position: relative;
		width: fit-content;
		margin: 0;
	}

	.cv-title::after {
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

	.cv-unit:hover .cv-title::after {
		width: 100%;
	}

	.cv-unit p {
		margin: 0;
		color: var(--black);
		line-height: 1.4;
	}

	.cv-actions {
		margin-top: 6px;
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 8px 12px;
		border-radius: 10px;
		border: 1px solid color-mix(in srgb, var(--primary) 55%, transparent);
		text-decoration: none;
		color: var(--primary);
		font-weight: 600;
		transition:
			transform 120ms ease,
			background 120ms ease;
	}

	.btn--small {
		padding: 6px 10px;
		border-radius: 9px;
		font-size: 0.9rem;
	}

	.btn:hover {
		background: color-mix(in srgb, var(--primary) 12%, transparent);
		transform: translateY(-1px);
	}

	.awards {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.awards h3 {
		color: var(--primary);
		align-self: center;
		padding-bottom: 5px;
		border-bottom: 3px solid var(--primary);
	}

	@media screen and (width < 768px) {
		.about {
			width: 95%;
		}
	}
</style>
