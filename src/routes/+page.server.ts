import type { PageServerLoad } from './$types';
import { prisma } from "$lib";


export const load: PageServerLoad = async () => {
    const stories = await prisma.stories.findMany();

    // create interface for stories
    

    const storyPreview = stories.map((story: any) => ({
        title: story.storyProperties.title,
        shortContent: story.content.slice(0, 200) + '...'
    })) satisfies { title: string; shortContent: string }[];

    return {
        storyPreview
    };
};
