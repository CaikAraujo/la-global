'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../navigation';
import { motion, MotionValue } from 'framer-motion';

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

    const languages = [
        { code: 'fr', label: 'FR' },
        { code: 'en', label: 'EN' },
        { code: 'de', label: 'DE' }
    ] as const;

    const switchLanguage = (newLocale: 'en' | 'fr' | 'de') => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <motion.div
            style={{
                borderColor: borderColor,
                backgroundColor: backgroundColor
            }}
            className="flex items-center p-1 rounded-full border backdrop-blur-sm transition-all duration-300 gap-1"
        >
            {languages.map((lang) => {
                const isActive = locale === lang.code;
                return (
                    <motion.button
                        key={lang.code}
                        onClick={() => switchLanguage(lang.code)}
                        className={`
                            px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300
                            ${isActive ? 'bg-swiss-red shadow-[0_2px_8px_rgba(166,25,46,0.25)]' : 'hover:bg-white/10'}
                        `}
                        style={{
                            color: isActive ? '#FFFFFF' : textColor
                        }}
                    >
                        {lang.label}
                    </motion.button>
                );
            })}
        </motion.div>
    );
}
