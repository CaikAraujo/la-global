export type SecureDisposalContent = {
    eyebrow: string;
    hero: string;
    pillars: Array<{ title: string; description: string }>;
    methodologyTitle: string;
    methodologySteps: string[];
    trustTitle: string;
    trustItems: string[];
    impactTitle: string;
    impactText: string;
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export type OfficeMaintenanceContent = {
    eyebrow: string;
    hero: string;
    essentialsTitle: string;
    essentials: Array<{ title: string; description: string }>;
    agileTitle: string;
    agileText: string;
    sustainabilityTitle: string;
    sustainabilityItems: string[];
    correctiveTitle: string;
    correctiveText: string;
    plansTitle: string;
    plans: Array<{ name: string; details: string; response: string }>;
    closingTitle: string;
    closingText: string;
    ctaPrimaryLabel: string;
};

/** Cleaning f4 (Mise en place operationnelle) uses same editorial model as maintenance pages. */
export type OfficeSuppliesManagementContent = OfficeMaintenanceContent;

export type OfficeCleaningContent = {
    eyebrow: string;
    hero: string;
    productivityTitle: string;
    productivityText: string;
    servicesTitle: string;
    services: Array<{ title: string; description: string }>;
    sustainabilityTitle: string;
    sustainabilityText: string;
    methodTitle: string;
    methodSteps: string[];
    whyChooseTitle: string;
    whyChooseItems: string[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export type CorporateFacadeContent = {
    eyebrow: string;
    hero: string;
    impactTitle: string;
    impactText: string;
    expertiseTitle: string;
    expertiseText: string;
    safetyTitle: string;
    safetyItems: string[];
    resultsTitle: string;
    resultsText: string;
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export type CorporateConciergeContent = {
    eyebrow: string;
    hero: string;
    whatIsTitle: string;
    whatIsText: string;
    servicesTitle: string;
    servicesItems: string[];
    benefitsTitle: string;
    benefitsItems: string[];
    implementationTitle: string;
    implementationItems: string[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export type CorporateRelocationContent = {
    eyebrow: string;
    hero: string;
    definitionTitle: string;
    definitionText: string;
    pillarsTitle: string;
    pillars: string[];
    solutionsTitle: string;
    solutionsItems: string[];
    differentiatorsTitle: string;
    differentiatorsItems: string[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export type CorporateTransportContent = {
    eyebrow: string;
    hero: string;
    essenceTitle: string;
    essenceText: string;
    expertiseTitle: string;
    expertiseItems: string[];
    technicalTitle: string;
    technicalItems: string[];
    benefitsTitle: string;
    benefitsItems: string[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export type ShowroomAssemblyContent = {
    eyebrow: string;
    hero: string;
    artTitle: string;
    artText: string;
    processTitle: string;
    processSteps: string[];
    segmentsTitle: string;
    segmentsItems: string[];
    benefitsTitle: string;
    benefitsItems: string[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export type CorporateFurnitureInstallContent = {
    eyebrow: string;
    hero: string;
    importanceTitle: string;
    importanceText: string;
    scopeTitle: string;
    scopeItems: string[];
    processTitle: string;
    processSteps: string[];
    benefitsTitle: string;
    benefitsItems: string[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export type ArtPackagingContent = {
    eyebrow: string;
    hero: string;
    importanceTitle: string;
    importanceText: string;
    risksTitle: string;
    risksText: string;
    materialsTitle: string;
    materialsItems: string[];
    processTitle: string;
    processSteps: string[];
    benefitsTitle: string;
    benefitsItems: string[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

/** Same section model as ArtPackagingContent; rendered with ArtPackagingLayout. */
export type ArtCustomsFormalitiesContent = ArtPackagingContent;

/** Beaux-Arts: collection vehicle transport editorial page (art/f4). */
export type ArtCollectionVehicleTransportContent = ArtPackagingContent;

/** Private residence logistics: haute couture packaging editorial page (private/f1). */
export type PrivateHauteCouturePackagingContent = ArtPackagingContent;

/** Private residence logistics: fine art and antiques management editorial page (private/f2). */
export type PrivateArtAntiquesManagementContent = ArtPackagingContent;

/** Private residence logistics: admin and concierge services editorial page (private/f3). */
export type PrivateAdminConciergeContent = ArtPackagingContent;

/** Private residence logistics: furniture relocation and transport editorial page (private/f4). */
export type PrivateFurnitureRelocationTransportContent = ArtPackagingContent;

/** Beaux-Arts / corporate furniture: installation editorial page (art/f3). */
export type ArtSpecializedInstallationContent = {
    eyebrow: string;
    hero: string;
    importanceTitle: string;
    importanceText: string;
    furnitureTypesTitle: string;
    furnitureTypesIntro: string;
    furnitureTypesItems: string[];
    furnitureTypesOutro: string;
    toolsTitle: string;
    toolsIntro: string;
    toolsItems: string[];
    toolsOutro: string;
    processTitle: string;
    processSteps: string[];
    benefitsTitle: string;
    benefitsItems: string[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export type HospitalityExcellenceContent = {
    eyebrow: string;
    hero: string;
    definitionTitle: string;
    definitionText: string;
    pillarsTitle: string;
    pillarsItems: string[];
    transformingServicesTitle: string;
    transformingServicesItems: string[];
    guestBenefitsTitle: string;
    guestBenefitsItems: string[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export type AtaCarnetManagementContent = {
    eyebrow: string;
    hero: string;
    simplificationTitle: string;
    simplificationText: string;
    coveredCategoriesTitle: string;
    coveredCategoriesItems: string[];
    cycleTitle: string;
    cycleSteps: string[];
    strategicBenefitsTitle: string;
    strategicBenefitsItems: string[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export type GoodsReceptionContent = {
    eyebrow: string;
    hero: string;
    operationalFoundationTitle: string;
    operationalFoundationText: string;
    technicalStepsTitle: string;
    technicalSteps: string[];
    qualityControlTitle: string;
    qualityControlItems: string[];
    strategicBenefitsTitle: string;
    strategicBenefitsItems: string[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export type BondedWarehouseContent = {
    eyebrow: string;
    hero: string;
    strategicPowerTitle: string;
    strategicPowerText: string;
    mechanismsTitle: string;
    mechanismsItems: string[];
    operationsTitle: string;
    operationsItems: string[];
    strategicBenefitsTitle: string;
    strategicBenefitsItems: string[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimaryLabel: string;
};

export const secureDisposalContentByLocale: Record<string, SecureDisposalContent> = {
    fr: {
        eyebrow: 'Securite et recyclage des donnees',
        hero: 'La securite de vos donnees est notre priorite absolue. Nous combinons destruction certifiee, tracabilite continue et recyclage responsable pour proteger votre entreprise et votre reputation.',
        pillars: [
            {
                title: 'Solution certifiee et securisee',
                description:
                    'Destruction certifiee des documents papier (DIN 66399, niveaux P-3 a P-7) et des supports numeriques, avec certificat de conformite pour chaque intervention.',
            },
            {
                title: 'Recyclage DEEE',
                description:
                    'Demantelement securise et recyclage des equipements electroniques selon les normes environnementales les plus strictes.',
            },
            {
                title: 'Economie circulaire',
                description:
                    'Transformation des dechets en nouvelles ressources, avec 100% des materiaux diriges vers des filieres de recyclage specialisees.',
            },
            {
                title: 'Impact RSE mesurable',
                description:
                    'Rapports detailles sur les arbres preserves, l eau economisee et la reduction de l empreinte carbone de votre organisation.',
            },
        ],
        methodologyTitle: 'Methodologie transparente en 4 etapes',
        methodologySteps: [
            'Audit de vos flux de documents et supports sensibles.',
            'Collecte securisee avec chaine de tracabilite ininterrompue.',
            'Broyage haute securite conforme aux exigences RGPD et DIN 66399.',
            'Recyclage certifie avec preuve de conformite et reporting.',
        ],
        trustTitle: 'Pourquoi nous confier vos documents sensibles',
        trustItems: [
            'Conformite RGPD et DIN 66399 garantie.',
            'Point de contact unique pour l ensemble du processus.',
            'Zero dechet valorisable perdu, selon le principe de circularite.',
        ],
        impactTitle: 'Conformite et tranquillite d esprit',
        impactText:
            'Notre objectif est de proteger vos donnees, eviter les risques de sanctions et renforcer la confiance de vos clients et partenaires.',
        ctaTitle: 'Pret a securiser votre entreprise',
        ctaText: 'Contactez-nous des aujourd hui pour un audit gratuit et un devis personnalise sous 24 heures.',
        ctaPrimaryLabel: 'Demander un audit',
    },
    en: {
        eyebrow: 'Data security and recycling',
        hero: 'Your data security is our absolute priority. We combine certified destruction, full traceability, and responsible recycling to protect your business and reputation.',
        pillars: [
            {
                title: 'Certified and secure solution',
                description:
                    'Certified destruction of paper records (DIN 66399, levels P-3 to P-7) and digital media, with a compliance certificate for every operation.',
            },
            {
                title: 'WEEE recycling',
                description:
                    'Secure dismantling and recycling of electronic waste according to strict environmental standards.',
            },
            {
                title: 'Circular economy',
                description:
                    'Waste is transformed into new resources, with 100% of materials routed to specialised recycling channels.',
            },
            {
                title: 'Measurable CSR impact',
                description:
                    'Detailed reporting on trees preserved, water saved, and carbon footprint reduction for your organisation.',
            },
        ],
        methodologyTitle: 'Transparent 4-step methodology',
        methodologySteps: [
            'Audit of your sensitive document and media flows.',
            'Secure collection with uninterrupted chain of custody.',
            'High-security shredding compliant with GDPR and DIN 66399.',
            'Certified recycling with compliance proof and reporting.',
        ],
        trustTitle: 'Why trust us with sensitive documents',
        trustItems: [
            'Guaranteed GDPR and DIN 66399 compliance.',
            'Single point of contact across the full operation.',
            'Zero avoidable waste loss through circular processing.',
        ],
        impactTitle: 'Compliance and peace of mind',
        impactText:
            'Our mission is to protect your data, reduce regulatory risk, and reinforce trust with clients and stakeholders.',
        ctaTitle: 'Ready to secure your business',
        ctaText: 'Contact us today for a free audit and a tailored quote within 24 hours.',
        ctaPrimaryLabel: 'Request an audit',
    },
    de: {
        eyebrow: 'Datensicherheit und recycling',
        hero: 'Die Sicherheit Ihrer Daten hat fuer uns hoechste Prioritaet. Wir verbinden zertifizierte Vernichtung, lueckenlose Nachverfolgbarkeit und verantwortungsvolles Recycling zum Schutz Ihres Unternehmens.',
        pillars: [
            {
                title: 'Zertifizierte sichere loesung',
                description:
                    'Zertifizierte Vernichtung von Papierdokumenten (DIN 66399, Stufen P-3 bis P-7) und digitalen Datentraegern, mit Konformitaetszertifikat fuer jeden Einsatz.',
            },
            {
                title: 'Elektroaltgeraete recycling',
                description:
                    'Sichere Demontage und Recycling von Elektro- und Elektronikaltgeraeten nach strengsten Umweltstandards.',
            },
            {
                title: 'Kreislaufwirtschaft',
                description:
                    'Abfaelle werden zu neuen Ressourcen, mit 100% der Materialien in spezialisierten Recyclingkanaelen.',
            },
            {
                title: 'Messbarer csr effekt',
                description:
                    'Detaillierte Berichte ueber gerettete Baeume, eingespartes Wasser und reduzierte CO2-Bilanz.',
            },
        ],
        methodologyTitle: 'Transparente 4-schritt methodik',
        methodologySteps: [
            'Audit Ihrer sensiblen Dokumenten- und Datentraegerstroeme.',
            'Sichere Abholung mit lueckenloser Nachverfolgbarkeit.',
            'Hochsicherheits-Schreddern gemaess DSGVO und DIN 66399.',
            'Zertifiziertes Recycling mit Nachweis und Reporting.',
        ],
        trustTitle: 'Warum uns sensible dokumente anvertrauen',
        trustItems: [
            'Garantierte DSGVO- und DIN-66399-Konformitaet.',
            'Ein zentraler Ansprechpartner fuer den gesamten Ablauf.',
            'Keine vermeidbaren Materialverluste dank Kreislaufprinzip.',
        ],
        impactTitle: 'Konformitaet und sicherheit',
        impactText:
            'Wir schuetzen Ihre Daten, senken das Sanktionsrisiko und staerken das Vertrauen von Kunden und Partnern.',
        ctaTitle: 'Bereit ihr unternehmen abzusichern',
        ctaText: 'Kontaktieren Sie uns fuer ein kostenloses Audit und ein individuelles Angebot innerhalb von 24 Stunden.',
        ctaPrimaryLabel: 'Audit anfragen',
    },
    it: {
        eyebrow: 'Sicurezza e riciclo dei dati',
        hero: 'La sicurezza dei vostri dati e la nostra priorita assoluta. Uniamo distruzione certificata, tracciabilita continua e riciclo responsabile per proteggere la vostra azienda.',
        pillars: [
            {
                title: 'Soluzione certificata e sicura',
                description:
                    'Distruzione certificata di documenti cartacei (DIN 66399, livelli P-3 a P-7) e supporti digitali, con certificato di conformita per ogni intervento.',
            },
            {
                title: 'Riciclo raee',
                description:
                    'Smontaggio sicuro e riciclo di rifiuti elettronici secondo standard ambientali rigorosi.',
            },
            {
                title: 'Economia circolare',
                description:
                    'Trasformiamo i rifiuti in nuove risorse, con il 100% dei materiali avviato a filiere specializzate.',
            },
            {
                title: 'Impatto esg misurabile',
                description:
                    'Report dettagliati su alberi preservati, acqua risparmiata e riduzione dell impronta carbonica.',
            },
        ],
        methodologyTitle: 'Metodologia trasparente in 4 fasi',
        methodologySteps: [
            'Audit dei flussi di documenti e supporti sensibili.',
            'Raccolta sicura con catena di custodia continua.',
            'Triturazione ad alta sicurezza conforme a GDPR e DIN 66399.',
            'Riciclo certificato con prova di conformita e reporting.',
        ],
        trustTitle: 'Perche affidarci i vostri documenti sensibili',
        trustItems: [
            'Conformita garantita a GDPR e DIN 66399.',
            'Un unico referente per tutto il processo.',
            'Nessuna perdita evitabile di materiali riciclabili.',
        ],
        impactTitle: 'Conformita e tranquillita',
        impactText:
            'Riduciamo il rischio normativo, proteggiamo i dati e rafforziamo la fiducia di clienti e partner.',
        ctaTitle: 'Pronti a proteggere la vostra impresa',
        ctaText: 'Contattateci oggi per un audit gratuito e un preventivo personalizzato entro 24 ore.',
        ctaPrimaryLabel: 'Richiedi audit',
    },
};

export const officeMaintenanceContentByLocale: Record<string, OfficeMaintenanceContent> = {
    fr: {
        eyebrow: 'Maintenance et ajustements de bureaux',
        hero: 'Nous transformons vos bureaux en environnements performants, sains et adaptes a vos nouvelles exigences operationnelles.',
        essentialsTitle: 'Pourquoi cette maintenance est essentielle',
        essentials: [
            {
                title: 'Image de marque',
                description: 'Des espaces impeccables renforcent la confiance de vos clients, partenaires et collaborateurs.',
            },
            {
                title: 'Continuite des activites',
                description: 'Une approche proactive reduit les pannes et limite les interruptions couteuses.',
            },
            {
                title: 'Bien-etre des equipes',
                description: 'Des ajustements ergonomiques ciblent confort, securite et prevention des troubles physiques.',
            },
            {
                title: 'Flexibilite des espaces',
                description: 'Vos bureaux evoluent rapidement entre zones individuelles, coworking et reunions.',
            },
        ],
        agileTitle: 'Facility management agile',
        agileText:
            'Nous orchestrons la reorganisation rapide des espaces, la gestion intelligente des postes/salles et les services de conciergerie quotidienne pour soutenir votre coeur de metier.',
        sustainabilityTitle: 'Gestion durable',
        sustainabilityItems: [
            'Efficacite energetique: LED, capteurs de presence et optimisation des consommations.',
            'Tri selectif et sensibilisation des equipes au recyclage.',
            'Surveillance de la qualite de l air interieur pour un cadre sain et productif.',
        ],
        correctiveTitle: 'Maintenance corrective 24h/7j',
        correctiveText:
            'Pour les urgences (electricite, fuites, acces), nos equipes interviennent 24h/7j avec suivi digitalise en temps reel et reporting transparent.',
        plansTitle: 'Forfaits de maintenance flexibles',
        plans: [
            {
                name: 'Pack Start',
                details: 'Pour TPE/PME, interventions structurees et ajustements ponctuels.',
                response: 'SLA: reponse sous 8h',
            },
            {
                name: 'Pack Business',
                details: 'Pour sites multi-equipes, maintenance reguliere et support handyman renforce.',
                response: 'SLA: reponse intermediaire acceleree',
            },
            {
                name: 'Pack Corporate',
                details: 'Pour grands comptes, couverture prioritaire et pilotage operationnel continu.',
                response: 'SLA: urgence en moins de 4h',
            },
        ],
        closingTitle: 'Votre partenaire de confiance',
        closingText:
            'Concentrez-vous sur votre activite: nous garantissons expertise pluridisciplinaire, respect des normes de securite et transparence complete sur les performances.',
        ctaPrimaryLabel: 'Demander un audit',
    },
    en: {
        eyebrow: 'Office maintenance and adjustments',
        hero: 'We turn your offices into high-performance, healthy, and adaptable work environments.',
        essentialsTitle: 'Why this maintenance is essential',
        essentials: [
            {
                title: 'Brand perception',
                description: 'Well-maintained spaces strengthen trust with clients, partners, and teams.',
            },
            {
                title: 'Business continuity',
                description: 'Proactive maintenance reduces failures and prevents costly downtime.',
            },
            {
                title: 'Employee wellbeing',
                description: 'Ergonomic adjustments improve comfort, safety, and long-term productivity.',
            },
            {
                title: 'Workplace flexibility',
                description: 'Spaces are rapidly adapted for focused work, collaboration, or meetings.',
            },
        ],
        agileTitle: 'Agile facility management',
        agileText:
            'We handle fast workspace reconfiguration, smart desk/room allocation, and day-to-day concierge support so your teams stay focused on core priorities.',
        sustainabilityTitle: 'Sustainable operations',
        sustainabilityItems: [
            'Energy efficiency through LED upgrades and presence sensors.',
            'Selective waste sorting and team awareness on recycling.',
            'Indoor air-quality monitoring for healthier and more productive offices.',
        ],
        correctiveTitle: '24/7 corrective maintenance',
        correctiveText:
            'For urgent issues (electrical faults, leaks, access disruptions), our teams are available 24/7 with digital ticket tracking and transparent progress updates.',
        plansTitle: 'Flexible maintenance plans',
        plans: [
            {
                name: 'Start Pack',
                details: 'For small companies needing structured visits and on-demand adjustments.',
                response: 'SLA: response within 8h',
            },
            {
                name: 'Business Pack',
                details: 'For growing offices requiring regular maintenance and reinforced handyman support.',
                response: 'SLA: accelerated intermediate response',
            },
            {
                name: 'Corporate Pack',
                details: 'For large organisations requiring priority coverage and continuous oversight.',
                response: 'SLA: emergency under 4h',
            },
        ],
        closingTitle: 'Your trusted partner',
        closingText:
            'Focus on your core business while we ensure multidisciplinary expertise, strict safety standards, and complete performance transparency.',
        ctaPrimaryLabel: 'Request an audit',
    },
    de: {
        eyebrow: 'Wartung und anpassungen von bueros',
        hero: 'Wir entwickeln Ihre Bueros zu leistungsstarken, gesunden und anpassungsfaehigen Arbeitsumgebungen.',
        essentialsTitle: 'Warum diese wartung entscheidend ist',
        essentials: [
            {
                title: 'Markenwirkung',
                description: 'Gepflegte Raeume staerken das Vertrauen von Kunden, Partnern und Teams.',
            },
            {
                title: 'Betriebskontinuitaet',
                description: 'Proaktive Wartung reduziert Ausfaelle und verhindert teure Unterbrechungen.',
            },
            {
                title: 'Mitarbeiterwohl',
                description: 'Ergonomische Anpassungen verbessern Komfort, Sicherheit und Produktivitaet.',
            },
            {
                title: 'Flaechenflexibilitaet',
                description: 'Bueros werden schnell fuer Fokusarbeit, Kooperation oder Meetings umgestellt.',
            },
        ],
        agileTitle: 'Agiles facility management',
        agileText:
            'Wir organisieren schnelle Flaechenumstellungen, intelligente Arbeitsplatz- und Raumsteuerung sowie taegliche Concierge-Leistungen fuer reibungslose Ablaufe.',
        sustainabilityTitle: 'Nachhaltiger betrieb',
        sustainabilityItems: [
            'Energieeffizienz durch LED und Praesenzsensoren.',
            'Abfalltrennung und Sensibilisierung der Teams fuer Recycling.',
            'Kontinuierliche Innenraumluftkontrolle fuer gesunde Arbeitsbedingungen.',
        ],
        correctiveTitle: 'Korrektive wartung 24/7',
        correctiveText:
            'Bei Stoerungen (Strom, Leckagen, Zugangsprobleme) stehen unsere Teams 24/7 bereit, inklusive digitalem Ticket-Tracking und transparenter Rueckmeldung.',
        plansTitle: 'Flexible wartungspakete',
        plans: [
            {
                name: 'Start Paket',
                details: 'Fuer KMU mit strukturierten Einsaetzen und gezielten Anpassungen.',
                response: 'SLA: Rueckmeldung innerhalb von 8h',
            },
            {
                name: 'Business Paket',
                details: 'Fuer wachsende Standorte mit regelmaessiger Wartung und erweitertem Handyman-Support.',
                response: 'SLA: beschleunigte Zwischenstufe',
            },
            {
                name: 'Corporate Paket',
                details: 'Fuer Grossunternehmen mit Prioritaetsabdeckung und kontinuierlicher Betreuung.',
                response: 'SLA: Notfall unter 4h',
            },
        ],
        closingTitle: 'Ihr verlaesslicher partner',
        closingText:
            'Konzentrieren Sie sich auf Ihr Kerngeschaeft, waehrend wir Fachkompetenz, Sicherheitsstandards und volle Transparenz sicherstellen.',
        ctaPrimaryLabel: 'Audit anfragen',
    },
    it: {
        eyebrow: 'Manutenzione e adeguamenti uffici',
        hero: 'Trasformiamo i vostri uffici in ambienti performanti, salubri e pronti ad adattarsi ai nuovi modelli di lavoro.',
        essentialsTitle: 'Perche questa manutenzione e essenziale',
        essentials: [
            {
                title: 'Immagine aziendale',
                description: 'Spazi ben curati rafforzano la fiducia di clienti, partner e collaboratori.',
            },
            {
                title: 'Continuita operativa',
                description: 'La manutenzione proattiva riduce guasti e interruzioni costose.',
            },
            {
                title: 'Benessere dei team',
                description: 'Adeguamenti ergonomici migliorano comfort, sicurezza e produttivita.',
            },
            {
                title: 'Flessibilita degli spazi',
                description: 'Gli ambienti vengono riconfigurati rapidamente per focus, meeting e collaborazione.',
            },
        ],
        agileTitle: 'Facility management agile',
        agileText:
            'Gestiamo riorganizzazione rapida degli spazi, allocazione intelligente di postazioni/sale e servizi di conciergerie quotidiana.',
        sustainabilityTitle: 'Gestione sostenibile',
        sustainabilityItems: [
            'Efficienza energetica con LED e sensori di presenza.',
            'Raccolta differenziata e sensibilizzazione interna sul riciclo.',
            'Monitoraggio della qualita dell aria per ambienti piu sani e produttivi.',
        ],
        correctiveTitle: 'Manutenzione correttiva 24h/7j',
        correctiveText:
            'Per urgenze (elettrico, perdite, accessi), i nostri team operano 24h/7j con ticketing digitale e tracciamento trasparente dello stato lavori.',
        plansTitle: 'Pacchetti flessibili',
        plans: [
            {
                name: 'Pack Start',
                details: 'Per PMI con interventi strutturati e adeguamenti su richiesta.',
                response: 'SLA: risposta entro 8h',
            },
            {
                name: 'Pack Business',
                details: 'Per uffici in crescita con manutenzione regolare e supporto handyman dedicato.',
                response: 'SLA: livello intermedio accelerato',
            },
            {
                name: 'Pack Corporate',
                details: 'Per grandi realta con copertura prioritaria e presidio continuo.',
                response: 'SLA: emergenza in meno di 4h',
            },
        ],
        closingTitle: 'Partner di fiducia',
        closingText:
            'Voi concentratevi sul core business: noi garantiamo competenze multidisciplinari, rispetto delle norme e massima trasparenza.',
        ctaPrimaryLabel: 'Richiedi audit',
    },
};

export const officeSuppliesManagementContentByLocale: Record<string, OfficeSuppliesManagementContent> = {
    fr: {
        eyebrow: 'Gestion des fournitures',
        hero: "Avez-vous deja calcule combien de temps votre equipe perd a chercher des fournitures de base ou a attendre une livraison d urgence ? Un stock desorganise et des ruptures de consommables ne sont pas seulement un inconvenient: c est une perte directe pour votre tresorerie, votre productivite et votre capacite a tenir vos delais.",
        essentialsTitle: 'Les pertes invisibles qui freinent votre performance',
        essentials: [
            {
                title: 'Temps operationnel gaspille',
                description: 'Des collaborateurs mobilises pour chercher un toner, du papier ou des fournitures de base perdent des heures productives chaque semaine.',
            },
            {
                title: 'Interruptions critiques de service',
                description: 'Une imprimante a l arret, un stock vide ou une livraison tardive peuvent bloquer devis, contrats et flux administratifs.',
            },
            {
                title: 'Achats d urgence hors budget',
                description: 'Les commandes de derniere minute sont plus cheres, moins maitrisees et desequilibrent vos previsions financieres.',
            },
            {
                title: 'Manque de visibilite manageriale',
                description: 'Sans pilotage precis, il devient difficile d anticiper les besoins et d identifier les zones de gaspillage par equipe.',
            },
        ],
        agileTitle: 'Une gestion intelligente de bout en bout',
        agileText:
            'Notre service de Gestion des Fournitures depasse le simple rangement: nous implementons un ecosysteme de pilotage qui combine organisation physique, donnees en temps reel, automatisation des commandes et gouvernance budgetaire.',
        sustainabilityTitle: 'Notre methode pour garder le controle en continu',
        sustainabilityItems: [
            'Inventaire numerise: chaque reference est identifiee, localisee et suivie en temps reel sur un tableau de bord central.',
            'Reapprovisionnement automatise: alertes de seuil bas et generation de commandes pour eviter les ruptures sans surstocker.',
            'Pilotage des couts par departement: rapports detailles pour detecter les usages anormaux et arbitrer les budgets avec precision.',
        ],
        correctiveTitle: 'Des gains concrets sur vos couts et votre productivite',
        correctiveText:
            'Vous reduisez le capital immobilise dans des stocks excessifs, eliminez les achats urgents et couteux, et redonnez a vos equipes du temps pour les missions a forte valeur. Le resultat est mesurable: plus de continuite operationnelle, moins de depenses evitables.',
        plansTitle: 'Indicateurs de performance suivis avec vous',
        plans: [
            {
                name: 'Productivite',
                details: 'Les equipes accedent rapidement aux fournitures critiques et limitent les interruptions de taches administratives et commerciales.',
                response: 'Resultat: flux de travail fluide et continu',
            },
            {
                name: 'Couts',
                details: 'Vous supprimez les commandes d urgence, renegociez les cycles d achat et maitrisez la consommation reelle par service.',
                response: 'Resultat: baisse durable des depenses evitables',
            },
            {
                name: 'Tresorerie',
                details: 'Le niveau de stock est ajuste a la demande, ce qui limite le surstockage et libere des ressources financieres.',
                response: 'Resultat: capital disponible pour la croissance',
            },
        ],
        closingTitle: 'Faites de vos fournitures un avantage strategique',
        closingText:
            'Transformez la gestion de vos fournitures en levier de performance. Contactez-nous pour une demonstration et decouvrez comment instaurer un controle total, une efficacite operationnelle durable et une transparence budgetaire complete.',
        ctaPrimaryLabel: 'Prendre rendez-vous pour une demonstration',
    },
    en: {
        eyebrow: 'Supplies management',
        hero: 'Have you measured how much time your teams lose searching for basic supplies or waiting for urgent deliveries? Disorganised stock and recurring shortages are not minor issues: they create direct losses in cash flow, productivity, and execution quality.',
        essentialsTitle: 'Hidden operational leaks that hurt your margins',
        essentials: [
            {
                title: 'Time drained from core work',
                description: 'Employees spend avoidable time locating routine consumables instead of focusing on strategic deliverables.',
            },
            {
                title: 'Critical process interruptions',
                description: 'Missing toner, paper, or essentials can stop approvals, printing workflows, and client-facing operations.',
            },
            {
                title: 'Costly emergency purchases',
                description: 'Last-minute buying increases unit costs, weakens planning, and creates budget volatility.',
            },
            {
                title: 'Limited managerial visibility',
                description: 'Without reliable stock data, leaders cannot forecast needs or control waste by department.',
            },
        ],
        agileTitle: 'A smarter supply ecosystem for your office',
        agileText:
            'Our Supplies Management service goes beyond storage. We design an end-to-end model that combines inventory intelligence, replenishment automation, and clear financial governance.',
        sustainabilityTitle: 'How we build continuous control',
        sustainabilityItems: [
            'Inventory digitisation with real-time visibility of what you have, where it is, and how fast it moves.',
            'Automated replenishment using low-stock thresholds, alerts, and purchase triggers to prevent downtime.',
            'Department-level consumption and cost reporting to detect waste and optimise every budget line.',
        ],
        correctiveTitle: 'Measurable value across productivity and cost',
        correctiveText:
            'You reduce capital trapped in excess inventory, eliminate expensive emergency orders, and give teams the reliability they need to stay focused on growth. The impact is visible in both operational continuity and financial performance.',
        plansTitle: 'KPIs we track with your teams',
        plans: [
            {
                name: 'Productivity',
                details: 'Teams access mission-critical supplies without friction and avoid avoidable process stops.',
                response: 'Outcome: smoother day-to-day execution',
            },
            {
                name: 'Costs',
                details: 'Purchasing becomes planned, controlled, and transparent instead of reactive and expensive.',
                response: 'Outcome: sustained reduction in avoidable spend',
            },
            {
                name: 'Cash flow',
                details: 'Inventory levels align with actual demand to reduce overstocking and idle capital.',
                response: 'Outcome: capital released for strategic priorities',
            },
        ],
        closingTitle: 'Turn supplies into a strategic advantage',
        closingText:
            'Book a demonstration and discover how to bring full control, operational discipline, and measurable efficiency to your daily supply management.',
        ctaPrimaryLabel: 'Book a demo',
    },
    de: {
        eyebrow: 'Materialverwaltung',
        hero: 'Unorganisierte Bestaende und wiederkehrende Engpaesse verursachen direkte Verluste bei Liquiditaet, Produktivitaet und Prozessqualitaet.',
        essentialsTitle: 'Versteckte operative Verluste im Alltag',
        essentials: [
            { title: 'Zeitverlust', description: 'Teams verlieren taeglich produktive Zeit bei der Suche nach Basismaterialien.' },
            { title: 'Kritische Engpaesse', description: 'Fehlende Verbrauchsmaterialien unterbrechen wichtige administrative und operative Ablaeufe.' },
            { title: 'Teure Eilkaeufe', description: 'Spontane Notfallbestellungen treiben die Kosten nach oben und erschweren die Planung.' },
            { title: 'Geringe Transparenz', description: 'Ohne klare Bestandsdaten ist eine praezise Steuerung pro Abteilung kaum moeglich.' },
        ],
        agileTitle: 'Intelligente Materialsteuerung statt Reaktion',
        agileText:
            'Unser Service schafft ein belastbares Oekosystem fuer Bestandskontrolle, automatisches Nachfuellen und budgetorientierte Entscheidungsfindung.',
        sustainabilityTitle: 'So stellen wir dauerhafte Kontrolle sicher',
        sustainabilityItems: [
            'Digitalisiertes Inventar mit Echtzeit-Transparenz ueber Verfuegbarkeit, Standort und Verbrauch.',
            'Automatisierte Nachbestellung auf Basis definierter Mindestbestaende und intelligenter Alarme.',
            'Kosten- und Verbrauchsberichte je Bereich zur Erkennung von Verschwendung und besseren Budgetsteuerung.',
        ],
        correctiveTitle: 'Messbarer Mehrwert fuer Kosten und Produktivitaet',
        correctiveText:
            'Sie reduzieren gebundenes Kapital, vermeiden teure Eilkaeufe und sichern eine stabilere operative Kontinuitaet fuer alle Teams.',
        plansTitle: 'Leistungskennzahlen im Fokus',
        plans: [
            { name: 'Produktivitaet', details: 'Materialien sind jederzeit verfuegbar und Prozesse laufen ohne vermeidbare Stopps.', response: 'Ergebnis: hoehere Ablaufstabilitaet' },
            { name: 'Kosten', details: 'Planbare Beschaffung ersetzt teure Ad-hoc-Bestellungen.', response: 'Ergebnis: niedrigere vermeidbare Kosten' },
            { name: 'Liquiditaet', details: 'Bestaende orientieren sich am realen Bedarf statt am Sicherheitsgefuehl.', response: 'Ergebnis: Kapital wird freigesetzt' },
        ],
        closingTitle: 'Machen Sie Materialverwaltung zum Wettbewerbsvorteil',
        closingText:
            'Vereinbaren Sie eine Demo und erfahren Sie, wie volle Transparenz, klare Prozesse und intelligente Nachsteuerung Ihre Versorgung nachhaltig verbessern.',
        ctaPrimaryLabel: 'Demo anfragen',
    },
    it: {
        eyebrow: 'Gestione forniture',
        hero: 'Scorte disorganizzate e rotture di stock generano perdite dirette su cassa, produttivita e continuita operativa.',
        essentialsTitle: 'Le inefficienze nascoste che pesano sui costi',
        essentials: [
            { title: 'Tempo perso', description: 'Il team perde ore produttive cercando materiali di base e consumabili.' },
            { title: 'Rotture critiche', description: 'La mancanza di toner, carta o articoli essenziali blocca attivita chiave.' },
            { title: 'Urgenze costose', description: 'Gli acquisti d emergenza aumentano il costo unitario e riducono il controllo budgetario.' },
            { title: 'Scarsa visibilita', description: 'Senza dati affidabili e difficile prevedere fabbisogni e sprechi per reparto.' },
        ],
        agileTitle: 'Un ecosistema intelligente per l ufficio',
        agileText:
            'Il nostro servizio di Gestione Forniture integra organizzazione fisica, controllo digitale dell inventario e automazione del riordino.',
        sustainabilityTitle: 'Come manteniamo il controllo nel tempo',
        sustainabilityItems: [
            'Inventario digitalizzato con visibilita in tempo reale su disponibilita, posizione e rotazione.',
            'Riordino automatico con soglie minime, alert intelligenti e trigger di acquisto.',
            'Report costi e consumi per reparto per ridurre sprechi e ottimizzare il budget.',
        ],
        correctiveTitle: 'Valore misurabile su produttivita e tesoreria',
        correctiveText:
            'Riducete capitale immobilizzato, eliminate acquisti urgenti e garantite continuita ai processi interni con una gestione predittiva delle forniture.',
        plansTitle: 'Risultati monitorati con KPI chiari',
        plans: [
            { name: 'Produttivita', details: 'Forniture sempre disponibili nei momenti critici.', response: 'Risultato: meno interruzioni operative' },
            { name: 'Costi', details: 'Acquisti pianificati e consumi tracciati in modo puntuale.', response: 'Risultato: riduzione stabile dei costi evitabili' },
            { name: 'Tesoreria', details: 'Stock calibrato sulla domanda reale, senza sovraccarichi inutili.', response: 'Risultato: capitale liberato per la crescita' },
        ],
        closingTitle: 'Trasformate le forniture in un vantaggio strategico',
        closingText:
            'Prenotate una demo e scoprite come ottenere controllo totale, maggiore efficienza e piena trasparenza dei costi nella gestione quotidiana.',
        ctaPrimaryLabel: 'Prenota una demo',
    },
};

export const officeCleaningContentByLocale: Record<string, OfficeCleaningContent> = {
    fr: {
        eyebrow: 'Excellence et serenite au quotidien',
        hero: 'Un espace impeccable valorise votre image, clarifie l environnement de travail et soutient durablement la performance de vos equipes.',
        productivityTitle: 'Un espace optimise booste la productivite',
        productivityText:
            'Un environnement ordonne reduit la charge mentale, ameliore la concentration et devient un veritable levier de performance cognitive.',
        servicesTitle: 'Nos services de nettoyage professionnel',
        services: [
            {
                title: 'Nettoyage global',
                description:
                    'Entretien regulier des locaux, traitement des surfaces exigeantes et interventions adaptees a vos rythmes operationnels.',
            },
            {
                title: 'Hygiene et desinfection',
                description:
                    'Protocoles stricts de desinfection et respect constant des standards d hygiene pour un environnement sanitaire fiable.',
            },
            {
                title: 'Organisation fonctionnelle',
                description:
                    'Audit des flux, optimisation de l agencement, classement et archivage pour des espaces plus lisibles et efficaces.',
            },
            {
                title: 'Maintenance courante',
                description:
                    'Gestion des vitrages, consommables et dechets pour une continuite de service sans friction.',
            },
        ],
        sustainabilityTitle: 'Engagement eco-responsable',
        sustainabilityText:
            'Nous privilegions les produits Ecolabel, le tri selectif, la valorisation des dechets et une gestion raisonnee de l eau et de l energie.',
        methodTitle: 'Notre methode: rigueur et discretion',
        methodSteps: [
            'Analyse initiale gratuite pour definir besoins et frequences.',
            'Interventions discretes adaptees a vos horaires.',
            'Controles qualite reguliers par des superviseurs dedies.',
            'Confidentialite stricte et amelioration continue des procedures.',
        ],
        whyChooseTitle: 'Pourquoi nous choisir',
        whyChooseItems: [
            'Expertise reconnue en entretien et organisation d espaces professionnels.',
            'Interventions sur mesure avec flexibilite totale selon votre croissance.',
            'Interlocuteur unique pour une communication simple et reactive.',
            'Excellent rapport qualite-prix avec transparence tarifaire.',
        ],
        ctaTitle: 'Pret a transformer vos espaces',
        ctaText:
            'Contactez-nous pour un devis personnalise, gratuit et sans engagement, et construisons ensemble un environnement d exception.',
        ctaPrimaryLabel: 'Demander un devis',
    },
    en: {
        eyebrow: 'Excellence and daily peace of mind',
        hero: 'An impeccable workspace strengthens your brand image, clears operational friction, and supports long-term team performance.',
        productivityTitle: 'An optimised space drives productivity',
        productivityText:
            'Organised environments reduce mental load, improve concentration, and act as a measurable lever for cognitive performance.',
        servicesTitle: 'Our professional cleaning services',
        services: [
            {
                title: 'Comprehensive cleaning',
                description:
                    'Regular upkeep of business premises, deep treatment for demanding surfaces, and interventions aligned with your operations.',
            },
            {
                title: 'Hygiene and disinfection',
                description:
                    'Strict disinfection protocols and consistent hygiene standards to maintain a safe and reliable workplace.',
            },
            {
                title: 'Functional organisation',
                description:
                    'Flow audits, workspace optimisation, filing, and archiving to create clearer and more efficient environments.',
            },
            {
                title: 'Daily technical support',
                description:
                    'Management of glazing, consumables, and waste to ensure smooth day-to-day continuity.',
            },
        ],
        sustainabilityTitle: 'Eco-responsible commitment',
        sustainabilityText:
            'We prioritise Ecolabel products, selective sorting, waste valorisation, and responsible use of water and energy.',
        methodTitle: 'Our method: rigour and discretion',
        methodSteps: [
            'Free initial assessment to define needs and frequencies.',
            'Discreet interventions scheduled around your business hours.',
            'Regular quality controls led by dedicated supervisors.',
            'Strict confidentiality and continuous process improvement.',
        ],
        whyChooseTitle: 'Why choose us',
        whyChooseItems: [
            'Proven expertise in professional cleaning and workspace organisation.',
            'Tailored interventions with full flexibility as your business grows.',
            'Single point of contact for fast and simple communication.',
            'Excellent value with transparent pricing and premium execution.',
        ],
        ctaTitle: 'Ready to transform your spaces',
        ctaText:
            'Contact us for a free, no-obligation tailored quote and let us build an exceptional workplace environment with you.',
        ctaPrimaryLabel: 'Request a quote',
    },
    de: {
        eyebrow: 'Exzellenz und taegliche entlastung',
        hero: 'Ein makelloser Arbeitsplatz staerkt Ihre Marke, reduziert operative Reibung und unterstuetzt nachhaltige Teamleistung.',
        productivityTitle: 'Optimierte raeume steigern produktivitaet',
        productivityText:
            'Geordnete Arbeitsumgebungen senken die mentale Last, verbessern den Fokus und wirken direkt auf die Leistungsfaehigkeit.',
        servicesTitle: 'Unsere professionelle reinigung',
        services: [
            {
                title: 'Ganzheitliche reinigung',
                description:
                    'Regelmaessige Pflege von Geschaeftsflaechen, Tiefenreinigung anspruchsvoller Oberflaechen und einsatzgerechte Planung.',
            },
            {
                title: 'Hygiene und desinfektion',
                description:
                    'Strenge Desinfektionsprotokolle und konsequente Hygienestandards fuer ein sicheres Arbeitsumfeld.',
            },
            {
                title: 'Funktionale organisation',
                description:
                    'Analyse von Ablaufen, bessere Flaechenstruktur, Ablage- und Archivsysteme fuer mehr Klarheit und Effizienz.',
            },
            {
                title: 'Laufende betreuung',
                description:
                    'Betreuung von Verglasung, Verbrauchsmaterialien und Abfallmanagement fuer stoerungsfreie Kontinuitaet.',
            },
        ],
        sustainabilityTitle: 'Nachhaltiges engagement',
        sustainabilityText:
            'Wir setzen auf Ecolabel-Produkte, Abfalltrennung, Wertstofffuehrung sowie einen verantwortungsvollen Wasser- und Energieeinsatz.',
        methodTitle: 'Unsere methode: rigoros und diskret',
        methodSteps: [
            'Kostenfreie Erstanalyse zur Definition von Bedarf und Frequenzen.',
            'Diskrete Einsaetze abgestimmt auf Ihre Betriebszeiten.',
            'Regelmaessige Qualitaetskontrollen durch verantwortliche Supervisoren.',
            'Strenge Vertraulichkeit und fortlaufende Prozessverbesserung.',
        ],
        whyChooseTitle: 'Warum wir',
        whyChooseItems: [
            'Nachgewiesene Expertise in professioneller Reinigung und Organisation.',
            'Massgeschneiderte Leistungen mit hoher Flexibilitaet.',
            'Ein zentraler Ansprechpartner fuer schnelle Abstimmung.',
            'Starkes Preis-Leistungs-Verhaeltnis mit klarer Transparenz.',
        ],
        ctaTitle: 'Bereit ihre raeume zu transformieren',
        ctaText:
            'Kontaktieren Sie uns fuer ein kostenloses, unverbindliches Angebot und gestalten wir gemeinsam ein Arbeitsumfeld auf Exzellenzniveau.',
        ctaPrimaryLabel: 'Angebot anfragen',
    },
    it: {
        eyebrow: 'Eccellenza e serenita quotidiana',
        hero: 'Uno spazio impeccabile valorizza il vostro brand, riduce le frizioni operative e sostiene la performance dei team nel tempo.',
        productivityTitle: 'Uno spazio ottimizzato aumenta la produttivita',
        productivityText:
            'Un ambiente ordinato riduce il carico mentale, migliora la concentrazione e diventa un acceleratore concreto della performance.',
        servicesTitle: 'I nostri servizi di pulizia professionale',
        services: [
            {
                title: 'Pulizia completa',
                description:
                    'Manutenzione regolare degli ambienti professionali, trattamento profondo delle superfici e interventi calibrati sulle vostre esigenze.',
            },
            {
                title: 'Igiene e disinfezione',
                description:
                    'Protocolli rigorosi di disinfezione e rispetto costante degli standard igienici per ambienti sicuri.',
            },
            {
                title: 'Organizzazione funzionale',
                description:
                    'Audit dei flussi, ottimizzazione degli spazi, sistemi di archiviazione e classificazione per piu ordine ed efficienza.',
            },
            {
                title: 'Supporto operativo continuo',
                description:
                    'Gestione di vetrate, consumabili e rifiuti per garantire continuita operativa senza interruzioni.',
            },
        ],
        sustainabilityTitle: 'Impegno eco-responsabile',
        sustainabilityText:
            'Privilegiamo prodotti Ecolabel, raccolta differenziata, valorizzazione dei rifiuti e uso razionale di acqua ed energia.',
        methodTitle: 'Il nostro metodo: rigore e discrezione',
        methodSteps: [
            'Analisi iniziale gratuita per definire esigenze e frequenze.',
            'Interventi discreti compatibili con i vostri orari di lavoro.',
            'Controlli qualita periodici condotti da supervisori dedicati.',
            'Riservatezza rigorosa e miglioramento continuo dei processi.',
        ],
        whyChooseTitle: 'Perche scegliere noi',
        whyChooseItems: [
            'Competenza riconosciuta in pulizia e organizzazione professionale.',
            'Interventi su misura con flessibilita totale.',
            'Un unico referente per comunicazione semplice e rapida.',
            'Ottimo rapporto qualita-prezzo con trasparenza tariffaria.',
        ],
        ctaTitle: 'Pronti a trasformare i vostri spazi',
        ctaText:
            'Contattateci per un preventivo personalizzato, gratuito e senza impegno, e costruiamo insieme un ambiente di lavoro d eccellenza.',
        ctaPrimaryLabel: 'Richiedi preventivo',
    },
};

export const corporateFacadeContentByLocale: Record<string, CorporateFacadeContent> = {
    fr: {
        eyebrow: 'Nettoyage de vitres et facades en hauteur',
        hero: 'La facade de votre batiment est votre carte de visite. Nous redonnons eclat et valeur a vos surfaces en hauteur avec une execution precise et securisee.',
        impactTitle: 'Impact visuel immediat',
        impactText:
            'Nous eliminons traces de pluie, pollution et encrassement pour restaurer une image irreprochable des l entree.',
        expertiseTitle: 'Solution specialisee',
        expertiseText:
            'Nos techniciens combinent cordisme industriel, nacelles et methodes avancees pour intervenir efficacement sur des structures complexes.',
        safetyTitle: 'Securite et technologie',
        safetyItems: [
            'Equipe formee et certifiee pour les travaux en hauteur selon des normes strictes.',
            'Ancrages, harnais et systemes d acces controles avant chaque intervention.',
            'Produits biodegradables et techniques de lavage qui preservent materiaux et environnement.',
        ],
        resultsTitle: 'Resultats et valorisation',
        resultsText:
            'Plus de lumiere naturelle, des espaces plus agreables et une valorisation immediate de votre patrimoine immobilier.',
        ctaTitle: 'Votre image au sommet',
        ctaText:
            'Elevez le standing de votre entreprise. Contactez-nous pour un diagnostic gratuit de facade et un devis sur mesure.',
        ctaPrimaryLabel: 'Demander un devis gratuit',
    },
    en: {
        eyebrow: 'High-rise glass and facade cleaning',
        hero: "Your facade is your company's first visual statement. We restore shine and value to high-level surfaces with precision and safety.",
        impactTitle: 'Immediate visual impact',
        impactText:
            'We remove rain marks, pollution, and buildup to recover a clean and premium brand image from first glance.',
        expertiseTitle: 'Specialised solution',
        expertiseText:
            'Our technicians combine industrial rope access, elevated platforms, and advanced methods to handle complex structures efficiently.',
        safetyTitle: 'Safety and technology',
        safetyItems: [
            'Certified high-rise teams operating under strict international safety standards.',
            'Anchoring systems, harnesses, and access protocols verified before each operation.',
            'Biodegradable products and material-safe washing techniques.',
        ],
        resultsTitle: 'Results and asset value',
        resultsText:
            'More natural light, better workplace comfort, and immediate enhancement of your property value.',
        ctaTitle: 'Take your image higher',
        ctaText:
            'Elevate your corporate standing. Contact us for a free facade assessment and a tailored quote.',
        ctaPrimaryLabel: 'Request a free quote',
    },
    de: {
        eyebrow: 'Hoehenreinigung von glas und fassaden',
        hero: 'Ihre Fassade ist die erste visuelle Visitenkarte Ihres Unternehmens. Wir bringen Glanz und Wert mit praeziser, sicherer Hoehenreinigung zurueck.',
        impactTitle: 'Sofortige visuelle wirkung',
        impactText:
            'Wir entfernen Regenstreifen, Verschmutzung und Ablagerungen fuer einen sauberen und hochwertigen Ersteindruck.',
        expertiseTitle: 'Spezialisierte loesung',
        expertiseText:
            'Unsere Teams kombinieren Industrieklettern, Hubtechnik und fortgeschrittene Verfahren fuer komplexe Gebaeudestrukturen.',
        safetyTitle: 'Sicherheit und technologie',
        safetyItems: [
            'Zertifizierte Hoehenteams mit Einsatz nach strengen Sicherheitsstandards.',
            'Gepruefte Ankerpunkte, Gurtsysteme und Zugangskonzepte vor jeder Ausfuehrung.',
            'Biologisch abbaubare Produkte und materialschonende Reinigungstechniken.',
        ],
        resultsTitle: 'Ergebnis und wertsteigerung',
        resultsText:
            'Mehr Tageslicht, angenehmere Arbeitsflaechen und eine direkte Aufwertung Ihrer Immobilie.',
        ctaTitle: 'Ihre marke auf hoechstem niveau',
        ctaText:
            'Steigern Sie die Wirkung Ihres Unternehmens. Kontaktieren Sie uns fuer eine kostenlose Fassadendiagnose und ein individuelles Angebot.',
        ctaPrimaryLabel: 'Kostenloses angebot anfragen',
    },
    it: {
        eyebrow: 'Pulizia in altezza di vetri e facciate',
        hero: 'La facciata e il primo biglietto da visita della vostra azienda. Ripristiniamo brillantezza e valore con interventi in quota sicuri e precisi.',
        impactTitle: 'Impatto visivo immediato',
        impactText:
            'Rimuoviamo aloni, inquinamento e residui per restituire una immagine impeccabile fin dal primo sguardo.',
        expertiseTitle: 'Soluzione specializzata',
        expertiseText:
            'I nostri tecnici combinano lavoro su fune, piattaforme elevabili e metodi avanzati per strutture complesse.',
        safetyTitle: 'Sicurezza e tecnologia',
        safetyItems: [
            'Team certificati per lavori in quota secondo standard di sicurezza rigorosi.',
            'Controllo completo di ancoraggi, DPI e procedure di accesso prima di ogni intervento.',
            'Prodotti biodegradabili e tecniche che preservano materiali e ambiente.',
        ],
        resultsTitle: 'Risultati e valorizzazione',
        resultsText:
            'Piu luce naturale, ambienti di lavoro piu confortevoli e valorizzazione immediata dell immobile.',
        ctaTitle: 'Portate in alto la vostra immagine',
        ctaText:
            'Elevate lo standing della vostra azienda. Contattateci per una diagnosi gratuita della facciata e un preventivo personalizzato.',
        ctaPrimaryLabel: 'Richiedi un preventivo gratuito',
    },
};

export const corporateConciergeContentByLocale: Record<string, CorporateConciergeContent> = {
    fr: {
        eyebrow: 'Conciergerie d entreprise',
        hero: 'La conciergerie d entreprise transforme l experience collaborateur en combinant efficacite operationnelle, confort quotidien et qualite de vie au travail.',
        whatIsTitle: 'Qu est-ce que la conciergerie d entreprise',
        whatIsText:
            'Adaptee de l hotellerie de luxe au monde corporate, elle permet aux equipes de deleguer taches personnelles et administratives pour mieux se concentrer sur leurs missions strategiques.',
        servicesTitle: 'Principaux services',
        servicesItems: [
            'Logistique quotidienne: blanchisserie, reception de colis, gestion de demandes courantes.',
            'Bien-etre et sante: organisation de prestations bien-etre et services de confort.',
            'Assistance personnelle: reservations, coordination de deplacements et prise de rendez-vous.',
            'Services automobiles: lavage, maintenance legere et suivi pratique du vehicule.',
        ],
        benefitsTitle: 'Benefices strategiques',
        benefitsItems: [
            'Renforcement de la marque employeur et meilleure retention des talents.',
            'Hausse de la productivite par reduction des distractions personnelles.',
            'Diminution de l absentisme grace a la resolution proactive des contraintes quotidiennes.',
            'Amelioration tangible de la qualite de vie au travail.',
        ],
        implementationTitle: 'Modeles d implementation',
        implementationItems: [
            'Modele physique: concierge present sur site pour un service humanise.',
            'Modele digital: acces via plateforme pour equipes hybrides ou distantes.',
            'Modele hybride: combinaison presence ponctuelle + outils digitaux.',
            'Cadre economique clair: abonnement entreprise et cout de service direct pour l utilisateur final.',
        ],
        ctaTitle: 'Une conciergerie sur mesure pour votre entreprise',
        ctaText:
            'Contactez-nous pour structurer un dispositif adapte a votre culture, votre rythme et vos objectifs RH.',
        ctaPrimaryLabel: 'Demander une proposition',
    },
    en: {
        eyebrow: 'Corporate concierge service',
        hero: 'Corporate concierge improves employee experience by combining operational efficiency, daily convenience, and workplace wellbeing.',
        whatIsTitle: 'What is corporate concierge',
        whatIsText:
            'Adapted from luxury hospitality standards, this service helps teams delegate personal and administrative tasks so they can focus on high-value responsibilities.',
        servicesTitle: 'Core services',
        servicesItems: [
            'Daily logistics: laundry coordination, parcel handling, and routine support requests.',
            'Wellbeing support: scheduling wellbeing services and comfort-oriented assistance.',
            'Personal assistance: travel bookings, coordination tasks, and appointment management.',
            'Automotive support: vehicle cleaning, light maintenance, and practical follow-up.',
        ],
        benefitsTitle: 'Strategic benefits',
        benefitsItems: [
            'Stronger employer branding and improved talent attraction and retention.',
            'Higher productivity through fewer personal interruptions during work hours.',
            'Reduced absenteeism by solving recurring daily constraints proactively.',
            'Clear improvement in employee quality of life and engagement.',
        ],
        implementationTitle: 'Implementation models',
        implementationItems: [
            'On-site model: dedicated concierge presence for high-touch service.',
            'Digital model: platform-based access for hybrid and remote teams.',
            'Hybrid model: on-site moments combined with digital convenience.',
            'Transparent cost model: company subscription plus direct service cost per user when applicable.',
        ],
        ctaTitle: 'A concierge model tailored to your company',
        ctaText:
            'Contact us to design a concierge operation aligned with your culture, pace, and HR goals.',
        ctaPrimaryLabel: 'Request a proposal',
    },
    de: {
        eyebrow: 'Corporate concierge service',
        hero: 'Corporate Concierge steigert Mitarbeitererlebnis und Effizienz durch alltagsnahe Entlastung und besseren Arbeitskomfort.',
        whatIsTitle: 'Was ist corporate concierge',
        whatIsText:
            'Das aus der Luxushotellerie adaptierte Modell uebernimmt persoenliche und administrative Aufgaben, damit Teams sich auf wesentliche Verantwortungen konzentrieren koennen.',
        servicesTitle: 'Kernleistungen',
        servicesItems: [
            'Taegliche Logistik: Waescheservice, Paketmanagement und organisatorische Alltagsunterstuetzung.',
            'Wohlbefinden: Koordination von Services rund um Gesundheit und Komfort.',
            'Persoenliche Assistenz: Reisebuchungen, Terminplanung und praktische Erledigungen.',
            'Fahrzeugservices: Reinigung, leichte Wartung und operative Begleitung.',
        ],
        benefitsTitle: 'Strategische vorteile',
        benefitsItems: [
            'Staerkere Arbeitgebermarke und bessere Bindung qualifizierter Talente.',
            'Mehr Produktivitaet durch weniger private Unterbrechungen im Arbeitsalltag.',
            'Weniger Fehlzeiten dank proaktiver Loesung wiederkehrender Alltagsprobleme.',
            'Messbare Verbesserung von Arbeitsqualitaet und Mitarbeiterzufriedenheit.',
        ],
        implementationTitle: 'Implementierungsmodelle',
        implementationItems: [
            'Physisches Modell: Concierge vor Ort mit direktem Servicekontakt.',
            'Digitales Modell: Plattformzugang fuer hybride und remote Teams.',
            'Hybrides Modell: Kombination aus Praesenz und digitaler Flexibilitaet.',
            'Transparente Kostenlogik: Unternehmensabo plus nutzerbezogene Servicekosten nach Bedarf.',
        ],
        ctaTitle: 'Concierge als strategischer unternehmensvorteil',
        ctaText:
            'Kontaktieren Sie uns, um ein Modell zu entwickeln, das zu Ihrer Kultur, Ihrem Tempo und Ihren HR-Zielen passt.',
        ctaPrimaryLabel: 'Angebot anfragen',
    },
    it: {
        eyebrow: 'Servizio concierge aziendale',
        hero: 'La conciergerie aziendale migliora l esperienza dei collaboratori unendo efficienza operativa, comodita quotidiana e benessere sul lavoro.',
        whatIsTitle: 'Che cos e la conciergerie aziendale',
        whatIsText:
            'Derivata dai modelli dell hotellerie di lusso, aiuta i team a delegare attivita personali e burocratiche per concentrarsi sulle priorita strategiche.',
        servicesTitle: 'Servizi principali',
        servicesItems: [
            'Logistica quotidiana: lavanderia, ricezione pacchi e gestione richieste operative.',
            'Benessere: coordinamento di servizi orientati a salute e comfort.',
            'Assistenza personale: prenotazioni viaggi, appuntamenti e pratiche organizzative.',
            'Servizi auto: lavaggio, manutenzione leggera e supporto operativo.',
        ],
        benefitsTitle: 'Benefici strategici',
        benefitsItems: [
            'Employer branding piu forte e migliore attrazione e fidelizzazione dei talenti.',
            'Aumento della produttivita grazie a minori distrazioni personali durante il lavoro.',
            'Riduzione dell assenteismo tramite gestione preventiva delle esigenze quotidiane.',
            'Miglioramento tangibile della qualita della vita lavorativa.',
        ],
        implementationTitle: 'Modelli di implementazione',
        implementationItems: [
            'Modello fisico: concierge in sede con supporto diretto.',
            'Modello digitale: accesso via piattaforma per team ibridi o remoti.',
            'Modello ibrido: presenza mirata unita a strumenti digitali.',
            'Schema economico trasparente: canone aziendale e costo servizio diretto quando previsto.',
        ],
        ctaTitle: 'Una conciergerie su misura per la vostra azienda',
        ctaText:
            'Contattateci per progettare un modello coerente con cultura aziendale, ritmo operativo e obiettivi HR.',
        ctaPrimaryLabel: 'Richiedi una proposta',
    },
};

export const corporateRelocationContentByLocale: Record<string, CorporateRelocationContent> = {
    fr: {
        eyebrow: 'Coordination de demenagement',
        hero: 'Nous transformons un demenagement complexe en transition maitrisee, avec continuite d activite, securite et execution sans stress.',
        definitionTitle: 'Une gestion integrale de votre transition',
        definitionText:
            'Au-dela du transport, nous pilotons chaque phase comme un projet complet: cadrage, planification, arbitrages et coordination globale.',
        pillarsTitle: 'Nos piliers d intervention',
        pillars: [
            'Planification strategique: audit d inventaire, sequencement et selection des partenaires.',
            'Gestion administrative: assurances, autorisations et conformite documentaire.',
            'Logistique et supervision: coordination des equipes et controle des operations le jour J.',
            'Installation et organisation: remise en service des espaces pour une reprise rapide.',
        ],
        solutionsTitle: 'Solutions entreprises et particuliers',
        solutionsItems: [
            'Corporate: continuite operationnelle, protection des donnees sensibles et limitation du downtime.',
            'Particuliers: prise en charge securisee des biens de valeur et accompagnement personnalise.',
            'Approche cle en main: de l emballage a l organisation finale des espaces.',
        ],
        differentiatorsTitle: 'Pourquoi nous choisir',
        differentiatorsItems: [
            'Gestion des imprevus en temps reel avec plans de contingence.',
            'Reseau de partenaires qualifies et controles.',
            'Optimisation des couts par planification rigoureuse.',
            'Service sur mesure avec interlocuteur unique.',
        ],
        ctaTitle: 'Votre prochaine transition, sans friction',
        ctaText:
            'Contactez-nous pour construire un plan de demenagement adapte a vos priorites, votre calendrier et votre budget.',
        ctaPrimaryLabel: 'Demander une consultation',
    },
    en: {
        eyebrow: 'Relocation coordination',
        hero: 'We turn complex relocations into controlled transitions with continuity, safety, and stress-free execution.',
        definitionTitle: 'End-to-end transition management',
        definitionText:
            'Beyond transportation, we manage the full move lifecycle as a structured project: planning, coordination, and operational control.',
        pillarsTitle: 'Our operating pillars',
        pillars: [
            'Strategic planning: inventory audit, sequencing, and vendor selection.',
            'Administrative management: insurance, permits, and documentation compliance.',
            'Logistics and supervision: direct coordination of teams on moving day.',
            'Installation and organisation: fast setup for immediate readiness.',
        ],
        solutionsTitle: 'Solutions for businesses and private clients',
        solutionsItems: [
            'Corporate: operational continuity, sensitive data protection, and reduced downtime.',
            'Private: secure handling of valuable belongings and tailored support.',
            'Turnkey delivery: from packing through final organisation.',
        ],
        differentiatorsTitle: 'Why choose our coordination',
        differentiatorsItems: [
            'Real-time issue management with contingency planning.',
            'Qualified partner network with strict quality control.',
            'Cost optimisation through disciplined planning.',
            'Personalised service with a single point of contact.',
        ],
        ctaTitle: 'Your next move, fully under control',
        ctaText:
            'Contact us to design a relocation plan aligned with your priorities, timeline, and budget.',
        ctaPrimaryLabel: 'Request a consultation',
    },
    de: {
        eyebrow: 'Umzugskoordination',
        hero: 'Wir machen aus komplexen Umzuegen kontrollierte Uebergaenge mit Kontinuitaet, Sicherheit und stressfreier Ausfuehrung.',
        definitionTitle: 'Ganzheitliches transitionsmanagement',
        definitionText:
            'Mehr als Transport: Wir steuern den gesamten Umzug als Projekt mit klarer Planung, Koordination und operativer Fuehrung.',
        pillarsTitle: 'Unsere zentralen saeulen',
        pillars: [
            'Strategische Planung: Inventuraudit, Ablaufplanung und Partnerauswahl.',
            'Administrative Steuerung: Versicherungen, Genehmigungen und Dokumentationssicherheit.',
            'Logistik und Supervision: direkte Steuerung der Teams am Umzugstag.',
            'Installation und Organisation: schnelle Einsatzfaehigkeit am Zielstandort.',
        ],
        solutionsTitle: 'Loesungen fuer unternehmen und privatkunden',
        solutionsItems: [
            'Corporate: Betriebskontinuitaet, Schutz sensibler Daten und minimale Ausfallzeiten.',
            'Privat: sichere Behandlung wertvoller Gegenstaende und persoenliche Begleitung.',
            'Schluesselfertiger Ansatz: von Verpackung bis finaler Organisation.',
        ],
        differentiatorsTitle: 'Warum unsere koordination',
        differentiatorsItems: [
            'Echtzeit-Krisensteuerung mit belastbaren Alternativszenarien.',
            'Qualifiziertes Partnernetzwerk mit klaren Standards.',
            'Kostenoptimierung durch praezise Vorbereitung.',
            'Individueller Service mit zentralem Ansprechpartner.',
        ],
        ctaTitle: 'Ihr naechster umzug ohne reibung',
        ctaText:
            'Kontaktieren Sie uns fuer einen Umzugsplan, der Prioritaeten, Zeitfenster und Budget exakt abbildet.',
        ctaPrimaryLabel: 'Beratung anfragen',
    },
    it: {
        eyebrow: 'Coordinamento traslochi',
        hero: 'Trasformiamo traslochi complessi in transizioni controllate con continuita, sicurezza ed esecuzione senza stress.',
        definitionTitle: 'Gestione integrale della transizione',
        definitionText:
            'Oltre al trasporto, gestiamo l intero percorso come progetto strutturato: pianificazione, coordinamento e controllo operativo.',
        pillarsTitle: 'I nostri pilastri operativi',
        pillars: [
            'Pianificazione strategica: audit inventariale, sequenziamento e selezione partner.',
            'Gestione amministrativa: assicurazioni, autorizzazioni e conformita documentale.',
            'Logistica e supervisione: coordinamento diretto delle squadre nel giorno del trasloco.',
            'Installazione e organizzazione: setup rapido per ripartenza immediata.',
        ],
        solutionsTitle: 'Soluzioni per aziende e privati',
        solutionsItems: [
            'Corporate: continuita operativa, protezione dati sensibili e riduzione del downtime.',
            'Privati: gestione sicura di beni di valore e supporto personalizzato.',
            'Formula chiavi in mano: dall imballaggio all organizzazione finale.',
        ],
        differentiatorsTitle: 'Perche scegliere il nostro coordinamento',
        differentiatorsItems: [
            'Gestione imprevisti in tempo reale con piani alternativi.',
            'Rete di partner qualificati con standard controllati.',
            'Ottimizzazione costi tramite pianificazione rigorosa.',
            'Servizio personalizzato con referente unico.',
        ],
        ctaTitle: 'Il vostro prossimo trasloco, sotto controllo',
        ctaText:
            'Contattateci per costruire un piano su misura in linea con priorita, tempistiche e budget.',
        ctaPrimaryLabel: 'Richiedi consulenza',
    },
};

export const corporateTransportContentByLocale: Record<string, CorporateTransportContent> = {
    fr: {
        eyebrow: 'Transport specialise',
        hero: 'Le transport specialise protege vos charges sensibles avec precision operationnelle, securite renforcee et controle total de la chaine logistique.',
        essenceTitle: 'L essence du transport specialise',
        essenceText:
            'Nous operons comme partenaire logistique pour biens critiques, precieux ou sensibles, avec objectif unique: livraison intacte et sans interruption de vos operations.',
        expertiseTitle: 'Nos domaines d expertise',
        expertiseItems: [
            'Sante: equipements medicaux complexes et dispositifs sensibles.',
            'Industrie: machines lourdes, lignes techniques et charges a contraintes elevees.',
            'Art et patrimoine: pieces de valeur avec exigences strictes de protection.',
            'IT et infrastructures: serveurs, baies et environnements data center.',
        ],
        technicalTitle: 'Differenciateurs techniques',
        technicalItems: [
            'Flotte adaptee avec suspension a air et controle de stabilite.',
            'Tracking en temps reel et supervision continue des trajets.',
            'Emballages sur mesure et protocoles de calage personnalises.',
            'Equipes formees aux manipulations complexes, y compris acces difficiles.',
        ],
        benefitsTitle: 'Benefices clients',
        benefitsItems: [
            'Reduction du risque de dommage sur actifs critiques.',
            'Conformite reglementaire nationale et internationale.',
            'Couverture d assurance calculee sur la valeur reelle de la cargaison.',
            'Gestion de bout en bout avec interlocuteur unique.',
        ],
        ctaTitle: 'Votre charge merite une execution sans compromis',
        ctaText:
            'Contactez-nous pour definir un plan de transport specialise adapte a vos exigences techniques, securitaires et budgetaires.',
        ctaPrimaryLabel: 'Demander un diagnostic',
    },
    en: {
        eyebrow: 'Specialised transport',
        hero: 'Specialised transport secures your most sensitive cargo with operational precision, reinforced safety, and full logistical control.',
        essenceTitle: 'The essence of specialised transport',
        essenceText:
            'We operate as a logistics partner for critical, valuable, or delicate assets, with one mission: intact delivery and zero disruption to your operations.',
        expertiseTitle: 'Our expertise areas',
        expertiseItems: [
            'Healthcare: complex medical equipment and sensitive devices.',
            'Industry: heavy machinery and high-constraint technical loads.',
            'Art and heritage: high-value pieces requiring strict protection.',
            'IT infrastructure: servers, racks, and data-center components.',
        ],
        technicalTitle: 'Technical differentiators',
        technicalItems: [
            'Adapted fleet with air suspension and stability control.',
            'Real-time tracking and continuous transport supervision.',
            'Custom packaging and load-protection engineering.',
            'Teams trained for complex handling, including difficult-access sites.',
        ],
        benefitsTitle: 'Client benefits',
        benefitsItems: [
            'Lower risk exposure for critical assets.',
            'Compliance with national and international regulations.',
            'Insurance coverage aligned with real cargo value.',
            'End-to-end orchestration through a single point of contact.',
        ],
        ctaTitle: 'Your cargo deserves uncompromised execution',
        ctaText:
            'Contact us to design a specialised transport plan aligned with your technical, safety, and budget requirements.',
        ctaPrimaryLabel: 'Request an assessment',
    },
    de: {
        eyebrow: 'Spezialtransport',
        hero: 'Spezialtransport sichert sensible Fracht mit operativer Praezision, erhoehter Sicherheit und voller logistischer Kontrolle.',
        essenceTitle: 'Wesen des spezialtransports',
        essenceText:
            'Wir agieren als Logistikpartner fuer kritische und hochwertige Gueter mit klarem Ziel: unbeschaedigte Zustellung ohne Betriebsunterbrechung.',
        expertiseTitle: 'Unsere expertisefelder',
        expertiseItems: [
            'Gesundheit: komplexe Medizintechnik und empfindliche Geraete.',
            'Industrie: schwere Maschinen und technisch anspruchsvolle Lasten.',
            'Kunst und Kulturgut: wertvolle Objekte mit hohem Schutzbedarf.',
            'IT-Infrastruktur: Server, Racks und Data-Center-Komponenten.',
        ],
        technicalTitle: 'Technische differenzierungsmerkmale',
        technicalItems: [
            'Spezialisierte Flotte mit Luftfederung und Stabilitaetskontrolle.',
            'Echtzeit-Tracking und laufende Transportueberwachung.',
            'Massgefertigte Verpackung und Ladungssicherung nach Bedarf.',
            'Geschulte Teams fuer komplexes Handling und schwierige Zugangslagen.',
        ],
        benefitsTitle: 'Kundenvorteile',
        benefitsItems: [
            'Minimiertes Schadensrisiko bei kritischen Assets.',
            'Einhaltung nationaler und internationaler Vorgaben.',
            'Versicherungsschutz auf Basis des realen Warenwerts.',
            'End-to-End-Steuerung mit zentralem Ansprechpartner.',
        ],
        ctaTitle: 'Ihre fracht braucht kompromisslose ausfuehrung',
        ctaText:
            'Kontaktieren Sie uns fuer ein spezialisiertes Transportkonzept passend zu Technik, Sicherheit und Budget.',
        ctaPrimaryLabel: 'Analyse anfragen',
    },
    it: {
        eyebrow: 'Trasporto specializzato',
        hero: 'Il trasporto specializzato protegge i carichi piu sensibili con precisione operativa, sicurezza avanzata e controllo logistico completo.',
        essenceTitle: 'L essenza del trasporto specializzato',
        essenceText:
            'Operiamo come partner logistico per beni critici, preziosi o delicati con un obiettivo: consegna integra e continuita operativa.',
        expertiseTitle: 'Le nostre aree di expertise',
        expertiseItems: [
            'Sanita: apparecchiature medicali complesse e dispositivi sensibili.',
            'Industria: macchinari pesanti e carichi tecnicamente critici.',
            'Arte e patrimonio: opere di valore con esigenze elevate di protezione.',
            'Infrastrutture IT: server, rack e componenti data center.',
        ],
        technicalTitle: 'Differenziali tecnici',
        technicalItems: [
            'Flotta adattata con sospensioni ad aria e controllo stabilita.',
            'Tracciamento in tempo reale e supervisione continua del trasporto.',
            'Imballaggi su misura e protezione carico progettata ad hoc.',
            'Team formati per handling complesso anche in aree difficili da raggiungere.',
        ],
        benefitsTitle: 'Benefici per il cliente',
        benefitsItems: [
            'Riduzione del rischio su beni critici e ad alto valore.',
            'Conformita normativa nazionale e internazionale.',
            'Copertura assicurativa parametrata al valore reale del carico.',
            'Gestione end-to-end con referente unico.',
        ],
        ctaTitle: 'Il vostro carico merita esecuzione senza compromessi',
        ctaText:
            'Contattateci per costruire un piano di trasporto specializzato in linea con requisiti tecnici, sicurezza e budget.',
        ctaPrimaryLabel: 'Richiedi una valutazione',
    },
};

export const showroomAssemblyContentByLocale: Record<string, ShowroomAssemblyContent> = {
    fr: {
        eyebrow: 'Montage de showrooms',
        hero: 'Nous transformons vos espaces en experiences de marque immersives, ou chaque detail est pense pour capter l attention, renforcer la perception et stimuler les ventes.',
        artTitle: 'L art de presenter votre marque',
        artText:
            'Un showroom d excellence raconte votre histoire de marque dans un environnement coherent, immersif et commercialement efficace.',
        processTitle: 'Notre processus d excellence',
        processSteps: [
            'Analyse strategique de votre marque, de vos objectifs et de vos parcours clients.',
            'Conception detaillee de l espace, des volumes et de l experience visiteur.',
            'Selection de materiaux et mobilier premium adaptes a votre positionnement.',
            'Pilotage de production et logistique securisee avec controle qualite strict.',
            'Installation technique, scenographie et merchandising pour impact maximal.',
        ],
        segmentsTitle: 'Segments que nous accompagnons',
        segmentsItems: [
            'Retail luxe: espaces de prestige qui elevent desirabilite et conversion.',
            'Design et mobilier: parcours produits inspires et demonstration fonctionnelle.',
            'Automobile: experiences immersives pour mise en valeur des gammes.',
            'Technologie: zones interactives avec integration digitale et narrative.',
        ],
        benefitsTitle: 'Benefices pour votre marque',
        benefitsItems: [
            'Image de marque renforcee avec une presentation premium coherente.',
            'Experience visiteur emotionnelle qui augmente engagement et memorisation.',
            'Disposition strategique favorisant la decision d achat.',
            'Espace multifonctionnel pour ventes, formations et activations evenementielles.',
        ],
        ctaTitle: 'Transformez votre showroom en destination de marque',
        ctaText:
            'Contactez-nous pour concevoir un showroom sur mesure, aligne avec vos objectifs commerciaux, votre identite visuelle et votre calendrier de lancement.',
        ctaPrimaryLabel: 'Demander un devis',
    },
    en: {
        eyebrow: 'Showroom assembly',
        hero: 'We turn your spaces into immersive brand experiences where every detail is designed to attract attention, reinforce perception, and drive sales performance.',
        artTitle: 'The art of presenting your brand',
        artText:
            'A high-impact showroom does more than display products; it tells your brand story in a coherent, immersive, and conversion-oriented environment.',
        processTitle: 'Our excellence process',
        processSteps: [
            'Strategic analysis of your brand, objectives, and customer journey.',
            'Detailed showroom design focused on flow, visibility, and narrative impact.',
            'Selection of premium materials and furniture aligned with your positioning.',
            'Production management and secure logistics with strict quality control.',
            'Technical installation, scenography, and merchandising for maximum impact.',
        ],
        segmentsTitle: 'Segments we serve',
        segmentsItems: [
            'Luxury retail: prestige environments that elevate desirability and conversion.',
            'Design and furniture: inspiring product journeys with functional storytelling.',
            'Automotive: immersive spaces that highlight ranges and innovation.',
            'Technology: interactive showrooms with digital integration and engagement.',
        ],
        benefitsTitle: 'Benefits for your brand',
        benefitsItems: [
            'Stronger brand perception through premium and consistent presentation.',
            'Emotional visitor experience that increases engagement and recall.',
            'Strategic layout that supports purchase decisions and sales growth.',
            'Multifunctional space for sales, training, and event activations.',
        ],
        ctaTitle: 'Turn your showroom into a brand destination',
        ctaText:
            'Contact us to design a bespoke showroom aligned with your commercial goals, visual identity, and launch timeline.',
        ctaPrimaryLabel: 'Request a quote',
    },
    de: {
        eyebrow: 'Showroom-Montage',
        hero: 'Wir verwandeln Ihre Flaechen in immersive Markenerlebnisse, bei denen jedes Detail Aufmerksamkeit steigert, Wahrnehmung staerkt und den Vertrieb unterstuetzt.',
        artTitle: 'Die kunst der markeninszenierung',
        artText:
            'Ein starker Showroom zeigt nicht nur Produkte, sondern erzaehlt Ihre Markenstory in einem konsistenten, immersiven und verkaufsorientierten Raum.',
        processTitle: 'Unser exzellenzprozess',
        processSteps: [
            'Strategische Analyse von Marke, Zielen und Customer Journey.',
            'Detailliertes Raumdesign mit Fokus auf Wegefuehrung, Sichtbarkeit und Wirkung.',
            'Auswahl hochwertiger Materialien und Moebel passend zur Positionierung.',
            'Steuerung von Produktion und sicherer Logistik mit klarer Qualitaetskontrolle.',
            'Technische Installation, Szenografie und Merchandising fuer maximale Wirkung.',
        ],
        segmentsTitle: 'Unsere branchensegmente',
        segmentsItems: [
            'Luxury Retail: Premiumflaechen zur Steigerung von Begehrlichkeit und Conversion.',
            'Design und Moebel: inspirierende Produktpfade mit funktionalem Storytelling.',
            'Automotive: immersive Showrooms zur Inszenierung von Modellwelten.',
            'Technologie: interaktive Formate mit digitaler Integration und Erlebnisfokus.',
        ],
        benefitsTitle: 'Vorteile fuer ihre marke',
        benefitsItems: [
            'Staerkere Markenwahrnehmung durch hochwertige, konsistente Inszenierung.',
            'Emotionales Besuchererlebnis mit hoeherer Bindung und Wiedererkennung.',
            'Strategische Flaechenlogik zur Unterstuetzung von Kaufentscheidungen.',
            'Multifunktionaler Raum fuer Vertrieb, Trainings und Events.',
        ],
        ctaTitle: 'Machen sie ihren showroom zur markendestination',
        ctaText:
            'Kontaktieren Sie uns fuer ein massgeschneidertes Konzept, ausgerichtet auf Ihre Vertriebsziele, visuelle Identitaet und Time-to-Market.',
        ctaPrimaryLabel: 'Angebot anfragen',
    },
    it: {
        eyebrow: 'Allestimento showroom',
        hero: 'Trasformiamo i vostri spazi in esperienze di marca immersive, dove ogni dettaglio e progettato per attrarre, valorizzare il brand e sostenere le vendite.',
        artTitle: 'L arte di presentare il vostro brand',
        artText:
            'Uno showroom ad alte prestazioni non espone soltanto prodotti: racconta la vostra identita in un ambiente coerente, immersivo e orientato alla conversione.',
        processTitle: 'Il nostro processo di eccellenza',
        processSteps: [
            'Analisi strategica di brand, obiettivi e customer journey.',
            'Progettazione dettagliata degli spazi con focus su flussi e impatto visivo.',
            'Selezione di materiali e arredi premium coerenti con il posizionamento.',
            'Gestione di produzione e logistica sicura con controllo qualita rigoroso.',
            'Installazione tecnica, scenografia e merchandising per massimo impatto.',
        ],
        segmentsTitle: 'Settori in cui operiamo',
        segmentsItems: [
            'Luxury retail: ambienti di prestigio che aumentano desiderabilita e conversione.',
            'Design e arredo: percorsi prodotto ispirazionali e funzionali.',
            'Automotive: esperienze immersive per valorizzare gamma e innovazione.',
            'Tecnologia: spazi interattivi con integrazione digitale e narrativa.',
        ],
        benefitsTitle: 'Benefici per il vostro brand',
        benefitsItems: [
            'Immagine di marca piu forte grazie a una presentazione premium coerente.',
            'Esperienza emozionale che aumenta engagement e memorabilita.',
            'Layout strategico che facilita la decisione d acquisto.',
            'Spazio multifunzione per vendite, formazione ed eventi.',
        ],
        ctaTitle: 'Trasformate il vostro showroom in una destinazione di marca',
        ctaText:
            'Contattateci per progettare uno showroom su misura, allineato a obiettivi commerciali, identita visiva e timeline di lancio.',
        ctaPrimaryLabel: 'Richiedi preventivo',
    },
};

export const artPackagingContentByLocale: Record<string, ArtPackagingContent> = {
    fr: {
        eyebrow: 'Emballage et protection',
        hero: "L emballage et la protection des oeuvres d art sont des etapes strategiques qui preservent la valeur, l integrite materielle et la conformite de votre patrimoine culturel, de l atelier ou du lieu d exposition jusqu au lieu de destination.",
        importanceTitle: "L importance d un emballage et d une protection adaptes",
        importanceText:
            "Pour les oeuvres, antiquités et objets de collection, la protection ne se limite pas a recouvrir une surface: il s agit de concevoir une barriere technique contre les chocs, vibrations, variations hygrometriques et risques de manutention. Chaque piece doit arriver en condition stable, documentee et prete pour l installation ou la restitution museale.",
        risksTitle: 'Risques et defis du transport et de la manutention',
        risksText:
            "Les trajets exposent les biens a impacts, micro-rayures, humidite residuelle, poussiere abrasive et contraintes de calage insuffisant. Une protection inadequate genere des couts de restauration, des retards d exposition et une perte de confiance des assureurs et institutions partenaires. Notre approche anticipe ces risques avec des protocoles museaux et une traçabilite claire.",
        materialsTitle: 'Solutions de protection et materiaux',
        materialsItems: [
            "Film bulle et intercalaires souples: absorption des chocs et protection des surfaces vernissees ou sensibles.",
            'Mousse de calage haute densite: remplissage des volumes, protection des arêtes et des points de contrainte.',
            "Film etirable et enveloppes barriere: stabilisation des ensembles, limitation poussiere et humidite relative.",
            'Caisses museales et conteneurs sur mesure: structure rigide, calage interne dimensionne, conformite ISPM 15 lorsque requis.',
            "Textiles et couvertures techniques: finitions delicates pour cadres, sculptures et surfaces patinees.",
        ],
        processTitle: 'Processus d emballage et de desemballage',
        processSteps: [
            "Evaluation et fiche d etat: nature du support, fragilites, contraintes climatiques et sequence logistique.",
            "Choix des materiaux et du calage: combinaison sur mesure selon le poids, le centre de gravite et le mode de transport.",
            "Emballage realise par equipes formees aux gestes museaux et aux normes de manutention.",
            "Ajustement du calage en vehicule ou conteneur pour eliminer jeu, torsion et vibrations amplifiees.",
            "Desemballage controle a destination: inspection visuelle, comparaison a l etat initial et preparation a l installation.",
        ],
        benefitsTitle: 'Benefices strategiques pour collectionneurs et institutions',
        benefitsItems: [
            "Preservation de la valeur patrimoniale et reduction des sinistres materiels.",
            "Moins de retards et de reprises liees a des dommages en chaine logistique.",
            "Image professionnelle renforcee aupres des assureurs, galeries et partenaires institutionnels.",
            "Mise en exposition ou stockage plus rapide grace a une reception conforme et documentee.",
        ],
        ctaTitle: 'Securisez vos oeuvres avec une protection museale',
        ctaText:
            "Demandez une evaluation de vos besoins d emballage, un protocole sur mesure et une prise en charge coordonnee avec votre calendrier d exposition ou de transfert.",
        ctaPrimaryLabel: 'Demander un devis',
    },
    en: {
        eyebrow: 'Packaging and protection',
        hero: 'For fine art, antiques, and collection pieces, packaging is a strategic safeguard that preserves value, material integrity, and compliance from studio, gallery, or museum to final destination.',
        importanceTitle: 'Why tailored packaging and protection matter',
        importanceText:
            'Protection is more than wrapping: it is engineered shielding against shock, vibration, humidity shifts, and handling risk. Each object should arrive in a stable, documented condition ready for installation or museum-standard handover.',
        risksTitle: 'Risks in transport and handling',
        risksText:
            'Shipments face impact, abrasion, residual moisture, dust, and inadequate bracing. Weak protection drives restoration costs, exhibition delays, and friction with insurers and institutional partners. We anticipate these risks with museum-grade protocols and clear traceability.',
        materialsTitle: 'Protection solutions and materials',
        materialsItems: [
            'Bubble film and soft interleaving: shock absorption and surface protection for varnished or sensitive finishes.',
            'High-density foam void-fill: edge protection and load stabilisation at pressure points.',
            'Stretch film and barrier wrapping: bundle stability and reduced dust and moisture exposure.',
            'Museum-grade crates and bespoke containers: engineered structure, internal bracing, ISPM 15 compliance when required.',
            'Technical blankets and textiles: delicate care for frames, sculpture, and patinated surfaces.',
        ],
        processTitle: 'Packing and unpacking workflow',
        processSteps: [
            'Assessment and condition baseline: substrate sensitivities, climate constraints, and logistics sequence.',
            'Material and bracing selection: bespoke combinations for weight, centre of gravity, and transport mode.',
            'Packing by teams trained in museum handling and safe movement standards.',
            'Vehicle or container lashing to remove play, twist, and amplified vibration.',
            'Controlled unpacking on arrival: visual inspection, comparison to baseline, readiness for installation.',
        ],
        benefitsTitle: 'Strategic benefits for collectors and institutions',
        benefitsItems: [
            'Heritage value protected with fewer physical loss events.',
            'Fewer delays and rework caused by in-transit damage.',
            'Stronger professional standing with insurers, galleries, and institutional partners.',
            'Faster exhibition or storage readiness through compliant, documented receipt.',
        ],
        ctaTitle: 'Protect your collection with museum-grade packaging',
        ctaText:
            'Ask for a packaging assessment, a tailored protection protocol, and coordinated execution aligned with your exhibition or transfer schedule.',
        ctaPrimaryLabel: 'Request a quote',
    },
    de: {
        eyebrow: 'Verpackung und schutz',
        hero: 'Fuer Kunstwerke, Antiquitaeten und Sammlungsobjekte ist professionelle Verpackung ein strategischer Schutz von Wert, materieller Integritaet und Compliance vom Atelier, der Galerie oder dem Museum bis zum Zielort.',
        importanceTitle: 'Warum massgeschneiderte Verpackung entscheidend ist',
        importanceText:
            'Schutz bedeutet mehr als Einwickeln: Es geht um konstruierte Absicherung gegen Stoss, Vibration, Feuchteschwankungen und Handhabungsrisiken. Jedes Objekt soll in stabiler, dokumentierter Verfassung ankommen und installations- oder museumsreif sein.',
        risksTitle: 'Risiken bei Transport und Handhabung',
        risksText:
            'Transporte bergen Stoss, Abrieb, Restfeuchte, Staub und unzureichende Verzurrung. Schwacher Schutz fuehrt zu Restaurierungskosten, Ausstellungsverzoegerungen und Spannungen mit Versicherern und Partnerinstitutionen. Wir antizipieren diese Risiken mit musealen Protokollen und klarer Rückverfolgbarkeit.',
        materialsTitle: 'Schutzlosungen und materialien',
        materialsItems: [
            'Luftpolsterfolie und weiche Zwischenlagen: Stossdaempfung und Oberflaechenschutz fuer empfindliche Polituren.',
            'Hochdichte Schaumstoffe: Hohlraumfuellung, Kantenschutz und Druckpunktentlastung.',
            'Stretchfolie und Barrierewicklung: Buendelstabilitaet und reduzierte Staub- und Feuchtebelastung.',
            'Museumsqualitaetskisten und Sonderbehaelter: tragfaehige Konstruktion, innerer Verbau, ISPM 15 bei Bedarf.',
            'Technische Decken und Textilien: schonender Schutz fuer Rahmen, Skulpturen und Patina.',
        ],
        processTitle: 'Ablauf verpacken und auspacken',
        processSteps: [
            'Bewertung und Zustandsdokumentation: Materialempfindlichkeit, Klimavorgaben und Logistikfolge.',
            'Material- und Verbauwahl: massgeschneiderte Kombination aus Gewicht, Schwerpunkt und Transportmodus.',
            'Verpackung durch Teams mit Schulung in musealer Handhabung und sicheren Bewegungsstandards.',
            'Verzurrung im Fahrzeug oder Container: Spiel, Verdrehung und verstaerkte Vibrationen vermeiden.',
            'Kontrolliertes Auspacken am Ziel: Sichtpruefung, Abgleich mit Ausgangszustand, Bereitschaft zur Installation.',
        ],
        benefitsTitle: 'Strategische vorteile fuer sammler und institutionen',
        benefitsItems: [
            'Erhalt des Sammlungswerts mit weniger physischen Schaeden.',
            'Weniger Verzoegerungen und Nacharbeit durch Transportschaeden.',
            'Staerkeres Vertrauen bei Versicherern, Galerien und institutionellen Partnern.',
            'Schnellere Bereitsstellung fuer Ausstellung oder Lager durch konforme, dokumentierte Uebergabe.',
        ],
        ctaTitle: 'Schuetzen sie ihre sammlung mit museumsverpackung',
        ctaText:
            'Fordern Sie eine Verpackungsbewertung, ein massgeschneidertes Schutzprotokoll und eine koordinierte Ausfuehrung passend zu Ihrem Ausstellungs- oder Transferplan an.',
        ctaPrimaryLabel: 'Angebot anfragen',
    },
    it: {
        eyebrow: 'Imballaggio e protezione',
        hero: "Per opere d'arte, antiquariato e pezzi da collezione, l imballaggio e una salvaguardia strategica che preserva valore, integrita materiale e conformita dall atelier, dalla galleria o dal museo fino alla destinazione finale.",
        importanceTitle: 'Perche contano imballaggio e protezione su misura',
        importanceText:
            "La protezione non e solo avvolgere: e un sistema studiato contro urti, vibrazioni, variazioni igrometriche e rischi di movimentazione. Ogni pezzo deve arrivare in condizioni stabili e documentate, pronto per installazione o consegna in standard museale.",
        risksTitle: 'Rischi nel trasporto e nella manipolazione',
        risksText:
            "Le spedizioni espongono a urti, abrasioni, umidita residua, polvere e fissaggi insufficienti. Una protezione debole comporta costi di restauro, ritardi espositivi e frizioni con assicuratori e partner istituzionali. Anticipiamo questi rischi con protocolli museali e tracciabilita chiara.",
        materialsTitle: 'Soluzioni di protezione e materiali',
        materialsItems: [
            "Pluriball e intercalari morbidi: assorbimento urti e protezione di superfici verniciate o sensibili.",
            'Schiume ad alta densita: riempimento vuoti, protezione spigoli e punti di pressione.',
            "Film estensibile e involucri barriera: stabilita dei fasci e riduzione di polvere e umidita.",
            'Cassemuseali e contenitori su misura: struttura rigida, fissaggio interno dimensionato, conformita ISPM 15 se richiesta.',
            "Tessuti tecnici e coperte: trattamento delicato per cornici, sculture e superfici patinate.",
        ],
        processTitle: 'Flusso di imballaggio e disimballaggio',
        processSteps: [
            "Valutazione e stato di partenza: sensibilita del supporto, vincoli climatici e sequenza logistica.",
            "Scelta di materiali e fissaggi: combinazioni su misura per peso, baricentro e modalita di trasporto.",
            "Imballaggio da team formati alla manutensione museale e agli standard di movimentazione sicura.",
            "Ancoraggio in veicolo o container per eliminare giochi, torsioni e vibrazioni amplificate.",
            "Disimballaggio controllato all arrivo: ispezione visiva, confronto con lo stato iniziale, prontezza per installazione.",
        ],
        benefitsTitle: 'Benefici strategici per collezionisti e istituzioni',
        benefitsItems: [
            "Valore patrimoniale protetto con meno danni fisici.",
            "Meno ritardi e ripassi dovuti a danni in catena logistica.",
            "Immagine professionale piu solida con assicuratori, gallerie e partner istituzionali.",
            "Prontezza piu rapida per esposizione o deposito grazie a ricezione conforme e documentata.",
        ],
        ctaTitle: 'Proteggete la collezione con imballaggio museale',
        ctaText:
            "Richiedete una valutazione delle esigenze di imballaggio, un protocollo su misura e un intervento coordinato con il calendario di mostra o trasferimento.",
        ctaPrimaryLabel: 'Richiedi preventivo',
    },
};

export const artCustomsFormalitiesContentByLocale: Record<string, ArtCustomsFormalitiesContent> = {
    fr: {
        eyebrow: 'Formalites douanieres',
        hero: "Les formalites douanieres sont un volet critique du commerce international du mobilier corporate: elles garantissent la conformite legale et la fluidite des operations logistiques. Au-dela d une suite de demarches administratives, il s agit d un processus structurant qui securise l entree et la sortie des marchandises dans le respect des reglementations de chaque pays.",
        importanceTitle: 'L importance d une gestion douaniere professionnelle',
        importanceText:
            "Une gestion douaniere professionnelle soutient la reussite des operations d import et d export de mobilier corporate. Il ne s agit pas seulement de remplir des formulaires: chaque etape doit etre alignee sur les lois et reglements internationaux. Notre objectif est de reduire les risques, d eviter les retards et d optimiser les couts, pour que le mobilier arrive sans friction. Cela suppose une maitrise des tarifs, des accords commerciaux et de la documentation exigee.",
        risksTitle: 'Principaux defis et cadre reglementaire',
        risksText:
            "Le commerce international du mobilier corporate rencontre des exigences douanieres variables: droits d importation et d exportation, mesures non tarifaires, licences specifiques. Un manque de conformite peut entrainer des amendes, des saisies et des retards majeurs. Il est indispensable de suivre les normes en vigueur et de s appuyer sur une expertise pour naviguer dans ce contexte complexe.",
        materialsTitle: 'Documentation essentielle pour le dedouanement',
        materialsItems: [
            "Facture commerciale: detaille la transaction de vente entre exportateur et importateur.",
            "Packing list (liste de colisage): inventaire detaille des articles emballes, avec poids et dimensions.",
            "Connaissement ou lettre de transport aerien: contrat de transport entre exportateur et transporteur.",
            "Certificat d origine: atteste l origine des marchandises et peut influencer tarifs et accords commerciaux.",
            "Declaration d importation ou d exportation: formalise l operation aupres de l administration des douanes.",
        ],
        processTitle: 'Notre processus de conseil et d execution douaniere',
        processSteps: [
            "Analyse prealable des besoins et des caracteristiques du mobilier, identification des reglementations applicables.",
            "Preparation et relecture documentaire minutieuse pour garantir exactitude et exhaustivite.",
            "Classification tarifaire precise des marchandises afin de determiner les droits et taxes pertinents.",
            "Coordination du dedouanement en ports, aeroports et frontieres, en interface avec les autorites.",
            "Suivi post-dedouanement pour confirmer que toutes les etapes sont bouclees avec succes.",
        ],
        benefitsTitle: 'Benefices strategiques d une gestion douaniere specialisee',
        benefitsItems: [
            "Conformite legale renforcee et reduction des risques d amendes et de retards.",
            "Optimisation des couts grace a une classification correcte et a l usage d accords commerciaux.",
            "Agilite des flux d import et d export pour une supply chain plus fluide.",
            "Livraisons plus previsibles et image de marque renforcee sur les marches internationaux.",
        ],
        ctaTitle: 'Securisez vos flux internationaux de mobilier corporate',
        ctaText:
            "Contactez-nous pour une evaluation douaniere, une feuille de route documentaire et une execution coordonnee avec vos calendriers logistiques.",
        ctaPrimaryLabel: 'Demander un devis',
    },
    en: {
        eyebrow: 'Customs formalities',
        hero: 'Customs formalities are a critical part of international corporate-furniture trade: they ensure legal compliance and keep logistics flowing. More than paperwork, they are the process that allows goods to enter and exit each country efficiently and in line with local regulations.',
        importanceTitle: 'Why professional customs management matters',
        importanceText:
            'Professional customs management underpins successful import and export of corporate furniture. It is not only about completing forms: every stage must align with international laws and rules. Our aim is to reduce risk, avoid delays, and optimise costs so furniture reaches its destination without friction—including mastery of duties, trade agreements, and required documentation.',
        risksTitle: 'Key challenges and regulatory landscape',
        risksText:
            'International furniture trade faces shifting import/export rules, customs duties, non-tariff barriers, and licence requirements. Non-compliance can trigger fines, seizures, and long delays. Staying current with regulations and relying on specialist expertise is essential to navigate this environment.',
        materialsTitle: 'Essential documentation for customs clearance',
        materialsItems: [
            'Commercial invoice: records the sale transaction between exporter and importer.',
            'Packing list: detailed list of packed items with weights and dimensions.',
            'Bill of lading / air waybill: transport contract between shipper and carrier.',
            'Certificate of origin: proves goods origin and may affect duties and trade preferences.',
            'Import/export declaration: official filing that formalises the operation with customs authorities.',
        ],
        processTitle: 'Our customs advisory and execution process',
        processSteps: [
            'Up-front review of your furniture move and applicable regulations.',
            'Careful preparation and validation of documents for accuracy and completeness.',
            'Precise commodity classification to determine the correct duties and charges.',
            'Clearance coordination at ports, airports, and borders with authorities.',
            'Post-clearance follow-up to confirm every step is closed out successfully.',
        ],
        benefitsTitle: 'Strategic benefits of specialist customs management',
        benefitsItems: [
            'Stronger legal compliance with lower risk of fines and delays.',
            'Cost optimisation through correct classification and use of trade agreements.',
            'Faster, smoother import/export cycles for your supply chain.',
            'More predictable deliveries and stronger trust in global markets.',
        ],
        ctaTitle: 'De-risk your international corporate furniture flows',
        ctaText:
            'Contact us for a customs assessment, a tailored documentation roadmap, and coordinated execution aligned with your logistics timeline.',
        ctaPrimaryLabel: 'Request a quote',
    },
    de: {
        eyebrow: 'Zollformalitaten',
        hero: 'Zollformalitaten sind entscheidend fuer den internationalen Handel mit Corporate-Moebeln: Sie sichern rechtliche Konformitaet und fliessende Logistik. Es geht um mehr als Bueroarbeit – es ist der Prozess, der den effizienten Grenzuebertritt im Einklang mit nationalen Vorschriften ermoeglicht.',
        importanceTitle: 'Warum professionelles Zollmanagement zaehlt',
        importanceText:
            'Professionelles Zollmanagement traegt zum Erfolg von Import und Export von Buero- und Objektmoebeln bei. Es geht nicht nur um Formulare: Jede Phase muss internationalen Gesetzen entsprechen. Wir reduzieren Risiken, vermeiden Verzoegerungen und optimieren Kosten – mit fundierter Kenntnis von Zollsaetzen, Handelsabkommen und Pflichtdokumenten.',
        risksTitle: 'Herausforderungen und regulatorischer Rahmen',
        risksText:
            'Grenzueberschreitender Moebelhandel unterliegt wechselnden Import- und Exportregeln, Zoellen, nichttarifaeren Hindernissen und Genehmigungen. Verstoesse koennen zu Bussen, Beschlagnahmen und langen Wartezeiten fuehren. Aktuelle Normen und fachliche Begleitung sind unverzichtbar.',
        materialsTitle: 'Wesentliche Unterlagen fuer die Zollabfertigung',
        materialsItems: [
            'Handelsrechnung: dokumentiert den Verkauf zwischen Exporteur und Importeur.',
            'Packliste: detaillierte Aufstellung der Packstuecke mit Gewicht und Massen.',
            'Konnossement / Luftfrachtbrief: Transportvertrag zwischen Absender und Frachtfuehrer.',
            'Ursprungszeugnis: belegt die Herkunft und kann Zollsaetze und Praeferenzen beeinflussen.',
            'Import- oder Exportanmeldung: offizielle Meldung bei den Zollbehoerden.',
        ],
        processTitle: 'Unser Beratungs- und Ausfuehrungsprozess Zoll',
        processSteps: [
            'Voranalyse der Sendung und der anwendbaren Vorschriften.',
            'Sorgfaeltige Erstellung und Pruefung aller Dokumente auf Vollstaendigkeit.',
            'Praezise Warenklassifizierung zur Ermittlung der korrekten Abgaben.',
            'Koordination der Abfertigung in Haefen, Flughaefen und an Grenzen.',
            'Nachlauf nach der Freigabe zur Bestaetigung aller Schritte.',
        ],
        benefitsTitle: 'Strategische Vorteile spezialisierten Zollmanagements',
        benefitsItems: [
            'Hoehere Rechtssicherheit und geringeres Risiko von Bussen und Stillstand.',
            'Kostenoptimierung durch korrekte Tarifierung und Nutzung von Handelsabkommen.',
            'Schnellere Import- und Exportzyklen fuer eine stabilere Supply Chain.',
            'Planbarere Lieferungen und staerkeres Vertrauen im Weltmarkt.',
        ],
        ctaTitle: 'Internationalen Moebelverkehr rechtssicher steuern',
        ctaText:
            'Kontaktieren Sie uns fuer eine Zollbewertung, eine massgeschneiderte Dokumentenroadmap und koordinierte Abwicklung passend zu Ihrem Logistikplan.',
        ctaPrimaryLabel: 'Angebot anfragen',
    },
    it: {
        eyebrow: 'Formalita doganali',
        hero: "Le formalita doganali sono un elemento critico nel commercio internazionale di mobili corporate: garantiscono conformita legale e fluidita operativa. Non sono solo adempimenti burocratici, ma il processo che consente l ingresso e l uscita delle merci in modo efficiente e conforme alle normative di ogni paese.",
        importanceTitle: 'Perche conta una gestione doganale professionale',
        importanceText:
            "Una gestione doganale professionale sostiene l import e l export di mobili corporate. Non si limita alla compilazione di moduli: ogni fase deve rispettare leggi e regolamenti internazionali. L obiettivo e ridurre rischi, evitare ritardi e ottimizzare i costi, con padronanza di dazi, accordi commerciali e documentazione richiesta.",
        risksTitle: 'Sfide principali e quadro normativo',
        risksText:
            "Il commercio internazionale affronta norme variabili, dazi, barriere non tariffarie e licenze specifiche. La mancata conformita puo comportare sanzioni, sequestri e ritardi significativi. E fondamentale aggiornamento normativo e competenza specializzata.",
        materialsTitle: 'Documentazione essenziale per lo sdoganamento',
        materialsItems: [
            "Fattura commerciale: descrive la vendita tra esportatore e importatore.",
            "Packing list: elenco dettagliato degli articoli imballati con pesi e dimensioni.",
            "Polizza di carico / lettera di vettura aerea: contratto di trasporto con il vettore.",
            "Certificato di origine: comprova l origine e puo influire su dazi e preferenze.",
            "Dichiarazione di importazione o esportazione: atto ufficiale presso le dogane.",
        ],
        processTitle: 'Il nostro processo di consulenza ed esecuzione doganale',
        processSteps: [
            "Analisi preliminare delle esigenze e delle caratteristiche del mobilio, individuazione delle norme applicabili.",
            "Preparazione e revisione accurata della documentazione per completezza e correttezza.",
            "Classificazione doganale precisa per determinare dazi e oneri corretti.",
            "Coordinamento dello sdoganamento in porti, aeroporti e frontiere con le autorita.",
            "Follow-up post-sdoganamento per verificare la chiusura di tutte le fasi.",
        ],
        benefitsTitle: 'Benefici strategici di una gestione doganale specialistica',
        benefitsItems: [
            "Maggiore conformita legale e minor rischio di sanzioni e ritardi.",
            "Ottimizzazione dei costi tramite classificazione corretta e accordi commerciali.",
            "Agilita negli scambi internazionali e supply chain piu fluida.",
            "Consegne piu prevedibili e reputazione rafforzata sui mercati globali.",
        ],
        ctaTitle: 'Mettete in sicurezza i flussi internazionali di mobili corporate',
        ctaText:
            "Contattateci per una valutazione doganale, una roadmap documentale su misura e un'esecuzione coordinata con i vostri tempi logistici.",
        ctaPrimaryLabel: 'Richiedi preventivo',
    },
};

export const artSpecializedInstallationContentByLocale: Record<string, ArtSpecializedInstallationContent> = {
    fr: {
        eyebrow: 'Installation specialisee',
        hero: "L installation specialisee du mobilier corporate va au-dela du simple montage: c est la garantie que chaque element s integre a l environnement avec precision maximale et pleine fonctionnalite. Le service exige une expertise technique, des outils adaptes et une lecture rigoureuse des specifications fabricants. Un espace de travail bien configure soutient productivite et bien-etre: nous deployons des solutions qui transforment votre projet en realisation impeccable.",
        importanceTitle: "L importance d une installation specialisee",
        importanceText:
            "L installation specialisee du mobilier corporate est un levier qui prolonge la duree de vie et la performance de vos investissements. Il ne s agit pas seulement d assembler des modules: il s agit d optimiser l espace, de securiser l ergonomie et la securite, et de preserver l esthetique du design d origine. Nos equipes sont formees aux configurations les plus exigeantes, des stations de travail complexes aux systemes de rangement et cloisons, avec une attention aux details et le respect des normes techniques.",
        furnitureTypesTitle: 'Types de mobilier necessitant une installation specialisee',
        furnitureTypesIntro:
            "Plusieurs familles de mobilier corporate appellent une approche dediee en raison de la complexite, de la technologie embarquee ou des exigences d integration. Parmi elles:",
        furnitureTypesItems: [
            "Systemes modulaires et panneaux: alignement precis et integration de cablage et connectivite.",
            "Mobilier ergonomique avance: sieges et bureaux motorises ou pneumatiques necessitant calibrage.",
            "Cloisons et ecrans acoustiques: fixation robuste et etancheite pour performance acoustique.",
            "Armoires et archives mobiles: rails et mecanismes de translation poses avec exactitude.",
            "Mobilier sur mesure: pieces uniques avec ajustements fins et respect du projet architectural.",
        ],
        furnitureTypesOutro:
            "Une pose conforme de ces equipements est determinante pour leur fonctionnement durable et leur fiabilite quotidienne.",
        toolsTitle: 'Outils et techniques avancees',
        toolsIntro:
            "Pour garantir une installation de tres haut niveau, nous mobilisons des outils et methodes avancees qui securisent la qualite du resultat final, notamment:",
        toolsItems: [
            "Niveaux laser: alignement parfait des plans et structures porteuses.",
            "Instruments de mesure de precision: decoupes et ajustements au millimetre sur pieces sur mesure.",
            "Outillage electrique et pneumatique: cadence maitrisee et fixation sure.",
            "Systemes d ancrage dedies: adaptation aux supports et materiaux pour stabilite durable.",
            "Ergonomie appliquee: reglages qui soutiennent confort et sante des utilisateurs.",
        ],
        toolsOutro:
            "Nos equipes suivent en continu les evolutions d outillage et de protocoles de pose.",
        processTitle: 'Notre processus d installation specialisee',
        processSteps: [
            "Planification detaillee: analyse des plans, specifications techniques et calendriers.",
            "Preparation du chantier: protection des sols et parois, organisation logistique des outils.",
            "Montage et fixation par techniciens experimentes selon notices fabricants et regles de securite.",
            "Reglages fins et calibrations pour fonctionnalite et ergonomie optimales.",
            "Nettoyage, inspection finale et remise d un espace pret a l occupation.",
        ],
        benefitsTitle: 'Benefices strategiques de l installation specialisee',
        benefitsItems: [
            "Optimisation de l espace et de la surface utile au service de la fonctionnalite.",
            "Securite et ergonomie renforcees, reduction des risques et soutien au bien-etre.",
            "Preservation des garanties constructeurs grace a une pose conforme aux directives.",
            "Moins de couts de maintenance corrective et valorisation de l environnement de travail.",
        ],
        ctaTitle: 'Donnez au mobilier corporate la precision qu il merite',
        ctaText:
            "Contactez-nous pour planifier une installation technique, un calendrier coordonne avec vos livraisons et une execution conforme aux standards fabricants.",
        ctaPrimaryLabel: 'Demander un devis',
    },
    en: {
        eyebrow: 'Specialized installation',
        hero: 'Specialized corporate furniture installation goes beyond simple assembly: it is the assurance that every piece is integrated into the workplace with maximum precision and full functionality. The work demands deep technical knowledge, the right tools, and a clear read of each manufacturer’s specification. A well-configured environment supports productivity and wellbeing—which is why we deliver solutions that turn your project into a flawless outcome.',
        importanceTitle: 'Why specialized installation matters',
        importanceText:
            'Specialized installation is a differentiator that protects the longevity and performance of your investment. It is not only about fitting components together: it is about optimising space, securing ergonomics and safety, and preserving the original design intent. Our teams are trained across demanding configurations—from complex workstations to storage systems and partitions—with meticulous attention to detail and rigorous adherence to technical standards.',
        furnitureTypesTitle: 'Furniture types that require specialized installation',
        furnitureTypesIntro:
            'Many corporate furniture categories need a dedicated approach because of complexity, embedded technology, or integration requirements. Examples include:',
        furnitureTypesItems: [
            'Modular systems and panels: precise alignment plus cabling and connectivity integration.',
            'Advanced ergonomic furniture: motorised or pneumatic desks and chairs that need calibration.',
            'Acoustic partitions and screens: secure fixing and sealing for sound performance.',
            'Mobile cabinets and high-density filing: rails and travel mechanisms installed to exact tolerances.',
            'Bespoke and custom pieces: unique items that need fine adjustment and design-level detailing.',
        ],
        furnitureTypesOutro:
            'Correct installation of these elements is essential for day-to-day functionality and long-term durability.',
        toolsTitle: 'Advanced tools and techniques',
        toolsIntro:
            'To deliver installation excellence we use advanced tools and methods that keep quality high and risk low, including:',
        toolsItems: [
            'Laser levelling: perfect alignment of surfaces and supporting structures.',
            'Precision measuring instruments: millimetre-accurate cuts and adjustments on custom work.',
            'Electric and pneumatic tooling: controlled pace with secure fixing.',
            'Dedicated fixing systems: matched to substrates and materials for stable, compliant anchoring.',
            'Applied ergonomics: configuration that supports user comfort and health.',
        ],
        toolsOutro:
            'Our teams stay current with the latest innovations in tools and installation methods.',
        processTitle: 'Our specialized installation process',
        processSteps: [
            'Detailed planning: review of drawings, technical specifications, and programme milestones.',
            'Site preparation: protection of finishes and disciplined tool and material staging.',
            'Assembly and fixing by experienced technicians following manufacturer instructions and safety rules.',
            'Fine tuning and calibration to validate function and ergonomics.',
            'Final clean-down, inspection, and handover of a workspace ready for use.',
        ],
        benefitsTitle: 'Strategic benefits of specialized installation',
        benefitsItems: [
            'Space optimisation that maximises usable area and operational usefulness.',
            'Stronger safety and ergonomics, reducing incidents and supporting team wellbeing.',
            'Manufacturer warranty protection through compliant, guideline-led installation.',
            'Lower lifecycle maintenance costs and a workplace environment that reinforces your brand.',
        ],
        ctaTitle: 'Give your corporate furniture the precision it deserves',
        ctaText:
            'Contact us to plan a technical installation, align execution with your delivery schedule, and meet manufacturer standards without compromise.',
        ctaPrimaryLabel: 'Request a quote',
    },
    de: {
        eyebrow: 'Spezialmontage',
        hero: 'Spezialisierte Montage von Corporate-Moebeln ist mehr als Zusammenbauen: Sie stellt sicher, dass jedes Element mit hoechster Praezision und voller Funktionalitaet in die Arbeitsumgebung integriert wird. Es braucht fundiertes technisches Know-how, passendes Werkzeug und klare Umsetzung der Herstellervorgaben. Ein gut konfigurierter Arbeitsplatz foerdert Produktivitaet und Wohlbefinden – deshalb liefern wir Loesungen, die Ihr Projekt in ein makelloses Ergebnis verwandeln.',
        importanceTitle: 'Warum spezialisierte Installation entscheidend ist',
        importanceText:
            'Spezialisierte Installation sichert Langlebigkeit und Leistung Ihrer Investition. Es geht nicht nur ums Zusammenstecken: Es geht um Raumoptimierung, Ergonomie und Sicherheit sowie um die Erhaltung des Design-Charakters. Unsere Teams beherrschen anspruchsvolle Konfigurationen – von komplexen Workstations bis zu Lagern und Trennwaenden – mit Sorgfalt und Einhaltung technischer Normen.',
        furnitureTypesTitle: 'Moebeltypen, die Spezialmontage erfordern',
        furnitureTypesIntro:
            'Zahlreiche Corporate-Moebel verlangen ein spezielles Vorgehen wegen Komplexitaet, eingebetteter Technik oder Integrationsanforderungen. Dazu zaehlen:',
        furnitureTypesItems: [
            'Modulare Systeme und Paneele: praezise Ausrichtung plus Verkabelung und Konnektivitaet.',
            'Fortgeschrittene Ergonomie: motorisierte oder pneumatische Tische und Stuehle mit Kalibrierbedarf.',
            'Akustik-Trennwaende und Screens: sichere Befestigung und Abdichtung fuer Schallschutz.',
            'Rollende Schraenke und kompakte Archive: Schienen und Laufwerke mit engen Toleranzen.',
            'Massgefertigte Stuecke: Feinjustierung und projektnahe Detailtreue.',
        ],
        furnitureTypesOutro:
            'Fachgerechte Montage dieser Systeme ist Voraussetzung fuer Funktion und Dauerhaftigkeit.',
        toolsTitle: 'Fortgeschrittene Werkzeuge und Methoden',
        toolsIntro:
            'Fuer hoechste Qualitaet setzen wir moderne Werkzeuge und Techniken ein, unter anderem:',
        toolsItems: [
            'Laser-Nivellierung: perfekte Flucht von Flaechen und tragenden Strukturen.',
            'Praezisionsmessgeraete: millimetergenaue Schnitte und Anpassungen bei Sonderanfertigungen.',
            'Elektro- und Druckluftwerkzeug: kontrolliertes Arbeiten mit sicherer Befestigung.',
            'Spezielle Befestigungssysteme: abgestimmt auf Untergrund und Material fuer stabile Halterung.',
            'Angewandte Ergonomie: Einstellungen zum Schutz von Komfort und Gesundheit.',
        ],
        toolsOutro:
            'Unsere Teams bleiben mit Schulungen und Standards zu Werkzeugen und Montageverfahren auf dem neuesten Stand.',
        processTitle: 'Unser Ablauf fuer Spezialmontage',
        processSteps: [
            'Detaillierte Planung: Plaene, technische Daten und Terminlogik.',
            'Baustellen-Vorbereitung: Schutz von Boeden und Waenden, geordnete Werkzeug- und Materialbereitstellung.',
            'Montage und Befestigung durch erfahrene Techniker nach Herstellervorgaben und Sicherheitsregeln.',
            'Feinjustierung und Kalibrierung fuer Funktion und Ergonomie.',
            'Endreinigung, Abnahme und Uebergabe eines einsatzbereiten Arbeitsumfelds.',
        ],
        benefitsTitle: 'Strategische Vorteile spezialisierter Installation',
        benefitsItems: [
            'Raumoptimierung und hoehere Nutzflaecheneffizienz.',
            'Mehr Sicherheit und Ergonomie, weniger Unfallrisiko und besseres Wohlbefinden.',
            'Erhalt der Herstellergarantien durch normgerechte Montage.',
            'Geringere Folgekosten und aufgewertete Arbeitsumgebung fuer Ihre Marke.',
        ],
        ctaTitle: 'Schenken Sie Ihrem Corporate-Moebel die noetige Praezision',
        ctaText:
            'Kontaktieren Sie uns fuer technische Montageplanung, Abstimmung mit Ihrer Lieferlogistik und Ausfuehrung nach Herstellerstandard.',
        ctaPrimaryLabel: 'Angebot anfragen',
    },
    it: {
        eyebrow: 'Installazione specializzata',
        hero: "L installazione specializzata di mobili corporate va oltre il semplice montaggio: e la garanzia che ogni elemento si integri nell ambiente con la massima precisione e funzionalita. Richiede competenze tecniche solide, strumenti adeguati e una lettura rigorosa delle specifiche dei produttori. Un ambiente di lavoro ben configurato sostiene produttivita e benessere: per questo offriamo soluzioni che trasformano il progetto in un risultato impeccabile.",
        importanceTitle: "Perche conta un'installazione specializzata",
        importanceText:
            "L installazione specializzata e un differenziale per la longevita e le prestazioni del vostro investimento. Non si limita ad assemblare componenti: ottimizza lo spazio, rafforza ergonomia e sicurezza e preserva l estetica del design originale. I nostri team sono formati su configurazioni complesse, dalle postazioni di lavoro agli sistemi di archiviazione e alle pareti divisorie, con attenzione ai dettaglio e rispetto delle norme tecniche.",
        furnitureTypesTitle: 'Tipologie di mobili che richiedono installazione specializzata',
        furnitureTypesIntro:
            "Diverse categorie di mobili corporate richiedono un approccio dedicato per complessita, tecnologia integrata o esigenze di integrazione. Tra esse:",
        furnitureTypesItems: [
            "Sistemi modulari e pannelli: allineamento preciso e integrazione di cablaggio e connettivita.",
            "Mobilita ergonomica avanzata: sedute e scrivanie motorizzate o pneumatiche da calibrare.",
            "Pareti e schermi acustici: fissaggio sicuro e tenuta per le prestazioni fonoisolanti.",
            "Armadi e archivi compatti: guide e meccanismi di scorrimento con tolleranze strette.",
            "Pezzi su misura: regolazioni fini e coerenza con il progetto architettonico.",
        ],
        furnitureTypesOutro:
            "Una posa corretta di questi elementi e essenziale per funzionalita e durata nel tempo.",
        toolsTitle: 'Strumenti e tecniche avanzate',
        toolsIntro:
            "Per un installazione di eccellenza utilizziamo strumenti e metodi avanzati che salvaguardano la qualita, tra cui:",
        toolsItems: [
            "Livelli laser: allineamento perfetto di superfici e strutture portanti.",
            "Strumenti di misura di precisione: tagli e regolazioni al millimetro su lavorazioni custom.",
            "Utensili elettrici e pneumatici: ritmi controllati e fissaggio sicuro.",
            "Sistemi di ancoraggio dedicati: adattati a supporti e materiali per stabilita duratura.",
            "Ergonomia applicata: configurazioni che favoriscono comfort e salute degli utenti.",
        ],
        toolsOutro:
            "Il nostro personale si aggiorna costantemente su innovazioni di strumenti e metodi di installazione.",
        processTitle: 'Il nostro processo di installazione specializzata',
        processSteps: [
            "Pianificazione dettagliata: analisi delle planimetrie, specifiche tecniche e cronoprogrammi.",
            "Preparazione del cantiere: protezione delle finiture e organizzazione logistica degli attrezzi.",
            "Montaggio e fissaggio da tecnici esperti secondo istruzioni dei produttori e norme di sicurezza.",
            "Regolazioni fini e calibrazioni per funzionalita ed ergonomia ottimali.",
            "Pulizia finale, collaudo e consegna di uno spazio pronto all uso.",
        ],
        benefitsTitle: "Benefici strategici di un'installazione specializzata",
        benefitsItems: [
            "Ottimizzazione degli spazi e maggiore efficienza dell area utile.",
            "Sicurezza ed ergonomia rafforzate, minor rischio infortuni e benessere delle persone.",
            "Tutela delle garanzie dei produttori grazie a posa conforme alle linee guida.",
            "Riduzione dei costi di manutenzione correttiva e valorizzazione dell ambiente di lavoro.",
        ],
        ctaTitle: 'Date al mobilio corporate la precisione che merita',
        ctaText:
            "Contattateci per pianificare un installazione tecnica, allineare i tempi alle consegne e rispettare gli standard dei produttori.",
        ctaPrimaryLabel: 'Richiedi preventivo',
    },
};

export const artCollectionVehicleTransportContentByLocale: Record<string, ArtCollectionVehicleTransportContent> = {
    fr: {
        eyebrow: 'Transport de vehicules de collection',
        hero: "Le transport de vehicules de collection est une discipline qui exige precision, securite et un profond respect de l histoire et de la valeur de chaque automobile. Au-dela d un simple deplacement, il s agit d une operation logistique hautement specialisee qui preserve integrite, authenticite et investissement. Chaque vehicule presente des caracteristiques uniques et une valeur financiere et emotionnelle: nous proposons des solutions sur mesure pour une protection maximale.",
        importanceTitle: "L importance d un transport specialise",
        importanceText:
            "Le transport specialise des vehicules de collection est un pilier pour preserver ces actifs uniques. Il ne s agit pas seulement de deplacer une voiture: il s agit qu elle arrive dans un etat identique au depart, sans dommage ni usure prematuree. Notre expertise couvre les specificites de chaque modele, des classiques rares aux supercars modernes, avec techniques et equipements adaptes et une attention meticuleuse du chargement a la livraison.",
        risksTitle: 'Defis et risques du transport de vehicules de collection',
        risksText:
            "Ce transport comporte des risques significatifs qui exigent une approche dediee: fragilite de composants anciens, sensibilite des finitions et valeur elevee rendent tout incident potentiellement grave. Vibrations excessives, chocs, variations climatiques, vol et manutention inadequate sont des menaces recurrentes. Sans planification et execution specialisees, les consequences peuvent etre irreversibles: perte de valeur et frustration. Il est essentiel de les reduire avec des solutions sur mesure.",
        materialsTitle: 'Solutions et equipements pour un transport securise',
        materialsItems: [
            "Methodologie integree: nous combinons protocoles et equipements de pointe concus pour les vehicules de collection, notamment:",
            "Transport sur remorque fermee: protection totale contre les intemperies, la poussiere, les projections et les regards, avec discretion renforcee.",
            "Suspension pneumatique: reduction des vibrations et des chocs pour un trajet plus stable et fluide.",
            "Rampes hydrauliques et treuils a faible angle: chargement et dechargement des vehicules bas sans risque de raclage ni dommage structurel.",
            "Sangles de fixation dediees: repartition uniforme des efforts sur les pneus pour proteger suspension et carrosserie.",
            "Suivi GPS et securisation 24h/24: tracabilite en temps reel et protection contre vol ou vandalisme.",
            "Choix d equipement et de methode calibre sur chaque vehicule pour une protection optimale.",
        ],
        processTitle: 'Notre processus de transport de vehicules de collection',
        processSteps: [
            "Evaluation detaillee du vehicule et de l itineraire, avec prise en compte des contraintes techniques et des attentes du client.",
            "Preparation: verification des fluides, pneus et batterie, et documentation photographique complete a l etat des lieux.",
            "Chargement et arrimage par techniciens specialises avec le materiel adapte au modele.",
            "Transport sous surveillance continue, avec equipe preparee aux imprevus sur la route.",
            "Livraison et dechargement avec la meme rigueur, inspection finale et validation de l integrite du vehicule.",
        ],
        benefitsTitle: 'Benefices strategiques du transport specialise',
        benefitsItems: [
            "Preservation de la valeur de l investissement et protection contre les dommages.",
            "Tranquillite totale: votre bien est confie a des professionnels experimentes et suivis en continu.",
            "Efficacite et ponctualite assurees par une planification logistique rigoureuse.",
            "Confidentialite et discretion preservees pour le proprietaire et le vehicule.",
            "Soutien a la conservation et a la valorisation de votre collection automobile.",
        ],
        ctaTitle: 'Confiez vos joyaux automobiles a une expertise dediee',
        ctaText:
            "Contactez-nous pour une evaluation de transport, un itineraire securise et une execution coordonnee avec le niveau de confidentialite requis.",
        ctaPrimaryLabel: 'Demander un devis',
    },
    en: {
        eyebrow: 'Collection vehicle transport',
        hero: 'Transporting collection vehicles is a craft that demands precision, safety, and deep respect for the history and value of every automobile. More than a simple move, it is a highly specialised logistics operation that protects integrity, originality, and investment in each automotive jewel. We know every collector car is unique—financially and emotionally—which is why we deliver tailored solutions with maximum protection.',
        importanceTitle: 'Why specialised transport matters',
        importanceText:
            'Specialised collection-vehicle transport is fundamental to preserving these unique assets. It is not only moving a car from A to B: it is ensuring it arrives in the same condition it left—free from damage or unnecessary wear. Our expertise spans the nuances of each model, from rare classics to modern supercars, with the right techniques and equipment and meticulous care from loading to final delivery.',
        risksTitle: 'Challenges and risks in collection vehicle transport',
        risksText:
            'This transport carries significant risks that require a differentiated approach. Fragile vintage components, delicate finishes, and high value mean any incident can be catastrophic. Excessive vibration, impact, climate swings, theft, and poor handling are ever-present threats. Without specialist planning and execution, the outcome can be irreversible loss of value and deep frustration—mitigation demands bespoke transport solutions.',
        materialsTitle: 'Solutions and equipment for secure transport',
        materialsItems: [
            'Integrated approach: we deploy leading-edge solutions and equipment engineered for collector vehicles, including:',
            'Enclosed trailer transport: full protection from weather, dust, debris, and prying eyes—with added discretion.',
            'Air-ride suspension: reduced vibration and shock for a smoother, more stable journey.',
            'Hydraulic ramps and low-angle winches: safe loading and unloading for low-ground-clearance vehicles without scrapes or structural risk.',
            'Purpose-designed tie-downs: even load distribution on tyres to protect suspension and bodywork.',
            'GPS monitoring and 24/7 security: real-time tracking and protection against theft or vandalism.',
            'Equipment and methodology tailored to each vehicle for optimum protection.',
        ],
        processTitle: 'Our collection vehicle transport process',
        processSteps: [
            'Detailed vehicle and route assessment, incorporating technical constraints and client requirements.',
            'Preparation: fluids, tyres, and battery checks plus full photographic documentation of condition.',
            'Loading and securing by specialist technicians using equipment matched to the model.',
            'In-transit monitoring with a team ready to respond to contingencies on the road.',
            'Delivery and unloading with the same rigour—final inspection and integrity sign-off.',
        ],
        benefitsTitle: 'Strategic benefits of specialist transport',
        benefitsItems: [
            'Investment value preserved with protection against damage in transit.',
            'Total peace of mind: experienced professionals and continuous oversight.',
            'Efficiency and on-time delivery backed by rigorous logistics planning.',
            'Confidentiality and discretion maintained throughout the move.',
            'Support for the care and long-term appreciation of your automotive collection.',
        ],
        ctaTitle: 'Entrust your automotive jewels to dedicated expertise',
        ctaText:
            'Contact us for a transport assessment, a secure routing plan, and coordinated execution with the confidentiality level you require.',
        ctaPrimaryLabel: 'Request a quote',
    },
    de: {
        eyebrow: 'Transport von Sammlerfahrzeugen',
        hero: 'Der Transport von Sammlerfahrzeugen ist eine Aufgabe, die Praezision, Sicherheit und tiefen Respekt vor Geschichte und Wert jedes Automobils verlangt. Mehr als eine reine Versetzung ist es eine hochspezialisierte logistische Operation, die Integritaet, Originalitaet und Investition schuetzt. Jedes Fahrzeug ist einzigartig – finanziell und emotional – deshalb liefern wir massgeschneiderten Schutz.',
        importanceTitle: 'Warum spezialisierter Transport entscheidend ist',
        importanceText:
            'Spezialisierter Transport ist Grundlage fuer den Erhalt dieser einmaligen Assets. Es geht nicht nur darum, ein Auto von A nach B zu bringen: Es muss in dem Zustand ankommen, in dem es abgeholt wurde – ohne Schaeden oder ueberfluessigen Verschleiss. Unsere Expertise deckt die Besonderheiten jedes Modells ab, von seltenen Klassikern bis zu modernen Supersportwagen, mit passenden Techniken und Geraeten und sorgfaeltiger Betreuung von der Verladung bis zur Uebergabe.',
        risksTitle: 'Herausforderungen und Risiken beim Sammlertransport',
        risksText:
            'Der Transport birgt erhebliche Risiken und braucht ein spezielles Vorgehen: fragiles historisches Bauteilwerk, empfindliche Oberflaechen und hoher Wert machen jeden Vorfall potenziell schwerwiegend. Uebermaessige Vibration, Stoss, Klimaschwankungen, Diebstahl und unsachgemaesse Handhabung sind Dauerrisiken. Ohne spezialisierte Planung und Ausfuehrung drohen irreparable Schaeden und Wertverlust – deshalb sind massgeschneiderte Transportloesungen unverzichtbar.',
        materialsTitle: 'Loesungen und Ausruestung fuer sicheren Transport',
        materialsItems: [
            'Integriertes Vorgehen: Wir setzen modernste Loesungen und auf Sammlerfahrzeuge ausgelegte Ausruestung ein, darunter:',
            'Geschlossener Autotransport: vollstaendiger Schutz vor Witterung, Staub, Fremdkoerpern und neugierigen Blicken – mit mehr Diskretion.',
            'Luftfederung: weniger Vibration und Stoss fuer ruhigere, stabilere Fahrten.',
            'Hydraulik-Rampen und Flachwinkel-Seilwinden: sicheres Be- und Entladen tiefer Fahrzeuge ohne Kratzer oder Strukturrisiko.',
            'Spezielle Zurrgurte: gleichmaessige Kraefte auf die Reifen zum Schutz von Fahrwerk und Karosserie.',
            'GPS-Ueberwachung und 24/7-Sicherheit: Echtzeit-Nachverfolgung und Schutz vor Diebstahl oder Vandalismus.',
            'Auswahl von Methode und Equipment individuell pro Fahrzeug fuer optimalen Schutz.',
        ],
        processTitle: 'Unser Ablauf fuer Sammlerfahrzeug-Transport',
        processSteps: [
            'Detaillierte Bewertung von Fahrzeug und Route unter technischen Vorgaben und Kundenwuenschen.',
            'Vorbereitung: Pruefung von Fluessigkeiten, Reifen und Batterie sowie vollstaendige fotografische Dokumentation.',
            'Verladung und Sicherung durch spezialisierte Techniker mit modellspezifischem Equipment.',
            'Transport mit laufender Ueberwachung und Team fuer unterwegs auftretende Sonderfaelle.',
            'Auslieferung und Entladung mit gleicher Sorgfalt – Endabnahme und Integritaetsbestaetigung.',
        ],
        benefitsTitle: 'Strategische Vorteile spezialisierten Transports',
        benefitsItems: [
            'Werterhalt des Investments und Schutz vor Transportschaeden.',
            'Ruhe und Sicherheit: erfahrene Spezialisten und kontinuierliche Betreuung.',
            'Effizienz und Puenktlichkeit durch rigorose logistische Planung.',
            'Vertraulichkeit und Diskretion waehrend des gesamten Ablaufs.',
            'Unterstuetzung fuer Pflege und langfristige Wertschaetzung Ihrer Sammlung.',
        ],
        ctaTitle: 'Vertrauen Sie Ihre automobilen Schmuckstuecke Profis an',
        ctaText:
            'Kontaktieren Sie uns fuer eine Transportbewertung, eine sichere Routenplanung und koordinierte Ausfuehrung mit der gewuenschten Vertraulichkeit.',
        ctaPrimaryLabel: 'Angebot anfragen',
    },
    it: {
        eyebrow: 'Trasporto veicoli da collezione',
        hero: "Il trasporto di veicoli da collezione e un mestiere che richiede precisione, sicurezza e profondo rispetto per la storia e il valore di ogni automobile. Non e un semplice spostamento: e un'operazione logistica altamente specializzata che tutela integrita, originalita e investimento. Ogni esemplare e unico, sul piano economico e affettivo: offriamo soluzioni personalizzate per la massima protezione.",
        importanceTitle: "Perche conta un trasporto specializzato",
        importanceText:
            "Il trasporto specializzato e fondamentale per preservare questi asset unici. Non si limita a spostare un'auto: deve arrivare nelle stesse condizioni di partenza, senza danni ne usura evitabile. La nostra competenza copre le particolarita di ogni modello, dai classici rari alle supersportive moderne, con tecniche e attrezzature adeguate e cura meticolosa dal carico alla consegna.",
        risksTitle: 'Sfide e rischi nel trasporto di veicoli da collezione',
        risksText:
            "Questo trasporto comporta rischi rilevanti che richiedono un approccio dedicato: fragilita di componenti d'epoca, finiture delicate e alto valore rendono ogni incidente potenzialmente grave. Vibrazioni eccessive, urti, variazioni climatiche, furto e movimentazione impropria sono minacce costanti. Senza pianificazione ed esecuzione specialistiche si rischiano danni irreparabili e perdita di valore: serve mitigare con soluzioni su misura.",
        materialsTitle: 'Soluzioni e attrezzature per un trasporto sicuro',
        materialsItems: [
            "Approccio integrato: combiniamo soluzioni all'avanguardia e attrezzature dedicate ai veicoli da collezione, tra cui:",
            "Autotreno coperto: protezione totale da agenti atmosferici, polvere, detriti e sguardi indiscreti, con maggiore discrezione.",
            "Sospensione pneumatica: riduzione di vibrazioni e urti per un viaggio piu stabile e morbido.",
            "Rampe idrauliche e verricelli a basso angolo: carico e scarico sicuro per veicoli bassi senza graffi o rischi strutturali.",
            "Cinghie di ancoraggio dedicate: distribuzione uniforme delle forze sui pneumatici per proteggere sospensioni e carrozzeria.",
            "Monitoraggio GPS e sicurezza 24 ore su 24: tracciamento in tempo reale e protezione da furto o vandalismo.",
            "Scelta di metodo e attrezzature calibrata su ogni veicolo per la protezione ottimale.",
        ],
        processTitle: 'Il nostro processo di trasporto per veicoli da collezione',
        processSteps: [
            "Valutazione dettagliata del veicolo e del percorso, con vincoli tecnici e requisiti del cliente.",
            "Preparazione: controllo di fluidi, pneumatici e batteria e documentazione fotografica completa.",
            "Carico e fissaggio da tecnici specializzati con equipaggiamento adeguato al modello.",
            "Trasporto con monitoraggio continuo e squadra pronta a gestire imprevisti.",
            "Consegna e scarico con la stessa attenzione, ispezione finale e verifica dell'integrita.",
        ],
        benefitsTitle: 'Benefici strategici del trasporto specializzato',
        benefitsItems: [
            "Preservazione del valore dell'investimento e protezione da danni.",
            "Massima tranquillita: professionisti esperti e supervisione continua.",
            "Efficienza e puntualita grazie a una pianificazione logistica rigorosa.",
            "Riservatezza e discrezione lungo tutto il processo.",
            "Supporto alla cura e alla valorizzazione della collezione automobilistica.",
        ],
        ctaTitle: 'Affidate le vostre gemme automobilistiche a competenze dedicate',
        ctaText:
            "Contattateci per una valutazione di trasporto, un itinerario sicuro e un'esecuzione coordinata con il livello di riservatezza richiesto.",
        ctaPrimaryLabel: 'Richiedi preventivo',
    },
};

export const privateHauteCouturePackagingContentByLocale: Record<string, PrivateHauteCouturePackagingContent> = {
    fr: {
        eyebrow: 'Emballage haute couture',
        hero: "L emballage haute couture est le sommet du soin et de la sophistication pour proteger les pieces de luxe. Plus qu une enveloppe, il prolonge l objet qu il contient, incarne sa valeur intrinseque et son exclusivite, et traduit une exigence absolue du detail. Chaque creation est pensee comme une oeuvre en soi, securisant le bien tout en garantissant une presentation impeccable. Le luxe exige une protection a la hauteur: nous preservons l integrite materielle, l experience et la perception de valeur avec des solutions sur mesure qui elevent votre standard d emballage.",
        importanceTitle: "L importance de l emballage haute couture",
        importanceText:
            "L emballage haute couture est un pilier pour preserver et valoriser les biens de luxe. Il ne se limite pas a la protection mecanique: il construit une experience sensorielle et visuelle qui renforce l exclusivite du produit. Notre expertise associe materiaux nobles, design innovant et gestes artisanaux, pour que chaque piece voyage et s expose avec la plus haute distinction, de la selection des materiaux au dernier geste de finition.",
        risksTitle: 'Defis et risques dans la protection des pieces de luxe',
        risksText:
            "La protection du luxe comporte des risques majeurs qui exigent une approche hautement specialisee: fragilite des materiaux precieux, sensibilite aux variations d environnement, vulnerabilite aux dommages esthetiques et valeur de marche elevee rendent tout incident potentiellement grave. Rayures, chocs, humidite, poussiere ou manutention inadequate peuvent desvaloriser l objet. Sans emballage et protection adaptes, les pertes financieres et reputations suivent. Il est indispensable de reduire ces risques avec des solutions sur mesure.",
        materialsTitle: 'Solutions et materiaux pour emballage haute couture',
        materialsItems: [
            "Approche integree: nous combinons solutions et materiaux de pointe concus pour le luxe, notamment:",
            "Ecrins et coffrets sur mesure: bois nobles, acrylique ou composites, garnissage soie, velours ou mousses haute densite.",
            "Amortisseurs inertes: mousses a cellules fermees, gels de silice et materiaux qui absorbent les chocs et regulent l humidite sans reaction avec la piece.",
            "Enveloppes protectrices: textiles antistatiques, papiers de soie sans acide et films qui limitent rayures et agressions externes.",
            "Maintien delicat: berceaux moules, rubans soie ou velours qui immobilisent sans pression excessive.",
            "Controle climatique: emballages avec suivi temperature et humidite, et options pour chaine thermique ou environnement maitrise.",
            "Choix des materiaux et de la methodologie calibre sur chaque objet pour une protection optimale et une experience de deballage exclusive.",
        ],
        processTitle: 'Notre processus d emballage haute couture',
        processSteps: [
            "Analyse approfondie du produit: dimensions, poids, materiaux, fragilites et valeur.",
            "Conception sur mesure de l emballage: architecture interne et externe, choix des materiaux et techniques de protection.",
            "Fabrication par artisans specialises, avec finitions exigeantes et controle du detail.",
            "Mise en caisse en environnement controle par equipes formees au maniement des pieces delicates et fixation millimetree.",
            "Inspection qualite et documentation photographique avant transport ou presentation.",
        ],
        benefitsTitle: 'Benefices strategiques de l emballage haute couture',
        benefitsItems: [
            "Preservation integrale du produit contre dommages physiques et agressions environnementales.",
            "Experience client elevee: le deballage devient un moment memorisable et exclusif.",
            "Renforcement de la marque et du produit par un niveau d excellence et de sophistication aligne sur le luxe.",
            "Securite renforcee en transport et stockage grace a des protections de derniere generation et risques attenues.",
            "Contribution a la reputation et a la reussite durable sur le segment luxe.",
        ],
        ctaTitle: 'Elevez la protection et la presentation de vos pieces de luxe',
        ctaText:
            "Contactez-nous pour une evaluation de vos besoins, une proposition d emballage sur mesure et une execution discrete alignee sur vos calendriers.",
        ctaPrimaryLabel: 'Demander un devis',
    },
    en: {
        eyebrow: 'Haute couture packaging',
        hero: 'Haute couture packaging is the ultimate expression of care and sophistication in protecting luxury goods. More than a wrapper, it extends the piece it holds—reflecting intrinsic value, exclusivity, and meticulous attention to detail. Each solution is conceived as a work in its own right, safeguarding the object while delivering flawless presentation. Luxury demands protection that matches its stature: we preserve not only physical integrity but the experience and perceived value, with bespoke solutions that raise your packaging standard.',
        importanceTitle: 'Why haute couture packaging matters',
        importanceText:
            'Haute couture packaging is fundamental to preserving and elevating luxury assets. It goes beyond damage prevention: it shapes a sensory and visual experience that reinforces product exclusivity. Our expertise blends premium materials, innovative design, and artisan techniques so every piece travels and is presented with maximum distinction—from material selection through to the final finish.',
        risksTitle: 'Challenges and risks in protecting luxury goods',
        risksText:
            'Luxury protection carries significant risks that demand a highly specialised approach. Fragile precious materials, environmental sensitivity, vulnerability to aesthetic harm, and very high market value mean any incident can be catastrophic. Scratches, impact, humidity, dust, or poor handling can all devalue an object. Inadequate packaging can drive financial loss and reputational damage—mitigation requires bespoke protective solutions.',
        materialsTitle: 'Solutions and materials for haute couture packaging',
        materialsItems: [
            'Integrated approach: we deploy leading-edge solutions and materials engineered for luxury, including:',
            'Bespoke cases and presentation boxes: fine woods, acrylic, or composites lined with silk, velvet, or high-density foams.',
            'Inert cushioning: closed-cell foams, silica gels, and materials that absorb shock and manage moisture without reacting with the piece.',
            'Protective wraps: anti-static fabrics, acid-free tissue, and films that limit scratches and external exposure.',
            'Gentle retention: moulded cradles, silk or velvet ties that secure without excessive pressure.',
            'Climate control: packaging with temperature and humidity monitoring, and options for controlled environments in transit.',
            'Materials and methodology tailored to each item for optimum protection and an exclusive unboxing experience.',
        ],
        processTitle: 'Our haute couture packaging process',
        processSteps: [
            'In-depth product review: dimensions, weight, materials, fragility, and value.',
            'Custom packaging design: internal and external structure, material selection, and protection techniques.',
            'Fabrication by specialist craftspeople with exacting finishes and detail control.',
            'Packing in a controlled environment by teams trained in delicate handling and precise fixation.',
            'Quality inspection and photographic documentation ahead of transport or presentation.',
        ],
        benefitsTitle: 'Strategic benefits of haute couture packaging',
        benefitsItems: [
            'Full preservation of the product against physical and environmental harm.',
            'Elevated client experience: unboxing becomes a memorable, exclusive moment.',
            'Brand and product elevation through packaging that mirrors the same level of excellence.',
            'Stronger security in transport and storage with state-of-the-art protection and reduced risk.',
            'Support for reputation and long-term success in the luxury segment.',
        ],
        ctaTitle: 'Raise the standard of protection and presentation',
        ctaText:
            'Contact us for a needs assessment, a bespoke packaging proposal, and discreet execution aligned with your timelines.',
        ctaPrimaryLabel: 'Request a quote',
    },
    de: {
        eyebrow: 'Haute-Couture-Verpackung',
        hero: 'Haute-Couture-Verpackung ist der hoechste Ausdruck von Sorgfalt und Raffinesse beim Schutz von Luxusguetern. Mehr als eine Huelle ist sie Fortsetzung des Stuecks selbst – sie spiegelt inneren Wert, Exklusivitaet und akribische Detailkultur. Jede Loesung wird wie ein eigenes Werk konzipiert: Schutz und makellose Praesentation gehen zusammen. Luxus braucht Schutz auf Augenhoehe – wir bewahren physische Integritaet, Erlebnis und Wertwahrnehmung mit massgeschneiderten Konzepten.',
        importanceTitle: 'Warum Haute-Couture-Verpackung zaehlt',
        importanceText:
            'Haute-Couture-Verpackung ist tragend fuer Erhalt und Aufwertung von Luxusassets. Es geht nicht nur um Schadenvermeidung: Es entsteht ein sinnliches und visuelles Erlebnis, das die Exklusivitaet unterstreicht. Wir verbinden edle Materialien, innovatives Design und handwerkliche Technik, damit jedes Stueck mit hoechster Distinktion transportiert und praesentiert wird – von der Materialwahl bis zur letzten Finish-Detailarbeit.',
        risksTitle: 'Herausforderungen und Risiken beim Schutz von Luxusguetern',
        risksText:
            'Luxus-Schutz birgt erhebliche Risiken und braucht hoechste Spezialisierung: empfindliche Edelmaterialien, Umweltsensibilitaet, aesthetische Verletzlichkeit und hoher Marktwert machen jeden Vorfall potenziell schwerwiegend. Kratzer, Stoss, Feuchte, Staub oder unsachgemaesse Handhabung entwerten. Unzureichende Verpackung fuehrt zu finanziellen und reputativen Verlusten – deshalb sind massgeschneiderte Schutzkonzepte unverzichtbar.',
        materialsTitle: 'Loesungen und Materialien fuer Haute-Couture-Verpackung',
        materialsItems: [
            'Integriertes Vorgehen: Wir setzen modernste Loesungen und fuer Luxus entwickelte Materialien ein, darunter:',
            'Massgefertigte Etuis und Praesentationsboxen: Edelhoelzer, Acryl oder Verbundwerkstoffe mit Seide, Samt oder hochdichten Schaeumen.',
            'Inerte Daempfung: geschlossenzellige Schaeume, Silikagel und Materialien fuer Stoss und Feuchte ohne chemische Wechselwirkung mit dem Objekt.',
            'Schutzumschlaenge: antistatische Textilien, saeurefreies Seidenpapier und Folien gegen Kratzer und Umwelteinwirkung.',
            'Schonende Fixierung: geformte Lager, Seiden- oder Samtbaender ohne uebermaessigen Druck.',
            'Klimafuehrung: Verpackungen mit Temperatur- und Feuchteerfassung sowie Optionen fuer kontrollierte Transportumgebungen.',
            'Material- und Methodenwahl individuell pro Stueck fuer optimalen Schutz und exklusives Auspack-Erlebnis.',
        ],
        processTitle: 'Unser Ablauf Haute-Couture-Verpackung',
        processSteps: [
            'Tiefenanalyse des Produkts: Masse, Gewicht, Materialien, Fragilitaet und Wert.',
            'Individuelles Verpackungsdesign: innere und aeussere Struktur, Materialauswahl und Schutztechniken.',
            'Fertigung durch spezialisierte Handwerker mit hoechsten Anspruechen an Finish und Detail.',
            'Verpackung in kontrollierter Umgebung durch Teams mit Schulung fuer sensible Objekte und praezise Fixierung.',
            'Qualitaetspruefung und fotografische Dokumentation vor Transport oder Praesentation.',
        ],
        benefitsTitle: 'Strategische Vorteile von Haute-Couture-Verpackung',
        benefitsItems: [
            'Ganzheitlicher Erhalt des Produkts vor physischen und Umweltschaeden.',
            'Gestaehltes Kundenerlebnis: Auspacken wird zu einem exklusiven, unvergesslichen Moment.',
            'Staerkere Marke und Produktwahrnehmung durch Verpackung auf gleichem Exzellenzniveau.',
            'Mehr Sicherheit in Transport und Lager mit modernstem Schutz und reduzierten Risiken.',
            'Unterstuetzung fuer Reputation und nachhaltigen Erfolg im Luxussegment.',
        ],
        ctaTitle: 'Heben Sie Schutz und Praesentation Ihrer Luxusstuecke',
        ctaText:
            'Kontaktieren Sie uns fuer eine Bedarfsanalyse, ein massgeschneidertes Verpackungskonzept und diskrete Ausfuehrung passend zu Ihren Zeitplaenen.',
        ctaPrimaryLabel: 'Angebot anfragen',
    },
    it: {
        eyebrow: 'Imballaggio haute couture',
        hero: "L imballaggio haute couture e la massima espressione di cura e raffinatezza nella protezione dei beni di lusso. Non e un semplice involucro: e prolungamento del pezzo che contiene, ne riflette valore intrinseco ed esclusivita e attenzione meticolosa al dettaglio. Ogni soluzione e concepita come un'opera a se, per sicurezza e presentazione impeccabile. Il lusso richiede protezione all'altezza: preserviamo integrita fisica, esperienza e percezione di valore con soluzioni su misura che elevano il vostro standard.",
        importanceTitle: "Perche conta l imballaggio haute couture",
        importanceText:
            "L imballaggio haute couture e un pilastro per preservare e valorizzare i beni di lusso. Non si limita a evitare danni: crea un'esperienza sensoriale e visiva che rafforza l esclusivita del prodotto. La nostra competenza unisce materiali pregiati, design innovativo e tecniche artigianali, cosi ogni pezzo viaggia e viene presentato con la massima distinzione, dalla scelta dei materiali alle rifiniture finali.",
        risksTitle: 'Sfide e rischi nella protezione dei beni di lusso',
        risksText:
            "La protezione del lusso comporta rischi significativi che richiedono un approccio altamente specialistico: fragilita di materiali preziosi, sensibilita ambientale, suscettibilita a danni estetici e altissimo valore di mercato rendono ogni incidente potenzialmente grave. Graffi, urti, umidita, polvere o movimentazione impropria possono svalutare l oggetto. Senza imballaggio adeguato seguono perdite economiche e di reputazione: serve mitigare con soluzioni su misura.",
        materialsTitle: 'Soluzioni e materiali per imballaggio haute couture',
        materialsItems: [
            "Approccio integrato: combiniamo soluzioni e materiali d'avanguardia pensati per il lusso, tra cui:",
            "Scatole e cofanetti su misura: legni pregiati, acrilico o compositi, rivestimenti in seta, velluto o schiume ad alta densita.",
            "Ammortizzatori inerti: schiume a cella chiusa, gel di silice e materiali che assorbono urti e controllano l umidita senza reagire con il pezzo.",
            "Involucri protettivi: tessuti antistatici, carte di seta senza acidi e film che limitano graffi e agenti esterni.",
            "Sistemi di fissaggio delicati: supporti sagomati, nastri in seta o velluto che immobilizzano senza pressione eccessiva.",
            "Controllo climatico: imballaggi con rilevazione di temperatura e umidita e opzioni per ambienti controllati in transito.",
            "Scelta di materiali e metodologia calibrata su ogni pezzo per protezione ottimale e un'esperienza di scarto esclusiva.",
        ],
        processTitle: 'Il nostro processo di imballaggio haute couture',
        processSteps: [
            "Analisi approfondita del prodotto: dimensioni, peso, materiali, fragilita e valore.",
            "Progetto di imballaggio personalizzato: struttura interna ed esterna, selezione materiali e tecniche di protezione.",
            "Realizzazione da artigiani specializzati, con finiture di alta qualita e cura del dettaglio.",
            "Inscatolamento in ambiente controllato da professionisti formati alla manipolazione di pezzi delicati e fissaggio preciso.",
            "Controllo qualita e documentazione fotografica prima del trasporto o della presentazione.",
        ],
        benefitsTitle: 'Benefici strategici dell imballaggio haute couture',
        benefitsItems: [
            "Preservazione integrale del prodotto da danni fisici e ambientali.",
            "Esperienza cliente elevata: lo scarto diventa un momento memorabile ed esclusivo.",
            "Valorizzazione di marca e prodotto con un livello di eccellenza e sofisticazione allineato al lusso.",
            "Sicurezza rafforzata in trasporto e stoccaggio con protezioni d'avanguardia e rischi ridotti.",
            "Contributo a reputazione e successo nel segmento luxury.",
        ],
        ctaTitle: 'Elevate protezione e presentazione dei vostri beni di lusso',
        ctaText:
            "Contattateci per una valutazione delle esigenze, una proposta di imballaggio su misura e un'esecuzione discreta allineata ai vostri calendari.",
        ctaPrimaryLabel: 'Richiedi preventivo',
    },
};

export const privateArtAntiquesManagementContentByLocale: Record<string, PrivateArtAntiquesManagementContent> = {
    fr: {
        eyebrow: 'Gestion d oeuvres et d antiquites',
        hero: "La gestion d oeuvres d art et d antiquites est un service d haute specialisation dedie a la preservation, la securite et la valorisation du patrimoine culturel et historique. Au-dela du simple stockage ou transport, il s agit d une approche holistique qui respecte la singularite de chaque piece, sa valeur intrinseque et extrinseque, et les conditions optimales de conservation. Chaque objet temoigne de l histoire et de la creativite humaine: nous offrons des solutions sur mesure pour une protection maximale et la preservation de votre heritage.",
        importanceTitle: "L importance d une gestion specialisee",
        importanceText:
            "Une gestion specialisee est un pilier pour la longevite et l integrite de ces biens precieux. Il ne s agit pas seulement de manipuler des objets: il s agit d appliquer des competences en conservation, logistique et securite pour que chaque piece conserve son etat et sa valeur dans le temps. Notre expertise couvre les besoins specifiques de chaque materiau, des peintures aux sculptures fragiles, du mobilier ancien aux documents historiques, avec les meilleures pratiques de manutention et de garde, de l evaluation initiale a la mise en reserve.",
        risksTitle: 'Defis et risques dans la gestion d oeuvres et d antiquites',
        risksText:
            "Cette gestion comporte des risques majeurs qui exigent une approche hautement specialisee: fragilite des materiaux anciens, sensibilite aux variations thermiques et hygrometriques, vulnerabilite aux dommages lors du transport et de la manutention, et valeur de marche elevee rendent tout incident potentiellement devastateur. Alteration par l environnement, vol, vandalisme et manutention inadequate sont des menaces recurrentes. Sans planification et execution dediees, les pertes peuvent etre irreversibles et le patrimoine compromis. Il est indispensable de reduire ces risques avec des solutions sur mesure.",
        materialsTitle: 'Solutions et equipements pour preservation et securite',
        materialsItems: [
            "Approche integree: nous mobilisons solutions et equipements de pointe concus pour les oeuvres et antiquites, notamment:",
            "Emballages sur mesure: caisses et enveloppes avec materiaux inertes et amortisseurs contre chocs et vibrations.",
            "Controle climatique: espaces de garde avec regulation stricte de temperature et d humidite pour limiter la degradation environnementale.",
            "Securite avancee: supervision 24h/24, alarmes, controle d acces et vigilance specialisee contre vol et vandalisme.",
            "Transport specialise: vehicules climatises, suspension pneumatique et equipes formees au maniement delicat pour des deplacements securises.",
            "Documentation et catalogage: dossiers photographiques, historiques de conservation et inventaires complets pour tracabilite et authenticite.",
            "Choix des solutions et de la methodologie calibre sur chaque piece pour une protection optimale.",
        ],
        processTitle: 'Notre processus de gestion d oeuvres et d antiquites',
        processSteps: [
            "Evaluation et catalogage detaille de chaque piece: etat de conservation, historique et specificites.",
            "Definition des strategies de conservation: emballage, transport et stockage alignes sur les exigences de l objet.",
            "Manutention et deplacements par specialistes avec techniques et equipements a faible risque.",
            "Stockage securise dans des installations de derniere generation, avec environnement maitrise et securite renforcee.",
            "Suivi continu et rapports periodiques sur l etat des biens pour maintenir valeur et integrite.",
        ],
        benefitsTitle: 'Benefices strategiques d une gestion specialisee',
        benefitsItems: [
            "Preservation de la valeur culturelle et financiere du patrimoine, contre dommages et degradation.",
            "Tranquillite totale: biens confies a des professionnels experimentes dans des sites hautement securises.",
            "Conformite aux normes internationales de conservation et de transport, facilitant expositions et mouvements mondiaux.",
            "Valorisation du fonds par une gestion qui preserve integrite et authenticite des pieces.",
            "Soutien a la perpetuation du legs culturel et a la reussite de votre collection ou institution.",
        ],
        ctaTitle: 'Protegez et valorisez votre patrimoine artistique et historique',
        ctaText:
            "Contactez-nous pour une evaluation de collection, une feuille de route de conservation et une execution discrete alignee sur vos exigences museales ou privees.",
        ctaPrimaryLabel: 'Demander un devis',
    },
    en: {
        eyebrow: 'Fine art and antiques management',
        hero: 'Managing fine art and antiques is a highly specialised service focused on preservation, security, and the elevation of cultural and historical assets. More than storage or transport alone, it is a holistic approach that honours each object’s singularity—its intrinsic and extrinsic value—and the conditions required for long-term care. Every work is a witness to history and human creativity; we deliver bespoke solutions that maximise protection and sustain your legacy.',
        importanceTitle: 'Why specialised management matters',
        importanceText:
            'Specialised management is fundamental to the longevity and integrity of these precious assets. It is not only about handling objects: it applies technical knowledge in conservation, logistics, and security so each piece retains its original condition and value over time. Our expertise spans the specific needs of each medium—from oil paintings and fragile sculpture to antique furniture and historical documents—implementing best practice in handling and storage, from initial assessment through to movement and safekeeping.',
        risksTitle: 'Challenges and risks in managing art and antiques',
        risksText:
            'This field carries significant risks that demand a highly specialised approach. Fragile historic materials, sensitivity to temperature and humidity shifts, vulnerability to physical harm during transit and handling, and high market value mean any incident can be devastating. Environmental deterioration, theft, vandalism, and poor handling are ever-present threats. Without specialist planning and execution, losses can be irreversible, value can fall, and heritage can be compromised—mitigation requires tailored management solutions.',
        materialsTitle: 'Solutions and equipment for preservation and security',
        materialsItems: [
            'Integrated approach: we deploy leading-edge solutions and equipment engineered for art and antiques, including:',
            'Custom packaging: bespoke crates and enclosures with inert materials and shock absorption to guard against impact and vibration.',
            'Climate control: storage environments with rigorous temperature and humidity regulation to prevent environmental damage.',
            'Advanced security: 24/7 monitoring, alarms, access control, and specialist vigilance against theft and vandalism.',
            'Specialist transport: climate-controlled vehicles, air-ride suspension, and teams trained in delicate handling for secure movement.',
            'Documentation and cataloguing: photographic records, conservation history, and full inventory for traceability and authenticity.',
            'Solutions and methodology tailored to each piece for optimum protection.',
        ],
        processTitle: 'Our fine art and antiques management process',
        processSteps: [
            'Detailed assessment and cataloguing of each object: condition, provenance, and technical specifics.',
            'Conservation strategy definition: packaging, transport, and storage methods matched to the asset.',
            'Handling and movement by specialists using low-risk techniques and equipment.',
            'Secure storage in state-of-the-art facilities with environmental control and stringent security.',
            'Ongoing monitoring and periodic condition reporting to sustain value and integrity.',
        ],
        benefitsTitle: 'Strategic benefits of specialist management',
        benefitsItems: [
            'Preservation of cultural and financial value—protection against damage and deterioration.',
            'Complete peace of mind: assets cared for by experienced professionals in high-security facilities.',
            'Alignment with international conservation and transport standards, supporting global exhibitions and movements.',
            'Collection appreciation through management that safeguards integrity and authenticity.',
            'Support for the continuity of cultural legacy and the success of your collection or institution.',
        ],
        ctaTitle: 'Protect and elevate your artistic and historical patrimony',
        ctaText:
            'Contact us for a collection assessment, a conservation roadmap, and discreet execution aligned with museum-grade or private requirements.',
        ctaPrimaryLabel: 'Request a quote',
    },
    de: {
        eyebrow: 'Management von Kunst und Antiquitaeten',
        hero: 'Das Management von Kunstwerken und Antiquitaeten ist ein hochspezialisiertes Leistungsfeld fuer Erhalt, Sicherheit und Wertschaetzung kultureller und historischer Gueter. Mehr als reine Lagerung oder Transport ist es ein ganzheitlicher Ansatz, der die Einzigartigkeit jedes Stuecks, seinen inneren und aeusseren Wert und die idealen Erhaltungsbedingungen beruecksichtigt. Jedes Objekt traegt Geschichte und Schoepferkraft in sich: Wir liefern massgeschneiderte Loesungen fuer maximalen Schutz und den Erhalt Ihres Erbes.',
        importanceTitle: 'Warum spezialisiertes Management entscheidend ist',
        importanceText:
            'Spezialisiertes Management ist tragend fuer Langlebigkeit und Integritaet dieser wertvollen Bestaende. Es geht nicht nur ums Bewegen von Objekten: Es verbindet Fachwissen in Konservierung, Logistik und Sicherheit, damit jedes Stueck Zustand und Wert langfristig behaelt. Unsere Expertise deckt die spezifischen Anforderungen jedes Materials ab – von Oelgemaelden und fragilen Skulpturen bis zu antikem Mobiliar und historischen Dokumenten – mit bewaehrten Standards fuer Handhabung und Aufbewahrung, von der Erstbewertung bis zur sicheren Unterbringung.',
        risksTitle: 'Herausforderungen und Risiken im Kunst- und Antiquitaeten-Management',
        risksText:
            'Dieses Feld birgt erhebliche Risiken und braucht hoechste Spezialisierung: fragiles historisches Material, Empfindlichkeit gegenueber Temperatur- und Feuchteschwankungen, Verletzlichkeit bei Transport und Handhabung sowie hoher Marktwert machen jeden Vorfall potenziell verheerend. Umweltbedingte Schaeden, Diebstahl, Vandalismus und unsachgemaesse Handhabung sind Dauerbedrohungen. Ohne spezialisierte Planung und Ausfuehrung drohen irreversible Verluste, Wertverfall und Schaden am Kulturgut – deshalb sind massgeschneiderte Managementkonzepte unverzichtbar.',
        materialsTitle: 'Loesungen und Ausruestung fuer Erhalt und Sicherheit',
        materialsItems: [
            'Integriertes Vorgehen: Wir setzen modernste Loesungen und fuer Kunst und Antiquitaeten entwickelte Ausruestung ein, darunter:',
            'Massgeschneiderte Verpackung: Spezialkisten mit inerten Materialien und Stossdaempfung gegen Erschuetterung und Vibration.',
            'Klimafuehrung: Lagerumgebungen mit strenger Temperatur- und Feuchteregelung gegen Umweltschaeden.',
            'Erweiterte Sicherheit: 24/7-Ueberwachung, Alarme, Zugangskontrolle und spezialisierte Bewachung gegen Diebstahl und Vandalismus.',
            'Spezialtransport: klimatisierte Fahrzeuge, Luftfederung und Teams mit Schulung fuer sensible Handhabung.',
            'Dokumentation und Katalogisierung: Fotodokumentation, Konservierungshistorie und vollstaendige Inventare fuer Rueckverfolgbarkeit und Authentizitaet.',
            'Auswahl von Loesungen und Methodik individuell pro Objekt fuer optimalen Schutz.',
        ],
        processTitle: 'Unser Ablauf Kunst- und Antiquitaeten-Management',
        processSteps: [
            'Detaillierte Bewertung und Katalogisierung: Zustand, Provenienz und technische Besonderheiten.',
            'Festlegung der Erhaltungsstrategie: Verpackung, Transport und Lagerung passend zum Objekt.',
            'Handhabung und Bewegung durch Spezialisten mit risikoarmen Techniken und Geraeten.',
            'Sichere Lagerung in hochmodernen Einrichtungen mit Umweltkontrolle und strenger Sicherheit.',
            'Fortlaufendes Monitoring und regelmaessige Zustandsberichte zur Wert- und Integritaetssicherung.',
        ],
        benefitsTitle: 'Strategische Vorteile spezialisierten Managements',
        benefitsItems: [
            'Erhalt des kulturellen und finanziellen Werts – Schutz vor Schaeden und Substanzverlust.',
            'Ruhe und Sicherheit: Betreuung durch erfahrene Fachleute in hochgesicherten Standorten.',
            'Uebereinstimmung mit internationalen Standards fuer Konservierung und Transport – weltweite Ausstellungen und Bewegungen werden erleichtert.',
            'Wertschaetzung des Bestands durch Management, das Integritaet und Authentizitaet bewahrt.',
            'Unterstuetzung fuer das kulturelle Erbe und den Erfolg Ihrer Sammlung oder Institution.',
        ],
        ctaTitle: 'Schuetzen und heben Sie Ihr kuenstlerisches und historisches Erbe',
        ctaText:
            'Kontaktieren Sie uns fuer eine Bestandsbewertung, eine Erhaltungsroadmap und diskrete Ausfuehrung im Museums- oder Privatstandard.',
        ctaPrimaryLabel: 'Angebot anfragen',
    },
    it: {
        eyebrow: 'Gestione di opere d arte e antiquariato',
        hero: "La gestione di opere d arte e antiquariato e un servizio altamente specializzato per preservazione, sicurezza e valorizzazione del patrimonio culturale e storico. Non e solo stoccaggio o trasporto: e un approccio olistico che rispetta la singolarita di ogni pezzo, il valore intrinseco ed estrinseco e le condizioni ideali di conservazione. Ogni opera testimonia storia e creativita umana: offriamo soluzioni su misura per la massima protezione e il mantenimento del vostro lascito.",
        importanceTitle: "Perche conta una gestione specializzata",
        importanceText:
            "La gestione specializzata e un pilastro per longevita e integrita di questi beni preziosi. Non si limita alla manipolazione: applica competenze in conservazione, logistica e sicurezza cosi ogni pezzo mantiene stato e valore nel tempo. La nostra esperienza copre le esigenze specifiche di ogni materiale, da dipinti a olio e sculture fragili a mobili antichi e documenti storici, con le migliori pratiche di movimentazione e custodia, dalla valutazione iniziale fino alla messa in deposito.",
        risksTitle: 'Sfide e rischi nella gestione di arte e antiquariato',
        risksText:
            "Questa attivita comporta rischi significativi che richiedono massima specializzazione: fragilita dei materiali antichi, sensibilita a temperatura e umidita, suscettibilita a danni fisici in trasporto e movimentazione e alto valore di mercato rendono ogni incidente potenzialmente devastante. Deterioramento ambientale, furto, vandalismo e manovre improprie sono minacce costanti. Senza pianificazione ed esecuzione dedicate si rischiano perdite irreparabili, svalutazione e compromissione del patrimonio: serve mitigare con soluzioni su misura.",
        materialsTitle: 'Soluzioni e attrezzature per preservazione e sicurezza',
        materialsItems: [
            "Approccio integrato: combiniamo soluzioni e attrezzature d'avanguardia dedicate a opere e antiquariato, tra cui:",
            "Imballaggi su misura: casse e involucri con materiali inerti e assorbimento degli urti contro shock e vibrazioni.",
            "Controllo climatico: ambienti di deposito con regolazione rigorosa di temperatura e umidita per limitare il degrado ambientale.",
            "Sicurezza avanzata: monitoraggio 24 ore su 24, allarmi, controllo accessi e vigilanza specializzata contro furto e vandalismo.",
            "Trasporto specializzato: veicoli climatizzati, sospensioni pneumatiche e team formati al maneggio delicato per spostamenti sicuri.",
            "Documentazione e catalogazione: archivio fotografico, storico di conservazione e inventari completi per tracciabilita e autenticita.",
            "Scelta di soluzioni e metodologia calibrata su ogni pezzo per protezione ottimale.",
        ],
        processTitle: 'Il nostro processo di gestione di arte e antiquariato',
        processSteps: [
            "Valutazione e catalogazione dettagliata di ogni pezzo: stato di conservazione, storia e specifiche.",
            "Definizione delle strategie di conservazione: imballaggio, trasporto e stoccaggio allineati all oggetto.",
            "Movimentazione da specialisti con tecniche e attrezzature a basso rischio.",
            "Deposito sicuro in strutture di ultima generazione con controllo ambientale e sicurezza rigorosa.",
            "Monitoraggio continuo e report periodici sullo stato dei beni per mantenere valore e integrita.",
        ],
        benefitsTitle: 'Benefici strategici di una gestione specializzata',
        benefitsItems: [
            "Preservazione del valore culturale e finanziario del patrimonio, protezione da danni e deterioramento.",
            "Massima tranquillita: beni affidati a professionisti esperti in strutture ad alta sicurezza.",
            "Conformita alle norme internazionali di conservazione e trasporto, a supporto di esposizioni e movimentazioni globali.",
            "Valorizzazione del fondo grazie a una gestione che mantiene integrita e autenticita delle opere.",
            "Contributo alla perpetuazione del lascito culturale e al successo della collezione o istituzione.",
        ],
        ctaTitle: 'Proteggete e valorizzate il vostro patrimonio artistico e storico',
        ctaText:
            "Contattateci per una valutazione del fondo, una roadmap di conservazione e un'esecuzione discreta allineata a standard museali o privati.",
        ctaPrimaryLabel: 'Richiedi preventivo',
    },
};

export const privateAdminConciergeContentByLocale: Record<string, PrivateAdminConciergeContent> = {
    fr: {
        eyebrow: 'Administration et conciergerie',
        hero: "Les services administratifs et de conciergerie sont essentiels pour optimiser l efficacite et le bien-etre en environnement corporate. Au-dela du simple support, ils constituent une reponse strategique qui libere des ressources internes et permet de concentrer l entreprise sur son metier. La gestion du detail operationnel consomme temps et energie: nous proposons un portefeuille complet qui simplifie le quotidien et eleve la qualite du lieu de travail.",
        importanceTitle: "L importance d une gestion professionnelle de ces services",
        importanceText:
            "Une gestion professionnelle des services administratifs et de conciergerie soutient productivite et satisfaction des collaborateurs. Il ne s agit pas seulement d executer des taches: il s agit de fluidifier et d organiser l environnement de travail avec un soutien continu. Notre objectif est de repondre avec excellence aux besoins operationnels et personnels, en reduisant les interruptions et en maximisant la concentration sur les activites strategiques, via des processus efficaces et une equipe dediee.",
        risksTitle: 'Defis et besoin d un support specialise',
        risksText:
            "Le corporate moderne affronte des defis qui appellent un support administratif et de conciergerie specialise: complexite des operations quotidiennes, recherche d efficacite temporelle et equilibre vie pro-vie perso des equipes. Sans support efficace, la surcharge, la baisse de productivite et l insatisfaction augmentent. Il est indispensable de s appuyer sur des partenaires qui comprennent ces enjeux et proposent des solutions sur mesure.",
        materialsTitle: 'Etendue de nos services administratifs et de conciergerie',
        materialsItems: [
            "Nous couvrons un large eventail de besoins pour votre entreprise et vos collaborateurs, notamment:",
            "Gestion documentaire: organisation, numerisation et archivage securise, acces rapide et conformite.",
            "Support aux deplacements: planification, reservations transport et hebergement, pilotage d itineraires.",
            "Organisation d evenements: coordination de reunions, conferences et manifestations corporate, de la logistique a l execution.",
            "Conciergerie personnelle: reservations restaurants, billets, rendez-vous et demandes personnelles des dirigeants.",
            "Gestion fournisseurs: coordination et suivi des prestataires externes, nettoyage, maintenance et securite.",
            "Personnalisation systematique des prestations selon les specificites de chaque client.",
        ],
        processTitle: 'Notre processus de deploiement et de gestion',
        processSteps: [
            "Analyse detaillee des besoins de l entreprise et des collaborateurs, identification des points critiques et des leviers d amelioration.",
            "Plan de services sur mesure: responsabilites, echeances et indicateurs de performance.",
            "Deploiement progressif accompagne, formation des equipes et ajustements selon les retours.",
            "Suivi continu de la qualite et de l efficacite, rapports periodiques et temps de feedback.",
            "Optimisation permanente pour creer de la valeur et enrichir l experience utilisateur.",
        ],
        benefitsTitle: 'Benefices strategiques des services administratifs et de conciergerie',
        benefitsItems: [
            "Gain de temps et meilleure allocation des ressources internes vers le coeur de metier.",
            "Reduction des couts operationnels grace a l efficacite et a l expertise specialisee.",
            "Productivite et bien-etre renforces dans un environnement mieux structure et soutenu.",
            "Image corporate elevee, reflet de l attention portee au detail et a la qualite de service.",
            "Contribution a la competitivite et a la reussite durable sur le marche.",
        ],
        ctaTitle: 'Optimisez l efficacite corporate avec un support integre',
        ctaText:
            "Contactez-nous pour un diagnostic de besoins, une proposition de services alignee sur votre culture d entreprise et une mise en oeuvre coordonnee.",
        ctaPrimaryLabel: 'Demander un devis',
    },
    en: {
        eyebrow: 'Administration and concierge',
        hero: 'Administrative and concierge services are essential to optimise efficiency and wellbeing in the corporate environment. More than back-office tasks, they are a strategic lever that frees internal capacity so organisations can stay focused on their core mission. Operational detail can drain time and energy—which is why we offer a full portfolio that simplifies daily work and elevates workplace quality.',
        importanceTitle: 'Why professional management of these services matters',
        importanceText:
            'Professional management of administrative and concierge services underpins productivity and employee satisfaction. It is not only about executing tasks: it is about making the workplace smoother, better organised, and continuously supported. Our goal is to meet operational and personal needs with excellence—reducing interruptions and sharpening focus on what drives the business—through efficient processes and a dedicated team.',
        risksTitle: 'Challenges and the need for specialist support',
        risksText:
            'The modern corporate environment faces challenges that call for specialist administrative and concierge support: daily operational complexity, pressure on time, and the need to balance professional and personal lives. Without effective support, teams become overloaded, productivity drops, and dissatisfaction grows. Partners who understand these demands and deliver tailored solutions are essential.',
        materialsTitle: 'Scope of our administrative and concierge services',
        materialsItems: [
            'We cover a broad range of needs for your business and your people, including:',
            'Document management: organisation, digitisation, and secure filing—fast access and compliance.',
            'Corporate travel support: planning, flight and hotel bookings, and itinerary management to streamline movement.',
            'Event organisation: end-to-end coordination of meetings, conferences, and corporate events—from logistics to delivery.',
            'Personal concierge: restaurant and ticket bookings, appointments, and executive lifestyle requests.',
            'Vendor management: coordination and oversight of third-party services such as cleaning, maintenance, and security.',
            'Services tailored to each client’s specific requirements.',
        ],
        processTitle: 'Our implementation and management process',
        processSteps: [
            'Detailed assessment of company and employee needs—critical issues and improvement opportunities.',
            'Bespoke service plan defining responsibilities, timelines, and performance indicators.',
            'Phased rollout with training, supervision, and adjustments as required.',
            'Continuous monitoring of quality and efficiency—regular reporting and structured feedback.',
            'Ongoing optimisation to add value and improve the user experience.',
        ],
        benefitsTitle: 'Strategic benefits of administrative and concierge services',
        benefitsItems: [
            'Time and internal resources optimised so teams stay focused on core business.',
            'Lower operating costs through efficiency and specialist expertise.',
            'Stronger productivity and wellbeing in a better-supported workplace.',
            'Enhanced corporate image reflecting attention to detail and service quality.',
            'Support for competitiveness and sustainable success in the market.',
        ],
        ctaTitle: 'Boost corporate efficiency with integrated support',
        ctaText:
            'Contact us for a needs assessment, a service proposal aligned with your culture, and coordinated implementation.',
        ctaPrimaryLabel: 'Request a quote',
    },
    de: {
        eyebrow: 'Administration und Concierge',
        hero: 'Administrative Dienstleistungen und Concierge-Services sind entscheidend fuer Effizienz und Wohlbefinden im Unternehmensumfeld. Mehr als reine Unterstuetzung sind sie eine strategische Entlastung, die interne Kapazitaeten freisetzt und den Fokus auf das Kerngeschaeft staerkt. Operative Details binden Zeit und Energie: Wir bieten ein umfassendes Portfolio, das den Alltag vereinfacht und die Arbeitsumgebung aufwertet.',
        importanceTitle: 'Warum professionelles Management dieser Services zaehlt',
        importanceText:
            'Professionelles Management von Administration und Concierge traegt zu Produktivitaet und Zufriedenheit bei. Es geht nicht nur um Aufgabenerledigung: Es geht um einen fliessenderen, besser organisierten Arbeitsalltag mit kontinuierlicher Unterstuetzung. Wir decken operative und persoenliche Beduerfnisse mit Exzellenz ab, reduzieren Unterbrechungen und schaerfen den Fokus auf das Wesentliche – mit effizienten Prozessen und einem engagierten Team.',
        risksTitle: 'Herausforderungen und Bedarf an spezialisiertem Support',
        risksText:
            'Moderne Unternehmen stehen vor Herausforderungen, die spezialisierte administrative und Concierge-Unterstuetzung erfordern: komplexe Tagesablaeufe, Zeitdruck und der Wunsch nach Balance zwischen Berufs- und Privatleben. Ohne wirksame Unterstuetzung drohen Ueberlastung, Produktivitaetsverlust und Unzufriedenheit. Partner, die diese Anforderungen verstehen und massgeschneiderte Loesungen liefern, sind unverzichtbar.',
        materialsTitle: 'Umfang unserer administrativen und Concierge-Leistungen',
        materialsItems: [
            'Wir decken ein breites Spektrum fuer Ihr Unternehmen und Ihre Mitarbeitenden ab, darunter:',
            'Dokumentenmanagement: Strukturierung, Digitalisierung und sichere Ablage – schneller Zugriff und Compliance.',
            'Geschaeftsreise-Support: Planung, Buchungen und Reiseablaufsteuerung fuer effiziente Mobilitaet.',
            'Eventorganisation: Koordination von Meetings, Konferenzen und Firmenevents von der Logistik bis zur Umsetzung.',
            'Persoenlicher Concierge: Restaurant- und Ticketbuchungen, Termine und Anfragen fuer Fuehrungskraefte.',
            'Lieferantensteuerung: Koordination und Ueberwachung externer Dienste wie Reinigung, Instandhaltung und Sicherheit.',
            'Konsequente Anpassung der Leistungen an die Spezifika jedes Kunden.',
        ],
        processTitle: 'Unser Ablauf fuer Einfuehrung und laufendes Management',
        processSteps: [
            'Detaillierte Bedarfsanalyse fuer Unternehmen und Teams, Identifikation kritischer Punkte und Verbesserungspotenziale.',
            'Individueller Serviceplan mit Verantwortlichkeiten, Fristen und Leistungskennzahlen.',
            'Schrittweise Einfuehrung mit Schulung, Begleitung und Anpassungen nach Bedarf.',
            'Fortlaufendes Monitoring von Qualitaet und Effizienz, regelmaessige Reports und Feedback-Runden.',
            'Kontinuierliche Optimierung zur Wertschoepfung und besseren Nutzererfahrung.',
        ],
        benefitsTitle: 'Strategische Vorteile von Administration und Concierge',
        benefitsItems: [
            'Zeitgewinn und bessere Nutzung interner Ressourcen fuer das Kerngeschaeft.',
            'Niedrigere Betriebskosten durch Effizienz und Fachkompetenz.',
            'Hoehere Produktivitaet und Wohlbefinden in einer besser unterstuetzten Umgebung.',
            'Staerkeres Unternehmensimage durch Detailaufmerksamkeit und Servicequalitaet.',
            'Beitrag zu Wettbewerbsfaehigkeit und nachhaltigem Markterfolg.',
        ],
        ctaTitle: 'Steigern Sie die Corporate-Effizienz mit integriertem Support',
        ctaText:
            'Kontaktieren Sie uns fuer eine Bedarfsanalyse, ein auf Ihre Kultur abgestimmtes Servicekonzept und koordinierte Umsetzung.',
        ctaPrimaryLabel: 'Angebot anfragen',
    },
    it: {
        eyebrow: 'Amministrazione e concierge',
        hero: "I servizi amministrativi e di concierge sono essenziali per ottimizzare efficienza e benessere in ambiente corporate. Non sono solo attivita di supporto: sono una leva strategica che libera risorse interne e consente di concentrarsi sul core business. La gestione dei dettagli operativi assorbe tempo ed energia: offriamo un portafoglio completo che semplifica il quotidiano e eleva la qualita del posto di lavoro.",
        importanceTitle: "Perche conta una gestione professionale di questi servizi",
        importanceText:
            "Una gestione professionale di amministrazione e concierge sostiene produttivita e soddisfazione delle persone. Non si limita a eseguire compiti: rende l ambiente di lavoro piu fluido, organizzato e continuamente assistito. L obiettivo e rispondere con eccellenza a esigenze operative e personali, riducendo le interruzioni e massimizzando il focus sulle priorita aziendali, con processi efficienti e un team dedicato.",
        risksTitle: 'Sfide e necessita di supporto specialistico',
        risksText:
            "Il corporate moderno affronta sfide che richiedono supporto amministrativo e di concierge specialistico: complessita delle operazioni quotidiane, ottimizzazione del tempo ed equilibrio tra vita professionale e personale. Senza un supporto efficace aumentano sovraccarico, calo di produttivita e insoddisfazione. Fondamentale avere partner che comprendano queste richieste e offrano soluzioni su misura.",
        materialsTitle: 'Portata dei nostri servizi amministrativi e di concierge',
        materialsItems: [
            "Copriamo un ventaglio ampio di esigenze per l azienda e i collaboratori, tra cui:",
            "Gestione documentale: organizzazione, digitalizzazione e archiviazione sicura, accesso rapido e conformita.",
            "Supporto ai viaggi: pianificazione, prenotazioni di voli e hotel, gestione itinerari.",
            "Organizzazione eventi: coordinamento di riunioni, conferenze ed eventi corporate, dalla logistica all esecuzione.",
            "Concierge personale: prenotazioni ristoranti, biglietti, appuntamenti e richieste personali dei dirigenti.",
            "Gestione fornitori: coordinamento e monitoraggio di servizi di terzi come pulizia, manutenzione e sicurezza.",
            "Personalizzazione dei servizi in base alle specifiche di ogni cliente.",
        ],
        processTitle: 'Il nostro processo di implementazione e gestione',
        processSteps: [
            "Analisi dettagliata dei bisogni di azienda e persone, individuazione criticita e opportunita di miglioramento.",
            "Piano di servizi su misura: responsabilita, scadenze e indicatori di performance.",
            "Implementazione graduale con formazione, affiancamento e adeguamenti in base ai feedback.",
            "Monitoraggio continuo di qualita ed efficienza, report periodici e momenti di confronto.",
            "Ottimizzazione costante per creare valore e migliorare l'esperienza.",
        ],
        benefitsTitle: 'Benefici strategici dei servizi amministrativi e di concierge',
        benefitsItems: [
            "Ottimizzazione del tempo e delle risorse interne verso il core business.",
            "Riduzione dei costi operativi grazie a efficienza e competenza specialistica.",
            "Miglioramento di produttivita e benessere in un ambiente piu organizzato e supportato.",
            "Immagine corporate elevata, segno di attenzione al dettaglio e qualita del servizio.",
            "Contributo a competitivita e successo sul mercato.",
        ],
        ctaTitle: 'Ottimizzate l efficienza corporate con un supporto integrato',
        ctaText:
            "Contattateci per una valutazione dei bisogni, una proposta di servizi allineata alla cultura aziendale e un avvio coordinato.",
        ctaPrimaryLabel: 'Richiedi preventivo',
    },
};

export const privateFurnitureRelocationTransportContentByLocale: Record<
    string,
    PrivateFurnitureRelocationTransportContent
> = {
    fr: {
        eyebrow: 'Remaniement et transport de mobilier',
        hero: "Le remaniement et le transport de mobilier sont des operations logistiques qui exigent planification minutieuse, execution precise et culture de la securite pour preserver l integrite des biens. Au-dela d un simple deplacement, il s agit d un processus strategique pour optimiser les espaces, reorganiser les environnements ou deplacer des actifs avec un minimum d interruption et un maximum de protection. Le mobilier corporate represente un investissement majeur et soutient la fonctionnalite de l entreprise: nous offrons des solutions completes pour un remaniement efficace et en toute securite.",
        importanceTitle: "L importance d un remaniement et transport professionnels",
        importanceText:
            "Un service professionnel est un pilier de continuite operationnelle et de preservation du patrimoine. Il ne s agit pas seulement de deplacer des elements: chaque piece doit etre demontee, emballee, transportee et remontee avec le plus grand soin, en preservant fonction et esthetique. Notre expertise structure chaque etape pour reduire les risques de dommages et optimiser le temps d arret, avec coordination logistique et techniques adaptees a chaque typologie de mobilier.",
        risksTitle: 'Defis et risques du remaniement et du transport',
        risksText:
            "Le mobilier corporate expose a des risques qui peuvent compromettre les biens et l efficacite: complexite des systemes modulaires, poids et volume des elements, fragilite de certains composants, besoin de protection contre chocs et rayures. Sans planification, dommages structurels, pieces manquantes, retards et interruptions d activite sont frequents. Il est indispensable de reduire ces risques avec des solutions specialisees.",
        materialsTitle: 'Solutions et equipements pour un transport securise',
        materialsItems: [
            "Nous mobilisons des solutions et equipements de pointe pour securiser le remaniement et le deplacement, notamment:",
            "Emballages protecteurs sur mesure: film bulle, couvertures, mousses et caisses renforcees adaptees a la forme et a la fragilite.",
            "Outillage de demontage et remontage: equipements dedies pour desassembler et reassembler sans degrader les structures.",
            "Moyens de manutention: diables, plateformes elevatrices, sangles et dispositifs pour charges lourdes et volumineuses, limitant l effort et le risque.",
            "Vehicules adaptes: flotte avec suspension appropriee, protection interne et systemes d arrimage pour un trajet stable.",
            "Equipe formee: specialistes du maniement, de l emballage, du transport et du montage, orientes securite et qualite.",
            "Choix d equipements et de methodologie calibre sur chaque projet pour une protection optimale.",
        ],
        processTitle: 'Notre processus de remaniement et de transport de mobilier',
        processSteps: [
            "Evaluation detaillee du mobilier et des lieux: inventaire, analyse des plans et calendrier.",
            "Demontage et emballage par techniciens specialises avec materiaux protecteurs adaptes a chaque article.",
            "Chargement et transport avec vehicules adaptes et equipe entrainee pour securiser le deplacement.",
            "A destination: dechargement, deballage et remontage selon specifications et plan d implantation.",
            "Organisation et nettoyage des espaces pour une remise en service immediate.",
        ],
        benefitsTitle: 'Benefices strategiques du remaniement et transport specialises',
        benefitsItems: [
            "Preservation de l investissement: mobilier protege et duree de vie prolongee.",
            "Efficacite operationnelle: reduction du temps d inactivite et des interruptions d activite.",
            "Securite des equipes et du patrimoine assuree par des professionnels et un outillage adapte.",
            "Flexibilite et adaptabilite aux projets de reorganisation ou de demenagement.",
            "Un environnement de travail fonctionnel et productif apres intervention.",
        ],
        ctaTitle: 'Deplacez votre mobilier corporate en toute maitrise',
        ctaText:
            "Contactez-nous pour une evaluation sur site, un planning de remaniement et une execution coordonnee avec vos contraintes d occupation.",
        ctaPrimaryLabel: 'Demander un devis',
    },
    en: {
        eyebrow: 'Furniture relocation and transport',
        hero: 'Furniture relocation and transport are logistics operations that demand meticulous planning, precise execution, and a strong safety mindset to protect asset integrity. More than a simple move, it is a strategic process to optimise space, reorganise environments, or relocate assets with minimum disruption and maximum protection. Corporate furniture is a significant investment and central to how your organisation functions—which is why we deliver end-to-end solutions for efficient, secure relocation.',
        importanceTitle: 'Why professional relocation and transport matter',
        importanceText:
            'Professional furniture relocation and transport underpin operational continuity and asset preservation. It is not only about moving items: each piece should be dismantled, packed, transported, and reassembled with care—maintaining function and appearance. Our expertise plans and executes every stage with precision, reducing damage risk and downtime, with coordinated logistics and techniques suited to each furniture type.',
        risksTitle: 'Challenges and risks in relocation and transport',
        risksText:
            'Corporate furniture moves involve risks that can harm assets and efficiency: complexity of modular systems, weight and bulk of large pieces, fragility of delicate components, and the need to guard against impact and abrasion. Without proper planning, structural damage, missing parts, delivery delays, and business disruption are common. Specialist solutions are essential to mitigate these risks.',
        materialsTitle: 'Solutions and equipment for secure transport',
        materialsItems: [
            'We deploy leading-edge solutions and equipment to secure relocation and movement, including:',
            'Custom protective packaging: bubble film, blankets, foams, and reinforced cartons matched to shape and fragility.',
            'Dismantling and assembly tooling: purpose equipment to strip down and rebuild without compromising structures.',
            'Handling aids: dollies, lift platforms, straps, and devices for heavy and bulky loads—less physical strain and lower damage risk.',
            'Adapted vehicles: fleet with appropriate suspension, interior padding, and lashing systems for stable transit.',
            'Trained crews: specialists in handling, packing, transport, and installation focused on safety and quality.',
            'Equipment and methodology tailored to each project for optimum protection.',
        ],
        processTitle: 'Our furniture relocation and transport process',
        processSteps: [
            'Detailed assessment of furniture and environments: inventory, layout review, and programme definition.',
            'Dismantling and packing by specialist technicians using protective materials matched to each item.',
            'Loading and transport in adapted vehicles with trained teams to secure the journey.',
            'On arrival: unloading, unpacking, and reassembly to specification and planned layout.',
            'Final space organisation and cleaning so workspaces are ready for use.',
        ],
        benefitsTitle: 'Strategic benefits of specialist relocation and transport',
        benefitsItems: [
            'Investment protected—furniture safeguarded and service life extended.',
            'Operational efficiency improved with less downtime and fewer business interruptions.',
            'Team and asset safety assured through trained professionals and the right equipment.',
            'Flexibility to support reorganisation or relocation programmes.',
            'A functional, productive workplace once the move is complete.',
        ],
        ctaTitle: 'Move corporate furniture with full control',
        ctaText:
            'Contact us for an on-site assessment, a relocation schedule, and coordinated execution around your occupancy constraints.',
        ctaPrimaryLabel: 'Request a quote',
    },
    de: {
        eyebrow: 'Umzug und Transport von Mobiliar',
        hero: 'Umzug und Transport von Mobiliar sind logistische Aufgaben, die sorgfaeltige Planung, praezise Ausfuehrung und klare Sicherheitsstandards verlangen, um die Integritaet der Gueter zu wahren. Mehr als ein einfacher Transport ist es ein strategischer Prozess zur Raumoptimierung, Neustrukturierung oder zum sicheren Verlegen von Assets mit minimaler Stoerung und maximalem Schutz. Corporate-Moebel sind eine bedeutende Investition und zentral fuer den Betrieb: Wir liefern integrierte Loesungen fuer effiziente, sichere Umzuege.',
        importanceTitle: 'Warum professioneller Umzug und Transport zaehlen',
        importanceText:
            'Professioneller Mobiliartransport sichert Betriebskontinuitaet und Werterhalt. Es geht nicht nur ums Verschieben: Jedes Element sollte fachgerecht demontiert, verpackt, transportiert und wieder aufgebaut werden – Funktion und Erscheinungsbild bleiben erhalten. Wir planen und fuehren jede Phase praezise aus, reduzieren Schaedenrisiken und Stillstandzeiten, mit abgestimmter Logistik und passenden Techniken je nach Moebeltyp.',
        risksTitle: 'Herausforderungen und Risiken bei Umzug und Transport',
        risksText:
            'Corporate-Umzuege bergen Risiken fuer Gueter und Ablauf: komplexe modulare Systeme, Gewicht und Volumen grosser Teile, empfindliche Komponenten und der Schutz vor Stoss und Kratzern. Ohne Planung drohen Strukturschaeden, fehlende Teile, Lieferverzoegerungen und Betriebsunterbrechungen. Spezialisierte Loesungen sind unerlaesslich.',
        materialsTitle: 'Loesungen und Ausruestung fuer sicheren Transport',
        materialsItems: [
            'Wir setzen moderne Loesungen und Ausruestung fuer sicheren Umzug und Transport ein, darunter:',
            'Massgeschneiderte Schutzverpackung: Luftpolsterfolie, Decken, Schaumstoffe und verstaerkte Kartons passend zu Form und Fragilitaet.',
            'Werkzeug fuer Demontage und Montage: spezifische Geraete zum sicheren Zerlegen und Wiederaufbau ohne Strukturschaeden.',
            'Handhabungshilfen: Rollwagen, Hebebuehnen, Gurte und Hilfsmittel fuer schwere und sperrige Lasten.',
            'Angepasste Fahrzeuge: Flotte mit passender Federung, Innenschutz und Zurrsystemen fuer stabilen Transit.',
            'Geschulte Teams: Spezialisten fuer Handhabung, Verpackung, Transport und Montage mit Fokus auf Sicherheit und Qualitaet.',
            'Auswahl von Ausruestung und Methodik projektspezifisch fuer optimalen Schutz.',
        ],
        processTitle: 'Unser Ablauf fuer Mobiliar-Umzug und Transport',
        processSteps: [
            'Detaillierte Bewertung von Mobiliar und Umgebung: Inventar, Planpruefung und Zeitplan.',
            'Demontage und Verpackung durch Fachteams mit passenden Schutzmaterialien pro Position.',
            'Verladung und Transport mit geeigneten Fahrzeugen und geschulten Kolonnen.',
            'Am Ziel: Entladen, Auspacken und Wiederaufbau nach Vorgabe und geplantem Layout.',
            'Abschliessende Organisation und Reinigung fuer sofortige Nutzung der Flaechen.',
        ],
        benefitsTitle: 'Strategische Vorteile spezialisierten Umzugs und Transports',
        benefitsItems: [
            'Investitionsschutz: Mobiliar geschont und Lebensdauer verlaengert.',
            'Betriebseffizienz: weniger Ausfallzeiten und weniger Unterbrechungen.',
            'Sicherheit fuer Teams und Gueter durch Profis und passendes Equipment.',
            'Flexibilitaet fuer Umstrukturierung oder Standortwechsel.',
            'Funktionale, produktive Arbeitsumgebung nach Abschluss.',
        ],
        ctaTitle: 'Corporate-Moebel sicher und kontrolliert verlagern',
        ctaText:
            'Kontaktieren Sie uns fuer eine Vor-Ort-Bewertung, einen Umzugsfahrplan und koordinierte Ausfuehrung entlang Ihrer Belegungsvorgaben.',
        ctaPrimaryLabel: 'Angebot anfragen',
    },
    it: {
        eyebrow: 'Rilocazione e trasporto mobili',
        hero: "La rilocazione e il trasporto di mobili sono operazioni logistiche che richiedono pianificazione meticolosa, esecuzione precisa e attenzione alla sicurezza per tutelare l integrita dei beni. Non e un semplice spostamento: e un processo strategico per ottimizzare spazi, riorganizzare ambienti o trasferire asset con minima interruzione e massima protezione. Il mobilio corporate e un investimento rilevante per la funzionalita aziendale: offriamo soluzioni complete per un trasferimento efficiente e sicuro.",
        importanceTitle: "Perche contano rilocazione e trasporto professionali",
        importanceText:
            "Un servizio professionale sostiene continuita operativa e preservazione del patrimonio. Non si limita a spostare elementi: ogni pezzo va smontato, imballato, trasportato e rimontato con cura, mantenendo funzionalita ed estetica. La nostra competenza pianifica ed esegue ogni fase con precisione, riducendo rischi di danno e tempi di fermo, con logistica coordinata e tecniche adatte a ogni tipologia di mobile.",
        risksTitle: 'Sfide e rischi in rilocazione e trasporto',
        risksText:
            "Il mobilio corporate comporta rischi per beni ed efficienza: complessita dei sistemi modulari, peso e ingombro, fragilita di componenti, necessita di protezione da urti e graffi. Senza pianificazione sono frequenti danni strutturali, pezzi mancanti, ritardi e interruzioni dell'attivita. Servono soluzioni specialistiche per mitigare questi rischi.",
        materialsTitle: 'Soluzioni e attrezzature per un trasporto sicuro',
        materialsItems: [
            "Mettiamo in campo soluzioni e attrezzature avanzate per rendere sicuri trasferimento e movimentazione, tra cui:",
            "Imballaggi protettivi su misura: pluriball, coperte, schiume e casse rinforzate adatte a forma e fragilita.",
            "Attrezzi per smontaggio e montaggio: equipaggiamenti specifici per operare senza compromettere le strutture.",
            "Mezzi di movimentazione: carrelli, piattaforme elevatrici, cinghie e ausili per carichi pesanti e voluminosi.",
            "Veicoli adeguati: flotta con sospensioni idonee, rivestimenti interni e sistemi di ancoraggio per transito stabile.",
            "Team formato: professionisti in movimentazione, imballaggio, trasporto e montaggio orientati a sicurezza e qualita.",
            "Scelta di attrezzature e metodologia calibrata su ogni progetto per protezione ottimale.",
        ],
        processTitle: 'Il nostro processo di rilocazione e trasporto mobili',
        processSteps: [
            "Valutazione dettagliata di mobili e ambienti: inventario, analisi planimetrica e cronoprogramma.",
            "Smontaggio e imballaggio da tecnici specializzati con materiali protettivi adeguati a ogni articolo.",
            "Carico e trasporto con veicoli adeguati e squadra formata per un viaggio sicuro.",
            "In destinazione: scarico, disimballaggio e rimontaggio secondo specifiche e layout pianificato.",
            "Organizzazione e pulizia finale degli spazi per la ripresa immediata delle attivita.",
        ],
        benefitsTitle: 'Benefici strategici di rilocazione e trasporto specializzati',
        benefitsItems: [
            "Tutela dell investimento: mobili protetti e vita utile prolungata.",
            "Efficienza operativa: minor tempo di inattivita e minori interruzioni.",
            "Sicurezza di persone e patrimonio grazie a professionisti e attrezzature idonee.",
            "Flessibilita e adattabilita a riorganizzazioni o traslochi.",
            "Ambiente di lavoro funzionale e produttivo al termine dell intervento.",
        ],
        ctaTitle: 'Spostate il mobilio corporate con piena padronanza',
        ctaText:
            "Contattateci per una valutazione in loco, un calendario di rilocazione e un'esecuzione coordinata con i vincoli di occupazione.",
        ctaPrimaryLabel: 'Richiedi preventivo',
    },
};

export const corporateFurnitureInstallContentByLocale: Record<string, CorporateFurnitureInstallContent> = {
    fr: {
        eyebrow: 'Montage et installation de mobilier corporate',
        hero: 'Nous installons vos environnements de travail avec precision technique pour renforcer productivite, securite et image de marque.',
        importanceTitle: 'Pourquoi une installation professionnelle est essentielle',
        importanceText:
            'Une installation experte ne se limite pas au montage: elle garantit ergonomie, conformite technique et exploitation immediate de vos espaces.',
        scopeTitle: 'Notre perimetre de services specialises',
        scopeItems: [
            'Systemes modulaires pour optimiser postes de travail, circulation et connectivite.',
            'Mobilier executif aligne avec votre positionnement corporate et votre culture interne.',
            'Solutions de rangement, cloisons et murs modulaires pour flexibilite des espaces.',
            'Ergonomie appliquee: reglages precis de sieges, plans de travail et configurations utilisateurs.',
        ],
        processTitle: 'Notre processus d installation technique',
        processSteps: [
            'Planification et logistique: revue des plans, sequencing et coordination des livraisons.',
            'Reception et inspection: controle des references, etat des elements et conformite globale.',
            'Distribution et montage: assemblage selon standards fabricants et normes de securite.',
            'Nivellement et alignement: verification de stabilite, finitions et fonctionnalite durable.',
            'Nettoyage et remise: espace propre, pret a l usage, avec validation finale.',
        ],
        benefitsTitle: 'Benefices strategiques pour votre entreprise',
        benefitsItems: [
            'Installation rapide qui reduit le downtime et accelere la mise en service.',
            'Securite et ergonomie renforcees pour proteger les equipes au quotidien.',
            'Preservation des garanties constructeurs grace au respect des protocoles de pose.',
            'Flexibilite operationnelle avec interventions adaptees a vos contraintes horaires.',
        ],
        ctaTitle: 'Optimisez vos espaces corporate des maintenant',
        ctaText:
            'Contactez-nous pour planifier une installation de mobilier corporate fiable, rapide et parfaitement alignee a vos objectifs operationnels.',
        ctaPrimaryLabel: 'Demander un devis',
    },
    en: {
        eyebrow: 'Corporate furniture assembly and installation',
        hero: 'We install workplace environments with technical precision to strengthen productivity, safety, and brand consistency.',
        importanceTitle: 'Why professional installation matters',
        importanceText:
            'Expert installation goes beyond assembly: it ensures ergonomic performance, technical compliance, and immediate operational readiness.',
        scopeTitle: 'Our specialised service scope',
        scopeItems: [
            'Modular systems to optimise workstations, circulation, and connectivity.',
            'Executive furniture aligned with your corporate identity and culture.',
            'Storage solutions, partitions, and modular walls for space flexibility.',
            'Applied ergonomics with precise chair, desk, and user configuration setup.',
        ],
        processTitle: 'Our technical installation process',
        processSteps: [
            'Planning and logistics: layout review, sequencing, and delivery coordination.',
            'Receiving and inspection: item verification, condition checks, and conformity control.',
            'Distribution and assembly: installation according to manufacturer standards and safety rules.',
            'Levelling and alignment: stability checks, finishing details, and functional validation.',
            'Cleaning and handover: workspace delivered clean, ready, and approved for use.',
        ],
        benefitsTitle: 'Strategic benefits for your business',
        benefitsItems: [
            'Fast execution that reduces downtime and accelerates go-live readiness.',
            'Safer and more ergonomic workspaces that support team wellbeing.',
            'Manufacturer warranty protection through compliant installation protocols.',
            'Operational flexibility with scheduling adapted to business constraints.',
        ],
        ctaTitle: 'Upgrade your corporate spaces now',
        ctaText:
            'Contact us to schedule a reliable, fast, and business-aligned corporate furniture installation.',
        ctaPrimaryLabel: 'Request a quote',
    },
    de: {
        eyebrow: 'Montage und installation von corporate-moebeln',
        hero: 'Wir installieren Arbeitsumgebungen mit technischer Praezision, um Produktivitaet, Sicherheit und Markenwirkung zu staerken.',
        importanceTitle: 'Warum professionelle installation entscheidend ist',
        importanceText:
            'Fachgerechte Montage bedeutet mehr als Aufbau: sie sichert Ergonomie, technische Konformitaet und sofortige Einsatzfaehigkeit.',
        scopeTitle: 'Unser spezialisierter leistungsumfang',
        scopeItems: [
            'Modulare Systeme zur Optimierung von Arbeitsplaetzen, Wegen und Konnektivitaet.',
            'Executive-Mobiliar passend zu Ihrer Corporate-Positionierung und Kultur.',
            'Stauraumloesungen, Trennwaende und modulare Flaechenelemente fuer Flexibilitaet.',
            'Angewandte Ergonomie mit praeziser Einstellung von Sitzen und Arbeitsflaechen.',
        ],
        processTitle: 'Unser technischer installationsprozess',
        processSteps: [
            'Planung und Logistik: Planpruefung, Sequenzierung und Lieferkoordination.',
            'Warenannahme und Kontrolle: Referenzpruefung, Zustandscheck und Konformitaet.',
            'Verteilung und Montage: Aufbau nach Herstellerstandards und Sicherheitsvorgaben.',
            'Nivellierung und Ausrichtung: Stabilitaet, Feinjustierung und Funktionssicherheit.',
            'Reinigung und Uebergabe: betriebsbereiter, sauberer Raum mit finaler Abnahme.',
        ],
        benefitsTitle: 'Strategische vorteile fuer ihr unternehmen',
        benefitsItems: [
            'Schnelle Umsetzung mit weniger Ausfallzeit und schneller Betriebsaufnahme.',
            'Mehr Sicherheit und Ergonomie fuer nachhaltiges Team-Wohlbefinden.',
            'Erhalt von Herstellergarantien durch normgerechte Installation.',
            'Hohe operative Flexibilitaet, auch bei Einsaetzen ausserhalb der Kernzeiten.',
        ],
        ctaTitle: 'Optimieren sie ihre corporate-flaechen jetzt',
        ctaText:
            'Kontaktieren Sie uns fuer eine zuverlaessige, schnelle und zielorientierte Moebelinstallation im Corporate-Umfeld.',
        ctaPrimaryLabel: 'Angebot anfragen',
    },
    it: {
        eyebrow: 'Montaggio e installazione di arredi corporate',
        hero: 'Installiamo ambienti di lavoro con precisione tecnica per aumentare produttivita, sicurezza e coerenza di brand.',
        importanceTitle: 'Perche l installazione professionale e fondamentale',
        importanceText:
            'Un installazione esperta non e solo montaggio: garantisce ergonomia, conformita tecnica e avvio operativo immediato.',
        scopeTitle: 'Il nostro perimetro di servizi specializzati',
        scopeItems: [
            'Sistemi modulari per ottimizzare postazioni, flussi e connettivita.',
            'Arredi executive coerenti con posizionamento corporate e cultura aziendale.',
            'Soluzioni di storage, pareti divisorie e moduli per flessibilita degli spazi.',
            'Ergonomia applicata con regolazioni precise di sedute e superfici di lavoro.',
        ],
        processTitle: 'Il nostro processo di installazione tecnica',
        processSteps: [
            'Pianificazione e logistica: revisione layout, sequenze e coordinamento consegne.',
            'Ricezione e ispezione: verifica materiali, stato dei componenti e conformita.',
            'Distribuzione e montaggio: installazione secondo standard produttore e sicurezza.',
            'Livellamento e allineamento: stabilita, finiture e validazione funzionale.',
            'Pulizia e consegna: spazio pronto all uso con verifica finale condivisa.',
        ],
        benefitsTitle: 'Benefici strategici per la vostra azienda',
        benefitsItems: [
            'Esecuzione veloce che riduce il downtime e accelera la piena operativita.',
            'Maggiore sicurezza ed ergonomia per il benessere quotidiano dei team.',
            'Tutela delle garanzie dei produttori grazie a posa conforme.',
            'Flessibilita operativa con interventi adattati alle vostre finestre orarie.',
        ],
        ctaTitle: 'Ottimizzate ora i vostri spazi corporate',
        ctaText:
            'Contattateci per pianificare un installazione arredi corporate affidabile, rapida e perfettamente allineata ai vostri obiettivi.',
        ctaPrimaryLabel: 'Richiedi preventivo',
    },
};

export const hospitalityExcellenceContentByLocale: Record<string, HospitalityExcellenceContent> = {
    fr: {
        eyebrow: 'Hotellerie d excellence',
        hero: 'Nous elevons chaque sejour au niveau d une experience de luxe memorielle, grace a une hospitalite personnalisee, anticipee et executee avec discretion.',
        definitionTitle: 'Ce qui definit l excellence hoteliere',
        definitionText:
            'L excellence ne se limite pas au confort materiel: elle repose sur la capacite a valoriser chaque client, anticiper ses attentes et offrir un service humain irreprochable.',
        pillarsTitle: 'Les piliers du service premium',
        pillarsItems: [
            'Personnalisation fine de l experience selon les preferences individuelles.',
            'Anticipation proactive des besoins avant meme la formulation d une demande.',
            'Discretion elegante: presence efficace sans intrusion.',
            'Qualite relationnelle constante, avec interactions fluides et authentiques.',
        ],
        transformingServicesTitle: 'Services qui transforment le sejour',
        transformingServicesItems: [
            'Conciergerie proactive qui propose experiences et solutions sur mesure.',
            'Bien-etre exclusif: spa, soins personnalises et parcours de relaxation premium.',
            'Gastronomie haut de gamme avec options personnalisees et moments culinaires signatures.',
            'Orchestration continue du parcours client pour supprimer friction et incertitude.',
        ],
        guestBenefitsTitle: 'Benefices incomparables pour le client',
        guestBenefitsItems: [
            'Plus de temps de qualite grace a une prise en charge complete des details.',
            'Sentiment d exclusivite renforce par un service hautement personnalise.',
            'Relaxation profonde et experience emotionnelle positive tout au long du sejour.',
            'Memoires durables qui stimulent fidelite, recommandation et retour.',
        ],
        ctaTitle: 'Offrez une experience hoteliere inoubliable',
        ctaText:
            'Contactez-nous pour concevoir un dispositif d hotellerie d excellence aligne a votre positionnement premium et a vos standards de service.',
        ctaPrimaryLabel: 'Demander une consultation',
    },
    en: {
        eyebrow: 'Excellence hospitality',
        hero: 'We elevate each stay into a memorable luxury experience through personalised hospitality, proactive anticipation, and refined discretion.',
        definitionTitle: 'What defines hotel excellence',
        definitionText:
            'True excellence goes beyond physical comfort: it is the ability to make each guest feel valued through anticipation, precision, and genuine human service.',
        pillarsTitle: 'Premium service pillars',
        pillarsItems: [
            'Deep personalisation based on guest preferences and context.',
            'Proactive anticipation of needs before requests are expressed.',
            'Refined discretion that delivers without being intrusive.',
            'Consistent service quality with authentic, seamless interactions.',
        ],
        transformingServicesTitle: 'Services that transform the stay',
        transformingServicesItems: [
            'Proactive concierge support that curates personalised experiences.',
            'Exclusive wellbeing services including tailored spa and treatment journeys.',
            'High-end gastronomy with customised options and signature culinary moments.',
            'Continuous guest journey orchestration to remove friction and uncertainty.',
        ],
        guestBenefitsTitle: 'Unmatched guest benefits',
        guestBenefitsItems: [
            'More quality time thanks to full handling of operational details.',
            'A stronger sense of exclusivity through high-level personalised care.',
            'Deeper relaxation and emotional comfort throughout the stay.',
            'Lasting memories that increase loyalty, recommendation, and return rate.',
        ],
        ctaTitle: 'Deliver a truly unforgettable hospitality experience',
        ctaText:
            'Contact us to design an excellence-hospitality framework aligned with your premium positioning and service ambitions.',
        ctaPrimaryLabel: 'Request a consultation',
    },
    de: {
        eyebrow: 'Exzellente hotellerie',
        hero: 'Wir verwandeln Aufenthalte in unvergessliche Luxuserlebnisse durch personalisierte Betreuung, vorausschauenden Service und diskrete Exzellenz.',
        definitionTitle: 'Was exzellente hotellerie ausmacht',
        definitionText:
            'Echte Exzellenz geht ueber Komfort hinaus: sie entsteht dort, wo Gaeste sich individuell verstanden, geschaetzt und souveraen begleitet fuehlen.',
        pillarsTitle: 'Saeulen des premium-services',
        pillarsItems: [
            'Praezise Personalisierung auf Basis individueller Erwartungen.',
            'Vorausschauendes Handeln, bevor Beduerfnisse ausgesprochen werden.',
            'Diskreter Service mit hoher Wirkung und ohne Aufdringlichkeit.',
            'Konstante Beziehungsqualitaet in jeder einzelnen Interaktion.',
        ],
        transformingServicesTitle: 'Services mit echter transformationswirkung',
        transformingServicesItems: [
            'Proaktive Concierge-Leistungen mit personalisierten Erlebnisvorschlaegen.',
            'Exklusive Wellbeing-Angebote mit individuellen Spa- und Regenerationsformaten.',
            'Hochwertige Gastronomie mit massgeschneiderten kulinarischen Erlebnissen.',
            'Durchgaengige Guest-Journey-Steuerung fuer maximale Leichtigkeit.',
        ],
        guestBenefitsTitle: 'Unvergleichliche vorteile fuer gaeste',
        guestBenefitsItems: [
            'Mehr qualitative Zeit durch Entlastung bei allen Detailthemen.',
            'Spuerbare Exklusivitaet dank individueller Premium-Betreuung.',
            'Tiefe Entspannung und hoehere emotionale Zufriedenheit waehrend des Aufenthalts.',
            'Nachhaltige Erinnerungen, die Loyalitaet und Wiederkehr staerken.',
        ],
        ctaTitle: 'Schaffen sie unvergessliche gaesteerlebnisse',
        ctaText:
            'Kontaktieren Sie uns, um ein Exzellenz-Hotellerie-Konzept zu entwickeln, das zu Ihrer Premium-Positionierung passt.',
        ctaPrimaryLabel: 'Beratung anfragen',
    },
    it: {
        eyebrow: 'Hotellerie d eccellenza',
        hero: 'Trasformiamo ogni soggiorno in un esperienza di lusso memorabile grazie a personalizzazione, anticipazione dei bisogni e discrezione impeccabile.',
        definitionTitle: 'Cosa definisce l eccellenza alberghiera',
        definitionText:
            'L eccellenza non e solo comfort: e la capacita di far sentire ogni ospite davvero valorizzato con cura proattiva e servizio umano autentico.',
        pillarsTitle: 'I pilastri del servizio premium',
        pillarsItems: [
            'Personalizzazione profonda dell esperienza secondo preferenze individuali.',
            'Anticipazione dei bisogni prima che vengano esplicitati.',
            'Discrezione raffinata: presenza efficace senza invasivita.',
            'Qualita relazionale costante in ogni punto di contatto.',
        ],
        transformingServicesTitle: 'Servizi che trasformano il soggiorno',
        transformingServicesItems: [
            'Conciergerie proattiva che propone esperienze su misura.',
            'Benessere esclusivo con percorsi spa e trattamenti personalizzati.',
            'Gastronomia d alta gamma con opzioni dedicate e momenti signature.',
            'Regia continua della guest journey per eliminare attriti operativi.',
        ],
        guestBenefitsTitle: 'Benefici incomparabili per l ospite',
        guestBenefitsItems: [
            'Piu tempo di qualita grazie alla gestione completa dei dettagli.',
            'Forte percezione di esclusivita attraverso servizio personalizzato.',
            'Rilassamento profondo e comfort emotivo durante tutta la permanenza.',
            'Ricordi duraturi che rafforzano fidelizzazione e ritorno.',
        ],
        ctaTitle: 'Create un esperienza alberghiera indimenticabile',
        ctaText:
            'Contattateci per progettare un modello di hotellerie d eccellenza allineato al vostro posizionamento premium.',
        ctaPrimaryLabel: 'Richiedi consulenza',
    },
};

export const ataCarnetManagementContentByLocale: Record<string, AtaCarnetManagementContent> = {
    fr: {
        eyebrow: 'Gestion du carnet ATA',
        hero: 'Nous transformons la mobilite temporaire internationale de vos biens en processus fluide, securise et economiquement optimise.',
        simplificationTitle: 'Simplifier le commerce international temporaire',
        simplificationText:
            'Le carnet ATA agit comme passeport douanier pour vos marchandises et facilite entree/sortie dans plus de 80 pays sans fiscalite temporaire superflue.',
        coveredCategoriesTitle: 'Categories de biens couvertes',
        coveredCategoriesItems: [
            'Echantillons commerciaux presentes a des prospects ou distributeurs.',
            'Equipements professionnels utilises pour missions techniques ou prestations.',
            'Materiels de foires, salons et expositions internationales.',
            'Biens temporaires a forte valeur operationnelle necessitant tracabilite complete.',
        ],
        cycleTitle: 'Notre cycle de gestion specialisee',
        cycleSteps: [
            'Conseil a l emission: verification documentaire et classification douaniere correcte.',
            'Coordination des garanties: structuration des cautions avec impact cash-flow maitrise.',
            'Pilotage logistique douanier: instructions precises pour passages frontieres sans erreur.',
            'Suivi des delais: controle continu de validite du carnet et dates limites de reexport.',
            'Regularisation finale: cloture du dossier et liberation des garanties financieres.',
        ],
        strategicBenefitsTitle: 'Benefices strategiques pour vos operations globales',
        strategicBenefitsItems: [
            'Economies directes en eliminant droits et taxes d importation temporaire.',
            'Tramites plus rapides et previsibles aux points douaniers.',
            'Acces facilite a des marches cles comme UE, USA et autres zones ATA.',
            'Securite juridique renforcee et reduction du risque de penalites.',
        ],
        ctaTitle: 'Developpez vos operations internationales avec controle',
        ctaText:
            'Contactez-nous pour structurer une gestion ATA complete, fiable et adaptee a vos flux internationaux temporaires.',
        ctaPrimaryLabel: 'Demander un accompagnement',
    },
    en: {
        eyebrow: 'ATA Carnet management',
        hero: 'We turn temporary international goods movement into a fluid, compliant, and cost-efficient operation for your global teams.',
        simplificationTitle: 'Simplifying temporary international trade',
        simplificationText:
            'The ATA Carnet works as a customs passport, enabling temporary entry and re-entry across 80+ countries without repetitive duty-heavy processes.',
        coveredCategoriesTitle: 'Goods categories covered by ATA',
        coveredCategoriesItems: [
            'Commercial samples used for business development and demonstrations.',
            'Professional equipment required for technical missions and services.',
            'Trade-fair and exhibition goods moved for international events.',
            'High-value temporary assets requiring full customs traceability.',
        ],
        cycleTitle: 'Our specialised management cycle',
        cycleSteps: [
            'Issuance advisory: documentation review and correct customs classification.',
            'Guarantee coordination: structured handling to protect your cash flow.',
            'Customs logistics guidance: clear border instructions to avoid processing errors.',
            'Deadline monitoring: strict control of carnet validity and re-export timelines.',
            'Final regularisation: case closure and release of financial guarantees.',
        ],
        strategicBenefitsTitle: 'Strategic benefits for your global operations',
        strategicBenefitsItems: [
            'Direct financial savings by avoiding temporary import duties and taxes.',
            'Faster and more predictable customs clearance workflows.',
            'Easier expansion into key ATA markets including EU and US corridors.',
            'Stronger legal certainty with reduced exposure to penalties.',
        ],
        ctaTitle: 'Scale internationally with greater control',
        ctaText:
            'Contact us to implement an end-to-end ATA management model tailored to your temporary cross-border operations.',
        ctaPrimaryLabel: 'Request assistance',
    },
    de: {
        eyebrow: 'ATA-Carnet-management',
        hero: 'Wir machen temporaere internationale Warenbewegung zu einem reibungslosen, rechtssicheren und kostenoptimierten Prozess.',
        simplificationTitle: 'Temporaren internationalen handel vereinfachen',
        simplificationText:
            'Das ATA-Carnet fungiert als Zollpass fuer Waren und ermoeglicht Ein- und Ausfuhren in mehr als 80 Laendern ohne unnoetige Zwischenabgaben.',
        coveredCategoriesTitle: 'Vom ATA-system abgedeckte gueterkategorien',
        coveredCategoriesItems: [
            'Warenmuster fuer Vertrieb, Vorfuehrung und Marktentwicklung.',
            'Berufsausruestung fuer technische Einsaetze und Fachleistungen.',
            'Messe- und Ausstellungsgueter fuer internationale Veranstaltungen.',
            'Temporare Assets mit hohem Wert und erhoehter Nachweispflicht.',
        ],
        cycleTitle: 'Unser spezialisierter managementzyklus',
        cycleSteps: [
            'Ausstellungsberatung: Dokumentencheck und tariflich korrekte Einordnung.',
            'Sicherheitenkoordination: strukturierte Loesung mit Cashflow-Fokus.',
            'Zolllogistik-Steuerung: praezise Anweisungen fuer fehlerfreie Grenzablaeufe.',
            'Fristenmonitoring: laufende Kontrolle von Gueltigkeit und Reexport-Terminen.',
            'Finale Regularisierung: Abschluss des Vorgangs und Freigabe der Garantien.',
        ],
        strategicBenefitsTitle: 'Strategische vorteile fuer ihre globale operation',
        strategicBenefitsItems: [
            'Direkte Kostensenkung durch Wegfall temporaerer Einfuhrabgaben.',
            'Schnellere und planbarere Zollabwicklung an Grenzpunkten.',
            'Erleichterter Zugang zu zentralen ATA-Maerkten in Europa und Nordamerika.',
            'Mehr Rechtssicherheit und geringeres Risiko von Sanktionen.',
        ],
        ctaTitle: 'International expandieren mit mehr sicherheit',
        ctaText:
            'Kontaktieren Sie uns fuer ein durchgaengiges ATA-Management, abgestimmt auf Ihre temporaeren grenzueberschreitenden Warenstroeme.',
        ctaPrimaryLabel: 'Begleitung anfragen',
    },
    it: {
        eyebrow: 'Gestione del carnet ATA',
        hero: 'Rendiamo la movimentazione temporanea internazionale delle vostre merci un processo fluido, conforme e sostenibile dal punto di vista economico.',
        simplificationTitle: 'Semplificare il commercio internazionale temporaneo',
        simplificationText:
            'Il Carnet ATA funziona come passaporto doganale e consente ingresso/rientro in oltre 80 paesi senza oneri temporanei non necessari.',
        coveredCategoriesTitle: 'Categorie di beni coperte dal sistema ATA',
        coveredCategoriesItems: [
            'Campioni commerciali per attivita di presentazione e sviluppo business.',
            'Attrezzature professionali impiegate in missioni tecniche e servizi.',
            'Beni per fiere, saloni ed esposizioni internazionali.',
            'Asset temporanei ad alto valore con esigenze di tracciabilita doganale.',
        ],
        cycleTitle: 'Il nostro ciclo di gestione specializzata',
        cycleSteps: [
            'Consulenza all emissione: controllo documentale e corretta classificazione.',
            'Coordinamento garanzie: impostazione efficiente con impatto finanziario ridotto.',
            'Regia logistica doganale: istruzioni operative per evitare errori in frontiera.',
            'Monitoraggio scadenze: controllo continuo validita carnet e date di reimportazione.',
            'Regolarizzazione finale: chiusura pratica e svincolo delle garanzie.',
        ],
        strategicBenefitsTitle: 'Benefici strategici per la vostra operazione globale',
        strategicBenefitsItems: [
            'Risparmio economico diretto eliminando imposte temporanee evitabili.',
            'Procedure doganali piu rapide, lineari e prevedibili.',
            'Accesso facilitato a mercati chiave ATA in Europa e oltre.',
            'Maggiore sicurezza legale con minore esposizione a sanzioni.',
        ],
        ctaTitle: 'Espandetevi a livello globale con maggiore controllo',
        ctaText:
            'Contattateci per costruire una gestione ATA end-to-end su misura per i vostri flussi internazionali temporanei.',
        ctaPrimaryLabel: 'Richiedi supporto',
    },
};

export const goodsReceptionContentByLocale: Record<string, GoodsReceptionContent> = {
    fr: {
        eyebrow: 'Reception de marchandises',
        hero: 'Nous faisons de la reception marchandises un avantage competitif, en combinant rigueur technique, rapidite d execution et tracabilite totale.',
        operationalFoundationTitle: 'Premier levier du succes operationnel',
        operationalFoundationText:
            'Un inbound bien maitrise protege vos stocks des l arrivee, reduit les erreurs de chaine et accelere la mise a disposition des produits.',
        technicalStepsTitle: 'Etapes d une reception technique et securisee',
        technicalSteps: [
            'Planification des quais et des flux vehicules pour eviter les congestions.',
            'Dechargement controle avec preservation des emballages et integrite produit.',
            'Confrontation documentaire: verification commande, quantites et references recues.',
            'Inspection qualite pour bloquer immediatement les non-conformites.',
            'Identification et enregistrement WMS instantanes pour tracabilite complete.',
        ],
        qualityControlTitle: 'Technologie et rigueur qualite',
        qualityControlItems: [
            'Scanners code-barres et RFID pour un comptage fiable et rapide.',
            'Integration WMS pour disponibilite quasi immediate en vente ou production.',
            'Tracabilite de reserve: photos, constats et protocoles d anomalie documentes.',
            'Processus standardises qui diminuent litiges, reprises et ruptures de flux.',
        ],
        strategicBenefitsTitle: 'Benefices strategiques pour votre entreprise',
        strategicBenefitsItems: [
            'Acuracite inventaire renforcee et meilleure fiabilite des donnees stock.',
            'Reduction des couts en refusant ou isolant les charges avariees a l arrivee.',
            'Acceleration du cycle de reapprovisionnement et du traitement commande.',
            'Conformite et securite operationnelle renforcant la reputation logistique.',
        ],
        ctaTitle: 'Demarrez votre performance logistique a la reception',
        ctaText:
            'Contactez-nous pour structurer un processus de reception marchandises robuste, mesurable et adapte a vos contraintes terrain.',
        ctaPrimaryLabel: 'Demander un diagnostic',
    },
    en: {
        eyebrow: 'Goods reception',
        hero: 'We turn inbound reception into a competitive edge through technical control, execution speed, and end-to-end traceability.',
        operationalFoundationTitle: 'The first step to operational success',
        operationalFoundationText:
            'A well-controlled receiving process protects stock integrity from day one, reduces downstream errors, and improves fulfilment velocity.',
        technicalStepsTitle: 'Technical and secure reception workflow',
        technicalSteps: [
            'Dock and vehicle-flow planning to avoid congestion and idle time.',
            'Controlled unloading to preserve packaging integrity and product condition.',
            'Document and quantity matching against purchase and delivery records.',
            'Quality inspection to isolate and block non-conforming items immediately.',
            'Instant WMS registration and labelling for full operational traceability.',
        ],
        qualityControlTitle: 'Technology-driven quality control',
        qualityControlItems: [
            'Barcode and RFID scanning for fast and accurate inbound registration.',
            'Integrated WMS workflows that shorten readiness for sale or production.',
            'Evidence-based reservation process with photos and documented exceptions.',
            'Standardised controls that reduce disputes, rework, and hidden losses.',
        ],
        strategicBenefitsTitle: 'Strategic benefits for your business',
        strategicBenefitsItems: [
            'Higher inventory accuracy and stronger planning reliability.',
            'Lower cost exposure by rejecting or isolating damaged loads on arrival.',
            'Faster replenishment cycles and improved order-fulfilment responsiveness.',
            'Stronger compliance and operational assurance across logistics processes.',
        ],
        ctaTitle: 'Start logistics excellence at inbound',
        ctaText:
            'Contact us to implement a robust, measurable goods-reception model tailored to your operational reality.',
        ctaPrimaryLabel: 'Request an assessment',
    },
    de: {
        eyebrow: 'Warenannahme',
        hero: 'Wir machen die Warenannahme zum Wettbewerbsvorteil durch technische Praezision, hohe Geschwindigkeit und vollstaendige Rueckverfolgbarkeit.',
        operationalFoundationTitle: 'Erster schritt zum operativen erfolg',
        operationalFoundationText:
            'Ein sauber gefuehrter Inbound-Prozess schuetzt den Bestand von Anfang an, reduziert Folgefehler und beschleunigt die Verfuegbarkeit.',
        technicalStepsTitle: 'Technischer und sicherer annahmeprozess',
        technicalSteps: [
            'Planung von Rampen und Fahrzeugfluss zur Vermeidung von Engpaessen.',
            'Kontrollierte Entladung mit Fokus auf Verpackungs- und Produktintegritaet.',
            'Abgleich von Lieferschein, Bestellung, Mengen und Referenzen.',
            'Qualitaetspruefung zur sofortigen Sperrung nicht konformer Positionen.',
            'Direkte WMS-Erfassung und Kennzeichnung fuer lueckenlose Traceability.',
        ],
        qualityControlTitle: 'Technologie und rigorose qualitaetskontrolle',
        qualityControlItems: [
            'Barcode- und RFID-Scans fuer schnelle, fehlerarme Inbound-Buchungen.',
            'Integriertes WMS fuer rasche Freigabe in Produktion oder Vertrieb.',
            'Rechtsfeste Reserven mit Foto-Dokumentation und Ereignisprotokollen.',
            'Standardisierte Pruefschritte zur Senkung von Streitfaellen und Nacharbeit.',
        ],
        strategicBenefitsTitle: 'Strategische vorteile fuer ihr unternehmen',
        strategicBenefitsItems: [
            'Hoehere Inventurgenauigkeit und belastbarere Bestandsdaten.',
            'Kostensenkung durch fruehe Erkennung und Ablehnung beschaedigter Ladungen.',
            'Schnellere Nachschubzyklen und bessere Servicegeschwindigkeit.',
            'Mehr Compliance und operative Sicherheit fuer stabile Lieferketten.',
        ],
        ctaTitle: 'Logistikleistung beginnt bei der warenannahme',
        ctaText:
            'Kontaktieren Sie uns fuer ein robustes, messbares Warenannahmemodell passend zu Ihren Ablaufen vor Ort.',
        ctaPrimaryLabel: 'Analyse anfragen',
    },
    it: {
        eyebrow: 'Ricezione merci',
        hero: 'Trasformiamo la ricezione merci in vantaggio competitivo con controllo tecnico, velocita operativa e tracciabilita completa.',
        operationalFoundationTitle: 'Il primo passo per il successo operativo',
        operationalFoundationText:
            'Un inbound ben gestito protegge l integrita dello stock fin dall ingresso, riduce errori a valle e accelera la disponibilita prodotto.',
        technicalStepsTitle: 'Fasi di una ricezione tecnica e sicura',
        technicalSteps: [
            'Pianificazione baie e flussi veicolari per eliminare colli di bottiglia.',
            'Scarico controllato con tutela di imballi e integrita della merce.',
            'Conferma documentale: verifica ordini, quantita e referenze ricevute.',
            'Ispezione qualita per bloccare immediatamente le non conformita.',
            'Registrazione e identificazione WMS in tempo reale per tracciabilita totale.',
        ],
        qualityControlTitle: 'Tecnologia e rigore nel controllo qualita',
        qualityControlItems: [
            'Lettori barcode e RFID per registrazioni immediate e precise.',
            'WMS integrato per rendere il prodotto disponibile piu rapidamente.',
            'Gestione riserve con foto e protocolli documentati a tutela legale.',
            'Procedure standard che riducono errori, contenziosi e costi nascosti.',
        ],
        strategicBenefitsTitle: 'Benefici strategici per la vostra azienda',
        strategicBenefitsItems: [
            'Maggiore accuratezza inventariale e dati stock piu affidabili.',
            'Riduzione costi grazie a identificazione tempestiva di merci danneggiate.',
            'Cicli di riassortimento piu rapidi e migliore reattivita ordini.',
            'Conformita e sicurezza operativa a protezione della reputazione.',
        ],
        ctaTitle: 'La performance logistica parte dall inbound',
        ctaText:
            'Contattateci per costruire un modello di ricezione merci robusto, misurabile e adatto al vostro contesto operativo.',
        ctaPrimaryLabel: 'Richiedi un assessment',
    },
};

export const bondedWarehouseContentByLocale: Record<string, BondedWarehouseContent> = {
    fr: {
        eyebrow: 'Entrepot douanier et exoneration fiscale',
        hero: 'Nous transformons l entrepot douanier en levier financier pour aligner fiscalite, tresorerie et demande reelle du marche.',
        strategicPowerTitle: 'Le pouvoir strategique de l entrepot douanier',
        strategicPowerText:
            'Ce regime special permet de stocker des biens importes avec suspension des taxes et de choisir le moment optimal de nationalisation.',
        mechanismsTitle: 'Mecanismes de suspension et exoneration',
        mechanismsItems: [
            'Suspension de II, IPI, PIS/COFINS et ICMS pendant la periode de stockage.',
            'Nationalisation partielle: paiement fiscal uniquement sur les volumes retires.',
            'Exoneration a la reexportation pour les marchandises redirigees hors du pays.',
            'Fenetre de stockage flexible pour pilotage strategique des flux et marges.',
        ],
        operationsTitle: 'Operations autorisees en entrepot',
        operationsItems: [
            'Maintenance et conservation pour preserver l integrite des biens.',
            'Adaptation commerciale: etiquetage, reconditionnement et constitution de kits.',
            'Prelevements techniques pour tests, controles et demonstrations produit.',
            'Preparation avancee des lots avant nationalisation definitive.',
        ],
        strategicBenefitsTitle: 'Benefices strategiques pour votre entreprise',
        strategicBenefitsItems: [
            'Optimisation immediate du cash-flow via report du paiement des taxes.',
            'Reduction du cout logistique grace a l import en lots plus efficients.',
            'Disponibilite plus rapide pour servir vos clients avec stock proche du marche.',
            'Conformite et securite renforcees en recintos alfandegados controles.',
        ],
        ctaTitle: 'Faites de votre fiscalite un avantage operationnel',
        ctaText:
            'Contactez-nous pour structurer un schema d entrepot douanier adapte a vos flux internationaux et objectifs financiers.',
        ctaPrimaryLabel: 'Demander une etude',
    },
    en: {
        eyebrow: 'Bonded warehouse and tax exemption',
        hero: 'We convert bonded warehousing into a financial advantage by aligning tax exposure, inventory strategy, and real market demand.',
        strategicPowerTitle: 'The strategic power of bonded warehousing',
        strategicPowerText:
            'This customs regime allows imported goods to be stored under full tax suspension until release and nationalisation are economically justified.',
        mechanismsTitle: 'Suspension and exemption mechanisms',
        mechanismsItems: [
            'Suspension of import-related taxes while goods remain in bonded storage.',
            'Partial nationalisation with tax payment only on withdrawn quantities.',
            'Tax relief on re-exported goods shipped to external destinations.',
            'Flexible storage windows to optimise stock, cash, and margin decisions.',
        ],
        operationsTitle: 'Permitted in-warehouse operations',
        operationsItems: [
            'Conservation and maintenance activities to preserve product integrity.',
            'Commercial adaptation such as relabelling, repacking, and kit assembly.',
            'Technical sampling for quality checks, demonstrations, or analysis.',
            'Operational lot preparation before final customs release.',
        ],
        strategicBenefitsTitle: 'Strategic benefits for your business',
        strategicBenefitsItems: [
            'Immediate working-capital optimisation through deferred tax payments.',
            'Lower logistics cost by importing in economically efficient batches.',
            'Faster service response by positioning inventory closer to demand.',
            'Higher compliance confidence in monitored customs-authorised facilities.',
        ],
        ctaTitle: 'Turn tax timing into operational advantage',
        ctaText:
            'Contact us to design a bonded-warehouse model aligned with your international flows and financial priorities.',
        ctaPrimaryLabel: 'Request a study',
    },
    de: {
        eyebrow: 'Zolllager und steuerbefreiung',
        hero: 'Wir nutzen das Zolllager als finanziellen Hebel, um Steuerlast, Liquiditaet und Marktnachfrage effizient aufeinander abzustimmen.',
        strategicPowerTitle: 'Strategische wirkung des zolllagers',
        strategicPowerText:
            'Importierte Waren koennen unter Abgabensuspension gelagert werden, sodass Nationalisierung und Zahlung zeitlich optimal gesteuert werden.',
        mechanismsTitle: 'Mechanismen fuer suspension und steuerentlastung',
        mechanismsItems: [
            'Aussetzung relevanter Einfuhrabgaben waehrend der Lagerphase.',
            'Partielle Nationalisierung mit zahlungswirksamer Entnahme nur bei Bedarf.',
            'Steuerliche Entlastung bei Reexport in Drittmaerkte.',
            'Flexible Lagerfristen fuer bessere Steuerung von Bestand und Marge.',
        ],
        operationsTitle: 'Zulaessige operationen im regime',
        operationsItems: [
            'Erhaltungs- und Wartungsaktivitaeten zur Sicherung der Warenqualitaet.',
            'Kommerzielle Anpassungen wie Etikettierung, Umverpackung und Kit-Bildung.',
            'Technische Probenahmen fuer Tests, Analysen und Vorfuehrzwecke.',
            'Vorbereitung von Chargen vor endgueltiger Freigabe.',
        ],
        strategicBenefitsTitle: 'Strategische vorteile fuer ihr unternehmen',
        strategicBenefitsItems: [
            'Sofort bessere Liquiditaet durch spaetere Steuerfaelligkeit.',
            'Niedrigere Logistikkosten durch wirtschaftliche Importbuendelung.',
            'Hoehere Reaktionsfaehigkeit dank marktnaher Verfuegbarkeit.',
            'Mehr Rechtssicherheit in ueberwachten zollrechtlichen Anlagen.',
        ],
        ctaTitle: 'Machen sie steuertiming zum wettbewerbsvorteil',
        ctaText:
            'Kontaktieren Sie uns fuer ein Zolllagerkonzept, das zu Ihren internationalen Warenstroemen und Finanzzielen passt.',
        ctaPrimaryLabel: 'Analyse anfordern',
    },
    it: {
        eyebrow: 'Deposito doganale ed esenzione fiscale',
        hero: 'Trasformiamo il deposito doganale in vantaggio finanziario allineando fiscalita, liquidita e domanda reale del mercato.',
        strategicPowerTitle: 'Il potere strategico del deposito doganale',
        strategicPowerText:
            'Il regime consente stoccaggio in sospensione di tributi, con nazionalizzazione decisa nel momento economicamente piu favorevole.',
        mechanismsTitle: 'Meccanismi di sospensione ed esenzione',
        mechanismsItems: [
            'Sospensione dei tributi principali durante la permanenza in deposito.',
            'Nazionalizzazione parziale con pagamento imposte solo sui volumi svincolati.',
            'Esenzione in caso di riesportazione verso mercati esteri.',
            'Flessibilita temporale di giacenza per decisioni strategiche su stock e margini.',
        ],
        operationsTitle: 'Operazioni consentite nel deposito',
        operationsItems: [
            'Conservazione e manutenzione per preservare integrita e valore dei beni.',
            'Adattamento commerciale: etichettatura, riconfezionamento e kit.',
            'Campionatura tecnica per test, analisi e dimostrazioni.',
            'Preparazione lotti prima dello sdoganamento definitivo.',
        ],
        strategicBenefitsTitle: 'Benefici strategici per la vostra azienda',
        strategicBenefitsItems: [
            'Ottimizzazione immediata del capitale circolante con pagamento differito.',
            'Riduzione dei costi logistici tramite importazioni in lotti piu efficienti.',
            'Maggiore agilita commerciale grazie a stock piu vicino alla domanda.',
            'Conformita e sicurezza rafforzate in strutture doganali monitorate.',
        ],
        ctaTitle: 'Rendete la fiscalita una leva operativa',
        ctaText:
            'Contattateci per progettare un modello di deposito doganale su misura per i vostri flussi internazionali e obiettivi finanziari.',
        ctaPrimaryLabel: 'Richiedi uno studio',
    },
};

export const deliveryLogisticsContentByLocale: Record<string, OfficeMaintenanceContent> = {
    fr: {
        eyebrow: 'Livraison et logistique des marchandises',
        hero: 'La livraison et la logistique des marchandises ne se limitent pas au transport. Elles prolongent votre strategie commerciale et determinent la qualite percue de votre marque, la ponctualite operationnelle et la satisfaction client a chaque etape.',
        essentialsTitle: 'L art de l efficacite logistique',
        essentials: [
            {
                title: 'Un levier direct de competitivite',
                description: 'Une logistique performante renforce la fidelisation client, accelere le service et transforme la livraison en avantage commercial mesurable.',
            },
            {
                title: 'Une chaine de valeur continue',
                description: 'De l enlevement fournisseur jusqu au last mile, chaque maillon doit fonctionner avec precision pour garantir delais, qualite et fiabilite.',
            },
            {
                title: 'Protection de l integrite et de l image',
                description: 'La marchandise doit arriver intacte, mais aussi dans des conditions qui preservent l experience client et la valeur percue de votre marque.',
            },
            {
                title: 'Excellence operationnelle a grande echelle',
                description: 'L orchestration de volumes eleves, de destinations multiples et de contraintes variables exige une execution hautement specialisee.',
            },
        ],
        agileTitle: 'Risques critiques a maitriser dans le transport',
        agileText:
            'Retards, avaries, pertes, vols et ruptures de communication client peuvent degrader la marge et la reputation. Sans planification rigoureuse ni visibilite en temps reel, chaque incident peut se transformer en cout operationnel et commercial majeur.',
        sustainabilityTitle: 'Technologies avancees pour une logistique de precision',
        sustainabilityItems: [
            'Tracking temps reel via plateformes GPS et IoT pour suivre position, statut et incidents de chaque expédition.',
            'Optimisation de routes par intelligence artificielle selon trafic, meteo, contraintes de livraison et fenetres horaires.',
            'Gestion de flotte intelligente avec telemetrie pour consommation, maintenance preventive et securite conducteur.',
            'WMS et automatisation d entrepot pour accelerer picking, fiabiliser preparation et fluidifier expédition.',
            'Logistique inverse structuree pour retours et echanges rapides, avec meilleur niveau de service et impact durable.',
        ],
        correctiveTitle: 'Notre processus integre de bout en bout',
        correctiveText:
            'Nous demarrons par une analyse complete des flux, volumes, destinations, modes de transport et exigences de delai. Nous concevons ensuite une architecture logistique sur mesure: maillage de distribution, selection des partenaires, protocoles de controle et KPIs de performance. L execution est assuree par des equipes expertes avec suivi en temps reel, gestion proactive des imprevus et confirmation de livraison documentee.',
        plansTitle: 'Benefices strategiques pour e-commerce, industrie et retail',
        plans: [
            {
                name: 'Fiabilite de service',
                details: 'Protection de l integrite des marchandises et maitrise des delais critiques sur l ensemble de la chaine.',
                response: 'Resultat: moins de litiges et plus de confiance client',
            },
            {
                name: 'Performance economique',
                details: 'Routage optimise, reduction des gaspillages operationnels et meilleure utilisation des ressources transport/stockage.',
                response: 'Resultat: baisse durable des couts logistiques',
            },
            {
                name: 'Valeur de marque',
                details: 'Une experience de livraison fluide, transparente et ponctuelle renforce la reputation et la perception premium de votre entreprise.',
                response: 'Resultat: differenciation nette sur un marche concurrentiel',
            },
        ],
        closingTitle: 'Transformez votre logistique en avantage strategique',
        closingText:
            'Confiez-nous votre livraison et logistique des marchandises pour elever votre chaine de distribution a un standard d excellence. Vous obtenez plus de controle, plus de rapidite, plus de rentabilite et une experience client irreprochable.',
        ctaPrimaryLabel: 'Demander un diagnostic logistique',
    },
    en: {
        eyebrow: 'Goods delivery and logistics',
        hero: 'Delivery logistics is not just transportation. It is a business strategy lever that protects customer experience, deadlines, and brand value.',
        essentialsTitle: 'Operational excellence in motion',
        essentials: [
            { title: 'Competitive advantage', description: 'Reliable logistics improves retention, trust, and repeat business.' },
            { title: 'End-to-end orchestration', description: 'From supplier pickup to last mile, every handoff must be controlled.' },
            { title: 'Risk-aware operations', description: 'Delays, damage, and communication gaps are mitigated through structured control.' },
            { title: 'Scalable execution', description: 'High-volume, multi-destination flows require specialised coordination.' },
        ],
        agileTitle: 'Critical transport risks we control',
        agileText:
            'We mitigate delays, loss, damage, theft, and service failures through planning discipline, live visibility, and proactive incident management.',
        sustainabilityTitle: 'Technology stack for precision logistics',
        sustainabilityItems: [
            'Real-time tracking through GPS and IoT-enabled visibility platforms.',
            'AI route optimisation based on traffic, weather, and delivery windows.',
            'Smart fleet management with telemetry and preventive maintenance.',
            'WMS-enabled warehouse flow for faster, more accurate dispatch.',
            'Structured reverse logistics for returns, exchanges, and service recovery.',
        ],
        correctiveTitle: 'Our integrated logistics process',
        correctiveText:
            'We assess volumes, destinations, modes, and SLAs, then design a custom logistics model with route architecture, partner selection, KPIs, and quality controls. Execution is monitored in real time with fast issue resolution and post-operation analysis.',
        plansTitle: 'Strategic outcomes for commerce and industry',
        plans: [
            { name: 'Service reliability', details: 'Higher delivery integrity and deadline control.', response: 'Outcome: fewer claims, stronger trust' },
            { name: 'Cost performance', details: 'Optimised routing and lower operational waste.', response: 'Outcome: sustainable logistics savings' },
            { name: 'Brand perception', details: 'Consistent, transparent delivery experience.', response: 'Outcome: stronger market differentiation' },
        ],
        closingTitle: 'Make logistics your strategic edge',
        closingText: 'Upgrade your supply chain with measurable control, speed, and customer confidence.',
        ctaPrimaryLabel: 'Request logistics assessment',
    },
    de: {
        eyebrow: 'Warenlieferung und logistik',
        hero: 'Lieferlogistik ist mehr als Transport: sie ist ein strategischer Hebel fuer Servicequalitaet, Termintreue und Markenwert.',
        essentialsTitle: 'Effizienz als transportkunst',
        essentials: [
            { title: 'Wettbewerbsvorteil', description: 'Zuverlaessige Logistik staerkt Kundenbindung und Wiederkauf.' },
            { title: 'End-to-end Steuerung', description: 'Von Abholung bis Last Mile werden alle Uebergaben kontrolliert.' },
            { title: 'Risikominimierung', description: 'Verzoegerungen, Schaeden und Verluste werden systematisch reduziert.' },
            { title: 'Skalierbare Umsetzung', description: 'Hohe Volumen und komplexe Netze erfordern spezialisierte Prozesse.' },
        ],
        agileTitle: 'Zentrale transport-risiken unter kontrolle',
        agileText:
            'Wir steuern Zeit, Sicherheit und Kommunikation proaktiv, damit Stoerungen keine finanziellen oder reputativen Schaeden verursachen.',
        sustainabilityTitle: 'Technologien fuer praezise Lieferketten',
        sustainabilityItems: [
            'Echtzeit-Tracking mit GPS/IoT.',
            'KI-gestuetzte Routenoptimierung nach Verkehr, Wetter und Zeitfenstern.',
            'Intelligentes Flottenmanagement mit Telemetrie und Praeventivwartung.',
            'WMS-gestuetzte Lagerprozesse fuer schnelleres, praeziseres Dispatching.',
            'Strukturierte Reverse Logistics fuer Retouren und Austausch.',
        ],
        correctiveTitle: 'Unser integrierter Logistikprozess',
        correctiveText:
            'Nach Analyse von Volumen, Destinationen und SLAs entwickeln wir ein massgeschneidertes Logistikmodell mit KPIs, Partnersteuerung und Qualitaetskontrolle. Die Ausfuehrung wird in Echtzeit ueberwacht und kontinuierlich optimiert.',
        plansTitle: 'Strategischer nutzen fuer handel und industrie',
        plans: [
            { name: 'Servicequalitaet', details: 'Mehr Termintreue und geringere Schadenquote.', response: 'Ergebnis: weniger Reklamationen' },
            { name: 'Kosten', details: 'Effizientere Routen und geringere Prozessverluste.', response: 'Ergebnis: nachhaltige Kostensenkung' },
            { name: 'Markenwirkung', details: 'Verlaessliche Lieferung als positives Kundenerlebnis.', response: 'Ergebnis: staerkere Positionierung' },
        ],
        closingTitle: 'Machen sie logistik zum vorteil',
        closingText: 'Bringen Sie Kontrolle, Tempo und Vertrauen auf ein neues Niveau in Ihrer Lieferkette.',
        ctaPrimaryLabel: 'Logistik-analyse anfordern',
    },
    it: {
        eyebrow: 'Consegna e logistica merci',
        hero: 'La logistica di consegna e una leva strategica: non solo trasporto, ma continuita operativa, puntualita e valore percepito del brand.',
        essentialsTitle: 'L arte dell efficienza nel trasporto',
        essentials: [
            { title: 'Vantaggio competitivo', description: 'Una logistica affidabile aumenta fedelta cliente e qualita del servizio.' },
            { title: 'Controllo end-to-end', description: 'Dal ritiro fornitore alla last mile, ogni passaggio e governato.' },
            { title: 'Riduzione del rischio', description: 'Ritardi, danni, smarrimenti e disservizi vengono prevenuti in modo strutturato.' },
            { title: 'Esecuzione scalabile', description: 'Volumi elevati e reti complesse richiedono metodo e specializzazione.' },
        ],
        agileTitle: 'Rischi logistici sotto governance',
        agileText:
            'Gestiamo in modo proattivo ritardi, avarie, furti e criticita di comunicazione con monitoraggio continuo e piani di risposta rapida.',
        sustainabilityTitle: 'Soluzioni e tecnologie per logistica avanzata',
        sustainabilityItems: [
            'Tracking in tempo reale con GPS e IoT.',
            'Ottimizzazione rotte con algoritmi AI su traffico, meteo e finestre di consegna.',
            'Fleet management intelligente con telemetria e manutenzione preventiva.',
            'WMS e automazione per picking e spedizione piu rapidi e accurati.',
            'Logistica inversa strutturata per resi e cambi efficienti.',
        ],
        correctiveTitle: 'Il nostro processo logistico integrato',
        correctiveText:
            'Analizziamo volumi, destinazioni, modalita e SLA; poi disegniamo un progetto su misura con rete distributiva, partner, KPI e controlli qualita. L esecuzione e monitorata in tempo reale con gestione rapida degli imprevisti e miglioramento continuo post-operazione.',
        plansTitle: 'Benefici strategici per e-commerce, industria e retail',
        plans: [
            { name: 'Affidabilita', details: 'Maggiore puntualita e integrita delle consegne.', response: 'Risultato: meno reclami, piu fiducia' },
            { name: 'Efficienza costi', details: 'Roteirizzazione ottimizzata e riduzione sprechi operativi.', response: 'Risultato: riduzione stabile dei costi logistici' },
            { name: 'Valore brand', details: 'Esperienza di consegna fluida e trasparente per il cliente.', response: 'Risultato: differenziazione competitiva' },
        ],
        closingTitle: 'Trasformate la logistica in vantaggio strategico',
        closingText: 'Portate la vostra catena di distribuzione a un livello superiore di controllo, velocita e qualita percepita.',
        ctaPrimaryLabel: 'Richiedi assessment logistico',
    },
};

export const storageLabelingContentByLocale: Record<string, OfficeMaintenanceContent> = {
    fr: {
        eyebrow: "Stockage et preparation d etiquetage",
        hero: "Le stockage et la preparation d etiquetage sont le coeur d une logistique haute performance. Plus qu un simple entreposage, c est une discipline de precision qui combine organisation physique, fiabilite des donnees et tracabilite totale pour accelerer toute la chaine d approvisionnement.",
        essentialsTitle: "L art de l organisation et de l identification",
        essentials: [
            {
                title: "Stockage strategique a forte valeur",
                description: "Chaque zone est concue pour optimiser densite, accessibilite et securite afin de fluidifier les entrees, les sorties et les reapprovisionnements.",
            },
            {
                title: "Traçabilite sans compromis",
                description: "Chaque etiquette devient un document operationnel vital, garantissant l identification exacte de chaque article, lot et emplacement.",
            },
            {
                title: "Agilite operationnelle durable",
                description: "Un inventaire structure et lisible reduit les temps de recherche, limite les erreurs de picking et accelere la preparation des commandes.",
            },
            {
                title: "Fiabilite de donnees pour decider vite",
                description: "Un systeme bien gouverne fournit des informations exploitables en temps reel pour mieux planifier stock, priorites et capacite.",
            },
        ],
        agileTitle: "Risques critiques en gestion de stock et etiquetage",
        agileText:
            "Obsolescence, imprecision d inventaire, etiquetage incorrect, gaspillage d espace, erreurs de picking et ruptures de tracabilite peuvent generer des pertes financieres majeures. Sans standardisation ni controle methodique, chaque ecart se propage sur toute la chaine logistique.",
        sustainabilityTitle: "Technologies de pointe pour precision et controle",
        sustainabilityItems: [
            "WMS temps reel pour piloter emplacement, statut et mouvements de chaque reference dans l entrepot.",
            "Etiquetage intelligent RFID et QR Code pour lecture automatique, reduction des erreurs manuelles et traçabilite continue.",
            "Systemes de stockage vertical et automatise pour maximiser la capacite utile et accelerer l acces produit.",
            "Impression d etiquettes a la demande avec codes-barres, donnees techniques, logos et standards client.",
            "Inventaire cyclique structure pour maintenir une haute exactitude sans interrompre les operations quotidiennes.",
        ],
        correctiveTitle: "Notre processus integre de preparation et etiquetage",
        correctiveText:
            "Nous commençons par une analyse technique des exigences d identification: normes reglementaires, attentes client et contraintes metier. Nous construisons ensuite un flux personnalise avec controle physique, application d etiquettes haute durabilite, validation scanner et verification qualite systematique. Chaque lot est suivi numeriquement jusqu a l audit de sortie et la mise a jour instantanee de la base de donnees.",
        plansTitle: "Benefices strategiques pour votre competitivite",
        plans: [
            {
                name: "Efficacite operationnelle",
                details: "Recherche d articles plus rapide, preparation plus fiable, et reduction des erreurs de picking et d expédition.",
                response: "Resultat: productivite logistique en hausse",
            },
            {
                name: "Maitrise des couts",
                details: "Moins de retours, moins de pertes, meilleur usage de l espace et baisse des couts caches lies aux anomalies stock.",
                response: "Resultat: optimisation durable des depenses",
            },
            {
                name: "Confiance et image de marque",
                details: "Une execution rigoureuse et traçable renforce votre credibilite client et votre promesse de fiabilite.",
                response: "Resultat: reputation operationnelle consolidee",
            },
        ],
        closingTitle: "Passez a un standard superieur de controle logistique",
        closingText:
            "Confiez-nous votre stockage et preparation d etiquetage pour transformer votre inventaire en avantage strategique. Vous gagnez en visibilite, en vitesse d execution et en fiabilite de bout en bout.",
        ctaPrimaryLabel: "Demander un audit stockage",
    },
    en: {
        eyebrow: 'Storage and labeling preparation',
        hero: 'Storage and labeling preparation are not basic warehouse tasks. They are precision systems that drive traceability, inventory reliability, and supply-chain speed.',
        essentialsTitle: 'The discipline behind organised operations',
        essentials: [
            { title: 'Strategic storage design', description: 'Layouts balance density, accessibility, and safety for faster flow.' },
            { title: 'Accurate identification', description: 'Each label acts as a reliable data anchor for every item and lot.' },
            { title: 'Faster execution', description: 'Structured stock reduces search time and picking errors.' },
            { title: 'Decision-ready data', description: 'Real-time visibility supports better planning and control.' },
        ],
        agileTitle: 'Critical stock and labeling risks',
        agileText:
            'Obsolescence, mislabeling, inventory inaccuracy, and poor space use can quickly become financial losses and service failures.',
        sustainabilityTitle: 'Advanced tools for precise control',
        sustainabilityItems: [
            'Real-time WMS for full location and movement control.',
            'RFID and QR-based smart labeling for automated reading.',
            'Vertical and automated storage to improve capacity and access.',
            'On-demand label printing for client and technical requirements.',
            'Cycle counting to maintain high accuracy without stopping operations.',
        ],
        correctiveTitle: 'Our integrated preparation process',
        correctiveText:
            'We define identification requirements, design a custom flow, validate labels with scanners, and close with outgoing audit and instant database updates.',
        plansTitle: 'Strategic business outcomes',
        plans: [
            { name: 'Operational efficiency', details: 'Faster retrieval and more reliable picking.', response: 'Outcome: higher throughput' },
            { name: 'Cost control', details: 'Lower errors, returns, and hidden inventory waste.', response: 'Outcome: better margin protection' },
            { name: 'Brand reliability', details: 'Consistent, traceable execution for every order.', response: 'Outcome: stronger customer trust' },
        ],
        closingTitle: 'Upgrade your storage intelligence',
        closingText: 'Turn storage and labeling into a strategic advantage with better control and speed.',
        ctaPrimaryLabel: 'Request storage assessment',
    },
    de: {
        eyebrow: 'Lagerung und etikettiervorbereitung',
        hero: 'Lagerung und Etikettierung sind zentrale Praezisionsprozesse fuer Rueckverfolgbarkeit, Datenintegritaet und Geschwindigkeit.',
        essentialsTitle: 'Organisation als leistungsfaktor',
        essentials: [
            { title: 'Strategische Lagerstruktur', description: 'Flaechen werden fuer Dichte, Zugriff und Sicherheit optimiert.' },
            { title: 'Sichere Identifikation', description: 'Jedes Etikett steuert eindeutige Zuordnung von Artikel, Charge und Ort.' },
            { title: 'Schnellere Prozesse', description: 'Klare Struktur reduziert Suchzeiten und Kommissionierfehler.' },
            { title: 'Transparente Bestandsdaten', description: 'Echtzeitdaten verbessern Planung und operative Steuerung.' },
        ],
        agileTitle: 'Kritische Risiken in Bestand und Kennzeichnung',
        agileText:
            'Fehlkennzeichnung, Inventurdifferenzen, Obsoleszenz und Flaechenverluste fuehren schnell zu Kosten und Prozessstoerungen.',
        sustainabilityTitle: 'Technologie fuer praezise lagersteuerung',
        sustainabilityItems: [
            'WMS mit Echtzeit-Status und Bewegungsverfolgung.',
            'RFID/QR-Etikettierung fuer automatische Datenerfassung.',
            'Vertikale und automatisierte Lagersysteme fuer bessere Flaechennutzung.',
            'On-demand Druckstationen fuer kundenspezifische Labels.',
            'Cycle Counting fuer dauerhafte Bestandsgenauigkeit.',
        ],
        correctiveTitle: 'Unser vorbereitungs- und etikettierprozess',
        correctiveText:
            'Wir analysieren Anforderungen, definieren einen massgeschneiderten Prozess, validieren mit Scannern und sichern per Endaudit und sofortiger Datenaktualisierung.',
        plansTitle: 'Strategischer mehrwert',
        plans: [
            { name: 'Effizienz', details: 'Schneller Zugriff und zuverlaessigere Kommissionierung.', response: 'Ergebnis: hoehere Produktivitaet' },
            { name: 'Kosten', details: 'Weniger Fehler, Retouren und Bestandsverluste.', response: 'Ergebnis: bessere Kostenkontrolle' },
            { name: 'Vertrauen', details: 'Nachvollziehbare und stabile Prozessqualitaet.', response: 'Ergebnis: staerkere Markenwahrnehmung' },
        ],
        closingTitle: 'Heben sie ihre lagersteuerung auf ein neues niveau',
        closingText: 'Nutzen Sie Lagerung und Etikettierung als strategischen Vorteil fuer Tempo und Zuverlaessigkeit.',
        ctaPrimaryLabel: 'Lageranalyse anfordern',
    },
    it: {
        eyebrow: 'Stoccaggio e preparazione etichettatura',
        hero: 'Stoccaggio ed etichettatura sono il centro nevralgico di una logistica ad alte prestazioni: ordine fisico, dati affidabili e tracciabilita completa.',
        essentialsTitle: 'L arte dell organizzazione e identificazione',
        essentials: [
            { title: 'Stoccaggio strategico', description: 'Layout progettati per densita, accessibilita e sicurezza operativa.' },
            { title: 'Identificazione precisa', description: 'Ogni etichetta garantisce corrispondenza esatta tra dato e contenuto fisico.' },
            { title: 'Processi piu rapidi', description: 'Meno errori di picking e tempi di ricerca ridotti.' },
            { title: 'Controllo decisionale', description: 'Visibilita real-time per pianificazione e gestione stock.' },
        ],
        agileTitle: 'Rischi critici nella gestione scorte',
        agileText:
            'Obsolescenza, errori di etichettatura, imprecisioni inventariali e spreco spazio possono generare perdite economiche rilevanti.',
        sustainabilityTitle: 'Tecnologie per controllo e tracciabilita',
        sustainabilityItems: [
            'WMS in tempo reale per localizzazione e movimenti.',
            'RFID e QR Code per lettura automatica e riduzione errori manuali.',
            'Stoccaggio verticale e automazione per massima efficienza spazio.',
            'Stampa etichette on-demand con dati tecnici e codici a barre.',
            'Inventario ciclico per alta accuratezza senza fermare l operativita.',
        ],
        correctiveTitle: 'Il nostro processo di preparazione ed etichettatura',
        correctiveText:
            'Analizziamo requisiti normativi e cliente, definiamo un flusso personalizzato, validiamo ogni etichetta via scanner e chiudiamo con audit uscita e aggiornamento immediato dei dati.',
        plansTitle: 'Benefici strategici per il business',
        plans: [
            { name: 'Efficienza', details: 'Ricerca articoli e preparazione ordini piu rapide e affidabili.', response: 'Risultato: maggiore produttivita' },
            { name: 'Costi', details: 'Riduzione errori, resi e inefficienze di spazio.', response: 'Risultato: ottimizzazione costi operativi' },
            { name: 'Affidabilita', details: 'Processi tracciabili che rafforzano la fiducia del cliente.', response: 'Risultato: brand piu solido' },
        ],
        closingTitle: 'Trasformate il magazzino in vantaggio strategico',
        closingText: 'Portate controllo, precisione e velocita a un nuovo standard nella vostra catena logistica.',
        ctaPrimaryLabel: 'Richiedi audit magazzino',
    },
};
