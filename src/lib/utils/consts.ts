import type { ThemeInput } from 'shiki';

type Routes = 'home' | 'about' | 'projects' | 'writings' | 'contact';

export type Unit = {
	id: number;
	title: string;
	date: Date;
	duration?: string;
	href?: string;
	readingTime?: number;
	description: string;
	tags: string[];
};

export const colorsMap = new Map<Routes, string>([
	['home', '#111111'],
	['about', '#cc3300'],
	['projects', '#337ab7'],
	['writings', '#ef7190'],
	['contact', '#05d69e']
]);

export const projects: Unit[] = [
	{
		id: 3,
		title: 'GStore',
		description: 'A self-hosted storage solution',
		date: new Date('2024-09-01'),
		duration: '3 months',
		tags: ['honojs', 'sveltekit', 'bunjs', 'typescript', 'postgres', 'drizzle', 'tauri']
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
		id: 4,
		title: 'Zero-UI',
		date: new Date('2024-02-07'),
		duration: '3 months',
		description: 'An easy-to-use Svelte UI library.',
		tags: ['svelte', 'UI libraries', 'jsdoc', 'CLI']
	},
	{
		id: 1,
		title: 'Altron',
		date: new Date('2023-11-05'),
		duration: '1 year',
		description:
			'A robust and versatile rich text editor for Svelte applications. It enables users to effortlessly manage structured text content.',
		tags: ['svelte', 'rich text editor', 'npm package']
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
