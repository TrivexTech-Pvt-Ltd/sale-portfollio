"use client";
import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Github, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";
import { endpoints } from "../../../api/endpoints.ts";
import { ProjectsSchema } from "../../../schemas/project.schema.ts";
import type { Project } from "../../../schemas/project.schema.ts";
import { api } from "../../../api/axios.ts";
import Section from "../../../components/ui/Section.tsx";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [project, setProject] = useState<Project | null>(null);
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setStatus("loading");
                const res = await api.get(endpoints.projects);
                const projects = ProjectsSchema.parse(res.data);
                const found = projects.find(p => p.id === id);

                if (found) {
                    setProject(found);
                    setStatus("success");
                } else {
                    setError("Project not found");
                    setStatus("error");
                }
            } catch (e: any) {
                setError(e?.message || "Something went wrong");
                setStatus("error");
            }
        };

        fetchProject();
    }, [id]);

    if (status === "loading") {
        return (
            <div className="min-h-screen bg-dark flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-orange border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-400 mt-4 font-medium tracking-widest uppercase text-sm">Fetching Details...</p>
            </div>
        );
    }

    if (status === "error" || !project) {
        return (
            <div className="min-h-screen bg-dark flex items-center justify-center p-6 text-center">
                <div className="bg-dark-card p-10 rounded-2xl border border-red-900/50">
                    <h2 className="text-2xl font-bold text-red-500 mb-2">Project Not Found</h2>
                    <p className="text-gray-400">{error || "Could not find the requested project."}</p>
                    <Link href="/projects" className="btn-primary mt-6 inline-block">Back to Portfolio</Link>
                </div>
            </div>
        );
    }

    return (
        <Section className="pt-32">
            <Link href="/projects" className="inline-flex items-center gap-2 text-orange font-bold mb-12 hover:gap-4 transition-all">
                <ArrowLeft size={20} /> Back to Portfolio
            </Link>

            <div className="grid lg:grid-cols-12 gap-12">
                {/* Left Side: Mockup/Image */}
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-dark-card rounded-[2rem] overflow-hidden border border-gray-800 shadow-2xl sticky top-32"
                    >
                        <div className="aspect-video relative group">
                            <img
                                src={project.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Details */}
                <div className="lg:col-span-5 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" className="btn-primary px-8 flex items-center gap-2">
                                    <Globe size={18} /> Live Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" className="border border-gray-700 text-gray-400 p-3 rounded-xl hover:text-white hover:border-white transition-all">
                                    <Github size={24} />
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Metadata Card */}
                    <div className="bg-dark-card p-8 rounded-3xl border border-gray-800 space-y-6">
                        <MetaItem icon={<Tag size={18} />} label="Technologies" value={project.tech.join(", ")} />
                        <MetaItem icon={<Calendar size={18} />} label="Timeline" value="Dec 2024 - Jan 2025" />
                        <MetaItem icon={<User size={18} />} label="Client/Type" value="Enterprise SaaS" />
                    </div>
                </div>
            </div>
        </Section>
    );
}

function MetaItem({ icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-dark border border-gray-800 rounded-xl flex items-center justify-center text-orange shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{label}</p>
                <p className="text-white font-medium">{value}</p>
            </div>
        </div>
    );
}
