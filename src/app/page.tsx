"use client";

import React from 'react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import TrustMarquee from '@/components/sections/TrustMarquee';
import AboutSection from '@/components/sections/AboutSection';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-swiss-surface min-h-screen"
        >
            <main>
                <Hero />
                <TrustMarquee />
                <Services />
                <AboutSection />
            </main>
        </motion.div>
    );
}
