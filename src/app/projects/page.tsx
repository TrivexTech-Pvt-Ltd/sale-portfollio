"use client";
import { motion } from "framer-motion";
import { endpoints } from "../../api/endpoints";
import { ProjectsSchema } from "../../schemas/project.schema";
import { useFetch } from "../../hooks/useFetch";
import ProjectCard from "../../components/ProjectCard";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";

export default function ProjectsPage() {
    const { data, status, error } = useFetch(endpoints.projects, ProjectsSchema);

    if (status === "loading") {
        return (
            <div className="min-h-screen bg-dark flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-orange border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-400 mt-4 font-medium tracking-widest uppercase text-sm">Loading Portfolio...</p>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="min-h-screen bg-dark flex items-center justify-center p-6 text-center">
                <div className="bg-dark-card p-10 rounded-2xl border border-red-900/50">
                    <h2 className="text-2xl font-bold text-red-500 mb-2">Error Loading Projects</h2>
                    <p className="text-gray-400">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <Section className="pt-32">
            <Heading
                subtitle="Portfolio"
                title="Selected"
                accentTitle="Works"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data?.map((p, i) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <ProjectCard project={p} />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
