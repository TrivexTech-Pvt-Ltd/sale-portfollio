"use client";
import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Code2, Smartphone, Cloud, Cpu, Layout, Zap, Rocket, Shield, Globe } from "lucide-react";
import Link from "next/link";
import Section from "../../../components/ui/Section";
import Button from "../../../components/ui/Button";

const serviceData: Record<string, any> = {
    "custom-software": {
        title: "Custom Software Development",
        icon: <Code2 size={48} />,
        description: "Industrial-grade software tailored specifically for your business logic and operational needs. We build robust, scalable, and secure software solutions from idea to deployment.",
        features: ["Tailored Architecture", "Scalable Backend Systems", "API Integration", "Legacy System Migration"],
        benefits: ["Increase operational efficiency", "Reduce manual errors", "Seamless scalability", "Enhanced security"],
        process: ["Requirement Analysis", "System Design", "Agile Development", "Testing & QA", "Deployment"]
    },
    "mobile-apps": {
        title: "Mobile App Development",
        icon: <Smartphone size={48} />,
        description: "Deliver seamless mobile experiences with native and cross-platform applications built for performance, security, and user engagement.",
        features: ["iOS & Android Support", "Offline Functionality", "Push Notifications", "App Store Optimization"],
        benefits: ["Wider audience reach", "Improved user loyalty", "Higher engagement rates", "Direct marketing channel"],
        process: ["Prototyping", "UI/UX Design", "Hybrid/Native Coding", "Beta Testing", "App Store Launch"]
    },
    "cloud-devops": {
        title: "Cloud Solutions & DevOps",
        icon: <Cloud size={48} />,
        description: "Accelerate your infrastructure with scalable cloud architecture, CI/CD pipelines, and DevOps automation for faster and more reliable delivery.",
        features: ["AWS/Azure/GCP Management", "Docker & Kubernetes", "CI/CD Orchestration", "Security & Hardening"],
        benefits: ["Reduced infrastructure costs", "Eliminated downtime", "Faster time-to-market", "Automatic scaling"],
        process: ["Cloud Audit", "Architecture Planning", "Pipeline Setup", "Monitoring Configuration", "Migration"]
    },
    "ai-ml": {
        title: "AI & Machine Learning",
        icon: <Cpu size={48} />,
        description: "Leverage artificial intelligence to unlock predictive analytics, automation, and intelligent business insights that drive growth.",
        features: ["Predictive Analytics", "NLP Integration", "Computer Vision", "Automated Workflows"],
        benefits: ["Better decision making", "Personalized user experience", "Reduced operational costs", "Competitive advantage"],
        process: ["Data Analysis", "Model Selection", "Training & Validation", "API Integration", "Performance Tuning"]
    },
    "consulting": {
        title: "Tech Consulting & Architecture",
        icon: <Layout size={48} />,
        description: "Get expert guidance on choosing the right technology stack, system design, and architecture to ensure long-term scalability and success.",
        features: ["Tech Stack Selection", "System Security Audit", "Performance Optimization", "Scalability Strategy"],
        benefits: ["Mistake prevention", "Optimized costs", "Modern tech stack", "Future-proof systems"],
        process: ["Business Review", "Gap Analysis", "Architecture Design", "Implementation Roadmap", "Ongoing Support"]
    },
};

export default function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const service = serviceData[slug] || serviceData["custom-software"];

    return (
        <Section className="pt-32">
            <Link href="/services" className="inline-flex items-center gap-2 text-orange font-bold mb-12 hover:gap-4 transition-all">
                <ArrowLeft size={20} /> Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="w-20 h-20 bg-orange/10 rounded-3xl flex items-center justify-center text-orange mb-8 border border-orange/20">
                        {service.icon}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        {service.title}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-10">
                        {service.description}
                    </p>
                    <Button to="/contact">Discuss Project</Button>
                </motion.div>

                <div className="space-y-8">
                    {/* Features Card */}
                    <div className="bg-dark-card p-8 md:p-10 rounded-3xl border border-gray-800">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Zap className="text-orange" /> Key Features
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {service.features.map((f: string) => (
                                <div key={f} className="flex items-center gap-3 text-gray-400">
                                    <CheckCircle2 size={18} className="text-orange shrink-0" />
                                    <span className="font-medium">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Card */}
                    <div className="bg-dark-card p-8 md:p-10 rounded-3xl border border-gray-800">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Shield className="text-orange" /> Core Benefits
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {service.benefits.map((b: string) => (
                                <div key={b} className="flex items-center gap-3 text-gray-400">
                                    <Rocket size={18} className="text-orange shrink-0" />
                                    <span className="font-medium">{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Process Steps */}
                    <div className="bg-dark-card p-8 md:p-10 rounded-3xl border border-gray-800">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Globe className="text-orange" /> Implementation Process
                        </h3>
                        <div className="space-y-6">
                            {service.process.map((step: string, i: number) => (
                                <div key={step} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-dark border border-gray-800 flex items-center justify-center text-orange font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <span className="text-gray-400 font-medium">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
