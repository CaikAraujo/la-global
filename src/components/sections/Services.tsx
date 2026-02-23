"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/navigation';
import { ServiceItem } from '../../types';
import { useTranslations } from 'next-intl';

const serviceKeys = ['corporate', 'private', 'art', 'cleaning', 'storage', 'events'];

const serviceImages: Record<string, string> = {
  corporate: '/images/corporate-service.jpg',
  private: '/images/private-service.jpg',
  art: '/images/art-service.jpg',
  cleaning: '/images/cleaning-service.jpg',
  storage: '/images/secure-storage.png',
  events: '/images/event-logistics.png'
};

const Services: React.FC = () => {
  const t = useTranslations('ServicesSection');

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
            <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-2 block">{t('label')}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-swiss-navy">{t('title')}</h2>
          </div>
          <p className="text-swiss-text/70 max-w-md text-sm leading-relaxed mt-6 md:mt-0 text-right md:text-left">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8">
          {serviceKeys.map((key, index) => (
            <Link href={`/services#${key}`} key={key} className="block group cursor-pointer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="overflow-hidden relative aspect-[2/1] mb-4 bg-swiss-navy/5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full h-full"
                  >
                    <Image
                      src={serviceImages[key]}
                      alt={t(`items.${key}.title`)}
                      fill
                      className="object-cover filter grayscale transition-all duration-700 group-hover:grayscale-0"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 border border-swiss-navy/0 transition-colors duration-700 group-hover:border-swiss-navy/20 pointer-events-none" />
                </div>

                <div className="pr-8">
                  <span className="text-[10px] tracking-widest uppercase text-swiss-text/50 mb-2 block group-hover:text-swiss-red transition-colors duration-500">
                    {t(`items.${key}.subtitle`)}
                  </span>
                  <h3 className="font-serif text-2xl text-swiss-dark mb-4 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-swiss-text/70 font-light text-sm leading-7 border-l border-swiss-navy/10 pl-4 group-hover:border-swiss-navy/40 transition-colors duration-500">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;