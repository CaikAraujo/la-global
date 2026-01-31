"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const services = [
        "Corporate Relocation",
        "Private Estate Logistics",
        "Fine Art & Antiques",
        "Outros"
    ];

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
                        <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-4 block">Atendimento Dedicado</span>
                        <h1 className="font-serif text-5xl md:text-7xl text-swiss-navy mb-12">Fale com a Diretoria.</h1>

                        <div className="space-y-12 text-swiss-text">
                            <div>
                                <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-swiss-navy/40">Zürich HQ</h3>
                                <p className="font-light text-xl">Bahnhofstrasse 44, 8001<br />Zürich, Switzerland</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-swiss-navy/40">Contato Direto</h3>
                                <p className="font-light text-xl">+41 44 215 40 00</p>
                                <p className="font-light text-xl underline decoration-swiss-red/30 underline-offset-8 mt-2">contact@confoederatio.ch</p>
                            </div>
                        </div>

                        <div className="mt-24 p-8 bg-white border border-swiss-navy/5 shadow-sm">
                            <p className="font-serif italic text-swiss-navy/80">
                                "Cada projeto é supervisionado por um Diretor Sênior. Respondemos a todas as solicitações em até 4 horas úteis."
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
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder=" "
                                        className="peer w-full border-b border-swiss-navy/20 py-4 text-swiss-navy focus:outline-none focus:border-swiss-navy transition-colors bg-transparent text-lg"
                                    />
                                    <label className="absolute left-0 top-4 text-swiss-text/50 text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs pointer-events-none">
                                        Nome Completo
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder=" "
                                        className="peer w-full border-b border-swiss-navy/20 py-4 text-swiss-navy focus:outline-none focus:border-swiss-navy transition-colors bg-transparent text-lg"
                                    />
                                    <label className="absolute left-0 top-4 text-swiss-text/50 text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs pointer-events-none">
                                        Empresa / Organização
                                    </label>
                                </div>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder=" "
                                    className="peer w-full border-b border-swiss-navy/20 py-4 text-swiss-navy focus:outline-none focus:border-swiss-navy transition-colors bg-transparent text-lg"
                                />
                                <label className="absolute left-0 top-4 text-swiss-text/50 text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs pointer-events-none">
                                    Email Corporativo
                                </label>
                            </div>

                            {/* Custom Dropdown */}
                            <div className="relative z-50">
                                <label className={`absolute left-0 transition-all pointer-events-none uppercase tracking-widest text-swiss-text/50 ${selectedService || isOpen ? '-top-4 text-xs' : 'top-4 text-sm'}`}>
                                    Selecione o tipo de serviço
                                </label>
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="w-full border-b border-swiss-navy/20 py-4 flex justify-between items-center cursor-pointer hover:border-swiss-navy transition-colors"
                                >
                                    <span className={`text-lg transition-colors ${selectedService ? 'text-swiss-navy' : 'text-transparent'}`}>
                                        {selectedService || "Placeholder"}
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
                                    className="peer w-full border-b border-swiss-navy/20 py-4 text-swiss-navy focus:outline-none focus:border-swiss-navy transition-colors bg-transparent text-lg resize-none"
                                ></textarea>
                                <label className="absolute left-0 top-4 text-swiss-text/50 text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs pointer-events-none">
                                    Detalhes do Projeto
                                </label>
                            </div>

                            <div className="pt-4">
                                <button type="button" className="w-full bg-swiss-navy text-white py-6 text-xs font-bold tracking-[0.2em] uppercase hover:bg-swiss-red transition-colors duration-500">
                                    Enviar Solicitação
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
