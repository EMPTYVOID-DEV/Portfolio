<script lang="ts">
	import Card from '$lib/components/core/card.svelte';
	import Description from '$lib/components/core/description.svelte';
	import { colorsMap } from '$lib/utils/consts';
	import { onMount } from 'svelte';
	const skills: {
		type: 'frontend' | 'backend' | 'general';
		desc: string;
		current: number;
		skills: string[];
	}[] = [
		{
			type: 'frontend',
			desc: `I am a frontend developer with expertise in SvelteKit and React, creating dynamic and responsive user interfaces. I use Tailwind CSS for stylish designs and Figma for seamless collaboration between design and development teams. I optimize workflows with Vite and pnpm for rapid project setups.`,
			current: 0,
			skills: ['sveltekit', 'react', 'tailwind', 'figma', 'vite', 'pnpm']
		},
		{
			type: 'backend',
			desc: `I specialize in backend development, particularly using Node.js, Express, and Prisma to build robust server-side applications. Proficient in managing databases, I work with PostgreSQL and MongoDB to create efficient data storage solutions. My expertise extends to Lucía auth, where I excel in developing modular and maintainable backend architectures, ensuring secure authentication processes.`,
			current: 0,
			skills: ['nodejs', 'postgresql', 'mongodb', 'express', 'prisma', 'lucia']
		},
		{
			type: 'general',
			desc: `I am proficient in TypeScript for robust development, Puppeteer for automated browser testing, and Zod for efficient runtime type checking. Additionally, I have strong skills in Python for scripting and backend development, Linux for server administration, Git for version control, and Docker for containerization, ensuring collaborative, organized, and scalable code development.`,
			current: 0,
			skills: ['typescript', 'puppeteer', 'zod', 'python', 'linux', 'git', 'docker']
		}
	];
	let description = `Welcome to my skill set! I bring a versatile blend of frontend and backend expertise to the table.`;
	onMount(() => {
		document.documentElement.style.setProperty('--primary', colorsMap.get('skills'));
		const skillsTimer = setInterval(() => {
			skills[0].current = (skills[0].current + 1) % skills[0].skills.length;
			skills[1].current = (skills[1].current + 1) % skills[1].skills.length;
			skills[2].current = (skills[2].current + 1) % skills[2].skills.length;
		}, 1800);
		return () => {
			clearInterval(skillsTimer);
		};
	});
</script>

<div class="skills">
	<Description header="Skills" {description} />
	<div class="categories">
		{#each skills as skillSet, idx (skillSet.type)}
			<div class="category" id={skillSet.type}>
				<Description header={skillSet.type} size={3} description={skills[idx].desc} />
				<div class="showenSkill">
					<Card
						src={`/images/${skills[idx].skills[skills[idx].current]}.svg`}
						width={120}
						name={skills[idx].skills[skills[idx].current]}
					/>
				</div>
			</div>
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
	.categories {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
	.category {
		width: 70%;
		display: flex;
		align-items: center;
		gap: 20px;
	}
	#backend {
		align-self: flex-end;
	}

	@media screen and (width<768px) {
		.skills {
			width: 95%;
		}
		.category {
			width: 100%;
			flex-direction: column;
		}
	}
</style>
