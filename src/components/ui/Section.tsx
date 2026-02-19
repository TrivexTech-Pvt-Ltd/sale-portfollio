import type { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
}

export default function Section({ children, className = "", id, dark = false }: SectionProps) {
    return (
        <section
            id={id}
            className={`py-16 md:py-24 px-4 md:px-6 transition-colors ${dark ? 'bg-theme-card' : 'bg-theme-bg'} ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
}
