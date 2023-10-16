<script lang="ts">
	import type { PageData } from './$types';
	import Markdown from '@magidoc/plugin-svelte-marked';
	export let data: PageData;
	import './page.css';
	import { onMount } from 'svelte';
	console.log('data passed', data);

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});

	const { storyPreview } = data;
	const goTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const handleScroll = () => {
		const scrollY = window.scrollY;
		const screenHeight = window.innerHeight;
		const showThreshold = 1.5 * screenHeight;

		const scrollBtn = document.getElementsByClassName('goTopBtn')[0] as HTMLElement;

		scrollY > showThreshold
			? (scrollBtn.style.display = 'inline')
			: (scrollBtn.style.display = 'none');
	};
</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

{#each storyPreview as element}
	<div class="card">
		<!-- <h3 class="title">{element.title}</h3> -->
		<Markdown source={element.shortContent} />
	</div>
{/each}

<button class="goTopBtn" on:click={goTop}>⬆️</button>
