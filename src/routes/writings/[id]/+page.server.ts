import { writings } from '$lib/utils/consts';
import type { Load } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export const prerender = true;
export const load: Load = async ({ params }) => {
	const id = parseInt(params.id);
	const md = fs.readFileSync(path.join('static', 'writings', id + '.md')).toString();
	const info = writings.find((writing) => writing.id == id);
	return { md, info };
};
