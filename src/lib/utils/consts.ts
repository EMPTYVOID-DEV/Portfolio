import type { ThemeInput } from 'shiki';
import type { Routes, Unit } from './types';

export const colorsMap = new Map<Routes, string>([
	['home', '#111111'],
	['about', '#cc3300'],
	['projects', '#337ab7'],
	['writings', '#ef7190'],
	['contact', '#05d69e']
]);

export let awards: Unit[] = [
	{
		id: 1,
		date: new Date('2023-06-05'),
		title: "Bachelor's degree , Computer science",
		description:
			'I got Bachelors degreen in computer science at ferhat abbas university with score equal to 16.18.',
		href: 'https://fsciences.univ-setif.dz/',
		tags: ['Bachelors', 'computer science']
	},
	{
		id: 2,
		date: new Date('2024-11-01'),
		title: 'Huawi ICT competition fourth place',
		description:
			'I got fourth place in the Huawi ICT competition, by developing gstore self-hosted storage solution.',
		href: 'https://www.linkedin.com/posts/meriem-toumi_huaweidevelopercompetition-huaweialgaezrie-activity-7275860049204314112-9vLm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEA_SawBj_fNKRBGz2a8VkRyVlonvwHgmxY',
		tags: ['Huawi', 'ICT', 'competition', 'cloud', 'gstore']
	},
	{
		id: 3,
		date: new Date('2025-07-16'),
		title: "Master's degree , Cyber security",
		description: 'I got Masters degreen in computer science at ferhat abbas university.',
		href: 'https://fsciences.univ-setif.dz/',
		tags: ['Masters', 'cyber security']
	}
];

export const projects: Unit[] = [
	{
		id: 1,
		title: 'Altron',
		date: new Date('2023-11-05'),
		duration: '1 year',
		description:
			'A robust and versatile rich text editor for Svelte applications. It enables users to effortlessly manage structured text content.',
		tags: ['svelte', 'rich text editor', 'npm package']
	},
	{
		id: 2,
		title: 'The_tale',
		date: new Date('2024-03-24'),
		duration: '3 months',
		description:
			'A platform enabling people to collaborate on writings, controlling structure, colors, fonts, references, and more.',
		tags: ['sveltekit', 'lucia', 'postgresql', 'drizzle', 'zero-ui']
	},
	{
		id: 3,
		title: 'GStore',
		description: 'A self-hosted storage solution',
		date: new Date('2024-09-01'),
		duration: '3 months',
		tags: ['honojs', 'sveltekit', 'bunjs', 'typescript', 'postgres', 'drizzle', 'tauri']
	},

	{
		id: 4,
		title: 'Zero-UI',
		date: new Date('2024-02-07'),
		duration: '3 months',
		description: 'An easy-to-use Svelte UI library.',
		tags: ['svelte', 'UI libraries', 'jsdoc', 'CLI']
	},
	{
		id: 5,
		title: 'FoundItems',
		date: new Date('2025-01-18'),
		duration: '4 months',
		description:
			'An intelligent lost & found matching platform that connects people using AI-powered algorithms. Features multi-language support, automated matching, and secure authentication.',
		tags: ['sveltekit', 'hono', 'ai matching', 'huggingface', 'docker', 'azure']
	},
	{
		id: 6,
		title: 'EnvTracker - ALGORO Internship',
		date: new Date('2025-02-01'),
		duration: '6 months',
		description:
			'Modernized a monolithic SaaS platform into a scalable multi-tenant architecture with control/application plane separation, schema-based tenant isolation, and enterprise SSO integration.',
		tags: ['sveltekit', 'spring boot', 'multi-tenancy', 'postgresql', 'ansible', 'oauth2']
	}
];

export const writings: Unit[] = [
	{
		id: 1,
		title: 'Functional programming',
		date: new Date('2024-06-28'),
		description:
			'Learn functional programming with TypeScript and fp-ts to write efficient, maintainable code. Implement key concepts like immutability, pure functions, and monads.',
		readingTime: 20,
		tags: ['functional programming', 'typescript', 'fp-ts']
	},
	{
		id: 2,
		title: 'Markdown and Obsidian',
		date: new Date('2023-10-21'),
		description: 'How markdown can make your life much easier.',
		readingTime: 8,
		tags: ['markdown', 'obsidian']
	},
	{
		id: 3,
		title: 'Svelte: The magic framework',
		date: new Date('2023-01-02'),
		description: 'Exploring why Svelte is magic.',
		readingTime: 8,
		tags: ['svelte', 'frontend frameworks']
	},
	{
		id: 4,
		title: 'Component-driven development',
		description: 'Best practices for component-driven development.',
		readingTime: 12,
		tags: ['CDD', 'frontend', 'svelte'],
		date: new Date('2024-01-10')
	}
];

export const altronTheme: ThemeInput = {
	name: 'altronTheme',
	bg: 'transparent',
	fg: 'var(--foregroundColor)',
	settings: [
		{
			scope: ['comment'],
			settings: { foreground: 'color-mix(in srgb, var(--primary) 90%, black)' }
		},
		{
			scope: ['string'],
			settings: { foreground: 'color-mix(in srgb, var(--primary) 80%, black)' }
		},
		{
			scope: ['keyword'],
			settings: { foreground: 'color-mix(in srgb, var(--primary) 95%, black)' }
		},
		{
			scope: ['constant'],
			settings: { foreground: 'color-mix(in srgb, var(--primary) 80%, black)' }
		},
		{
			scope: ['parameter'],
			settings: { foreground: 'color-mix(in srgb, var(--primary) 100%, black)' }
		},
		{
			scope: ['function'],
			settings: { foreground: 'color-mix(in srgb, var(--primary) 95%, white 5%)' }
		},
		{
			scope: ['string-expression'],
			settings: { foreground: 'color-mix(in srgb, var(--primary) 90%, white 10%)' }
		},
		{
			scope: ['punctuation'],
			settings: { foreground: 'color-mix(in srgb, var(--primary) 85%, white 15%)' }
		},
		{
			scope: ['link'],
			settings: { foreground: 'color-mix(in srgb, var(--primary) 80%, white 20%)' }
		}
	]
};
