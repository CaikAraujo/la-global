import React from 'react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-swiss-navy text-white pt-16 pb-6 relative overflow-hidden">
      {/* Decorative Swiss Cross faint background */}
      {/* Decorative Logo faint background */}
      <img
        src="/header-logo.svg"
        alt=""
        className="absolute -top-16 -right-16 w-[300px] h-[300px] opacity-[0.03] select-none pointer-events-none object-contain brightness-0 invert"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl mb-8">{t('consultation.title')}</h2>
            <p className="text-white/60 font-light mb-8 max-w-md leading-relaxed">
              {t('consultation.description')}
            </p>
            <Link href="/contact">
              <button className="bg-white text-swiss-navy px-8 py-4 text-xs font-bold tracking-swiss uppercase hover:bg-swiss-red hover:text-white transition-colors duration-300">
                {t('consultation.cta')}
              </button>
            </Link>

            <div className="flex gap-4 mt-8">
              {/* Instagram */}
              <a href="https://www.instagram.com/laglobalcorporatesolutions?igsh=MTlkdzVtaWNidTc4eg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/share/17w1Mv9RTb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/general-310436312" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-white/40">{t('headquarters.title')}</h3>
            <address className="text-white/80 font-light not-italic leading-7 whitespace-pre-line">
              {t('headquarters.address')}<br />
              <br />
              +41 22 535 63 33<br />
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@laglobalcorporate.ch" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white/20 pb-1">info@laglobalcorporate.ch</a>
            </address>


          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-white/40">{t('legal.title')}</h3>
              <ul className="space-y-4">
                {[
                  { label: t('legal.privacy'), href: '/Politique-LaGB.pdf', target: '_blank' },
                  { label: t('legal.terms'), href: '/Conditions-Generales-LaGB.pdf', target: '_blank' },
                  { label: t('legal.insurance'), href: '/Assurances-Garanties-LaGB.pdf', target: '_blank' },
                  { label: t('legal.portal'), href: '#' }
                ].map(link => {
                  const isInternal = !link.href.endsWith('.pdf') && !link.href.startsWith('http') && link.href !== '#';
                  if (isInternal) {
                    return (
                      <li key={link.label}>
                        <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors duration-300 border-b border-transparent hover:border-white/20 pb-1">
                          {link.label}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.target || '_self'}
                        rel={link.target === '_blank' ? "noopener noreferrer" : undefined}
                        className="text-white/60 hover:text-white text-sm transition-colors duration-300 border-b border-transparent hover:border-white/20 pb-1"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[10px] tracking-widest uppercase">
            {t('copyright', { year: currentYear })}
          </p>
          <div className="flex items-center gap-4 text-white/30">
            <a href="https://github.com/CaikAraujo" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors duration-300">
              {t('developer')}
            </a>
            <span className="text-white/10">|</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors duration-300 cursor-default">{t('made_in')}</span>
              <div className="w-2 h-2">
                <svg width="100%" height="100%" viewBox="0 0 86 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="49.8" width="7.11429" height="33.2" fill="#CB0001" />
                  <rect x="7.11426" y="75.8857" width="28.4571" height="7.11429" fill="#CB0001" />
                  <rect x="11.8572" y="49.8" width="23.7143" height="7.11429" fill="#CB0001" />
                  <rect x="28.4572" y="56.9143" width="7.11429" height="16.6" fill="#CB0001" />
                  <rect width="7.11429" height="33.2" transform="matrix(1 0 0 -1 0 33.2)" fill="#CB0001" />
                  <rect width="28.4571" height="7.11429" transform="matrix(1 0 0 -1 7.11426 7.11429)" fill="#CB0001" />
                  <rect width="23.7143" height="7.11429" transform="matrix(1 0 0 -1 11.8572 33.2)" fill="#CB0001" />
                  <rect width="7.11429" height="16.6" transform="matrix(1 0 0 -1 28.4572 26.0857)" fill="#CB0001" />
                  <rect x="85.3715" y="33.2" width="7.11429" height="33.2" transform="rotate(180 85.3715 33.2)" fill="#CB0001" />
                  <rect x="78.2571" y="7.11429" width="28.4571" height="7.11429" transform="rotate(180 78.2571 7.11429)" fill="#CB0001" />
                  <rect x="73.5143" y="33.2" width="23.7143" height="7.11429" transform="rotate(180 73.5143 33.2)" fill="#CB0001" />
                  <rect x="56.9143" y="26.0857" width="7.11429" height="16.6" transform="rotate(180 56.9143 26.0857)" fill="#CB0001" />
                  <rect width="7.11429" height="33.2" transform="matrix(-1 0 0 1 85.3715 49.8)" fill="#CB0001" />
                  <rect width="28.4571" height="7.11429" transform="matrix(-1 0 0 1 78.2571 75.8857)" fill="#CB0001" />
                  <rect width="23.7143" height="7.11429" transform="matrix(-1 0 0 1 73.5143 49.8)" fill="#CB0001" />
                  <rect width="7.11429" height="16.6" transform="matrix(-1 0 0 1 56.9143 56.9143)" fill="#CB0001" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;