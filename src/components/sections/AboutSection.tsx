"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AboutSection: React.FC = () => {
  const t = useTranslations('AboutSection');

  const certifications = ['iso', 'insurance', 'team'];

  return (
    <section id="about" className="py-32 bg-swiss-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Text Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-6 block flex items-center gap-2">
                <span className="w-8 h-[1px] bg-swiss-red"></span>
                {t('label')}
              </span>
              <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-swiss-navy leading-tight mb-8">
                {t.rich('title', {
                  br: () => <br />
                })}
              </h2>
              <p className="text-swiss-text font-light text-base leading-relaxed mb-10">
                {t('description')}
              </p>

              <ul className="space-y-4">
                {certifications.map((key, i) => (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 text-sm font-medium text-swiss-navy uppercase tracking-wide"
                  >
                    <div className="w-1.5 h-1.5 bg-swiss-red" />
                    {t(`certifications.${key}`)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Image Content - Parallax feel */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 h-[600px] w-full"
            >
              <Image
                src="/images/founder-meeting.jpg"
                alt="White glove service meeting"
                fill
                priority
                quality={100}
                unoptimized
                className="object-cover shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Decorative Quote Box */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-swiss-navy text-white p-6 max-w-sm shadow-xl hidden md:block"
              >
                <p className="font-serif italic text-sm leading-relaxed opacity-90">
                  "{t('quote')}"
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-swiss-red" />
                  <span className="text-[10px] uppercase tracking-widest">{t('founder')}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Background decorative square */}
            <div className="absolute top-12 right-12 w-full h-full border border-swiss-navy/10 -z-0" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;