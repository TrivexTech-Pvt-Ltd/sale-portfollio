import { z } from "zod";

export const ProjectSchema = z.object({
    id: z.string(),
    title: z.string().min(1),
    description: z.string().min(1),
    tech: z.array(z.string()).default([]),
    imageUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
});

export const ProjectsSchema = z.array(ProjectSchema);

export type Project = z.infer<typeof ProjectSchema>;
