import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
    slug: string;
    icon: ReactNode;
    title: string;
    description: string;
    delay?: number;
}

export default function ServiceCard({ slug, icon, title, description, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="bg-dark-card p-8 md:p-10 rounded-2xl md:rounded-3xl border border-gray-800 hover:border-orange/50 transition-all group flex flex-col h-full"
        >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-dark rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-gray-800 group-hover:bg-orange/10 group-hover:border-orange/30 transition-all">
                {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-orange transition-colors">
                {title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-grow">
                {description}
            </p>
            <Link
                href={`/services/${slug}`}
                className="flex items-center gap-2 text-orange font-bold uppercase tracking-widest text-[10px] md:text-xs hover:gap-4 transition-all mt-auto"
            >
                Learn More <ArrowRight size={16} />
            </Link>
        </motion.div>
    );
}
