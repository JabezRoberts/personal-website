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
            </nav>
        </header>
    )
    
}