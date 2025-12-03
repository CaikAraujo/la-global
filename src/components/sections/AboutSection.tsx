"use client";

import React from 'react';
import { motion } from 'framer-motion';

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
                Institucional
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-swiss-navy leading-tight mb-8">
                O Padrão <br />Suíço.
              </h2>
              <p className="text-swiss-text font-light text-base leading-relaxed mb-6">
                Não somos apenas uma empresa de mudanças; somos guardiões do seu patrimônio durante transições críticas. Nossa filosofia é baseada na estabilidade da Confederação Suíça: neutra, segura e inabalável.
              </p>
              <p className="text-swiss-text font-light text-base leading-relaxed mb-10">
                Desde 1924, servimos famílias reais, corporações Fortune 500 e museus internacionais com uma discrição que se tornou nossa marca registrada.
              </p>

              <ul className="space-y-4">
                {['Certificação ISO 27001', 'Seguro Integral "All-Risk"', 'Equipe Multilíngue (EN, FR, DE, PT)'].map((item, i) => (
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
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                alt="White glove service meeting"
                className="w-full h-[600px] object-cover shadow-2xl filter sepia-[0.1]"
              />

              {/* Decorative Quote Box */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-12 -left-12 bg-swiss-navy text-white p-12 max-w-sm shadow-xl hidden md:block"
              >
                <p className="font-serif italic text-xl leading-relaxed opacity-90">
                  "A verdadeira elegância está no que não se vê: a ausência de ruído, a ausência de erro."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-swiss-red" />
                  <span className="text-[10px] uppercase tracking-widest">CEO, Confœderatio</span>
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