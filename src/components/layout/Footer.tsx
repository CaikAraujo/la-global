import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-swiss-navy text-white pt-32 pb-12 relative overflow-hidden">
      {/* Decorative Swiss Cross faint background */}
      <div className="absolute -top-24 -right-24 text-white/[0.03] text-[400px] font-bold leading-none select-none pointer-events-none">
        +
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">

          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl mb-8">Solicitar Atendimento</h2>
            <p className="text-white/60 font-light mb-8 max-w-md leading-relaxed">
              Para discutir as suas necessidades logísticas com discrição absoluta, entre em contato com nossa equipe. Projetos complexos são nossa especialidade.
            </p>
            <Link href="/contact">
              <button className="bg-white text-swiss-navy px-8 py-4 text-xs font-bold tracking-swiss uppercase hover:bg-swiss-red hover:text-white transition-colors duration-300">
                Fale Conosco
              </button>
            </Link>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-white/40">Sede</h3>
            <address className="text-white/80 font-light not-italic leading-7">
              Bahnhofstrasse 44<br />
              8001 Zürich<br />
              Schweiz (Switzerland)<br />
              <br />
              +41 44 215 40 00<br />
              contact@confoederatio.ch
            </address>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-white/40">Links Legais</h3>
            <ul className="space-y-4">
              {['Política de Privacidade', 'Termos de Serviço', 'Seguros & Garantias', 'Portal do Cliente'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300 border-b border-transparent hover:border-white/20 pb-1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Confœderatio Logistica AG. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/30">
            <span className="text-[10px] uppercase tracking-widest">Swiss Made Quality</span>
            <div className="w-2 h-2 bg-swiss-red rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;