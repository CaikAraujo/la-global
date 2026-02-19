import React from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../navigation';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: 'fr', label: 'FR' },
        { code: 'en', label: 'EN' },
        { code: 'de', label: 'DE' },
        { code: 'it', label: 'IT' }
    ] as const;

    const switchLanguage = (newLocale: 'en' | 'fr' | 'de' | 'it') => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-3">
            {languages.map((lang, index) => {
                const isActive = locale === lang.code;
                return (
                    <React.Fragment key={lang.code}>
                        <button
                            onClick={() => switchLanguage(lang.code)}
                            className={`text-sm font-medium tracking-swiss uppercase transition-colors duration-300 relative group flex flex-col`}
                        >
                            <span className={`transition-colors duration-300 ${isActive ? 'text-[var(--nav-primary)]' : 'text-[var(--nav-link)] group-hover:text-[var(--nav-primary)]'}`}>
                                {lang.label}
                            </span>
                            <span className={`absolute -bottom-2 left-0 h-[1px] bg-[var(--nav-accent)] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </button>
                        {index < languages.length - 1 && (
                            <span className="text-[var(--nav-link)] text-xs opacity-50">|</span>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
