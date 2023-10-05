import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client'
export const load: PageServerLoad = async () => {

    const prisma = new PrismaClient()
    const stories = await prisma.stories.findMany();

    const storyPreview = stories.map((story) => ({
        title: story.storyProperties.title,
        shortContent: story.content.slice(0,200) + '...'
    }));

    return {
        storyPreview
    };
};