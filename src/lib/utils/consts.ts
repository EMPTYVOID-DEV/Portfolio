export type units = {
	title: string;
	date: { month: months; day: number; year: number };
	description: string;
	href: string;
	tags: string[];
	readingTime?: number;
}[];

type routes = 'home' | 'about' | 'skills' | 'projects' | 'writings' | 'contact';

export const colorsMap = new Map<routes, string>([
	['home', '#111111'],
	['about', '#cc3300'],
	['skills', '#37c215'],
	['projects', '#337ab7'],
	['writings', '#ef7190'],
	['contact', '#05d69e']
]);

export const monthsList = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
] as const;

export type months = (typeof monthsList)[number];

export const skills = new Map([
	['Frontend', ['react', 'svelte(kit)', 'tailwind', 'postcss', 'figma', 'vite']],
	['Backend', ['nodejs', 'mongodb', 'postgresql', 'expressJs', 'lucia', 'drizzle', 'prisma']],
	[
		'General',
		['typescript', 'zod', 'docker', 'python', 'git', 'puppeteer', 'linux', 'jest', 'pnpm']
	]
]);

export const projects: units = [
	{
		title: 'Tmhub-api',
		date: { day: 10, month: 'May', year: 2024 },
		description: 'An api for a crm.',
		href: '/projects/tmhub-api',
		tags: ['node', 'express', 'typescript', 'Maria db']
	},
	{
		title: 'The_tale',
		date: { day: 3, month: 'Apr', year: 2024 },
		description:
			'The tale is a plataform that enables people to collaborate in order to create writings and control everything from the structure, colors, fonts, references, and more. ',
		href: '/projects/the_tale',
		tags: ['sveltekit', 'lucia', 'postgresql', 'drizzle', 'zero-ui']
	},
	{
		title: 'Zero-UI',
		date: { day: 9, month: 'Mar', year: 2024 },
		description: 'This is an easy to use svelte ui library',
		href: '/projects/zero-ui',
		tags: ['svelte', 'UI libraries', 'jsdoc', 'Cli']
	},
	{
		title: 'Altron',
		date: { day: 19, month: 'Nov', year: 2023 },
		description:
			'Altron is a robust and versatile rich text editor designed for Svelte applications. It empowers users to effortlessly create, edit, and manage structured text content by seamlessly incorporating various blocks with associated dat',
		href: '/projects/altron',
		tags: ['svelte', 'rich text editor', 'npm']
	},
	{
		title: 'Svelte Docs Maker',
		date: { day: 20, month: 'Oct', year: 2023 },
		description:
			'Sveltedocsmaker is a package that simplifies the process of building your documentation route using Svelte components',
		href: '/projects/svelte docs maker',
		tags: ['svelte', 'documentation', 'npm']
	},
	{
		title: 'Create Split App',
		date: { day: 6, month: 'Sep', year: 2023 },
		description:
			'The Split Stack CLI Tool is a command-line utility designed to streamline the process of initializing a project that combines bleeding edge technologies around sveltekit',
		href: '/projects/create split app',
		tags: ['sveltekit', 'project setup', 'cli tools', 'npm']
	}
];

export const writings: units = [
	{
		title: 'markdown and obsidian',
		date: { day: 21, month: 'Oct', year: 2023 },
		description: 'We gonna talk about how you can use markdown to make your life much easier.',
		href: '/writings/markdown and obsidian',
		readingTime: 8,
		tags: ['markdown', 'obsidian']
	},
	{
		title: 'svelte the magic framework',
		date: { day: 2, month: 'Jan', year: 2023 },
		description: 'Let check way svelte is magic.',
		href: '/writings/svelte the magic framework',
		readingTime: 8,
		tags: ['svelte', 'frontend frameworks']
	},
	{
		title: 'Component driven development',
		href: '/writings/component driven development',
		description: 'Let talk about component driven development best practices',
		readingTime: 12,
		tags: ['CDD', 'frontend', 'svelte'],
		date: { day: 10, month: 'Jan', year: 2024 }
	}
];
