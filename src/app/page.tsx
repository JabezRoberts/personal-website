"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components";
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
            <section className="py-20 bg-surface dark:bg-surface-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="text-4xl font-display font-bold text-center mb-12"
                    >
                        Featured Projects
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInVariants}
                            whileHover={cardHover}
                            className="bg-background dark:bg-background-dark rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/favicon.ico"
                                alt="ReunitePath App"
                                width={800}
                                height={600}
                                className="w-full h-64 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">ReunitePath</h3>
                                <p className="text-muted dark:text-muted-dark mb-4">
                                    Disaster-response platform to reconnect families. Built with focus on UX, accessibility, and ethics.
                                </p>

                                <Button variant="ghost" asChild>
                                    <Link href="/projects/reunitepath" className="group">
                                        View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInVariants}
                            transition={{ delay: 0.2 }}
                            whileHover={cardHover}
                            className="bg-background dark:bg-background-dark rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/favicon.ico"
                                alt="Renaros Dashboard"
                                width={750}
                                height={469}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">Renaros</h3>
                                <p className="text-muted dark:text-muted-dark mb-4">
                                    AI-powered SaaS for small businesses. Multi-tenant, RBAC, Supabase backend, Next.js frontend.
                                </p>
                                <Button variant="ghost" asChild>
                                    <Link href="/projects/renaros" className="group">
                                        View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
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