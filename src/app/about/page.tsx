"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutPage() {
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="bg-swiss-surface min-h-screen selection:bg-swiss-red selection:text-white">

            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: yParallax }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1596395819057-d37c880f6398?q=80&w=2574&auto=format&fit=crop"
                        alt="Grand Hotel Hallway Architecture"
                        className="w-full h-[120%] object-cover filter grayscale brightness-[0.7] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-swiss-navy/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-swiss-surface" />
                </motion.div>

                <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <span className="w-[1px] h-24 bg-white/30 mb-8 block"></span>
                        <h1 className="font-serif text-6xl md:text-8xl mb-6 tracking-tight">
                            A Grande <br /> Migração.
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/80 tracking-wide max-w-2xl leading-relaxed">
                            Da Era de Ouro da hotelaria à logística corporativa moderna. Um legado de servir quem exige o impecável.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Chapter 1: The Origin (Grand Hotel Heritage) */}
            <section className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-6 block">Capítulo I &mdash; 1924</span>
                        <h2 className="font-serif text-5xl md:text-6xl text-swiss-navy leading-[1.1] mb-12">
                            A Estação de <br /> Inverno.
                        </h2>
                        <div className="space-y-8 text-swiss-text text-lg font-light leading-relaxed text-justify">
                            <p>
                                No auge dos anos 20, as famílias mais proeminentes da Europa não viajavam leve. Elas se mudavam. Entre a temporada de ópera em Viena e o inverno em St. Moritz, casas inteiras eram transportadas: prataria, guarda-roupas de alta costura, e até mobiliário específico.
                            </p>
                            <p>
                                A <strong>Confœderatio Logistica</strong> nasceu dentro desse ecossistema. Fundada por ex-gerentes de logística dos lendários "Palace Hotels" suíços, nossa missão original era garantir que, quando um hóspede chegasse à sua suíte de inverno, seus pertences pessoais já estivessem lá — dispostos exatamente como em sua residência de verão.
                            </p>
                            <p className="border-l-2 border-swiss-navy/20 pl-6 italic text-swiss-dark">
                                "Não movíamos apenas malas. Movíamos a familiaridade. O luxo não é o objeto, mas a sensação de estar em casa, instantaneamente."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative mt-12 lg:mt-0"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80"
                            alt="Vintage Train Station Luggage"
                            className="w-full aspect-[4/5] object-cover grayscale sepia-[0.1]"
                        />
                        <div className="absolute bottom-8 -left-8 bg-white p-6 max-w-xs shadow-xl border border-swiss-navy/10 z-20 hidden md:block">
                            <p className="text-xs font-serif text-swiss-navy leading-relaxed">
                                Fig 1.0: Desembarque de itens pessoais da realeza na estação de Gstaad (c. 1928).
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Chapter 2: The Evolution (Methodology) */}
            <section className="bg-swiss-navy text-white py-40 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <span className="border border-white/20 px-4 py-2 text-[10px] tracking-[0.3em] uppercase rounded-full backdrop-blur-md">
                            Metodologia Proprietária
                        </span>
                        <h2 className="font-serif text-5xl md:text-7xl mt-12 mb-6">O Protocolo Vontobel</h2>
                        <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
                            Adaptamos a precisão da hospitalidade de luxo para a complexidade da logística moderna.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Mapeamento Visual", desc: "Antes de tocar em um item, fotografamos e mapeamos o layout original. Cada livro, cada caneta retorna ao seu lugar exato." },
                            { title: "Cadeia de Custódia", desc: "Inspirados na diplomacia, nossos processos garantem que a responsabilidade nunca seja transferida a terceiros. Controle absoluto." },
                            { title: "Silêncio Operacional", desc: "Nossas equipes treinam para operar em ambientes ocupados sem causar ruído ou distração. Somos invisíveis." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-500"
                            >
                                <h3 className="font-serif text-2xl mb-4 text-white">{item.title}</h3>
                                <p className="text-white/50 font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Chapter 3: Leadership */}
            <section className="py-32 bg-swiss-surface">
                <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row gap-16 items-end mb-24">
                        <div className="md:w-1/2">
                            <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-4 block">Liderança</span>
                            <h2 className="font-serif text-5xl text-swiss-navy">Mestres da<br />Coordenação.</h2>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-swiss-text font-light text-lg leading-relaxed">
                                Nossa diretoria mantém vivo o espírito dos fundadores. Combinamos a disciplina da engenharia suíça com a sensibilidade cultural necessária para lidar com artefatos históricos e sedes corporativas.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { role: "Diretor de Operações", desc: "20 anos de experiência em logística de feiras de arte internacionais.", bg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" },
                            { role: "Curadora de Fine Art", desc: "Especialista em conservação preventiva e embalagens climatizadas.", bg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" },
                            { role: "Gerente de Frota", desc: "Engenheiro mecânico focado em transporte de precisão sem vibração.", bg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                className="group relative aspect-[3/4] overflow-hidden"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <img src={member.bg} alt={member.role} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-swiss-navy/90 via-swiss-navy/20 to-transparent opacity-90 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <p className="text-white text-lg font-serif mb-2">{member.role}</p>
                                    <p className="text-white/60 text-xs font-light leading-relaxed">{member.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
