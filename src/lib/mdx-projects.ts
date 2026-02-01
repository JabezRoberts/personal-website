import type { ProjectModule } from '@/types'

export const projectImports: Record<string, () => Promise<ProjectModule>> = {
    renaros: () => import('@/content/projects/renaros/page.mdx'),
    'reunite-path': () => import('@/content/projects/reunite-path/page.mdx'),
    'tropical-metal-products': () => import('@/content/projects/tropical-metal-products/page.mdx'),
    scotiabank: () => import('@/content/projects/scotiabank/page.mdx'),
    'zeilhan-youtube-channel': () => import('@/content/projects/zeilhan-youtube-channel/page.mdx'),
}


export async function loadProjects(slug: string): Promise<ProjectModule | null> {
    const importer = projectImports[slug];

    if (!importer) {
        return null;
    }

    try{
        return await importer();
    } catch (err) {
        console.error(`Failed to load project ${slug}:`, err);
        return null;
    }

}