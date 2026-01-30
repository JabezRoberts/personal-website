"use client";

import { Button } from "@/components";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "General", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        // Replace with your form submission logic (e.g., EmailJS, Formspree, or API)
        try {
            // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "General", message: "" });
        } catch (error) {
            setStatus("Error sending message. Please try again.");
            console.error("There was an error submitting the form: ", error)
        }
    };

    return (
        <div className="min-h-screen bg-background dark:bg-background-dark pt-24 pb-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-16">
                
                {/** Hero/Intro */}
                <section className="text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-primary dark:text-primary-dark">
                        Get in <span className="text-accent dark:text-accent-light">Touch</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted dark:text-muted-dark max-w-2xl">
                        Whether for job opportunities, consulting, or collaboration, I'm here to connect. Reach out via the form below or my contact details.
                    </p>
                </section>

                {/** Contact Form */}
                <section className="space-y-6">
                    <form 
                        onSubmit={handleSubmit}
                        className="space-y-6 max-w-xl mx-auto"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-primary dark:text-primary-dark mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-surface dark:bg-surface-dark border border-gray-300 dark:border-gray-700 text-primary dark:text-primary-dark focus:border-accent dark:focus:border-accent-light outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-primary-dark mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-surface dark:bg-surface-dark border border-gray-300 dark:border-gray-700 text-primary dark:text-primary-dark focus:border-accent dark:focus:border-accent-light outline-none"
                            />
                        </div>


                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-primary dark:text-primary-dark mb-2">
                                Subject
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-surface dark:bg-surface-dark border border-gray-300 dark:border-gray-700 text-primary dark:text-primary-dark focus:border-accent dark:focus:border-accent-light outline-none"
                            >
                                <option value="General">General</option>
                                <option value="Consultation">Consultation</option>
                                <option value="Hire">Hire</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-primary dark:text-primary-dark mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg bg-surface dark:bg-surface-dark border border-gray-300 dark:border-gray-700 text-primary dark:text-primary-dark focus:border-accent dark:focus:border-accent-light outline-none"
                            />
                        </div>
                        <Button variant="primary" type="submit" className="w-full md:w-auto">
                            Send Message
                        </Button>
                        {status && 
                            <p className="text-sm text-accent dark:text-accent-light">
                                {status}
                            </p>
                        }
                    </form>
                </section>

                {/** Contact Details */}
                <section className="space-y-6 text-center md:text-left">
                    <h2 className="text-3xl font-display font-semibold text-primary dark:text-primary-dark">
                        Contact Information
                    </h2>
                    <div className="space-y-4 text-lg text-muted dark:text-muted-dark">
                        <p>
                            <strong>Email:</strong> info@jabezroberts.com
                        </p>
                        <p>
                            <strong>Phone:</strong> +1 876-501-4318
                        </p>
                        <p>
                            <strong>Location:</strong> Kingston, Jamaica
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                        <Button
                            variant="ghost"
                            asChild
                        >
                            <Link 
                                href="https://www.linkedin.com/in/jabez-m-roberts" 
                                target="_blank"
                            >
                                LinkedIn
                            </Link>
                        </Button>

                        <Button
                            variant="ghost"
                            asChild
                        >
                            <Link 
                                href="https://github.com/JabezRoberts" 
                                target="_blank"
                            >
                                GitHub
                            </Link>
                        </Button>

                        <Button
                            variant="ghost"
                            asChild
                        >
                            <Link 
                                href="https://www.behance.net/jabezroberts1" 
                                target="_blank"
                            >
                                Behance
                            </Link>
                        </Button>

                        <Button 
                            variant="ghost"
                            asChild
                        >
                            <Link
                                href="https://www.youtube.com/channel/UCjK0TaBO3ItPLctvfpbmqkQ"
                                target="_blank"
                            >
                                YouTube
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}