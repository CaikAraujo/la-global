"use client";

import React, { useEffect } from 'react';
import { useRouter } from '@/navigation';

export default function ClientRedirect({ serviceId }: { serviceId: string }) {
    const router = useRouter();

    useEffect(() => {
        // Redirect the user immediately to the main services page,
        // specifically focused on this service's section.
        router.replace(`/services#${serviceId}`);
    }, [router, serviceId]);

    return (
        <div className="fixed inset-0 bg-swiss-surface z-[9999] flex flex-col items-center justify-center transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full border-2 border-swiss-navy/20 border-t-swiss-red animate-spin mb-4" />
            <p className="text-swiss-navy font-serif text-lg animate-pulse">Redirecionando...</p>
        </div>
    );
}
