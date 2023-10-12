<script lang="ts">
	import type { PageData } from './$types';
	import Markdown from '@magidoc/plugin-svelte-marked';
	export let data: PageData;
	console.log('data passed', data);

	const { storyPreview } = data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each storyPreview as element}
	<h3>{element.title}</h3>
	<Markdown source={element.shortContent} />
	<hr />
{/each}
