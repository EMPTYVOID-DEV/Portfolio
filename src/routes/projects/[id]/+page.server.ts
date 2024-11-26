import { projects } from '$lib/utils/consts';
import type { Load } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export const prerender = true;
export const load: Load = async ({ params }) => {
	const id = parseInt(params.id);
	const md = fs.readFileSync(path.join('static', 'projects', id + '.md')).toString();
	const info = projects.find((project) => project.id == id);
	return { md, info };
};
