"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
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

                            <div className="relative">
                                <select className="w-full border-b border-swiss-navy/20 py-4 text-swiss-navy focus:outline-none bg-transparent text-lg appearance-none rounded-none">
                                    <option value="" disabled selected>Serviço de Interesse</option>
                                    <option value="corporate">Corporate Relocation</option>
                                    <option value="private">Private Estate Logistics</option>
                                    <option value="art">Fine Art & Antiques</option>
                                    <option value="other">Outros</option>
                                </select>
                            </div>

                            <div className="relative">
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
