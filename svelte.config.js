// import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	//  preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		//   target: '#svelte',
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null
		}),
		paths: {
			base: '/Andy-Hopkins',
			assets: '/Andy-Hopkins'
		}
	}
	// Comment the paths if wants to run in dev mode.
};

export default config;
