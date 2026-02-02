"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    "Relocalisation d'Entreprise",
    "Logistique de Résidence Privée",
    "Beaux-Arts & Antiquités",
    "Service de Bureaux",
    "Stockage Sécurisé",
    "Montage de Stands pour Foires et Événements",
    "Autres"
];

import { contactSchema, ContactFormData } from '@/lib/schemas';
import { z } from 'zod';

export default function ContactPage() {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (errors[e.target.name as keyof ContactFormData]) {
            setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
        }
    };

    // Helper to map inputs to state more reliably than placeholder hacking
    const handleInputChange = (field: keyof ContactFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
        // Clear error when user types
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrors({});

        const result = contactSchema.safeParse({
            ...formData,
            service: selectedService
        });

        if (!result.success) {
            const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
            result.error.issues.forEach((error) => {
                if (error.path[0]) {
                    fieldErrors[error.path[0] as keyof ContactFormData] = error.message;
                }
            });
            setErrors(fieldErrors);
            setStatus("idle");
            return;
        }

        try {
            const res = await fetch("/api/send", {
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
                        <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-4 block">Service Dédié</span>
                        <h1 className="font-serif text-4xl md:text-6xl text-swiss-navy mb-12 whitespace-nowrap">Parlez à un Expert.</h1>

                        <div className="space-y-12 text-swiss-text">
                            <div>
                                <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-swiss-navy/40">Lancy HQ</h3>
                                <p className="font-light text-xl">Av. des Communes-Réunies 43<br />1212 Grand-Lancy<br />Suisse</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-swiss-navy/40">Contact Direct</h3>
                                <p className="font-light text-xl">+41 22 535 6333</p>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@laglobal.ch" target="_blank" rel="noopener noreferrer" className="font-light text-xl underline decoration-swiss-red/30 underline-offset-8 mt-2 block w-fit hover:text-swiss-red transition-colors">contact@laglobal.ch</a>
                            </div>
                        </div>

                        <div className="mt-24 p-8 bg-white border border-swiss-navy/5 shadow-sm">
                            <p className="font-serif italic text-swiss-navy/80">
                                "Chaque projet est supervisé par un Directeur Senior. Nous répondons à toutes les demandes dans les plus brefs délais !"
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
                                    <h3 className="font-serif text-3xl text-swiss-navy">Message Envoyé !</h3>
                                    <p className="text-swiss-text/70 text-lg max-w-md">
                                        Nous répondrons à votre demande sous peu.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-8 text-swiss-red text-xs font-bold tracking-[0.2em] uppercase hover:underline underline-offset-4"
                                    >
                                        Envoyer un nouveau message
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
                                                Nom Complet
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
                                                Entreprise / Organisation
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
                                                Email Professionnel
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
                                                Téléphone
                                            </label>
                                            {errors.phone && <span className="text-red-500 text-xs absolute -bottom-6 left-0">{errors.phone}</span>}
                                        </div>
                                    </div>

                                    {/* Custom Dropdown */}
                                    <div className="relative z-50">
                                        <label className={`absolute left-0 transition-all pointer-events-none uppercase tracking-widest ${errors.service ? 'text-red-500' : 'text-swiss-text/50'} ${selectedService || isOpen ? '-top-4 text-xs' : 'top-4 text-sm'}`}>
                                            Sélectionnez le type de service
                                        </label>
                                        <div
                                            onClick={() => setIsOpen(!isOpen)}
                                            className={`w-full border-b ${errors.service ? 'border-red-500' : 'border-swiss-navy/20'} py-4 flex justify-between items-center cursor-pointer hover:border-swiss-navy transition-colors`}
                                        >
                                            <span className={`text-lg transition-colors ${selectedService ? 'text-swiss-navy' : 'text-transparent'}`}>
                                                {selectedService || "Sélectionner"}
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
                                            Détails du Projet
                                        </label>
                                        {errors.details && <span className="text-red-500 text-xs absolute -bottom-6 left-0">{errors.details}</span>}
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full bg-swiss-navy text-white py-6 text-xs font-bold tracking-[0.2em] uppercase hover:bg-swiss-red transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === "loading" ? "Envoi en cours..." : "Envoyer la Demande"}
                                        </button>
                                        {status === "error" && (
                                            <p className="text-red-500 text-xs mt-4 text-center">Une erreur s'est produite lors de l'envoi de votre message. Veuillez vérifier les champs et réessayer.</p>
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
