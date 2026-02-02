"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceItem } from '../../types';

const services: ServiceItem[] = [
  {
    id: 'corp',
    title: 'Relocalisation d\'Entreprise',
    subtitle: 'Continuité des Affaires',
    description: 'Transition parfaite pour les sièges sociaux. Gestion complète du déménagement, minimisant l\'inactivité et avec des protocoles de confidentialité rigoureux.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'private',
    title: 'Logistique de Résidence Privée',
    subtitle: 'Résidences & Propriétés',
    description: 'Service "gants blancs" pour résidences et propriétés. Gestion complète de l\'inventaire et recréation de l\'atmosphère domestique à destination.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'art',
    title: 'Beaux-Arts & Antiquités',
    subtitle: 'Standard Muséal',
    description: 'Caisses climatisées personnalisées, transport aérien sécurisé et installation professionnelle pour des œuvres inestimables.',
    image: 'https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'diplomatic',
    title: 'Service de Nettoyage de Bureaux',
    subtitle: 'Hygiène et Confort',
    description: 'Environnements impeccables, avec attention aux détails et discrétion totale, garantissant confort et productivité pour votre équipe.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'storage',
    title: 'Stockage Sécurisé',
    subtitle: 'Coffre-fort & Protection d\'Actifs',
    description: 'Stockage de sécurité maximale en zones franches. Contrôle climatique de précision pour actifs précieux et exonération fiscale temporaire.',
    image: '/images/secure-storage.png'
  },
  {
    id: 'events',
    title: 'Montage de Stands pour Foires et Événements',
    subtitle: 'Coordination & Précision',
    description: 'Exécution impeccable, soignant chaque détail pour garantir impact visuel, fonctionnalité et ponctualité.',
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
            <h2 className="font-serif text-4xl md:text-5xl text-swiss-navy">Services Spécialisés</h2>
          </div>
          <p className="text-swiss-text/70 max-w-md text-sm leading-relaxed mt-6 md:mt-0 text-right md:text-left">
            Nous portons votre opération à un nouveau niveau d’excellence, en soignant chaque détail pour des résultats sophistiqués et performants.
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
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover filter grayscale transition-all duration-700 group-hover:grayscale-0"
                    sizes="(max-width: 1024px) 100vw, 33vw"
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