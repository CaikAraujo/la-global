import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
    artCollectionVehicleTransportContentByLocale,
    artCustomsFormalitiesContentByLocale,
    privateAdminConciergeContentByLocale,
    privateFurnitureRelocationTransportContentByLocale,
    privateArtAntiquesManagementContentByLocale,
    privateHauteCouturePackagingContentByLocale,
    artPackagingContentByLocale,
    artSpecializedInstallationContentByLocale,
    ataCarnetManagementContentByLocale,
    bondedWarehouseContentByLocale,
    corporateFurnitureInstallContentByLocale,
    corporateConciergeContentByLocale,
    corporateFacadeContentByLocale,
    corporateRelocationContentByLocale,
    corporateTransportContentByLocale,
    deliveryLogisticsContentByLocale,
    officeCleaningContentByLocale,
    officeMaintenanceContentByLocale,
    officeSuppliesManagementContentByLocale,
    storageLabelingContentByLocale,
    secureDisposalContentByLocale,
    goodsReceptionContentByLocale,
    hospitalityExcellenceContentByLocale,
    showroomAssemblyContentByLocale,
} from './content';
import {
    ArtPackagingLayout,
    ArtSpecializedInstallationLayout,
    AtaCarnetManagementLayout,
    BondedWarehouseLayout,
    CleaningLayout,
    CorporateConciergeLayout,
    CorporateFacadeLayout,
    CorporateFurnitureInstallLayout,
    CorporateRelocationLayout,
    CorporateTransportLayout,
    DefaultSubserviceActions,
    GoodsReceptionLayout,
    HospitalityExcellenceLayout,
    MaintenanceLayout,
    SecureDisposalLayout,
    ShowroomAssemblyLayout,
} from './SubserviceLayouts';

const serviceKeys = ['cleaning', 'corporate', 'events', 'storage', 'art', 'private'] as const;

const featureKeysMap: Record<string, string[]> = {
    corporate: ['f1', 'f2', 'f3', 'f4'],
    private: ['f1', 'f2', 'f3', 'f4'],
    art: ['f1', 'f2', 'f3', 'f4'],
    cleaning: ['f1', 'f2', 'f3', 'f4'],
    storage: ['f1', 'f2', 'f3', 'f4'],
    events: ['f1', 'f2', 'f3', 'f4'],
};

const serviceImages: Record<string, string> = {
    corporate: '/images/corporate-service.jpg',
    private: '/images/private-service.jpg',
    art: '/images/art-service.jpg',
    cleaning: '/images/cleaning-service.jpg',
    storage: '/images/secure-storage.png',
    events: '/images/event-logistics.png',
};

const subserviceImages: Record<string, string> = {
    'corporate/f1':
        '/images/imagens-la-global/optimized/relocalisation-d-enterprise/nettoyage-de-vitres-et-facades-en-hauteur.webp',
    'corporate/f2':
        '/images/imagens-la-global/optimized/relocalisation-d-enterprise/conciergerie-d-entreprise.webp',
    'corporate/f3':
        '/images/imagens-la-global/optimized/relocalisation-d-enterprise/coordination-de-demenagement.webp',
    'corporate/f4':
        '/images/imagens-la-global/optimized/relocalisation-d-enterprise/transport-specialise.webp',
    'cleaning/f1':
        '/images/imagens-la-global/optimized/seervice-de-bureau/nettoyage-et-organisation-professionnels.webp',
    'cleaning/f2':
        '/images/imagens-la-global/optimized/seervice-de-bureau/maintenance-et-ajustements-de-bureaux.webp',
    'cleaning/f3':
        '/images/imagens-la-global/optimized/seervice-de-bureau/destruction-confidentielle-et-recyclage.webp',
    'cleaning/f4':
        '/images/imagens-la-global/optimized/seervice-de-bureau/corporate-concierge-service.webp',
    'events/f1': '/images/imagens-la-global/optimized/montage-de-stands/montage-de-showrooms.webp',
    'events/f2':
        '/images/imagens-la-global/optimized/montage-de-stands/montage-et-installation-de-mobilier-corporate.webp',
    'events/f3': '/images/imagens-la-global/optimized/montage-de-stands/hotellerie-d-excellence.webp',
    'events/f4': '/images/imagens-la-global/optimized/montage-de-stands/gestion-de-carnet-ata.webp',
    'storage/f1': '/images/imagens-la-global/optimized/stockage-logistique/reception-de-marchandises.webp',
    'storage/f2': '/images/imagens-la-global/optimized/stockage-logistique/entrepot-douanier-exoneration-fiscale.webp',
    'storage/f3':
        '/images/imagens-la-global/optimized/stockage-logistique/livraison-et-logistique-des-marchandises.webp',
    'storage/f4':
        '/images/imagens-la-global/optimized/stockage-logistique/stockage-et-preparation-d-etiquetage.webp',
    'art/f1': '/images/imagens-la-global/optimized/beaux-arts-antiquites/emballage-et-protection.webp',
    'art/f2': '/images/imagens-la-global/optimized/beaux-arts-antiquites/formalites-douanieres.webp',
    'art/f3': '/images/imagens-la-global/optimized/beaux-arts-antiquites/installation-specialisee.webp',
    'art/f4':
        '/images/imagens-la-global/optimized/beaux-arts-antiquites/transport-de-vehicules-de-collection.webp',
    'private/f1':
        '/images/imagens-la-global/optimized/logistique-de-residence-privee/emballage-haute-couture.webp',
    'private/f2':
        '/images/imagens-la-global/optimized/logistique-de-residence-privee/gestion-d-uvres-d-art-et-d-antiquites.webp',
    'private/f3':
        '/images/imagens-la-global/optimized/logistique-de-residence-privee/services-administratifs-et-conciergerie.webp',
    'private/f4':
        '/images/imagens-la-global/optimized/logistique-de-residence-privee/replacement-et-transport-de-mobilier.webp',
};

type Props = {
    params: Promise<{ locale: string; serviceId: string; subserviceId: string }>;
};

export function generateStaticParams() {
    return serviceKeys.flatMap((serviceId) =>
        (featureKeysMap[serviceId] || []).map((subserviceId) => ({ serviceId, subserviceId }))
    );
}

export default async function SubservicePage({ params }: Props) {
    const { locale, serviceId, subserviceId } = await params;

    if (!serviceKeys.includes(serviceId as (typeof serviceKeys)[number])) {
        notFound();
    }

    if (!(featureKeysMap[serviceId] || []).includes(subserviceId)) {
        notFound();
    }

    setRequestLocale(locale);

    const tSection = await getTranslations({ locale, namespace: 'ServicesSection' });
    const tPage = await getTranslations({ locale, namespace: 'ServicesPage' });

    const serviceTitle = tSection(`items.${serviceId}.title`);
    const serviceSubtitle = tSection(`items.${serviceId}.subtitle`);
    const subserviceTitle = tPage(`items.${serviceId}.features.${subserviceId}.name`);
    const subserviceDescription = tPage(`items.${serviceId}.features.${subserviceId}.desc`);
    const isCorporateFacadePage = serviceId === 'corporate' && subserviceId === 'f1';
    const isCorporateConciergePage = serviceId === 'corporate' && subserviceId === 'f2';
    const isCorporateRelocationPage = serviceId === 'corporate' && subserviceId === 'f3';
    const isCorporateTransportPage = serviceId === 'corporate' && subserviceId === 'f4';
    const isCleaningPage = serviceId === 'cleaning' && subserviceId === 'f1';
    const isMaintenancePage = serviceId === 'cleaning' && subserviceId === 'f2';
    const isSecureDisposalPage = serviceId === 'cleaning' && subserviceId === 'f3';
    const isSuppliesManagementPage = serviceId === 'cleaning' && subserviceId === 'f4';
    const isShowroomAssemblyPage = serviceId === 'events' && subserviceId === 'f1';
    const isCorporateFurnitureInstallPage = serviceId === 'events' && subserviceId === 'f2';
    const isHospitalityExcellencePage = serviceId === 'events' && subserviceId === 'f3';
    const isAtaCarnetManagementPage = serviceId === 'events' && subserviceId === 'f4';
    const isGoodsReceptionPage = serviceId === 'storage' && subserviceId === 'f1';
    const isBondedWarehousePage = serviceId === 'storage' && subserviceId === 'f2';
    const isDeliveryLogisticsPage = serviceId === 'storage' && subserviceId === 'f3';
    const isStorageLabelingPage = serviceId === 'storage' && subserviceId === 'f4';
    const isPrivateHauteCouturePackagingPage = serviceId === 'private' && subserviceId === 'f1';
    const isPrivateArtAntiquesManagementPage = serviceId === 'private' && subserviceId === 'f2';
    const isPrivateAdminConciergePage = serviceId === 'private' && subserviceId === 'f3';
    const isPrivateFurnitureRelocationTransportPage = serviceId === 'private' && subserviceId === 'f4';
    const isArtPackagingPage = serviceId === 'art' && subserviceId === 'f1';
    const isArtCustomsFormalitiesPage = serviceId === 'art' && subserviceId === 'f2';
    const isArtSpecializedInstallationPage = serviceId === 'art' && subserviceId === 'f3';
    const isArtCollectionVehicleTransportPage = serviceId === 'art' && subserviceId === 'f4';
    const corporateConciergeContent =
        corporateConciergeContentByLocale[locale] || corporateConciergeContentByLocale.en;
    const corporateContent = corporateFacadeContentByLocale[locale] || corporateFacadeContentByLocale.en;
    const corporateRelocationContent =
        corporateRelocationContentByLocale[locale] || corporateRelocationContentByLocale.en;
    const corporateTransportContent =
        corporateTransportContentByLocale[locale] || corporateTransportContentByLocale.en;
    const cleaningContent = officeCleaningContentByLocale[locale] || officeCleaningContentByLocale.en;
    const maintenanceContent = officeMaintenanceContentByLocale[locale] || officeMaintenanceContentByLocale.en;
    const suppliesManagementContent =
        officeSuppliesManagementContentByLocale[locale] || officeSuppliesManagementContentByLocale.en;
    const secureContent = secureDisposalContentByLocale[locale] || secureDisposalContentByLocale.en;
    const showroomAssemblyContent = showroomAssemblyContentByLocale[locale] || showroomAssemblyContentByLocale.en;
    const corporateFurnitureInstallContent =
        corporateFurnitureInstallContentByLocale[locale] || corporateFurnitureInstallContentByLocale.en;
    const hospitalityExcellenceContent =
        hospitalityExcellenceContentByLocale[locale] || hospitalityExcellenceContentByLocale.en;
    const ataCarnetManagementContent =
        ataCarnetManagementContentByLocale[locale] || ataCarnetManagementContentByLocale.en;
    const goodsReceptionContent = goodsReceptionContentByLocale[locale] || goodsReceptionContentByLocale.en;
    const bondedWarehouseContent = bondedWarehouseContentByLocale[locale] || bondedWarehouseContentByLocale.en;
    const deliveryLogisticsContent =
        deliveryLogisticsContentByLocale[locale] || deliveryLogisticsContentByLocale.en;
    const storageLabelingContent =
        storageLabelingContentByLocale[locale] || storageLabelingContentByLocale.en;
    const artPackagingContent = artPackagingContentByLocale[locale] || artPackagingContentByLocale.en;
    const artCustomsFormalitiesContent =
        artCustomsFormalitiesContentByLocale[locale] || artCustomsFormalitiesContentByLocale.en;
    const artSpecializedInstallationContent =
        artSpecializedInstallationContentByLocale[locale] || artSpecializedInstallationContentByLocale.en;
    const artCollectionVehicleTransportContent =
        artCollectionVehicleTransportContentByLocale[locale] || artCollectionVehicleTransportContentByLocale.en;
    const privateHauteCouturePackagingContent =
        privateHauteCouturePackagingContentByLocale[locale] || privateHauteCouturePackagingContentByLocale.en;
    const privateArtAntiquesManagementContent =
        privateArtAntiquesManagementContentByLocale[locale] || privateArtAntiquesManagementContentByLocale.en;
    const privateAdminConciergeContent =
        privateAdminConciergeContentByLocale[locale] || privateAdminConciergeContentByLocale.en;
    const privateFurnitureRelocationTransportContent =
        privateFurnitureRelocationTransportContentByLocale[locale] ||
        privateFurnitureRelocationTransportContentByLocale.en;

    return (
        <div className="bg-swiss-surface min-h-screen pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-10">
                    <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-4 block">
                        {serviceSubtitle}
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl text-swiss-navy mb-4">{subserviceTitle}</h1>
                    <p className="text-swiss-text/80 font-light text-lg leading-relaxed max-w-3xl">
                        {isCorporateFacadePage
                            ? corporateContent.hero
                            : isCorporateConciergePage
                            ? corporateConciergeContent.hero
                            : isCorporateRelocationPage
                            ? corporateRelocationContent.hero
                            : isCorporateTransportPage
                            ? corporateTransportContent.hero
                            : isCleaningPage
                            ? cleaningContent.hero
                            : isMaintenancePage
                            ? maintenanceContent.hero
                            : isSecureDisposalPage
                              ? secureContent.hero
                            : isSuppliesManagementPage
                            ? suppliesManagementContent.hero
                            : isShowroomAssemblyPage
                            ? showroomAssemblyContent.hero
                            : isCorporateFurnitureInstallPage
                            ? corporateFurnitureInstallContent.hero
                            : isHospitalityExcellencePage
                            ? hospitalityExcellenceContent.hero
                            : isAtaCarnetManagementPage
                            ? ataCarnetManagementContent.hero
                            : isGoodsReceptionPage
                            ? goodsReceptionContent.hero
                            : isBondedWarehousePage
                            ? bondedWarehouseContent.hero
                            : isDeliveryLogisticsPage
                            ? deliveryLogisticsContent.hero
                            : isStorageLabelingPage
                            ? storageLabelingContent.hero
                            : isPrivateFurnitureRelocationTransportPage
                              ? privateFurnitureRelocationTransportContent.hero
                            : isPrivateAdminConciergePage
                              ? privateAdminConciergeContent.hero
                            : isPrivateArtAntiquesManagementPage
                              ? privateArtAntiquesManagementContent.hero
                            : isPrivateHauteCouturePackagingPage
                              ? privateHauteCouturePackagingContent.hero
                            : isArtCollectionVehicleTransportPage
                              ? artCollectionVehicleTransportContent.hero
                            : isArtSpecializedInstallationPage
                              ? artSpecializedInstallationContent.hero
                            : isArtPackagingPage
                              ? artPackagingContent.hero
                            : isArtCustomsFormalitiesPage
                              ? artCustomsFormalitiesContent.hero
                            : subserviceDescription}
                    </p>
                </div>

                <div className="w-full aspect-[21/9] overflow-hidden relative mb-12 rounded-xl">
                    <Image
                        src={subserviceImages[`${serviceId}/${subserviceId}`] || serviceImages[serviceId]}
                        alt={subserviceTitle}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        priority
                    />
                </div>

                {isCorporateFacadePage ? (
                    <CorporateFacadeLayout serviceId={serviceId} serviceTitle={serviceTitle} content={corporateContent} />
                ) : isCorporateConciergePage ? (
                    <CorporateConciergeLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={corporateConciergeContent}
                    />
                ) : isCorporateRelocationPage ? (
                    <CorporateRelocationLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={corporateRelocationContent}
                    />
                ) : isCorporateTransportPage ? (
                    <CorporateTransportLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={corporateTransportContent}
                    />
                ) : isCleaningPage ? (
                    <CleaningLayout serviceId={serviceId} serviceTitle={serviceTitle} content={cleaningContent} />
                ) : isMaintenancePage ? (
                    <MaintenanceLayout serviceId={serviceId} serviceTitle={serviceTitle} content={maintenanceContent} />
                ) : isSecureDisposalPage ? (
                    <SecureDisposalLayout serviceId={serviceId} serviceTitle={serviceTitle} content={secureContent} />
                ) : isSuppliesManagementPage ? (
                    <MaintenanceLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={suppliesManagementContent}
                    />
                ) : isShowroomAssemblyPage ? (
                    <ShowroomAssemblyLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={showroomAssemblyContent}
                    />
                ) : isCorporateFurnitureInstallPage ? (
                    <CorporateFurnitureInstallLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={corporateFurnitureInstallContent}
                    />
                ) : isHospitalityExcellencePage ? (
                    <HospitalityExcellenceLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={hospitalityExcellenceContent}
                    />
                ) : isAtaCarnetManagementPage ? (
                    <AtaCarnetManagementLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={ataCarnetManagementContent}
                    />
                ) : isGoodsReceptionPage ? (
                    <GoodsReceptionLayout serviceId={serviceId} serviceTitle={serviceTitle} content={goodsReceptionContent} />
                ) : isBondedWarehousePage ? (
                    <BondedWarehouseLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={bondedWarehouseContent}
                    />
                ) : isDeliveryLogisticsPage ? (
                    <MaintenanceLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={deliveryLogisticsContent}
                    />
                ) : isStorageLabelingPage ? (
                    <MaintenanceLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={storageLabelingContent}
                    />
                ) : isPrivateFurnitureRelocationTransportPage ? (
                    <ArtPackagingLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={privateFurnitureRelocationTransportContent}
                    />
                ) : isPrivateAdminConciergePage ? (
                    <ArtPackagingLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={privateAdminConciergeContent}
                    />
                ) : isPrivateArtAntiquesManagementPage ? (
                    <ArtPackagingLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={privateArtAntiquesManagementContent}
                    />
                ) : isPrivateHauteCouturePackagingPage ? (
                    <ArtPackagingLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={privateHauteCouturePackagingContent}
                    />
                ) : isArtCollectionVehicleTransportPage ? (
                    <ArtPackagingLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={artCollectionVehicleTransportContent}
                    />
                ) : isArtSpecializedInstallationPage ? (
                    <ArtSpecializedInstallationLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={artSpecializedInstallationContent}
                    />
                ) : isArtCustomsFormalitiesPage ? (
                    <ArtPackagingLayout
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        content={artCustomsFormalitiesContent}
                    />
                ) : isArtPackagingPage ? (
                    <ArtPackagingLayout serviceId={serviceId} serviceTitle={serviceTitle} content={artPackagingContent} />
                ) : (
                    <DefaultSubserviceActions
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        learnMoreLabel={tPage('learnMore')}
                    />
                )}
            </div>
        </div>
    );
}
