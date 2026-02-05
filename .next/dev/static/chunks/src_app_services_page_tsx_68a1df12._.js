(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/services/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const detailedServices = [
    {
        id: 'corporate',
        title: 'Relocalisation d\'Entreprise',
        subtitle: 'Continuité des Affaires',
        description: 'Transition parfaite pour les sièges sociaux. Gestion complète du déménagement, minimisant l\'inactivité et avec des protocoles de confidentialité rigoureux.',
        features: [
            {
                name: 'Gestion des Risques ISO 31000',
                description: 'Protocoles rigoureux d\'identification et d\'atténuation des risques pour garantir la sécurité absolue de vos actifs lors de chaque étape.'
            },
            {
                name: 'Élimination Certifiée d\'Actifs',
                description: 'Processus sécurisé et écologique de destruction de données et de recyclage matériel, avec certificats de conformité complets.'
            },
            {
                name: 'Mise en Place Opérationnelle "Clé en Main"',
                description: 'Installation complète et configuration fonctionnelle de vos nouveaux espaces de travail, prêts à l\'emploi dès le premier jour.'
            },
            {
                name: 'Transport Spécialisé',
                description: 'Flotte de véhicules adaptés aux équipements sensibles, avec suspension pneumatique et contrôle climatique.'
            },
            {
                name: 'Planification',
                description: 'Stratégie détaillée et séquençage précis des opérations pour minimiser l\'impact sur votre activité.'
            },
            {
                name: 'Coordination du Déménagement',
                description: 'Pilotage centralisé par un chef de projet dédié, assurant une communication fluide et une exécution sans faille.'
            }
        ],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'private',
        title: 'Logistique de Résidence Privée',
        subtitle: 'Résidences & Propriétés',
        description: 'Service "gants blancs" pour résidences et propriétés. Gestion complète de l\'inventaire et recréation de l\'atmosphère domestique à destination.',
        features: [
            {
                name: 'Emballage Haute Couture',
                description: 'Matériaux de protection sur mesure et techniques d\'emballage d\'art pour vos biens les plus précieux et délicats.'
            },
            {
                name: 'Catalogage de Bibliothèques',
                description: 'Inventaire photographique et classement méthodique de vos ouvrages, respectant leur organisation d\'origine.'
            },
            {
                name: 'Design d\'Intérieur Temporaire',
                description: 'Aménagement provisoire esthétique pour maintenir votre confort durant les phases de transition.'
            },
            {
                name: 'Installation Personnalisée',
                description: 'Agencement méticuleux de votre mobilier et de vos objets personnels selon vos préférences exactes.'
            },
            {
                name: 'Gestion d\'Œuvres d\'Art et Antiquités',
                description: 'Expertise spécialisée dans la manipulation et la préservation de pièces de collection inestimables.'
            },
            {
                name: 'Services Administratifs et Conciergerie',
                description: 'Assistance complète pour les démarches administratives et services de confort liés à votre changement de résidence.'
            }
        ],
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 'art',
        title: 'Beaux-Arts & Antiquités',
        subtitle: 'Standard Muséal',
        description: 'Caisses climatisées personnalisées, transport aérien sécurisé et installation professionnelle pour des œuvres inestimables.',
        features: [
            {
                name: 'Caisses Climatisées (ISPM 15)',
                description: 'Fabrication sur mesure de caisses de transport conformes aux normes internationales, garantissant une protection optimale.'
            },
            {
                name: 'Formalités Douanières CITES',
                description: 'Gestion experte des permis et régulations pour le transport international d\'espèces protégées et d\'objets réglementés.'
            },
            {
                name: 'Installation Spécialisée',
                description: 'Montage et accrochage technique réalisés par des experts en muséographie.'
            },
            {
                name: 'Assurance "Clou à Clou"',
                description: 'Couverture complète tous risques, depuis le décrochage initial jusqu\'à l\'installation finale.'
            },
            {
                name: 'Emballage et Protection',
                description: 'Solutions de calage et de tamponnage haute performance pour une stabilité absolue durant le transport.'
            }
        ],
        image: 'https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'cleaning',
        title: 'Service de Bureaux',
        subtitle: 'Hygiène et Confort',
        description: 'Environnements impeccables, avec attention aux détails et discrétion totale, garantissant confort et productivité pour votre équipe.',
        features: [
            {
                name: 'Nettoyage Certifié',
                description: 'Protocoles d\'hygiène stricts utilisant des méthodes validées pour un environnement de travail sain.'
            },
            {
                name: 'Équipe Discrète',
                description: 'Personnel formé à la confidentialité et au travail en environnement occupé sans perturber vos opérations.'
            },
            {
                name: 'Produits Écologiques',
                description: 'Utilisation exclusive de produits de nettoyage respectueux de l\'environnement et de la santé.'
            },
            {
                name: 'Horaires Flexibles',
                description: 'Intervention adaptée à votre rythme d\'activité, y compris en dehors des heures ouvrables.'
            },
            {
                name: 'Personnel de Service',
                description: 'Mise à disposition de personnel qualifié pour le service de café, la réception ou l\'entretien continu.'
            },
            {
                name: 'Gestion de Documents',
                description: 'Archivage, tri et destruction sécurisée de vos documents confidentiels.'
            }
        ],
        image: '/images/cleaning-service.jpg'
    },
    {
        id: 'storage',
        title: 'Stockage Sécurisé',
        subtitle: 'Coffre-fort & Protection d\'Actifs',
        description: 'Stockage de sécurité maximale en zones franches. Contrôle climatique de précision pour actifs précieux et exonération fiscale temporaire.',
        features: [
            {
                name: 'Sécurité Biométrique Niveau 5',
                description: 'Accès strictement contrôlé par reconnaissance biométrique et surveillance 24/7 pour une sécurité inviolable.'
            },
            {
                name: 'Contrôle Climatique Redondant',
                description: 'Systèmes doubles de régulation de température et d\'humidité pour une préservation parfaite.'
            },
            {
                name: 'Exonération Fiscale (Entrepôt Douanier)',
                description: 'Stockage sous douane permettant de suspendre les droits et taxes jusqu\'à l\'importation définitive.'
            },
            {
                name: 'Salons de Visionnage Privés',
                description: 'Espaces élégants et sécurisés pour l\'inspection ou la présentation de vos biens stockés.'
            },
            {
                name: 'Contrôle Environnemental',
                description: 'Surveillance constante de la qualité de l\'air et protection contre les nuisibles.'
            },
            {
                name: 'Réception de Marchandises',
                description: 'Service logistique complet de réception, vérification et mise en stock de vos livraisons.'
            }
        ],
        image: '/images/secure-storage.png'
    },
    {
        id: 'events',
        title: 'Montage de Stands pour Foires et Événements',
        subtitle: 'Coordination & Précision',
        description: 'Exécution impeccable, soignant chaque détail pour garantir impact visuel, fonctionnalité et ponctualité.',
        features: [
            {
                name: 'Logistique "Juste-à-Temps"',
                description: 'Livraison coordonnée à la minute près pour s\'intégrer parfaitement au planning serré de vos événements.'
            },
            {
                name: 'Manipulation d\'Équipement Sensible',
                description: 'Savoir-faire technique pour le transport et l\'installation de matériel audiovisuel et technologique fragile.'
            },
            {
                name: 'Équipes de Montage 24/7',
                description: 'Disponibilité totale pour le montage et le démontage, quelles que soient les contraintes horaires.'
            },
            {
                name: 'Gestion de Carnet ATA',
                description: 'Administration des documents douaniers pour l\'admission temporaire de matériel d\'exposition à l\'étranger.'
            },
            {
                name: 'Audiovisuel et Multimédia',
                description: 'Installation et configuration de systèmes de présentation et d\'éclairage pour vos stands.'
            },
            {
                name: 'Habillage et Signalétique',
                description: 'Mise en place soignée de vos éléments visuels et de branding pour un impact maximal.'
            }
        ],
        image: '/images/event-logistics.png'
    }
];
const FeatureItem = ({ feature })=>{
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-swiss-navy/10 pb-2 cursor-help transition-colors duration-300 hover:border-swiss-red/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-1 h-1 rounded-full transition-colors duration-300 ${isHovered ? 'bg-swiss-red' : 'bg-swiss-navy'}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${isHovered ? 'text-swiss-red' : 'text-swiss-text'}`,
                        children: feature.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 10,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.2,
                        ease: "easeOut"
                    },
                    className: "absolute bottom-full left-0 mb-3 w-72 bg-swiss-navy text-white p-5 rounded-lg shadow-xl z-50 pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-[-6px] left-4 w-3 h-3 bg-swiss-navy transform rotate-45"
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 124,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-serif text-lg mb-2 text-white",
                            children: feature.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 125,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/80 text-sm font-light leading-relaxed",
                            children: feature.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 126,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 117,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 103,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FeatureItem, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = FeatureItem;
function ServicesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-swiss-surface min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-48 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-serif text-5xl md:text-7xl text-swiss-navy mb-8",
                            children: "Nos Divisions"
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 147,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-swiss-text font-light text-xl max-w-2xl leading-relaxed border-l-2 border-swiss-red pl-6",
                            children: "Excellence opérationnelle adaptée aux besoins uniques des entreprises mondiales et des grandes propriétés privées."
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 148,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 142,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 141,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pb-32 px-6 md:px-12 max-w-[1800px] mx-auto space-y-32",
                children: detailedServices.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        id: service.id,
                        className: `flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center border-b border-swiss-navy/5 pb-16 last:border-0`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-1/2 aspect-[4/3] overflow-hidden relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-swiss-navy/10 z-10 transition-opacity duration-700 group-hover:opacity-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: service.image,
                                        alt: service.title,
                                        fill: true,
                                        className: "object-cover filter grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-105",
                                        sizes: "(max-width: 1024px) 100vw, 50vw"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 163,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-swiss-red font-bold text-xs tracking-widest uppercase mb-4 block",
                                        children: service.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-serif text-4xl text-swiss-dark mb-6",
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-swiss-text/80 font-light text-lg leading-relaxed mb-8",
                                        children: service.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6",
                                        children: service.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                                feature: feature
                                            }, i, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 175,
                                columnNumber: 25
                            }, this)
                        ]
                    }, service.id, true, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 157,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 138,
        columnNumber: 9
    }, this);
}
_c1 = ServicesPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "FeatureItem");
__turbopack_context__.k.register(_c1, "ServicesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_services_page_tsx_68a1df12._.js.map