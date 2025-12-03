"use client";

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "Private Banking Group", "Geneva Artport", "Swiss Insurance Global", "International Movers Assoc.",
  "Basel Art Fair", "Zürich Airport VIP", "Federation of Logistics"
];

const TrustMarquee: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-swiss-navy/5 overflow-hidden">
      <div className="flex w-full">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div key={i} className="mx-16 flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-default">
              {/* Abstract minimalist logo representation */}
              <div className="w-8 h-8 border border-swiss-navy/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-swiss-navy/30 rounded-full" />
              </div>
              <span className="font-serif text-xl text-swiss-navy italic">{partner}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustMarquee;