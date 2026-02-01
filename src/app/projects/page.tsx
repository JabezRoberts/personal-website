import Link from 'next/link';
import Image from 'next/image';
import { Projects } from '@/constants';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background dark:bg-background-dark py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-center mb-16">
                    Case Studies
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Projects.map((project) =>(
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-surface dark:bg-surface-dark"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.coverImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                                    {project.title}
                                </h3>

                                <p className="text-muted dark:text-muted-dark mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {Projects.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1 rounded-full bg-background dark:bg-background-dark border border-gray-200 dark:border-gray-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}