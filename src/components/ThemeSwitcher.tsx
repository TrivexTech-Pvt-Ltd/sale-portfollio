"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check, Sun, Moon } from "lucide-react";

// Helper to convert hex to rgba for the 'light' variable
const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const themes = [
    { name: "Orange", color: "#ff6b00", hover: "#e66000" },
    { name: "Blue", color: "#3b82f6", hover: "#2563eb" },
    { name: "Purple", color: "#a855f7", hover: "#9333ea" },
    { name: "Green", color: "#22c55e", hover: "#16a34a" },
    { name: "Rose", color: "#f43f5e", hover: "#e11d48" },
    { name: "Cyan", color: "#06b6d4", hover: "#0891b2" },
];

export default function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTheme, setActiveTheme] = useState(themes[0].name);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Load Accent Theme
        const savedTheme = localStorage.getItem("portfolio-theme");
        if (savedTheme) {
            const theme = themes.find(t => t.name === savedTheme);
            if (theme) {
                applyTheme(theme);
                setActiveTheme(theme.name);
            }
        }

        // Load Dark/Light Mode
        const savedMode = localStorage.getItem("portfolio-mode") || "dark";
        setMode(savedMode === "dark");
    }, []);

    const setMode = (dark: boolean) => {
        setIsDark(dark);
        if (dark) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("portfolio-mode", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("portfolio-mode", "light");
        }
    };

    const applyTheme = (theme: typeof themes[0]) => {
        document.documentElement.style.setProperty("--primary", theme.color);
        document.documentElement.style.setProperty("--primary-hover", theme.hover);
        document.documentElement.style.setProperty("--primary-light", hexToRgba(theme.color, 0.1));
        localStorage.setItem("portfolio-theme", theme.name);
        localStorage.setItem("portfolio-theme-color", theme.color);
    };

    const handleThemeChange = (theme: typeof themes[0]) => {
        applyTheme(theme);
        setActiveTheme(theme.name);
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-8 left-8 z-[100] flex flex-col gap-4">
            {/* Dark/Light Toggle */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMode(!isDark)}
                className="w-12 h-12 bg-dark-card border border-gray-800 rounded-full flex items-center justify-center text-white shadow-2xl hover:border-orange transition-all"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Accent Palette Toggle */}
            <div className="relative">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}
                    className="w-12 h-12 bg-dark-card border rounded-full flex items-center justify-center shadow-2xl transition-colors"
                >
                    <Palette size={24} />
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            className="absolute bottom-16 left-0 bg-dark-card border border-gray-800 p-4 rounded-2xl shadow-2xl min-w-[180px]"
                        >
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-2">Choose Accent</p>
                            <div className="grid grid-cols-1 gap-2">
                                {themes.map((theme) => (
                                    <button
                                        key={theme.name}
                                        onClick={() => handleThemeChange(theme)}
                                        style={{
                                            backgroundColor: activeTheme === theme.name ? hexToRgba(theme.color, 0.1) : 'transparent',
                                            color: activeTheme === theme.name ? theme.color : '#9ca3af'
                                        }}
                                        className={`flex items-center justify-between w-full px-3 py-2 rounded-xl transition-all hover:bg-gray-800`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-4 h-4 rounded-full"
                                                style={{ backgroundColor: theme.color }}
                                            />
                                            <span className="text-sm font-semibold">{theme.name}</span>
                                        </div>
                                        {activeTheme === theme.name && <Check size={16} />}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
