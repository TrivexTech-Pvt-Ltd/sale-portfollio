import { motion } from "framer-motion";

interface HeadingProps {
    subtitle?: string;
    title: string;
    accentTitle?: string;
    description?: string;
    centered?: boolean;
}

export default function Heading({
    subtitle,
    title,
    accentTitle,
    description,
    centered = false
}: HeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-center lg:text-left'}`}
        >
            {subtitle && (
                <h2 className="text-orange font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm">
                    {subtitle}
                </h2>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-theme-text mt-4 tracking-tight leading-tight">
                {title} {accentTitle && <span className="text-orange">{accentTitle}</span>}
            </h1>
            {description && (
                <p className={`text-theme-muted mt-6 text-base md:text-xl max-w-3xl leading-relaxed ${centered ? 'mx-auto' : 'mx-auto lg:mx-0'}`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}
