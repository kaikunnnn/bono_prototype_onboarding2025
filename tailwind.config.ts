import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Kaizen color palette
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
        },
        // Legacy colors for backward compatibility
        primary: '#000000',
        background: '#FFFFFF',
        text: '#000000',
        muted: '#4B5563',
        card: '#FFFFFF',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Kaizen typography scale
        'hero': ['96px', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['64px', { lineHeight: '1.2', fontWeight: '700' }],
        'card': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'component': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'body-hero': ['20px', { lineHeight: '1.6' }],
        'body-description': ['18px', { lineHeight: '1.6' }],
        'body-feature': ['16px', { lineHeight: '1.5' }],
      },
      spacing: {
        // Extended spacing system
        'space-1': '8px',
        'space-2': '16px',
        'space-3': '24px',
        'space-4': '32px',
        'space-5': '40px',
        'space-6': '48px',
        'space-8': '64px',
        'space-10': '80px',
        'space-12': '96px',
      },
      borderRadius: {
        'card': '8px',
        'button': '40px', // Kaizen style rounded buttons
      },
      maxWidth: {
        'hero': '1024px',
        'description': '512px',
        'content': '1280px',
      },
    },
  },
  plugins: [],
}

export default config