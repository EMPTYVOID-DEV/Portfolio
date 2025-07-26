import type { ComponentType, SvelteComponent } from 'svelte';

export type Routes = 'home' | 'about' | 'projects' | 'writings' | 'contact';

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

// General type for an icon component
export type iconComponent = ComponentType<SvelteComponent>;
