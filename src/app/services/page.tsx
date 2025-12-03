"use client";

import React from 'react';
import { motion } from 'framer-motion';

const detailedServices = [
    {
        id: 'corporate',
        title: 'Corporate Relocation',
        subtitle: 'Continuidade de Negócios',
        description: 'Transferência de sedes globais com foco absoluto na manutenção da produtividade. Nossa equipe técnica desmonta, transporta e remonta infraestruturas complexas de TI e escritórios executivos, garantindo que sua equipe comece a trabalhar no novo endereço como se nunca tivesse saído.',
        features: ['Gestão de Risco ISO 31000', 'Logística de Servidores Críticos', 'Descarte Certificado de Ativos', 'Layout Operacional "Turn-key"'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop'
    },
    {
        id: 'private',
        title: 'Private Estate Logistics',
        subtitle: 'Residências & Propriedades',
        description: 'Herdeiros da tradição da "Grand Hotelaria", tratamos sua mudança como a migração de um estilo de vida. Gerenciamos inventários complexos de múltiplas propriedades, adegas e bibliotecas. Não apenas transportamos caixas; recriamos a atmosfera do seu lar no destino final.',
        features: ['Embalagem de Alta Costura', 'Transporte de Veículos de Coleção', 'Catalogação de Bibliotecas', 'Design de Interiores Temporário'],
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop'
    },
    {
        id: 'art',
        title: 'Fine Art & Antiques',
        subtitle: 'Padrão Museológico',
        description: 'A divisão especializada em objetos insubstituíveis. Nossa equipe de art handlers certificados utiliza técnicas de conservação preventiva. Construímos caixas (crates) personalizadas com controle de umidade e choque para cada peça, garantindo que esculturas, telas e antiguidades viagem em ambiente estável.',
        features: ['Caixas Climatizadas (ISPM 15)', 'Trâmites Aduaneiros CITES', 'Instalação Especializada', 'Seguro "Prego-a-Prego"'],
        image: 'https://images.unsplash.com/photo-1551194368-2453e970b869?q=80&w=2574&auto=format&fit=crop'
    },
    {
        id: 'freeport',
        title: 'Swiss Free Port Storage',
        subtitle: 'Armazenamento Franco',
        description: 'Acesso aos nossos espaços em zonas francas de Genebra e Zurique. Soluções de longo prazo para colecionadores e investidores que exigem suspensão de impostos (VAT) e segurança máxima para seus ativos, mantendo-os em jurisdição neutra e ambiente controlado.',
        features: ['Isenção Fiscal Temporária', 'Showrooms Privados', 'Conservação Preventiva', 'Segurança 24/7'],
        image: 'https://images.unsplash.com/photo-1590422749897-400b65677b1e?q=80&w=2574&auto=format&fit=crop'
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-swiss-surface min-h-screen">

            {/* Header Minimalista */}
            <section className="pt-48 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl text-swiss-navy mb-8">Nossas Divisões</h1>
                    <p className="text-swiss-text font-light text-xl max-w-2xl leading-relaxed border-l-2 border-swiss-red pl-6">
                        Excelência operacional adaptada às necessidades únicas de corporações globais e grandes propriedades privadas.
                    </p>
                </motion.div>
            </section>

            {/* Lista de Serviços */}
            <section className="pb-32 px-6 md:px-12 max-w-[1800px] mx-auto space-y-32">
                {detailedServices.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center border-b border-swiss-navy/5 pb-16 last:border-0`}
                    >
                        {/* Imagem */}
                        <div className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden relative group">
                            <div className="absolute inset-0 bg-swiss-navy/10 z-10 transition-opacity duration-700 group-hover:opacity-0" />
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover filter grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-105"
                            />
                        </div>

                        {/* Texto */}
                        <div className="w-full lg:w-1/2">
                            <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-4 block">{service.subtitle}</span>
                            <h2 className="font-serif text-4xl text-swiss-dark mb-6">{service.title}</h2>
                            <p className="text-swiss-text/80 font-light text-lg leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 border-b border-swiss-navy/10 pb-2">
                                        <div className="w-1 h-1 bg-swiss-navy rounded-full" />
                                        <span className="text-sm font-medium text-swiss-text uppercase tracking-wide">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
