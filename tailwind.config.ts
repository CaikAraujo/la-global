import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                swiss: {
                    navy: '#0F172A', // Primary
                    red: '#A6192E',  // Accent
                    surface: '#F8FAFC', // Background
                    text: '#334155', // Body Text
                    dark: '#1A1A1A', // Headings
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            letterSpacing: {
                'swiss': '0.15em', // For uppercase labels
            }
        },
    },
    plugins: [],
};
export default config;
