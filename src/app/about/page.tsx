"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutPage() {
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div className="bg-swiss-surface min-h-screen selection:bg-swiss-red selection:text-white">

            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: yParallax }}
                    className="absolute inset-x-0 -top-[10%] h-[120%] z-0"
                >


                    <Image
                        src="/excellence-hero.jpg"
                        alt="Grand Hotel Hallway Architecture"
                        fill
                        priority
                        className="object-cover brightness-[0.9]"
                        sizes="100vw"
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
                            La Grande <br /> Migration.
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/80 tracking-wide max-w-2xl leading-relaxed">
                            De l'Âge d'Or de l'hôtellerie à la logistique d'entreprise moderne. Un héritage au service de ceux qui exigent l'impeccable.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Chapter 1: The Origin (Grand Hotel Heritage) */}
            <section className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-6 block">Chapitre I &mdash; 1924</span>
                        <h2 className="font-serif text-5xl md:text-6xl text-swiss-navy leading-[1.1] mb-12">
                            La Saison <br /> d'Hiver.
                        </h2>
                        <div className="space-y-8 text-swiss-text text-lg font-light leading-relaxed text-justify">
                            <p>
                                <strong>Toute excellence naît d'un parcours.</strong>
                            </p>
                            <p>
                                LA Global a commencé modestement, agissant directement sur le terrain, apprenant de chaque opération, de chaque défi et de chaque client.
                                Ce contact constant avec la réalité opérationnelle a permis à l'entreprise d'évoluer de manière cohérente, accumulant de l'expérience dans différents environnements — du résidentiel à la logistique spécialisée — jusqu'à atteindre, naturellement, le marché corporatif.
                            </p>
                            <p>
                                <strong className="text-swiss-navy/80 block mb-2">Une croissance qui engendre la maturité</strong>
                                Cette évolution, que nous appelons <em>La Grande Migration</em>, ne représente pas une rupture, mais un processus de maturation.
                                C'est la transition d'une structure agile vers une organisation préparée pour répondre aux opérations corporatives avec précision, responsabilité et vision stratégique.
                            </p>
                            <p>
                                <strong className="text-swiss-navy/80 block mb-2">Une expertise bâtie sur la pratique</strong>
                                Aujourd'hui, LA Global opère avec des méthodes claires, des processus structurés et une capacité d'anticipation.
                                Nous comprenons que chaque entreprise a ses propres défis, des niveaux d'exigence distincts et des besoins spécifiques.
                            </p>
                            <p>
                                C'est cette lecture minutieuse du marché qui a conduit à la création de <strong>LA Global Corporate</strong> — une structure dédiée aux projets professionnels de plus grande complexité, où rigueur, confidentialité et performance vont de pair.
                            </p>
                            <p className="border-l-2 border-swiss-navy/20 pl-6 italic text-swiss-dark">
                                "L'excellence de LA Global n'est pas un discours. C'est le résultat d'un chemin parcouru."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative mt-12 lg:mt-0 h-[600px] w-full"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80"
                            alt="Vintage Train Station Luggage"
                            fill
                            className="object-cover grayscale sepia-[0.1]"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute bottom-8 -left-8 bg-white p-6 max-w-xs shadow-xl border border-swiss-navy/10 z-20 hidden md:block">
                            <p className="text-xs font-serif text-swiss-navy leading-relaxed">
                                Fig 1.0 : Débarquement des effets personnels royaux à la gare de Gstaad (c. 1928).
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* Chapter 2: The Evolution (Methodology) */}
            < section className="bg-swiss-navy text-white py-40 relative overflow-hidden" >
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <span className="border border-white/20 px-4 py-2 text-[10px] tracking-[0.3em] uppercase rounded-full backdrop-blur-md">
                            Méthodologie Propriétaire
                        </span>
                        <h2 className="font-serif text-5xl md:text-7xl mt-12 mb-6">Le Protocole Vontobel</h2>
                        <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
                            Nous adaptons la précision de l'hôtellerie de luxe à la complexité de la logistique moderne.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Cartographie Visuelle", desc: "Avant de toucher un objet, nous photographions et cartographions la disposition originale. Chaque livre, chaque stylo retrouve sa place exacte." },
                            { title: "Chaîne de Responsabilité", desc: "Inspirés par la diplomatie, nos processus garantissent que la responsabilité n'est jamais transférée à des tiers. Contrôle absolu." },
                            { title: "Silence Opérationnel", desc: "Nos équipes sont formées pour opérer dans des environnements occupés sans causer de bruit ou de distraction. Nous sommes invisibles." }
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
            </section >

            {/* Chapter 3: Leadership */}
            < section className="py-32 bg-swiss-surface" >
                <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row gap-16 items-end mb-24">
                        <div className="md:w-1/2">
                            <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-4 block">Leadership</span>
                            <h2 className="font-serif text-5xl text-swiss-navy">Maîtres de la<br />Coordination.</h2>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-swiss-text font-light text-lg leading-relaxed">
                                Notre direction maintient vivant l'esprit des fondateurs. Nous combinons la discipline de l'ingénierie suisse avec la sensibilité culturelle nécessaire pour traiter des artefacts historiques et des sièges sociaux.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { role: "Directeur des Opérations", desc: "20 ans d'expérience dans la logistique de foires d'art internationales.", bg: "/images/team/director_ops.jpg", className: "object-cover object-top grayscale" },
                            { role: "Conservatrice des Beaux-Arts", desc: "Spécialiste en conservation préventive et emballages climatisés.", bg: "/images/team/curator_arts.jpg", className: "object-cover object-top grayscale" },
                            { role: "Gestionnaire de Flotte", desc: "Ingénieur mécanique concentré sur le transport de précision sans vibration.", bg: "/images/team/fleet_manager.jpg", className: "object-cover object-center grayscale" }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                className="group relative aspect-[3/4] overflow-hidden bg-swiss-navy"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Image
                                    src={member.bg}
                                    alt={member.role}
                                    fill
                                    className={`transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 ${member.className || "object-cover grayscale"}`}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={100}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-swiss-navy/90 via-swiss-navy/20 to-transparent opacity-90 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <p className="text-white text-lg font-serif mb-2">{member.role}</p>
                                    <p className="text-white/60 text-xs font-light leading-relaxed">{member.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    );
}
