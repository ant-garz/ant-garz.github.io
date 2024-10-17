import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = (event: any) => {
    console.log(event)
	error(404, 'Not Found!');
};