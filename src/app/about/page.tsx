import { Button } from "@/components";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-primary dark:bg-primary-dark pt-24 pb-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-16">
                
                {/** Hero/Intro */}
                <section className="text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary dark:text-text-primary-dark">
                        About <span className="text-accent dark:text-accent-light">Jabez Roberts</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted dark:text-text-muted-dark max-w-2xl">
                        Multidisciplinary product, marketing, and business operator with 11 years of experience building, launching, and scaling digital businesses at the intersection of strategy, technology, and growth.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button variant="primary" asChild>
                            <Link href="/contact">Get in Touch</Link>
                        </Button>

                        <Button variant="secondary" asChild>
                            <Link href="/resume.pdf" download>Download Resume</Link>
                        </Button>
                    </div>
                </section>


                {/* My Story Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-display font-semibold text-text-primary dark:text-text-primary-dark">
                        My Journey
                    </h2>

                    <div className="prose dark:prose-invert text-text-muted dark:text-text-muted-dark space-y-4">
                        <p>
                            I started my professional journey in 2015 as a digital marketer, WordPress developer, and business consultant. Over the years, I've evolved into a product-led operator capable of shipping end-to-end solutions that drive revenue, user adoption, and operational efficiency.
                        </p>
                        <p>
                            In 2018, I founded Zeilhan Systems Limited, where I've served as Founder and CEO for over 8 years. Through this, I've designed, built, and optimized revenue-generating websites and platforms, led digital strategies including SEO, paid ads, email marketing, CRO, and analytics, and acted as a strategic advisor to founders and decision-makers.
                        </p>
                        <p>
                            My work has spanned small businesses to enterprise-level companies like Scotiabank Jamaica (project management for an internal online auction platform) and Tropical Metal Products Ltd (digital strategy, SEO, ads, email marketing, and infrastructure). Notably, my efforts contributed to approximately 2.5 billion JMD in revenue for client businesses over a 27-month period.
                        </p>
                        <p>
                            In mid-2025, I transitioned deeper into product building and engineering, completing courses in Python, Full Stack Engineering, Frontend Engineering, React, Advanced React, and AI/ML. This shift allows me to bridge technical execution with business strategy more effectively.
                        </p>
                    </div>
                </section>

                {/* Strengths Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-display font-semibold text-text-primary dark:text-text-primary-dark">
                        Core Strengths
                    </h2>

                    <ul className="grid md:grid-cols-2 gap-4 text-lg text-text-muted dark:text-text-muted-dark">
                        <li className="flex items-start gap-2">
                            <span className="text-accent dark:text-accent-light mt-1">•</span>
                            Translating ambiguous business problems into structured, solvable systems
                        </li>

                        <li className="flex items-start gap-2">
                            <span className="text-accent dark:text-accent-light mt-1">•</span>
                            Connecting user psychology, UX, and messaging to measurable outcomes
                        </li>

                        <li className="flex items-start gap-2">
                            <span className="text-accent dark:text-accent-light mt-1">•</span>
                            Bridging technical teams and business stakeholders
                        </li>

                        <li className="flex items-start gap-2">
                            <span className="text-accent dark:text-accent-light mt-1">•</span>
                            Rapid learning of complex domains applied to real products
                        </li>

                        <li className="flex items-start gap-2">
                            <span className="text-accent dark:text-accent-light mt-1">•</span>
                            Operating across strategy, execution, and iteration
                        </li>
                    </ul>
                </section>

                {/* Key Projects Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-display font-semibold text-text-primary dark:text-text-primary-dark">
                        Key Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-surface dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 space-y-2">
                            <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark">ReunitePath</h3>
                            <p className="text-text-muted dark:text-text-muted-dark">
                                Launched disaster-response platform to reconnect families post-natural disasters. Built end-to-end with focus on UX, accessibility, and ethics.
                            </p>
                        </div>

                        <div className="p-6 bg-surface dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 space-y-2">
                            <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark">Renaros</h3>
                            <p className="text-text-muted dark:text-text-muted-dark">
                                AI-powered SaaS for small businesses and freelancers. Features multi-tenant architecture, RBAC, Supabase backend, Next.js frontend. Landing page live; full launch imminent.
                            </p>
                            </div>
                        </div>

                        <p className="text-text-muted dark:text-text-muted-dark">
                            For more details, visit the 
                            <Link href="/projects" className="text-accent dark:text-accent-light hover:underline">
                                Projects
                            </Link> 
                            page.
                        </p>
                </section>

                {/* Content & Education Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-display font-semibold text-text-primary dark:text-text-primary-dark">
                        Content & Education
                    </h2>

                    <p className="text-lg text-text-muted dark:text-text-muted-dark leading-relaxed">
                        I run the Zeilhan Systems YouTube channel (1,100+ subscribers) and have generated nearly 500 organic email subscribers. I teach marketing, sales, business strategy, UX design, web development, and entrepreneurship, demonstrating my ability to explain complex ideas clearly.
                    </p>
                </section>

                {/** Ideal Role Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-display font-semibold text-text-primary dark:text-text-primary-dark">
                        What I'm Seeking
                    </h2>
                    <p className="text-lg text-text-muted dark:text-text-muted-dark leading-relaxed">
                        I'm open to roles in Product Marketing, Technical Marketing, or Growth Marketing, as well as consulting in product marketing, growth strategy, and business systems design. Let's connect if my hybrid expertise aligns with your needs.
                    </p>
                </section>
            </div>
        </div>
    );
}