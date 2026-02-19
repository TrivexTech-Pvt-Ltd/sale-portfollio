"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { ContactSchema } from "../../schemas/contact.schema";
import type { ContactForm } from "../../schemas/contact.schema";
import { sendContactMessage } from "../../api/contact.api";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";

export default function ContactPage() {
    const [form, setForm] = useState<ContactForm>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle"
    );

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) {
            setErrors(prev => {
                const next = { ...prev };
                delete next[e.target.name];
                return next;
            });
        }
    };

    const validate = () => {
        const parsed = ContactSchema.safeParse(form);
        if (parsed.success) {
            setErrors({});
            return { ok: true as const, data: parsed.data };
        }

        const fieldErrors: Record<string, string> = {};
        parsed.error.issues.forEach((i) => {
            const key = (i.path[0] as string) || "form";
            fieldErrors[key] = i.message;
        });
        setErrors(fieldErrors);
        return { ok: false as const };
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const v = validate();
        if (!v.ok) return;

        try {
            setStatus("sending");
            await sendContactMessage(v.data);
            setStatus("sent");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    return (
        <Section className="pt-32">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Heading
                        subtitle="Contact Me"
                        title="Let's Build"
                        accentTitle="Something"
                    />
                    <p className="text-xl text-gray-400 mt-8 leading-relaxed max-w-lg">
                        Ready to start a new project? Let's turn your vision into a <span className="text-white font-bold">tangible digital reality</span>.
                    </p>

                    <div className="mt-12 space-y-8">
                        <ContactInfoItem
                            icon={<Mail className="text-orange" size={24} />}
                            title="Email Me"
                            detail="hello@JohnDoe.dev"
                        />
                        <ContactInfoItem
                            icon={<MapPin className="text-orange" size={24} />}
                            title="Location"
                            detail="Based in Digital Space / Global"
                        />
                        <ContactInfoItem
                            icon={<Phone className="text-orange" size={24} />}
                            title="Let's Chat"
                            detail="Available for freelance/hire"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="bg-dark-card p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden"
                >
                    <form onSubmit={onSubmit} className="relative z-10 space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                                <input
                                    className={`w-full bg-dark border border-gray-800 text-white rounded-xl p-4 focus:outline-none focus:border-orange transition-all ${errors.name ? 'border-red-500/50' : ''}`}
                                    name="name"
                                    value={form.name}
                                    onChange={onChange}
                                    placeholder="Your full name"
                                />
                                {errors.name && <p className="text-red-500 text-xs font-semibold">{errors.name}</p>}
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                                <input
                                    className={`w-full bg-dark border border-gray-800 text-white rounded-xl p-4 focus:outline-none focus:border-orange transition-all ${errors.email ? 'border-red-500/50' : ''}`}
                                    name="email"
                                    value={form.email}
                                    onChange={onChange}
                                    placeholder="hello@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs font-semibold">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                            <input
                                className={`w-full bg-dark border border-gray-800 text-white rounded-xl p-4 focus:outline-none focus:border-orange transition-all ${errors.subject ? 'border-red-500/50' : ''}`}
                                name="subject"
                                value={form.subject}
                                onChange={onChange}
                                placeholder="What are we discussing?"
                            />
                            {errors.subject && <p className="text-red-500 text-xs font-semibold">{errors.subject}</p>}
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                            <textarea
                                className={`w-full bg-dark border border-gray-800 text-white rounded-xl p-4 focus:outline-none focus:border-orange transition-all min-h-[180px] resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                                name="message"
                                value={form.message}
                                onChange={onChange}
                                placeholder="Tell me more about your project..."
                            />
                            {errors.message && <p className="text-red-500 text-xs font-semibold">{errors.message}</p>}
                        </div>

                        <button
                            className="w-full bg-orange text-white hover:bg-orange/90 shadow-lg shadow-orange/20 flex items-center justify-center gap-3 py-4 text-lg rounded-xl transition-all disabled:opacity-50"
                            disabled={status === "sending"}
                        >
                            <AnimatePresence mode="wait">
                                {status === "sending" ? (
                                    <motion.div key="sending" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }} className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Processing...
                                    </motion.div>
                                ) : (
                                    <motion.div key="idle" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }} className="flex items-center gap-2 font-bold">
                                        <Send size={20} />
                                        Send Message
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        <AnimatePresence>
                            {status === "sent" && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-green-500/10 border border-green-500/50 text-green-500 flex items-center gap-3">
                                    <CheckCircle2 size={24} />
                                    <p className="font-bold">Message sent successfully!</p>
                                </motion.div>
                            )}
                            {status === "error" && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-500 flex items-center gap-3">
                                    <AlertCircle size={24} />
                                    <p className="font-bold">Failed to send. Please try again.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
}

function ContactInfoItem({ icon, title, detail }: { icon: any, title: string, detail: string }) {
    return (
        <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 bg-dark-card border border-gray-800 rounded-2xl flex items-center justify-center group-hover:border-orange transition-all duration-300">
                {icon}
            </div>
            <div>
                <h4 className="text-white font-bold text-lg">{title}</h4>
                <p className="text-gray-500 font-medium">{detail}</p>
            </div>
        </div>
    );
}
