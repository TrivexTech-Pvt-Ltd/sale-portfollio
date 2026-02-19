import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Code2, Smartphone, Layout, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../components/ui/Section";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";
import ServiceCard from "../components/ServiceCard";
import SEO from "../components/SEO";

export default function Home() {
    return (
        <>
            <SEO
                title="Home"
                description="Expert Software Engineer specializing in high-performance digital experiences, scalable web architecture, and premium UI/UX design."
                keywords="John Doe, Software Engineer, Portfolio, Full-Stack Developer, React Expert, .NET Developer"
            />

            <div className="bg-dark overflow-x-hidden">
                {/* Hero Section */}
                <section className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left order-2 lg:order-1"
                        >
                            <span className="text-lg md:text-xl font-medium text-gray-300">Hi I am</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">John Doe</h2>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-orange mt-4 tracking-tight leading-none">
                                Software Engineer
                            </h1>

                            {/* Social Links */}
                            <div className="flex justify-center lg:justify-start gap-4 mt-8">
                                {[Instagram, Linkedin, Github, Twitter].map((Icon, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        whileHover={{ scale: 1.1, backgroundColor: '#ff6b00', color: '#fff' }}
                                        className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 transition-colors"
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                ))}
                            </div>

                            <p className="mt-8 text-gray-400 text-base md:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
                                "Transforming ideas into <span className="text-white">industrial-grade</span> software products through high-end engineering and pixel-perfect design."
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6">
                                <Button to="/contact">Hire Me</Button>
                                <Button to="/projects" variant="outline">View Work</Button>
                            </div>

                            {/* Stats Bar */}
                            <div className="mt-12 md:mt-20 bg-dark-card p-6 md:p-10 rounded-2xl flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 items-center">
                                <StatItem label="Experiences" value="5+" />
                                <StatItem label="Project done" value="20+" />
                                <StatItem label="Happy Clients" value="80+" />
                            </div>
                        </motion.div>

                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex justify-center order-1 lg:order-2"
                        >
                            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] xl:w-[600px] xl:h-[600px]">
                                {/* Background Circle */}
                                <div className="absolute inset-0 bg-[#1e1e1e] rounded-full opacity-50 transform translate-y-6 md:translate-y-10"></div>

                                {/* Image Placeholder */}
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
                                    alt="Professional Portrait"
                                    className="absolute inset-0 w-full h-full object-cover rounded-full mix-blend-luminosity grayscale border-4 md:border-8 border-dark"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Section */}
                <Section dark id="services">
                    <Heading
                        subtitle="Services"
                        title="Professional"
                        accentTitle="Excellence"
                        centered
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-white">
                        <ServiceCard
                            slug="custom-software"
                            icon={<Code2 className="text-orange" />}
                            title="Software Development"
                            description="Robust, scalable software solutions built from the ground up for modern businesses."
                            delay={0.1}
                        />
                        <ServiceCard
                            slug="mobile-apps"
                            icon={<Smartphone className="text-orange" />}
                            title="Web/App Development"
                            description="Cross-platform excellence with native performance and buttery smooth user interfaces."
                            delay={0.2}
                        />
                        <ServiceCard
                            slug="consulting"
                            icon={<Layout className="text-orange" />}
                            title="IT Consulting & Design"
                            description="Expert guidance on technology stack, system design, and future-proof architecture."
                            delay={0.3}
                        />

                        {/* Final CTA Card */}
                        <div className="flex flex-col items-center justify-center p-8 md:p-10 border-2 border-dashed border-gray-800 rounded-3xl group hover:border-orange transition-all cursor-pointer min-h-[250px] md:min-h-full">
                            <Link to="/services" className="text-center w-full">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange transition-colors">
                                    <ArrowRight className="group-hover:text-white" />
                                </div>
                                <p className="font-bold uppercase tracking-widest text-xs md:text-sm text-gray-400 group-hover:text-white">View All Services</p>
                            </Link>
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
}

function StatItem({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col border-l-2 border-gray-800 pl-4 md:pl-6 first:border-l-0 first:pl-0">
            <span className="text-2xl md:text-3xl font-bold text-orange">{value}</span>
            <span className="text-gray-500 font-medium mt-1 uppercase tracking-wider text-[10px] md:text-sm">{label}</span>
        </div>
    );
}
