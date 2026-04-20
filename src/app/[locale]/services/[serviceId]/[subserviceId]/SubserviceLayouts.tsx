import { Link } from '@/navigation';
import {
    ArtPackagingContent,
    ArtSpecializedInstallationContent,
    AtaCarnetManagementContent,
    BondedWarehouseContent,
    CorporateFurnitureInstallContent,
    CorporateConciergeContent,
    CorporateFacadeContent,
    CorporateRelocationContent,
    CorporateTransportContent,
    GoodsReceptionContent,
    HospitalityExcellenceContent,
    OfficeCleaningContent,
    OfficeMaintenanceContent,
    SecureDisposalContent,
    ShowroomAssemblyContent,
} from './content';

type LayoutCommonProps = {
    serviceId: string;
    serviceTitle: string;
};

type CleaningLayoutProps = LayoutCommonProps & {
    content: OfficeCleaningContent;
};

type MaintenanceLayoutProps = LayoutCommonProps & {
    content: OfficeMaintenanceContent;
};

type SecureLayoutProps = LayoutCommonProps & {
    content: SecureDisposalContent;
};

type CorporateFacadeLayoutProps = LayoutCommonProps & {
    content: CorporateFacadeContent;
};

type CorporateConciergeLayoutProps = LayoutCommonProps & {
    content: CorporateConciergeContent;
};

type CorporateRelocationLayoutProps = LayoutCommonProps & {
    content: CorporateRelocationContent;
};

type CorporateTransportLayoutProps = LayoutCommonProps & {
    content: CorporateTransportContent;
};

type ShowroomLayoutProps = LayoutCommonProps & {
    content: ShowroomAssemblyContent;
};

type CorporateFurnitureLayoutProps = LayoutCommonProps & {
    content: CorporateFurnitureInstallContent;
};

type ArtPackagingLayoutProps = LayoutCommonProps & {
    content: ArtPackagingContent;
};

type ArtSpecializedInstallationLayoutProps = LayoutCommonProps & {
    content: ArtSpecializedInstallationContent;
};

type HospitalityExcellenceLayoutProps = LayoutCommonProps & {
    content: HospitalityExcellenceContent;
};

type AtaCarnetManagementLayoutProps = LayoutCommonProps & {
    content: AtaCarnetManagementContent;
};

type GoodsReceptionLayoutProps = LayoutCommonProps & {
    content: GoodsReceptionContent;
};

type BondedWarehouseLayoutProps = LayoutCommonProps & {
    content: BondedWarehouseContent;
};

type DefaultActionsProps = LayoutCommonProps & {
    learnMoreLabel: string;
};

export function CleaningLayout({ serviceId, serviceTitle, content }: CleaningLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.productivityTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.productivityText}</p>
                </article>
            </section>

            <section className="mb-12">
                <h2 className="font-serif text-3xl text-swiss-navy mb-5">{content.servicesTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {content.services.map((item) => (
                        <article key={item.title} className="rounded-xl border border-swiss-navy/10 bg-white p-6">
                            <h3 className="font-serif text-2xl text-swiss-navy mb-3">{item.title}</h3>
                            <p className="text-swiss-text/85 leading-relaxed">{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.sustainabilityTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.sustainabilityText}</p>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.methodTitle}</h2>
                    <ol className="space-y-3 text-swiss-text/85 leading-relaxed list-decimal list-inside">
                        {content.methodSteps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.whyChooseTitle}</h2>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                    {content.whyChooseItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function MaintenanceLayout({ serviceId, serviceTitle, content }: MaintenanceLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <h2 className="font-serif text-3xl text-swiss-navy mb-5">{content.essentialsTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {content.essentials.map((item) => (
                        <article key={item.title} className="rounded-xl border border-swiss-navy/10 bg-white p-6">
                            <h3 className="font-serif text-2xl text-swiss-navy mb-3">{item.title}</h3>
                            <p className="text-swiss-text/85 leading-relaxed">{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.agileTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.agileText}</p>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.sustainabilityTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.sustainabilityItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-red/30 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.correctiveTitle}</h2>
                <p className="text-swiss-text/85 leading-relaxed">{content.correctiveText}</p>
            </section>

            <section className="mb-12">
                <h2 className="font-serif text-3xl text-swiss-navy mb-5">{content.plansTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {content.plans.map((plan) => (
                        <article key={plan.name} className="rounded-xl border border-swiss-navy/10 bg-white p-6">
                            <h3 className="font-serif text-2xl text-swiss-navy mb-3">{plan.name}</h3>
                            <p className="text-swiss-text/85 leading-relaxed mb-4">{plan.details}</p>
                            <p className="text-xs font-semibold tracking-swiss uppercase text-swiss-red">{plan.response}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.closingTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.closingText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function SecureDisposalLayout({ serviceId, serviceTitle, content }: SecureLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {content.pillars.map((pillar) => (
                        <article key={pillar.title} className="rounded-xl border border-swiss-navy/10 bg-white p-6">
                            <h2 className="font-serif text-2xl text-swiss-navy mb-3">{pillar.title}</h2>
                            <p className="text-swiss-text/85 leading-relaxed">{pillar.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-5">{content.methodologyTitle}</h2>
                <ol className="space-y-3 text-swiss-text/85 leading-relaxed list-decimal list-inside">
                    {content.methodologySteps.map((step) => (
                        <li key={step}>{step}</li>
                    ))}
                </ol>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.trustTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.trustItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.impactTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.impactText}</p>
                </article>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function CorporateFacadeLayout({ serviceId, serviceTitle, content }: CorporateFacadeLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.impactTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.impactText}</p>
                </article>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.expertiseTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.expertiseText}</p>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.safetyTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.safetyItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.resultsTitle}</h2>
                <p className="text-swiss-text/85 leading-relaxed">{content.resultsText}</p>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function CorporateConciergeLayout({ serviceId, serviceTitle, content }: CorporateConciergeLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.whatIsTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.whatIsText}</p>
                </article>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.servicesTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.servicesItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.benefitsTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.benefitsItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.implementationTitle}</h2>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                    {content.implementationItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function CorporateRelocationLayout({ serviceId, serviceTitle, content }: CorporateRelocationLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.definitionTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.definitionText}</p>
                </article>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.pillarsTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.pillars.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.solutionsTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.solutionsItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.differentiatorsTitle}</h2>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                    {content.differentiatorsItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function CorporateTransportLayout({ serviceId, serviceTitle, content }: CorporateTransportLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.essenceTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.essenceText}</p>
                </article>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.expertiseTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.expertiseItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.technicalTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.technicalItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.benefitsTitle}</h2>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                    {content.benefitsItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function ShowroomAssemblyLayout({ serviceId, serviceTitle, content }: ShowroomLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.artTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.artText}</p>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-5">{content.processTitle}</h2>
                <ol className="space-y-3 text-swiss-text/85 leading-relaxed list-decimal list-inside">
                    {content.processSteps.map((step) => (
                        <li key={step}>{step}</li>
                    ))}
                </ol>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.segmentsTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.segmentsItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.benefitsTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.benefitsItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function CorporateFurnitureInstallLayout({ serviceId, serviceTitle, content }: CorporateFurnitureLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.importanceTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.importanceText}</p>
                </article>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.scopeTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.scopeItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.processTitle}</h2>
                    <ol className="space-y-3 text-swiss-text/85 leading-relaxed list-decimal list-inside">
                        {content.processSteps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.benefitsTitle}</h2>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                    {content.benefitsItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function ArtPackagingLayout({ serviceId, serviceTitle, content }: ArtPackagingLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">{content.eyebrow}</p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.importanceTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.importanceText}</p>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.risksTitle}</h2>
                <p className="text-swiss-text/85 leading-relaxed">{content.risksText}</p>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.materialsTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.materialsItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.processTitle}</h2>
                    <ol className="space-y-3 text-swiss-text/85 leading-relaxed list-decimal list-inside">
                        {content.processSteps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.benefitsTitle}</h2>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                    {content.benefitsItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function ArtSpecializedInstallationLayout({
    serviceId,
    serviceTitle,
    content,
}: ArtSpecializedInstallationLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">{content.eyebrow}</p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.importanceTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.importanceText}</p>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.furnitureTypesTitle}</h2>
                <p className="text-swiss-text/85 leading-relaxed mb-5">{content.furnitureTypesIntro}</p>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed mb-5">
                    {content.furnitureTypesItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
                <p className="text-swiss-text/85 leading-relaxed">{content.furnitureTypesOutro}</p>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.toolsTitle}</h2>
                <p className="text-swiss-text/85 leading-relaxed mb-5">{content.toolsIntro}</p>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed mb-5">
                    {content.toolsItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
                <p className="text-swiss-text/85 leading-relaxed">{content.toolsOutro}</p>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.processTitle}</h2>
                <ol className="space-y-3 text-swiss-text/85 leading-relaxed list-decimal list-inside">
                    {content.processSteps.map((step) => (
                        <li key={step}>{step}</li>
                    ))}
                </ol>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.benefitsTitle}</h2>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                    {content.benefitsItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function HospitalityExcellenceLayout({
    serviceId,
    serviceTitle,
    content,
}: HospitalityExcellenceLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.definitionTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.definitionText}</p>
                </article>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.pillarsTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.pillarsItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.transformingServicesTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.transformingServicesItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.guestBenefitsTitle}</h2>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                    {content.guestBenefitsItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function AtaCarnetManagementLayout({
    serviceId,
    serviceTitle,
    content,
}: AtaCarnetManagementLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.simplificationTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.simplificationText}</p>
                </article>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.coveredCategoriesTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.coveredCategoriesItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.cycleTitle}</h2>
                    <ol className="space-y-3 text-swiss-text/85 leading-relaxed list-decimal list-inside">
                        {content.cycleSteps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.strategicBenefitsTitle}</h2>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                    {content.strategicBenefitsItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function GoodsReceptionLayout({ serviceId, serviceTitle, content }: GoodsReceptionLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.operationalFoundationTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.operationalFoundationText}</p>
                </article>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.technicalStepsTitle}</h2>
                    <ol className="space-y-3 text-swiss-text/85 leading-relaxed list-decimal list-inside">
                        {content.technicalSteps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.qualityControlTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.qualityControlItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.strategicBenefitsTitle}</h2>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                    {content.strategicBenefitsItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function BondedWarehouseLayout({ serviceId, serviceTitle, content }: BondedWarehouseLayoutProps) {
    return (
        <>
            <section className="mb-12">
                <p className="text-swiss-red text-xs tracking-widest uppercase font-semibold mb-5">
                    {content.eyebrow}
                </p>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.strategicPowerTitle}</h2>
                    <p className="text-swiss-text/85 leading-relaxed">{content.strategicPowerText}</p>
                </article>
            </section>

            <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.mechanismsTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.mechanismsItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
                <article className="rounded-xl border border-swiss-navy/10 bg-white p-8">
                    <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.operationsTitle}</h2>
                    <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                        {content.operationsItems.map((item) => (
                            <li key={item}>- {item}</li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="mb-12 rounded-xl border border-swiss-navy/10 bg-white p-8">
                <h2 className="font-serif text-3xl text-swiss-navy mb-4">{content.strategicBenefitsTitle}</h2>
                <ul className="space-y-3 text-swiss-text/85 leading-relaxed">
                    {content.strategicBenefitsItems.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}
                </ul>
            </section>

            <section className="rounded-xl bg-swiss-navy text-white p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-4xl mb-3">{content.ctaTitle}</h2>
                <p className="text-white/85 leading-relaxed mb-7 max-w-3xl">{content.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white text-white transition-all duration-500 ease-out hover:bg-white hover:text-swiss-navy"
                    >
                        {content.ctaPrimaryLabel}
                    </Link>
                    <Link
                        href={`/services/${serviceId}`}
                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-white/40 text-white transition-all duration-500 ease-out hover:border-white"
                    >
                        {serviceTitle}
                    </Link>
                </div>
            </section>
        </>
    );
}

export function DefaultSubserviceActions({ serviceId, serviceTitle, learnMoreLabel }: DefaultActionsProps) {
    return (
        <div className="flex flex-wrap gap-4">
            <Link
                href={`/services/${serviceId}`}
                className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-swiss-navy text-swiss-navy transition-all duration-500 ease-out hover:bg-swiss-navy hover:text-white"
            >
                {serviceTitle}
            </Link>
            <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-swiss-red text-swiss-red transition-all duration-500 ease-out hover:bg-swiss-red hover:text-white"
            >
                {learnMoreLabel}
            </Link>
        </div>
    );
}
