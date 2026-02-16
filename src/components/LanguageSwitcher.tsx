'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../navigation';
import { motion, AnimatePresence, MotionValue } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface LanguageSwitcherProps {
    textColor?: string | MotionValue<string>;
    borderColor?: string | MotionValue<string>;
    backgroundColor?: string | MotionValue<string>;
}

export default function LanguageSwitcher({
    textColor = "#FFFFFF",
    borderColor = "rgba(255, 255, 255, 0.2)",
    backgroundColor = "rgba(255, 255, 255, 0.05)"
}: LanguageSwitcherProps) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleLanguage = (newLocale: 'en' | 'fr') => {
        router.replace(pathname, { locale: newLocale });
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const languages = [
        { code: 'fr', label: 'FR' },
        { code: 'en', label: 'EN' }
    ] as const;

    const currentLanguage = languages.find(l => l.code === locale) || languages[0];

    return (
        <div className="relative z-50" ref={containerRef}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    color: textColor,
                    borderColor: borderColor,
                    backgroundColor: backgroundColor
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
                <span className="text-xs font-bold tracking-widest uppercase">{currentLanguage.label}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <path d="M1 1L5 5L9 1" />
                </svg>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 bg-swiss-navy border border-white/10 rounded-lg shadow-xl overflow-hidden min-w-[120px]"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => toggleLanguage(lang.code as 'en' | 'fr')}
                                className={`w-full flex items-center justify-between px-4 py-3 hover:bg-white/10 transition-colors duration-200 text-left ${locale === lang.code ? 'bg-white/20' : ''
                                    }`}
                            >
                                <span className={`text-xs font-bold tracking-widest uppercase ${locale === lang.code ? 'text-white' : 'text-white/70'}`}>{lang.label}</span>
                                {locale === lang.code && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-swiss-red shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
