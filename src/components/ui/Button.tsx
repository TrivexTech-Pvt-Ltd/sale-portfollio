import type { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    to?: string;
    variant?: "primary" | "outline";
    className?: string;
}

export default function Button({
    children,
    to,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "px-8 md:px-12 py-3 md:py-4 text-base md:text-xl font-bold rounded-xl transition-all inline-flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-orange text-white hover:bg-orange/90 shadow-lg shadow-orange/20",
        outline: "border border-gray-600 text-gray-400 hover:border-white hover:text-white"
    };

    const content = (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {to ? (
                <Link href={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
                    {children}
                </Link>
            ) : (
                <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
                    {children}
                </button>
            )}
        </motion.div>
    );

    return content;
}
