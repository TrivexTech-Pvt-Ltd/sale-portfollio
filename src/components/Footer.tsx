"use client";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Heart, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-theme-card border-t border-theme-border pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <div className="text-2xl font-black text-orange tracking-tighter mb-6">
                            John<span className="text-theme-text">Doe</span>
                        </div>
                        <p className="text-theme-muted max-w-sm leading-relaxed mb-8">
                            Transforming complex technical requirements into elegant, high-performance digital experiences. Specializing in full-stack architecture and premium UI/UX.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Instagram size={20} />} href="#" />
                            <SocialIcon icon={<Linkedin size={20} />} href="#" />
                            <SocialIcon icon={<Github size={20} />} href="#" />
                            <SocialIcon icon={<Twitter size={20} />} href="#" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-theme-text font-bold mb-6 uppercase tracking-widest text-sm text-orange">Quick Links</h4>
                        <ul className="space-y-4 text-theme-muted font-medium">
                            <li><Link href="/" className="hover:text-orange transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-orange transition-colors">About Me</Link></li>
                            <li><Link href="/services" className="hover:text-orange transition-colors">Services</Link></li>
                            <li><Link href="/projects" className="hover:text-orange transition-colors">Portfolio</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-theme-text font-bold mb-6 uppercase tracking-widest text-sm text-orange">Legal</h4>
                        <ul className="space-y-4 text-theme-muted font-medium">
                            <li><a href="#" className="hover:text-orange transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-orange transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-orange transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-theme-border flex flex-col md:row items-center justify-between gap-6 text-sm font-bold uppercase tracking-widest text-theme-muted">
                    <p>© {new Date().getFullYear()} John Doe. ALL RIGHTS RESERVED.</p>
                    <div className="flex items-center gap-2">
                        DESIGNED WITH <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }}><Heart size={14} className="fill-orange text-orange" /></motion.span> BY John Doe.
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, href }: { icon: any, href: string }) {
    return (
        <a
            href={href}
            className="w-10 h-10 bg-theme-bg rounded-full flex items-center justify-center border border-theme-border text-theme-muted hover:bg-orange hover:text-white hover:border-orange transition-all duration-300"
        >
            {icon}
        </a>
    )
}
