<script lang="ts">
	import type { PageData } from './$types';
	import Markdown from '@magidoc/plugin-svelte-marked';
	export let data: PageData;
	console.log('data passed', data.storyPreview.length);

	const { storyPreview } = data;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 flex flex-col items-center">
<!--		<h2 class="h2">Welcome to Skeleton.</h2>-->
		<div class="space-x-2 space-y-5">
			{#each storyPreview as element}
				<h3 class="text-xl">{element.title}</h3>
				<Markdown source={element.shortContent} />
				<hr />
			{/each}

<!--			<a class="btn variant-filled" href="https://skeleton.dev/" target="_blank" rel="noreferrer">-->
<!--				Launch Documentation-->
<!--			</a>-->
		</div>
	</div>
</div>
