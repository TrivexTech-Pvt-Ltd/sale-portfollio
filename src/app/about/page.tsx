"use client";
import { motion } from "framer-motion";
import { Cpu, Globe, Layout, Smartphone, CheckCircle2 } from "lucide-react";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";

const skills = [
    { name: "Frontend Development", icon: <Layout />, desc: "React, Vue, Tailwind CSS, Framer Motion" },
    { name: "Backend Development", icon: <Globe />, desc: ".NET Core, Node.js, PostgreSQL, SQL Server" },
    { name: "Mobile Solutions", icon: <Smartphone />, desc: "React Native, Flutter, PWA Development" },
    { name: "Architecture & DevOps", icon: <Cpu />, desc: "Microservices, AWS, Docker, CI/CD" },
];

export default function About() {
    return (
        <Section className="pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Story */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Heading
                        subtitle="About Me"
                        title="Crafting"
                        accentTitle="Digital Excellence"
                    />

                    <div className="mt-8 space-y-6 text-lg text-gray-400 leading-relaxed font-medium">
                        <p>
                            I am <span className="text-white font-bold">John Doe</span>, a dedicated UI/UX Developer with a passion for building high-performance, scalable web and mobile applications.
                        </p>
                        <p>
                            With over 5 years of experience in the tech industry, I specialize in bridging the gap between sophisticated design and robust backend architecture. My approach is centered around creating seamless user experiences that solve real-world problems.
                        </p>
                        <p>
                            I believe that great software is more than just code—it's about understanding the business goals and delivering value through innovative technology.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-12">
                        <Badge>Clean Code</Badge>
                        <Badge>Scalable Systems</Badge>
                        <Badge>Modern UI/UX</Badge>
                    </div>
                </motion.div>

                {/* Right Side - Skills Grid */}
                <div className="grid sm:grid-cols-2 gap-6 relative">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark-card p-8 rounded-3xl border border-gray-800 hover:border-orange/30 transition-all group"
                        >
                            <div className="w-14 h-14 bg-dark rounded-2xl flex items-center justify-center mb-6 border border-gray-800 text-orange group-hover:bg-orange group-hover:text-white transition-all">
                                {skill.icon}
                            </div>
                            <h4 className="font-bold text-xl text-white mb-3 tracking-tight">{skill.name}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Philosophy Block */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-24 p-12 md:p-20 bg-dark-card border border-gray-800 rounded-[3rem] text-center relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-64 h-64 bg-orange/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange/5 rounded-full translate-x-1/2 translate-y-1/2 blur-[100px]" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 italic tracking-tight leading-tight">
                        "Great software is a perfect blend of high-end aesthetics and industrial-grade stability."
                    </h2>
                    <div className="w-20 h-1 bg-orange mx-auto rounded-full mb-8" />
                    <p className="text-orange font-bold uppercase tracking-[0.4em] text-sm">John Doe</p>
                </div>
            </motion.div>
        </Section>
    );
}

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2 bg-dark-card px-4 py-2 rounded-full border border-gray-800">
            <CheckCircle2 size={16} className="text-orange" />
            <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">{children}</span>
        </div>
    );
}
