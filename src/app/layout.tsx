import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ThemeSwitcher from "../components/ThemeSwitcher";

import HelmetClientProvider from "../components/HelmetClientProvider";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: {
        default: "John Doe | UI/ UX  Developer",
        template: "%s | John Doe",
    },
    description: "Expert Software Engineer specializing in high-performance digital experiences, scalable web architecture, and premium UI/UX design.",
    keywords: ["Software Engineer", "Portfolio", "John Doe", "Web Development", "Mobile Development", "React", ".NET"],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://JohnDoe.dev",
        siteName: "John Doe Portfolio",
        images: [{ url: "/og-image.jpg" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    const mode = localStorage.getItem('portfolio-mode') || 'dark';
                                    document.documentElement.setAttribute('data-theme', mode);
                                    
                                    const themeColor = localStorage.getItem('portfolio-theme-color');
                                    if (themeColor) {
                                        document.documentElement.style.setProperty('--primary', themeColor);
                                        // Simple hex to hover/light approximation for the script
                                        // Correct values will be applied by React on hydration
                                    }
                                } catch (e) {}
                            })();
                        `,
                    }}
                />
            </head>
            <body className={`${poppins.variable} antialiased bg-theme-bg text-theme-text transition-colors duration-300`}>
                <HelmetClientProvider>
                    <Navbar />
                    <main>{children}</main>
                    <ThemeSwitcher />
                    <Footer />
                    <ScrollToTop />
                </HelmetClientProvider>
            </body>
        </html>
    );
}
