export type units = {
	title: string;
	date: { month: months; day: number; year: number };
	description: string;
	href: string;
	readingTime?: number;
}[];

type routes = 'home' | 'about' | 'skills' | 'projects' | 'writings' | 'contact';

export const colorsMap = new Map<routes, string>([
	['home', '#111111'],
	['about', '#cc3300'],
	['skills', '#042696'],
	['projects', '#001f3f'],
	['writings', '#ef7190'],
	['contact', '#05d69e']
]);

export type months =
	| 'Jan'
	| 'Feb'
	| 'Mar'
	| 'Apr'
	| 'May'
	| 'Jun'
	| 'Jul'
	| 'Aug'
	| 'Sep'
	| 'Oct'
	| 'Nov'
	| 'Dec';

export let monthsList = [
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
];

export const projects: units = [
	{
		title: 'i3 Setup',
		date: { day: 5, month: 'Dec', year: 2023 },
		description:
			'This is package used to automate the configuration for i3 tailing window manager with polybar,rofi,betterlockscreen,kitty. ',
		href: '/projects/i3 setup'
	},
	{
		title: 'altron',
		date: { day: 19, month: 'Nov', year: 2023 },
		description:
			'Altron is a robust and versatile rich text editor designed for Svelte applications. It empowers users to effortlessly create, edit, and manage structured text content by seamlessly incorporating various blocks with associated dat',
		href: '/projects/altron'
	},
	{
		title: 'svelte docs maker',
		date: { day: 20, month: 'Sep', year: 2023 },
		description:
			'Sveltedocsmaker is a package that simplifies the process of building your documentation route using Svelte components',
		href: '/projects/svelte docs maker'
	},
	{
		title: 'create split app',
		date: { day: 6, month: 'Sep', year: 2023 },
		description:
			'The Split Stack CLI Tool is a command-line utility designed to streamline the process of initializing a project that combines bleeding edge technologies around sveltekit',
		href: '/projects/create split app'
	}
];

export const writings: units = [
	{
		title: 'markdown and obsidian',
		date: { day: 21, month: 'Oct', year: 2023 },
		description: 'We gonna talk about how you can use markdown to make your life much easier.',
		href: '/writings/markdown and obsidian',
		readingTime: 8
	},
	{
		title: 'svelte the magic framework',
		date: { day: 2, month: 'Jan', year: 2023 },
		description: 'Let check way svelte is magic.',
		href: '/writings/svelte the magic framework',
		readingTime: 8
	}
];
