"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../LanguageSwitcher';
import { Logo } from '../Logo';

const Navbar: React.FC = () => {
  const t = useTranslations('Navbar');
  const tServices = useTranslations('ServicesSection');
  const { scrollY } = useScroll();
  const serviceKeys = ['cleaning', 'corporate', 'events', 'storage', 'art', 'private'] as const;

  const links = [
    { label: t('links.home'), href: "/" },
    { label: t('links.services'), href: "/services" },
    { label: t('links.excellence'), href: "/about" },
    { label: t('links.contact'), href: "/contact" },
  ] as const;

  // Add physics-based smoothing to the scroll value
  // "River current" feel: Low stiffness, higher damping for smooth, inertial flow
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 30, // Much softer spring (was 100)
    damping: 25,   // No bounce, smooth deceleration
    mass: 0.8      // More weight/inertia (was 0.1)
  });

  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const closeDropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServicesDropdown = () => {
    if (closeDropdownTimeoutRef.current) {
      clearTimeout(closeDropdownTimeoutRef.current);
    }
    setIsServicesDropdownOpen(true);
  };

  const closeServicesDropdown = () => {
    closeDropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 120);
  };

  // --- Animation Definitions ---
  // Threshold: Start at 0, end at 60px.
  // We use [0, 60] for both opacity and colors to ensure a perfectly synchronized, soft fluid transition.
  const colorRange = [0, 60];
  const opacityRange = [0, 60];

  // Background and Border (Glass Effect)
  // We return full style strings to bind directly to the style prop without re-renders
  const backgroundColor = useTransform(smoothScrollY, opacityRange, ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.75)"]);
  const backdropFilter = useTransform(smoothScrollY, opacityRange, ["blur(0px)", "blur(16px)"]);
  const borderColor = useTransform(smoothScrollY, opacityRange, ["rgba(226, 232, 240, 0)", "rgba(226, 232, 240, 1)"]);

  // Color Definitions
  // Primary (Text, Button Border): White -> Swiss Navy (#0F172A)
  const primaryColor = useTransform(smoothScrollY, colorRange, ["#FFFFFF", "#0F172A"]);

  // Secondary (Subtitle): White/80 -> Swiss Text (#334155)
  const secondaryColor = useTransform(smoothScrollY, colorRange, ["rgba(255, 255, 255, 0.8)", "#334155"]);

  // Link Normal: White/70 -> Swiss Text/70 (approx #334155 with 0.7 opacity)
  const linkColor = useTransform(smoothScrollY, colorRange, ["rgba(255, 255, 255, 0.7)", "rgba(51, 65, 85, 0.7)"]);

  // Accent (Underline): White -> Swiss Red (#A6192E)
  const accentColor = useTransform(smoothScrollY, colorRange, ["#FFFFFF", "#A6192E"]);

  // Inverse (Logo Text, Button Hover Text): Swiss Navy -> White
  const inverseColor = useTransform(smoothScrollY, colorRange, ["#0F172A", "#FFFFFF"]);

  // Switcher Background: Transparent/White Tint -> Swiss Navy
  const switcherBgColor = useTransform(smoothScrollY, colorRange, ["rgba(255, 255, 255, 0.05)", "#0F172A"]);

  // --- Computed Styles based on Route ---
  // If not Home, we provide static values (simulating the "scrolled" end state)
  // We cast as any because React.CSSProperties doesn't technically support custom vars with MotionValues
  const isHomeParams = {
    "--nav-primary": primaryColor,
    "--nav-secondary": secondaryColor,
    "--nav-link": linkColor,
    "--nav-accent": accentColor,
    "--nav-inverse": inverseColor,
  } as any;

  const isNotHomeParams = {
    "--nav-primary": "#0F172A",
    "--nav-secondary": "#334155",
    "--nav-link": "rgba(51, 65, 85, 0.7)",
    "--nav-accent": "#A6192E",
    "--nav-inverse": "#FFFFFF",
  } as any;

  const navStyles = isHome ? isHomeParams : isNotHomeParams;

  // For non-home pages, we want fixed background styles
  const finalBackgroundColor = isHome ? backgroundColor : "rgba(255, 255, 255, 0.75)";
  const finalBackdropFilter = isHome ? backdropFilter : "blur(16px)";
  const finalBorderColor = isHome ? borderColor : "rgba(226, 232, 240, 1)";

  return (
    <>
      <motion.header
        style={{
          backgroundColor: finalBackgroundColor,
          backdropFilter: finalBackdropFilter,
          borderColor: finalBorderColor,
          ...navStyles
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-colors border-b"
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-4 group">
            <div
              className="w-10 h-10 flex items-center justify-center transition-all duration-500 group-hover:rotate-180"
            >
              <Logo />
            </div>
            <div className="hidden md:block">
              <h1 className="font-bold tracking-widest text-sm uppercase transition-colors duration-300 text-[var(--nav-primary)]">LA Global</h1>
              <h2 className="font-bold tracking-[0.2em] text-[10px] uppercase transition-colors duration-300 text-[var(--nav-secondary)]">{t('logo_subtitle')}</h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {links.map((link) => {
              if (link.href === '/services') {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={openServicesDropdown}
                    onMouseLeave={closeServicesDropdown}
                  >
                    <Link
                      href={link.href}
                      aria-expanded={isServicesDropdownOpen}
                      className="text-sm font-medium tracking-swiss uppercase transition-colors duration-300 relative group flex flex-col"
                    >
                      <span className={`text-[var(--nav-link)] ${pathname === link.href ? '!text-[var(--nav-primary)]' : 'group-hover:text-[var(--nav-primary)]'} transition-colors duration-300`}>
                        {link.label}
                      </span>
                      <span className={`absolute -bottom-2 left-0 h-[1px] bg-[var(--nav-accent)] transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                    </Link>

                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 mt-4 w-72 -translate-x-1/2 rounded-lg border border-swiss-navy/10 bg-white/95 p-3 shadow-xl backdrop-blur-md"
                        >
                          <ul className="space-y-1">
                            {serviceKeys.map((serviceKey) => (
                              <li key={serviceKey}>
                                <Link
                                  href={`/services/${serviceKey}`}
                                  className="block rounded-md px-4 py-2 text-xs uppercase tracking-wider text-swiss-text transition-colors duration-200 hover:bg-swiss-navy hover:text-white"
                                >
                                  {tServices(`items.${serviceKey}.title`)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium tracking-swiss uppercase transition-colors duration-300 relative group flex flex-col"
                >
                  <span className={`text-[var(--nav-link)] ${pathname === link.href ? '!text-[var(--nav-primary)]' : 'group-hover:text-[var(--nav-primary)]'} transition-colors duration-300`}>
                    {link.label}
                  </span>
                  <span className={`absolute -bottom-2 left-0 h-[1px] bg-[var(--nav-accent)] transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="flex items-center gap-8">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <Link href="/contact" className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 text-xs font-semibold tracking-swiss uppercase border transition-all duration-500 ease-out border-[var(--nav-primary)] text-[var(--nav-primary)] hover:bg-[var(--nav-primary)] hover:text-[var(--nav-inverse)]"
              >
                {t('cta')}
              </motion.button>
            </Link>

            {/* Hamburger Button */}
            <button
              className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
                className="w-6 h-0.5 bg-current block transition-colors duration-300"
                style={{ backgroundColor: isMenuOpen ? '#FFFFFF' : 'var(--nav-primary)' }}
              />
              <motion.span
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-current block transition-colors duration-300"
                style={{ backgroundColor: isMenuOpen ? '#FFFFFF' : 'var(--nav-primary)' }}
              />
              <motion.span
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
                className="w-6 h-0.5 bg-current block transition-colors duration-300"
                style={{ backgroundColor: isMenuOpen ? '#FFFFFF' : 'var(--nav-primary)' }}
              />
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-swiss-navy flex flex-col items-center justify-center gap-8 md:hidden pt-24"
          >
            <nav className="flex flex-col items-center gap-8" style={{ "--nav-primary": "#FFFFFF", "--nav-link": "rgba(255, 255, 255, 0.7)", "--nav-accent": "#A6192E" } as React.CSSProperties}>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-white font-serif tracking-widest uppercase hover:text-swiss-red transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <div className="w-12 h-[1px] bg-white/20 my-4" />

              <LanguageSwitcher />

              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="px-8 py-3 text-sm font-bold tracking-swiss uppercase border border-white text-white hover:bg-white hover:text-swiss-navy transition-colors duration-300">
                  {t('cta')}
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;