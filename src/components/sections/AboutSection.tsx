"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection: React.FC = () => {
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
                Institutionnel
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-swiss-navy leading-tight mb-8">
                Bem-vindo à LA GLOBAL <br />sua parceira em soluções
              </h2>
              <p className="text-swiss-text font-light text-base leading-relaxed mb-10">
                Pensar no futuro é parte essencial da nossa filosofia. Acreditamos que inovação, qualidade e responsabilidade caminham juntas para gerar valor real e duradouro aos nossos clientes. Atuamos com uma visão de longo prazo, desenvolvendo soluções reais a necessidade do nossos clientes.
              </p>

              <ul className="space-y-4">
                {['Certification ISO 27001', 'Assurance Intégrale "All-Risk"', 'Équipe Multilingue (EN, FR, DE, PT)'].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 text-sm font-medium text-swiss-navy uppercase tracking-wide"
                  >
                    <div className="w-1.5 h-1.5 bg-swiss-red" />
                    {item}
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
                src="/images/CEOs.jpeg"
                alt="White glove service meeting"
                fill
                className="object-cover shadow-2xl filter sepia-[0.1]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Decorative Quote Box */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-12 -left-12 bg-swiss-navy text-white p-10 max-w-md shadow-xl hidden md:block"
              >
                <p className="font-serif italic text-base leading-relaxed opacity-90">
                  "Como prestadores de serviços, nosso compromisso é compreender profundamente suas necessidades e oferecer soluções completas, personalizadas e confiáveis. Para isso, trabalhamos com tecnologias reconhecidas, processos bem definidos e um alto padrão de execução, garantindo resultados consistentes hoje — e preparados para o amanhã.”"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-swiss-red" />
                  <span className="text-[10px] uppercase tracking-widest">Anderson Dias - Fundador</span>
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