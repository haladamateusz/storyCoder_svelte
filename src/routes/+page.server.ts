import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	const stories = await prisma.stories.findMany();

	const storyPreview = stories.map((story) => ({
		title: story.storyProperties.title,
		shortContent: story.content.slice(0, 200) + '...'
	})) satisfies { title: string; shortContent: string }[];

	return {
		storyPreview
	};
};
