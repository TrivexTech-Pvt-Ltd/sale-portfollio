import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "../schemas/project.schema";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-dark-card rounded-2xl overflow-hidden group border border-transparent hover:border-orange transition-all duration-300"
        >
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link href={`/projects/${project.id}`} className="btn-primary">View Details</Link>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-orange transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-3 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech?.map((t) => (
                        <span
                            key={t}
                            className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded bg-dark border border-gray-800 text-gray-400"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
