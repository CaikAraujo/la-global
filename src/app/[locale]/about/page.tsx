"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('AboutPage');
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const protocolFeatures = ['visual_mapping', 'chain_responsibility', 'operational_silence'];
    const teamMembers = [
        { key: 'ops_director', bg: "/images/team/director_ops.jpg", className: "object-cover object-top grayscale" },
        { key: 'curator', bg: "/images/team/curator_arts.jpg", className: "object-cover object-top grayscale" },
        { key: 'fleet_manager', bg: "/images/team/fleet_manager.jpg", className: "object-cover object-center grayscale" }
    ];

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
                            {t.rich('hero.title', { br: () => <br /> })}
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/80 tracking-wide max-w-2xl leading-relaxed">
                            {t('hero.description')}
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
                        <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-6 block">{t('chapter1.label')}</span>
                        <h2 className="font-serif text-5xl md:text-6xl text-swiss-navy leading-[1.1] mb-12">
                            {t.rich('chapter1.title', { br: () => <br /> })}
                        </h2>
                        <div className="space-y-8 text-swiss-text text-lg font-light leading-relaxed text-justify">
                            <p>
                                <strong>{t('chapter1.text.p1')}</strong>
                            </p>
                            <p>
                                {t('chapter1.text.p2')}
                            </p>
                            <p>
                                <strong className="text-swiss-navy/80 block mb-2">{t('chapter1.text.subtitle1')}</strong>
                                {t.rich('chapter1.text.p3', { em: (chunks) => <em>{chunks}</em> })}
                            </p>
                            <p>
                                <strong className="text-swiss-navy/80 block mb-2">{t('chapter1.text.subtitle2')}</strong>
                                {t('chapter1.text.p4')}
                            </p>
                            <p>
                                {t.rich('chapter1.text.p5', { strong: (chunks) => <strong>{chunks}</strong> })}
                            </p>
                            <p className="border-l-2 border-swiss-navy/20 pl-6 italic text-swiss-dark">
                                "{t('chapter1.text.quote')}"
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
                                {t('chapter1.caption')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* Chapter 2: The Evolution (Methodology) */}
            <section className="relative py-40 overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full"
                    >
                        <source src="/Bg_video.mp4" type="video/mp4" />
                    </video>
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-swiss-navy/90 mix-blend-multiply" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <span className="border border-white/20 px-4 py-2 text-[10px] tracking-[0.3em] uppercase rounded-full backdrop-blur-md">
                            {t('chapter2.label')}
                        </span>
                        <h2 className="font-serif text-5xl md:text-7xl mt-12 mb-6">{t('chapter2.title')}</h2>
                        <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
                            {t('chapter2.description')}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {protocolFeatures.map((key, i) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-swiss-navy/80 backdrop-blur-md p-8 border border-white/10 hover:bg-swiss-navy/90 transition-all duration-500"
                            >
                                <h3 className="font-serif text-2xl mb-4 text-white">{t(`chapter2.features.${key}.title`)}</h3>
                                <p className="text-white/50 font-light leading-relaxed">{t(`chapter2.features.${key}.desc`)}</p>
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
                            <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-4 block">{t('chapter3.label')}</span>
                            <h2 className="font-serif text-5xl text-swiss-navy">{t.rich('chapter3.title', { br: () => <br /> })}</h2>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-swiss-text font-light text-lg leading-relaxed">
                                {t('chapter3.description')}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={member.key}
                                className="group relative aspect-[3/4] overflow-hidden bg-swiss-navy"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Image
                                    src={member.bg}
                                    alt={t(`chapter3.roles.${member.key}.role`)}
                                    fill
                                    className={`transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 ${member.className}`}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={100}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-swiss-navy/90 via-swiss-navy/20 to-transparent opacity-90 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <p className="text-white text-lg font-serif mb-2">{t(`chapter3.roles.${member.key}.role`)}</p>
                                    <p className="text-white/60 text-xs font-light leading-relaxed">{t(`chapter3.roles.${member.key}.desc`)}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    );
}
