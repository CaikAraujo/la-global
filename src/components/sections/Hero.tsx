"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          {/* Using a specific architectural/moody image */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
            alt="Swiss Corporate Office"
            className="w-full h-full object-cover filter brightness-[0.6] saturate-50 contrast-[1.1]"
          />
        </motion.div>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-swiss-navy/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-swiss-navy/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-8"
        >
          A Arte da Mudança <br />
          <span className="italic font-normal opacity-90">com Precisão Suíça.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-white/80 font-light text-lg md:text-xl max-w-2xl mx-auto tracking-wide leading-relaxed"
        >
          Logística global para corporações, residências de prestígio e belas artes.
          Discrição absoluta.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-white/60 text-[10px] uppercase tracking-widest">Discover</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div
            className="w-full h-1/2 bg-white absolute top-0"
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;