"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createContactSchema, ContactFormData } from '@/lib/schemas';
import { z } from 'zod';
import { useTranslations } from 'next-intl';

const serviceKeys = ['corporate', 'private', 'art', 'cleaning', 'storage', 'events'];

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    const tServices = useTranslations('ServicesSection.items');
    const tSchema = useTranslations('Schema');

    const contactSchema = createContactSchema((key) => tSchema(key));

    // Construct services list from specific keys + "Other"
    const services = [
        ...serviceKeys.map(key => tServices(`${key}.title`)),
        "Other" // TODO: Add translation key for "Other"
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        details: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [attachment, setAttachment] = useState<{ filename: string, content: string, contentType?: string } | undefined>(undefined);

    // Helper to map inputs to state more reliably than placeholder hacking
    const handleInputChange = (field: keyof ContactFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
        // Clear error when user types
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Check file size (e.g., 5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                // Set error in state instead of alert
                setErrors(prev => ({ ...prev, attachment: "File too large (max 5MB)" })); // ideally translated
                e.target.value = ""; // Reset input
                setAttachment(undefined);
                return;
            }

            // Clear any previous attachment error
            if (errors.attachment) {
                setErrors(prev => ({ ...prev, attachment: undefined }));
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                // Extract base64 content
                const content = base64String.split(',')[1];
                setAttachment({
                    filename: file.name,
                    content: content,
                    contentType: file.type
                });
            };
            reader.readAsDataURL(file);
        } else {
            setAttachment(undefined);
        }
    };

    const handleRemoveFile = () => {
        setAttachment(undefined);
        setErrors(prev => ({ ...prev, attachment: undefined }));
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrors({});

        const result = contactSchema.safeParse({
            ...formData,
            service: selectedService,
            attachment: attachment
        });

        if (!result.success) {
            const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
            result.error.issues.forEach((error: z.ZodIssue) => {
                if (error.path[0]) {
                    fieldErrors[error.path[0] as keyof ContactFormData] = error.message;
                }
            });
            setErrors(fieldErrors);
            setStatus("idle");
            return;
        }

        try {
            const res = await fetch("/send-email.php", {
                method: "POST",
                body: JSON.stringify(result.data),
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", company: "", email: "", phone: "", details: "" });
                setSelectedService("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="bg-swiss-surface min-h-screen">
            <div className="pt-32 min-h-screen flex flex-col">
                <div className="flex-grow max-w-[1800px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 py-12">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-4 block">{t('hero.label')}</span>
                        <h1 className="font-serif text-4xl md:text-6xl text-swiss-navy mb-12 whitespace-nowrap">{t('hero.title')}</h1>

                        <div className="space-y-12 text-swiss-text">
                            <div>
                                <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-swiss-navy/40">{t('info.hq_label')}</h3>
                                <p className="font-light text-xl">Av. des Communes-Réunies 43<br />1212 Grand-Lancy<br />Suisse</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-swiss-navy/40">{t('info.direct_label')}</h3>
                                <p className="font-light text-xl">+41 22 535 63 33</p>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@laglobalcorporate.ch" target="_blank" rel="noopener noreferrer" className="font-light text-xl underline decoration-swiss-red/30 underline-offset-8 mt-2 block w-fit hover:text-swiss-red transition-colors">info@laglobalcorporate.ch</a>
                            </div>
                        </div>

                        <div className="mt-24 p-8 bg-white border border-swiss-navy/5 shadow-sm">
                            <p className="font-serif italic text-swiss-navy/80">
                                "{t('quote')}"
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 md:p-12 shadow-2xl shadow-swiss-navy/5"
                    >
                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-6"
                                >
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <h3 className="font-serif text-3xl text-swiss-navy">{t('form.success.title')}</h3>
                                    <p className="text-swiss-text/70 text-lg max-w-md">
                                        {t('form.success.description')}
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-8 text-swiss-red text-xs font-bold tracking-[0.2em] uppercase hover:underline underline-offset-4"
                                    >
                                        {t('form.success.button')}
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-12"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder=" "
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange("name")}
                                                className={`peer w-full border-b ${errors.name ? 'border-red-500' : 'border-swiss-navy/20'} py-4 text-swiss-navy focus:outline-none focus:border-swiss-navy transition-colors bg-transparent text-lg`}
                                            />
                                            <label className={`absolute left-0 top-4 ${errors.name ? 'text-red-500' : 'text-swiss-text/50'} text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs pointer-events-none`}>
                                                {t('form.labels.name')}
                                            </label>
                                            {errors.name && <span className="text-red-500 text-xs absolute -bottom-6 left-0">{errors.name}</span>}
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder=" "
                                                value={formData.company}
                                                onChange={handleInputChange("company")}
                                                className="peer w-full border-b border-swiss-navy/20 py-4 text-swiss-navy focus:outline-none focus:border-swiss-navy transition-colors bg-transparent text-lg"
                                            />
                                            <label className="absolute left-0 top-4 text-swiss-text/50 text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs pointer-events-none">
                                                {t('form.labels.company')}
                                            </label>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                placeholder=" "
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange("email")}
                                                className={`peer w-full border-b ${errors.email ? 'border-red-500' : 'border-swiss-navy/20'} py-4 text-swiss-navy focus:outline-none focus:border-swiss-navy transition-colors bg-transparent text-lg`}
                                            />
                                            <label className={`absolute left-0 top-4 ${errors.email ? 'text-red-500' : 'text-swiss-text/50'} text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs pointer-events-none`}>
                                                {t('form.labels.email')}
                                            </label>
                                            {errors.email && <span className="text-red-500 text-xs absolute -bottom-6 left-0">{errors.email}</span>}
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                placeholder=" "
                                                value={formData.phone}
                                                onChange={handleInputChange("phone")}
                                                onFocus={() => {
                                                    if (!formData.phone) {
                                                        setFormData(prev => ({ ...prev, phone: "+41 " }));
                                                    }
                                                }}
                                                className={`peer w-full border-b ${errors.phone ? 'border-red-500' : 'border-swiss-navy/20'} py-4 text-swiss-navy focus:outline-none focus:border-swiss-navy transition-colors bg-transparent text-lg`}
                                            />
                                            <label className={`absolute left-0 top-4 ${errors.phone ? 'text-red-500' : 'text-swiss-text/50'} text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs pointer-events-none`}>
                                                {t('form.labels.phone')}
                                            </label>
                                            {errors.phone && <span className="text-red-500 text-xs absolute -bottom-6 left-0">{errors.phone}</span>}
                                        </div>
                                    </div>

                                    {/* Custom Dropdown */}
                                    <div className="relative z-50">
                                        <label className={`absolute left-0 transition-all pointer-events-none uppercase tracking-widest ${errors.service ? 'text-red-500' : 'text-swiss-text/50'} ${selectedService || isOpen ? '-top-4 text-xs' : 'top-4 text-sm'}`}>
                                            {t('form.labels.service')}
                                        </label>
                                        <div
                                            onClick={() => setIsOpen(!isOpen)}
                                            className={`w-full border-b ${errors.service ? 'border-red-500' : 'border-swiss-navy/20'} py-4 flex justify-between items-center cursor-pointer hover:border-swiss-navy transition-colors`}
                                        >
                                            <span className={`text-lg transition-colors ${selectedService ? 'text-swiss-navy' : 'text-transparent'}`}>
                                                {selectedService || t('form.placeholders.select')}
                                            </span>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                        {errors.service && <span className="text-red-500 text-xs absolute -bottom-6 left-0">{errors.service}</span>}

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 w-full bg-white shadow-xl shadow-swiss-navy/10 mt-2 py-2 border border-swiss-navy/5"
                                                >
                                                    {services.map((service) => (
                                                        <div
                                                            key={service}
                                                            onClick={() => {
                                                                setSelectedService(service);
                                                                setIsOpen(false);
                                                                if (errors.service) { // Clear error on selection
                                                                    setErrors(prev => ({ ...prev, service: undefined }));
                                                                }
                                                            }}
                                                            className="px-6 py-3 hover:bg-swiss-surface text-swiss-navy cursor-pointer transition-colors text-sm"
                                                        >
                                                            {service}
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className="relative z-0">
                                        <textarea
                                            rows={4}
                                            placeholder=" "
                                            value={formData.details}
                                            onChange={handleInputChange("details")}
                                            className={`peer w-full border-b ${errors.details ? 'border-red-500' : 'border-swiss-navy/20'} py-4 text-swiss-navy focus:outline-none focus:border-swiss-navy transition-colors bg-transparent text-lg resize-none`}
                                        ></textarea>
                                        <label className={`absolute left-0 top-4 ${errors.details ? 'text-red-500' : 'text-swiss-text/50'} text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs pointer-events-none`}>
                                            {t('form.labels.details')}
                                        </label>
                                        {errors.details && <span className="text-red-500 text-xs absolute -bottom-6 left-0">{errors.details}</span>}
                                    </div>

                                    {/* Custom File Input */}
                                    <div className="relative">
                                        <label className="block text-swiss-text/50 text-sm uppercase tracking-widest mb-2">
                                            {t('form.labels.attachment')}
                                        </label>
                                        <div className="flex items-center gap-4">
                                            <label className="cursor-pointer bg-swiss-navy/5 hover:bg-swiss-navy/10 text-swiss-navy py-2 px-4 rounded-full text-xs font-semibold transition-colors uppercase tracking-wider">
                                                {t('form.choose_file')}
                                                <input
                                                    type="file"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                    ref={fileInputRef}
                                                />
                                            </label>
                                            <span className={`text-sm ${errors.attachment ? 'text-red-500' : 'text-swiss-navy/60 italic'}`}>
                                                {errors.attachment ? errors.attachment : (attachment ? attachment.filename : t('form.no_file_chosen'))}
                                            </span>
                                            {attachment && (
                                                <button
                                                    type="button"
                                                    onClick={handleRemoveFile}
                                                    className="text-swiss-red hover:text-red-700 transition-colors p-1 rounded-full hover:bg-swiss-red/10"
                                                    title="Remove file"
                                                >
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full bg-swiss-navy text-white py-6 text-xs font-bold tracking-[0.2em] uppercase hover:bg-swiss-red transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === "loading" ? t('form.submitting') : t('form.submit')}
                                        </button>
                                        {status === "error" && (
                                            <p className="text-red-500 text-xs mt-4 text-center">{t('form.error')}</p>
                                        )}
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
