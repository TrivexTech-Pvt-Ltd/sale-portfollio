"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "Services", to: "/services" },
        { name: "About me", to: "/about" },
        { name: "Portfolio", to: "/projects" },
        { name: "Contact me", to: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] bg-dark/80 backdrop-blur-md border-b border-gray-900 md:border-none">
            <div className="max-w-7xl mx-auto px-6 py-4 md:py-6 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl md:text-2xl font-black text-orange tracking-tighter"
                >
                    John<span className="text-white">Doe</span>
                </motion.div>

                <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.to;
                        return (
                            <Link
                                key={link.to}
                                href={link.to}
                                className={`nav-link text-sm lg:text-base ${isActive ? 'nav-link-active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <a href="/contact" className="btn-primary py-2 px-6">Hire Me</a>
                    </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-300 hover:text-orange transition-colors"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark border-b border-gray-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.to;
                                return (
                                    <Link
                                        key={link.to}
                                        href={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg font-semibold ${isActive ? 'text-orange' : 'text-gray-400'}`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <a
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-primary w-full py-3 text-center"
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
