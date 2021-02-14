import * as layout from "/_app/routes/$layout.svelte.js";

const components = [
	() => import("/_app/routes/index.svelte.js"),
	() => import("/_app/routes/projects.svelte.js"),
	() => import("/_app/routes/work/index.svelte.js"),
	() => import("/_app/routes/work/workpage.svelte.js")
];

const d = decodeURIComponent;
const empty = () => ({});

export const pages = [
	{
		// index.svelte
		pattern: /^\/$/,
		params: empty,
		parts: [components[0]]
	},

	{
		// projects.svelte
		pattern: /^\/projects\/?$/,
		params: empty,
		parts: [components[1]]
	},

	{
		// work/index.svelte
		pattern: /^\/work\/?$/,
		params: empty,
		parts: [components[2]]
	},

	{
		// work/workpage.svelte
		pattern: /^\/work\/workpage\/?$/,
		params: empty,
		parts: [components[3]]
	}
];

export const ignore = [
	/^\/work\/pictureHanging\/?$/
];

export { layout };