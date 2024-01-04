import { writings } from '$lib/utils/consts';
import type { Load } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export const prerender = true;
export const load: Load = async ({ params }) => {
	const name = decodeURIComponent(params.name).toLowerCase();
	const md = fs.readFileSync(path.join('static', 'writings', name + '.md')).toString();
	const info = writings.find(({ title }) => title.toLowerCase() == name);
	return { md, info };
};
