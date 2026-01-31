"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceItem } from '../../types';

const services: ServiceItem[] = [
  {
    id: 'corp',
    title: 'Corporate Relocation',
    subtitle: 'Business Continuity',
    description: 'Transição perfeita para sedes corporativas. Gestão de TI segura, minimização de inatividade e protocolos de confidencialidade rigorosos.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'private',
    title: 'Private Estate Moving',
    subtitle: 'Lifestyle Logistics',
    description: 'Serviço de luvas brancas para residências e propriedades. Gestão completa de inventário e recriação do ambiente doméstico no destino.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'art',
    title: 'Fine Art Logistics',
    subtitle: 'Museum Standard',
    description: 'Caixas climatizadas personalizadas (crates), transporte aéreo seguro e instalação profissional para obras de valor inestimável.',
    image: 'https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'diplomatic',
    title: 'Diplomatic Services',
    subtitle: 'Protocol & Security',
    description: 'Logística especializada para missões diplomáticas e governamentais. Protocolos de segurança rigorosos e discrição absoluta garantida.',
    image: '/images/diplomatic-convoy.png'
  },
  {
    id: 'storage',
    title: 'Secure Storage',
    subtitle: 'Vault & Asset Protection',
    description: 'Armazenamento de segurança máxima em zonas francas. Controle climático de precisão para ativos valiosos e isenção fiscal temporária.',
    image: '/images/secure-storage.png'
  },
  {
    id: 'events',
    title: 'Event Logistics',
    subtitle: 'Coordination & Precision',
    description: 'Gestão completa para eventos de alto perfil. Sincronia perfeita para transporte, montagem e desmontagem de estruturas complexas.',
    image: '/images/event-logistics.png'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 bg-swiss-surface relative">
      {/* Subtle decorative grid line */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-swiss-navy/5 hidden lg:block" />
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-swiss-navy/5 hidden lg:block" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col md:flex-row justify-between items-end border-b border-swiss-navy/10 pb-4"
        >
          <div>
            <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-2 block">Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl text-swiss-navy">Serviços Especializados</h2>
          </div>
          <p className="text-swiss-text/70 max-w-md text-sm leading-relaxed mt-6 md:mt-0 text-right md:text-left">
            Uma abordagem holística para logística complexa, garantindo que cada item chegue ao seu destino com a dignidade que merece.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden relative aspect-[2/1] mb-4 bg-swiss-navy/5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                </motion.div>
                <div className="absolute inset-0 border border-swiss-navy/0 transition-colors duration-700 group-hover:border-swiss-navy/20 pointer-events-none" />
              </div>

              <div className="pr-8">
                <span className="text-[10px] tracking-widest uppercase text-swiss-text/50 mb-2 block group-hover:text-swiss-red transition-colors duration-500">
                  {service.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-swiss-dark mb-4 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                  {service.title}
                </h3>
                <p className="text-swiss-text/70 font-light text-sm leading-7 border-l border-swiss-navy/10 pl-4 group-hover:border-swiss-navy/40 transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;