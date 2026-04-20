"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';

type SubserviceItem = {
    slug: string;
    title: string;
    description: string;
    image: string;
    alt: string;
};

type Props = {
    serviceId: string;
    subservices: SubserviceItem[];
    ctaLabel: string;
};

export default function SubservicesEditorial({ serviceId, subservices, ctaLabel }: Props) {
    return (
        <div className="flex flex-col gap-16 lg:gap-24">
            {subservices.map((subservice, index) => (
                <motion.article
                    key={`${subservice.title}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
                >
                    <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 shadow-sm border border-swiss-navy/5">
                        <div className="relative w-full h-full">
                            <Image
                                src={subservice.image}
                                alt={subservice.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 py-2 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-px w-8 bg-swiss-red/40" />
                            <span className="text-xs font-bold tracking-[0.2em] text-swiss-red/70 uppercase">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-serif text-swiss-dark mb-6 leading-tight">
                            {subservice.title}
                        </h3>
                        <p className="text-swiss-text/80 leading-relaxed font-light text-lg max-w-xl">
                            {subservice.description}
                        </p>

                        <Link
                            href={`/services/${serviceId}/${subservice.slug}`}
                            className="mt-10 self-start text-xs font-medium border-b border-swiss-navy pb-1 hover:text-swiss-red hover:border-swiss-red transition-colors uppercase tracking-wider"
                        >
                            {ctaLabel}
                        </Link>
                    </div>
                </motion.article>
            ))}
        </div>
    );
}
