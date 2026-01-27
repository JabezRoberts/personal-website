"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Popover, Transition } from "@headleassui/react";
import Link from "next/link"
import const navLinks from "../constants/index.ts"


export default function Navbar() {
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
    const [scrolled, setScroled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 20);


            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection("up");
            }

            lastScrollY = currentScrollY;
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScroll);
                ticking = true;
            }
        };


        window.addEventListener("scroll", requestTick, { passive: true });
        
        return () => window.removeEventListener("scroll", requestTick)
    }, []);


    const isShrunk = scrolled && scrollDirection === "down";

    return (
        <header 
            className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300"
        >
            <nav 
                className={`
                    flex items-center justify-between rounded-full
                    bg-white/75 dark:bg-[#0b0b14]/75
                    backdrop-blur-xl
                    border border-white/40 dark:border-white/10
                    shadow-xl shadow-black/5 dark:shadow-black/40
                    transition-all duration-300
                    ${isShrunk ? "py-3 px-6" : "py-5 px-8"}
                `}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className={`font-bold text-brand dark:text-brand-light transition-all duration-300
                        ${ isShrunk ? "text-2xl" : "text-[28px]" 
                    }`}
                >
                    Jabez Roberts
                </Link>

                {/** Desktop Navigation */}
                <div className="hidden md:flex items-center gap-9 text-sm font-medium">
                    {navLinks.map((link) => (
                        <div className="relative" key={link.name}>
                            {link.submenu ? (
                                <Popover>
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={`flex items-center transition-colors ${open 
                                                    ? "text-accent dark:text-accent-light"
                                                    : "text-gray-700 dark:text-gray-300 hover:text-accent-light"
                                                }`}
                                            >
                                                {link.name}
                                                <svg 
                                                    className={`ml-1 h-3.5 w-3.5 tansition ${open ? "rotate-180" : ""}`}
                                                    fill="none"
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7
                                                </svg>
                                            </Popover.Button>

                                            <Transition
                                                enter="transition duration-200 ease-out"
                                                enterFrom="opacity-0 -translate-y-2"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition duration-150 ease-in"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 -translate-y-2"
                                            >
                                                <Popover.Panel 
                                                    className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800 py-2 z-50">
                                                    {link.submenu.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.href}
                                                            className="block px-5 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent-light"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent-light transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/** Hire Me */}
                <Link
                    href="/contact"
                    className={`hidden md:block font-medium rounded-full transition-all duration-300 shadow-sm ${
                        isShrunk
                        ? "px-6 py-2.5 text-sm"
                        : "px-7 py-3 text-base"
                    } bg-accent text-white hover:bg-accent/90 dark:bg-accent-light dark:hover:bg-accent-light/90`}
                >
                    Hire Me
                </Link>

                {/** Mobile Hamburger */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 -mr-2"
                >
                    {mobileMenuOpen 
                        ? <X className="w-6 h-6" />
                        : <Menu className="w-6 h-6" />
                    }
                </button>
            </nav>

            {/** Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 mt-4 rounded-xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <div className="px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.submenu ? (
                                    <>
                                        <p className="font-medium text-gray-900 dark:text-gray-100">{link.name}</p>
                                        <div className="ml-4 mt-2 space-y-2">
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-2 font-medium text-gray-900 dark:text-gray-100 hover:text-accent dark:hover:text-accent-light"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full text-center px-5 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent/90 dark:bg-accent-light"
                        >
                            Hire Me
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )    
}