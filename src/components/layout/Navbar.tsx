"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLink } from '@/types';

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "L'Excellence", href: "/about" },
  { label: "Serviços", href: "/services" },
  { label: "Contato", href: "/contact" },
] as const;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Transform background opacity based on scroll
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const blurAmount = useTransform(scrollY, [0, 100], [0, 16]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity.get()})`,
        backdropFilter: `blur(${blurAmount.get()}px)`,
        borderColor: `rgba(226, 232, 240, ${borderOpacity.get()})`,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors border-b border-transparent"
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-8 h-8 bg-swiss-navy flex items-center justify-center text-white font-serif font-bold text-xl transition-transform duration-500 group-hover:rotate-180">
            C
          </div>
          <div className="hidden md:block">
            <h1 className="text-swiss-navy font-bold tracking-widest text-xs uppercase">Confœderatio</h1>
            <h2 className="text-swiss-text font-light tracking-[0.2em] text-[10px] uppercase">Logistica</h2>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-swiss uppercase transition-colors duration-300 relative group ${pathname === link.href ? 'text-swiss-navy' : 'text-swiss-text/70 hover:text-swiss-navy'}`}
            >
              {link.label}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-swiss-red transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-swiss-navy text-swiss-navy px-8 py-3 text-xs font-semibold tracking-swiss uppercase hover:bg-swiss-navy hover:text-white transition-all duration-500 ease-out"
          >
            Fale Conosco
          </motion.button>
        </Link>
      </div>
    </motion.header>
  );
};

export default Navbar;