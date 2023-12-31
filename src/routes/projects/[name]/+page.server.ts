import type { Load } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export const ssr = false;

export const load: Load = async ({ params }) => {
	const name = decodeURIComponent(params.name);
	const md = fs.readFileSync(path.join('static', 'projects', name + '.md')).toString();
	return { md };
};
