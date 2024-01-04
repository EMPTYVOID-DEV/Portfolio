import type { Load } from '@sveltejs/kit';
import { projects } from '$lib/utils/consts';
import fs from 'fs';
import path from 'path';

export const prerender = true;

export const load: Load = async ({ params }) => {
	const name = decodeURIComponent(params.name).toLowerCase();
	const md = fs.readFileSync(path.join('static', 'projects', name + '.md')).toString();
	const info = projects.find(({ title }) => title.toLowerCase() == name);
	return { md, info };
};
