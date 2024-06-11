<script lang="ts">
	import Card from '$lib/components/core/card.svelte';
	import Description from '$lib/components/core/description.svelte';
	import Tabs from '$lib/components/core/tabs.svelte';
	import Frontend from '$lib/components/icons/svelteIcon.svelte';
	import Backend from '$lib/components/icons/nodeIcon.svelte';
	import General from '$lib/components/icons/docker.svelte';
	import { colorsMap, skills } from '$lib/utils/consts';
	import { onMount } from 'svelte';
	let description = `I'm a seasoned developer, handling both frontend and backend tasks. On the frontend, I work with React and Svelte(kit), styling with Tailwind CSS, and collaborating on UI designs with Figma. On the backend, I specialize in Node.js, Express, Drizzle, and Lucia-auth. I'm comfortable with both SQL (PostgreSQL) and NoSQL (MongoDB) databases. I use TypeScript for type safety, Puppeteer for web automation, and Zod for schema validation. Plus, I'm skilled in Python, Linux, Git, Docker, and pnpm workspaces. And yeah, I'm diving into cyber-security too.
	`;
	let activeTab = 0;
	onMount(() => {
		document.documentElement.style.setProperty('--primary', colorsMap.get('skills'));
	});
	const tabs = [
		{ title: 'Frontend', icon: Frontend },
		{ title: 'Backend', icon: Backend },
		{ title: 'General', icon: General }
	];
</script>

<div class="skills">
	<Description header="Skills" {description} />
	<Tabs bind:activeTab {tabs} />
	<div class="cards">
		{#each skills.get(tabs[activeTab].title) as skill}
			<Card name={skill} src={`/images/skills/${skill}.svg`} --imgSize="60%" />
		{/each}
	</div>
</div>

<style>
	.skills {
		width: 80%;
		display: flex;
		flex-direction: column;
		gap: 40px;
		padding-left: 5%;
		padding-bottom: 40px;
	}

	.cards {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(6, max-content);
		justify-content: center;
		gap: 2.5%;
	}

	@media screen and (width<768px) {
		.skills {
			width: 95%;
		}
		.cards {
			grid-template-columns: repeat(3, max-content);
			--width: 105px;
		}
	}
</style>
