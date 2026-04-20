import React from 'react';

const WHATSAPP_HREF = 'https://wa.me/41799103830';

export default function FloatingWhatsApp() {
    return (
        <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="fixed bottom-6 right-6 z-[60] h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        >
            <span className="sr-only">WhatsApp</span>
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 m-auto mt-[13px]"
                aria-hidden="true"
            >
                <path d="M20.52 3.48A11.89 11.89 0 0 0 12.06 0C5.5 0 .14 5.35.14 11.91c0 2.1.55 4.16 1.6 5.98L0 24l6.28-1.64a11.9 11.9 0 0 0 5.78 1.48h.01c6.56 0 11.91-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.44Zm-8.46 18.3h-.01a9.94 9.94 0 0 1-5.06-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.9 9.9 0 0 1-1.52-5.25c0-5.48 4.46-9.94 9.94-9.94 2.66 0 5.17 1.04 7.05 2.92a9.9 9.9 0 0 1 2.9 7.06c0 5.48-4.46 9.93-9.93 9.93Zm5.45-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z" />
            </svg>
        </a>
    );
}
