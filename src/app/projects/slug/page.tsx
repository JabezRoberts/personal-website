import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Callout, Gallery } from '@/components';

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
    let mdxModule;

    try {
        mdxModule = await import(`@/content/projects/${params.slug}/page.mdx`)
    } catch (error: unknown) {
        notFound();
        console.error("There was an error fetching the content: ", error)
    }

    const { default: MDXContent, metadata } = mdxModule;

    if (!metadata?.title) {
        notFound();
    }


    return (
        <div className="min-h-screen bg-background dark:bg-background-dark">
            {/** Hero/Header */}
            <header className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-accent/5 to-brand/5 dark:from-accent-light/5 dark:to-brand-light/5">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-surface dark:bg-surface-dark text-sm font-medium">
                            {metadata.type || "Project"}
                        </span>

                        <span className="px-4 py-1.5 rounded-full bg-surface dark:bg-surface-dark text-sm font-medium">
                            {metadata.role}
                        </span>

                        <span className="px-4 py-1.5 rounded-full bg-surface dark:bg-surface-dark text-sm font-medium">
                            {metadata.timeline}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        {metadata.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-muted dark:text-muted-dark max-w-3xl">
                        {metadata.description}
                    </p>

                    {metadata.website && (
                        <a
                            href={metadata.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 text-accent dark:text-accent-light hover:underline"
                        >
                            Visit Website →
                        </a>
                    )}
                </div>
            </header>

            {/** Main Content */}
            <main className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-16 prose dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-accent dark:prose-a:text-accent-light">
                <MDXRemote 
                    source={MDXContent}
                    components={{
                        Callout,
                        Gallery
                    }}
                />
            </main>
        </div>
    );
}


export async function generateStaticParams() {
    return [
        { slug: 'renaros' },
        { slug: 'reunite-path' },
        { slug: 'tropical-metal-products' },
        { slug: 'scotiabank' },
        { slug: 'zeilhan-youtube-channel' },
    ]
}