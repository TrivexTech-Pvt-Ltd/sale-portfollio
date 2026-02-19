"use client";
import { motion } from "framer-motion";
import { Code2, Smartphone, Cloud, Cpu, Layout } from "lucide-react";
import Section from "../../components/ui/Section.tsx";
import Heading from "../../components/ui/Heading.tsx";
import Button from "../../components/ui/Button.tsx";
import ServiceCard from "../../components/ServiceCard.tsx";

const services = [
    {
        slug: "custom-software",
        title: "Custom Software Development",
        description: "We build robust, scalable, and secure software solutions tailored to your business needs — from idea to deployment.",
        icon: <Code2 className="text-orange" size={32} />,
    },
    {
        slug: "mobile-apps",
        title: "Mobile App Development",
        description: "Deliver seamless mobile experiences with native and cross-platform applications built for performance and user engagement.",
        icon: <Smartphone className="text-orange" size={32} />,
    },
    {
        slug: "cloud-devops",
        title: "Cloud Solutions & DevOps",
        description: "Accelerate your infrastructure with scalable cloud architecture, CI/CD pipelines, and DevOps automation for faster delivery.",
        icon: <Cloud className="text-orange" size={32} />,
    },
    {
        slug: "ai-ml",
        title: "AI & Machine Learning Integration",
        description: "Leverage artificial intelligence to unlock predictive analytics, automation, and intelligent business insights.",
        icon: <Cpu className="text-orange" size={32} />,
    },
    {
        slug: "consulting",
        title: "IT Consulting & System Architecture",
        description: "Get expert guidance on choosing the right technology stack, system design, and architecture for long-term strategy.",
        icon: <Layout className="text-orange" size={32} />,
    },
];

export default function ServicesPage() {
    return (
        <Section className="pt-24 md:pt-32">
            <Heading
                subtitle="Services"
                title="What I"
                accentTitle="Offer"
                description="I provide end-to-end technical solutions to help businesses scale and innovate in the digital era."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, i) => (
                    <ServiceCard
                        key={service.slug}
                        {...service}
                        delay={i * 0.1}
                    />
                ))}
            </div>

            {/* Call to action */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 md:mt-20 bg-orange/10 border border-orange/20 p-8 md:p-16 rounded-2xl md:rounded-3xl text-center"
            >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Have a project in mind?</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto italic text-sm md:text-base">
                    "Let's work together to create something exceptional."
                </p>
                <Button to="/contact">Get Started</Button>
            </motion.div>
        </Section>
    );
}
