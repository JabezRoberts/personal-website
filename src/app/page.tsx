"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components";
import { Projects, cardVariants } from "@/constants";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Users,
    BarChart,
    Globe,
    Code,
    Rocket
} from "lucide-react";


export default function Home() {
    const fadeInVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    }


    const cardHover = {
        scale: 1.05,
        transition: { duration: 0.3 }
    };


    return (
        <div className="bg-background dark:bg-background-dark text-primary dark:text-primary-dark">
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-brand/10 dark:from-accent-light/10 dark:to-brand-light/10" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariants}
                        className="text-5xl md:text-7xl font-display font-bold mb-6"
                    >
                        Multidisciplinary <span className="text-accent dark:text-accent-light">Builder</span>
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariants}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-3xl mb-8 max-w-3xl mx-auto"
                    >
                        Product Marketing • Growth • Engineering • Digital Business Consulting
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariants}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Button variant="primary" size="lg" asChild>
                            <Link href="/contact">Hire Me</Link>
                        </Button>

                        <Button variant="secondary" size="lg" asChild>
                            <Link href="/about">Learn More</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/** About Teaser */}
            <section className="py-20 bg-surface dark:bg-surface-dark">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="order-2 md:order-1"
                    >
                        <Image
                        src="/favicon.ico"
                        alt="Jabez Roberts"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-xl"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="order-1 md:order-2 space-y-6"
                    >
                        <h2 className="text-4xl font-display font-bold">Who I Am</h2>
                        <p className="text-lg text-muted dark:text-muted-dark">
                            With 11 years of experience, I bridge strategy, technology, and growth to build and scale digital businesses. Founder of Zeilhan Systems Limited, I've driven billions in revenue for clients through innovative solutions.
                        </p>
                        <Button variant="ghost" asChild>
                            <Link href="/about" className="group">
                                Read My Full Story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>


            {/** Core Strengths */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="text-4xl font-display font-bold text-center mb-12"
                    >
                        Core Strengths
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Users, title: "Business Translation", desc: "Turning ambiguous problems into structured systems." },

                            { icon: BarChart, title: "User-Centric Growth", desc: "Connecting psychology, UX, and messaging to outcomes." },

                            { icon: Globe, title: "Team Bridging", desc: "Aligning technical and business stakeholders." },

                            { icon: Code, title: "Rapid Adaptation", desc: "Learning complex domains for real-world products." },
                            
                            { icon: Rocket, title: "End-to-End Execution", desc: "From strategy to iteration and launch." },
                        ].map((strength, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInVariants}
                                transition={{ delay: i * 0.1 }}
                                whileHover={cardHover}
                                className="p-6 bg-surface dark:bg-surface-dark rounded-xl shadow-md hover:shadow-xl transition-shadow"
                            >
                                <strength.icon className="h-12 w-12 text-accent dark:text-accent-light mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                                    <p className="text-muted dark:text-muted-dark">{strength.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/** Key Projects */}
            <section className="py-20 md:py-32 bg-surface dark:bg-surface-dark">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    {/** Section Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Featured <span className="text-accent dark:text-accent-light">Case Studies</span>
                        </h2>
                        <p className="text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto">
                            Real-world projects where strategy meets execution—delivering measurable growth, revenue impact, and lasting systems.
                        </p>
                    </div>

                    {/** Projects Grid - show first 3 */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {Projects.slice(0, 3).map((project, index) => (
                            <motion.div
                                key={project.slug}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <Link
                                     href={`/projects/${project.slug}`}
                                     className="block h-full"
                                >
                                    <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-background dark:bg-background-dark h-full flex flex-col">
                                        
                                        {/** Cover Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={project.coverImage}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            {/* Optional subtle overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/** Content */}
                                        <div className="p-6 md:p-8 flex flex-col flex-grow">
                                            <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-muted dark:text-muted-dark mb-6 line-clamp-3 flex-grow">
                                                {project.description}
                                            </p>

                                            {/** Tags */}
                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {project.tags.slice(0, 3).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs px-3 py-1 rounded-full bg-surface dark:bg-surface-dark border border-gray-200 dark:border-gray-700"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {project.tags.length > 3 && (
                                                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                                                        +{project.tags.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/** CTA */}
                    <div className="mt-16 md:mt-24 text-center">
                        <p className="text-xl md:text-2xl text-muted dark:text-muted-dark mb-8 max-w-2xl mx-auto">
                            These are just a few examples. Explore all case studies to see how I turn complex challenges into scalable, revenue-driving solutions.
                        </p>

                        <Button variant="primary" size="lg" asChild>
                            <Link href="/projects">
                                View All Case Studies →
                            </Link>
                        </Button>

                        {/** Secondary CTA  */}
                        <p className="mt-6 text-muted dark:text-muted-dark">
                            Ready to discuss your next project?{' '}
                            <Link href="/contact" className="text-accent dark:text-accent-light hover:underline font-medium">
                                Get in touch
                            </Link>
                        </p>
                    </div>
                </div>
            </section>


            {/** Call to Action */}
            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="text-4xl font-display font-bold mb-6"
                    >
                        Ready to Build and Scale?
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted dark:text-muted-dark mb-8"
                    >
                        Let's discuss how I can help your business thrive.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        transition={{ delay: 0.4 }}
                    >
                        <Button variant="primary" size="lg" asChild>
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}