import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-primary-50', 'bg-primary-100', 'bg-primary-200', 'bg-primary-300', 'bg-primary-400', 'bg-primary-500', 'bg-primary-600', 'bg-primary-700', 'bg-primary-800', 'bg-primary-900',
    'bg-secondary-50', 'bg-secondary-100', 'bg-secondary-200', 'bg-secondary-300', 'bg-secondary-400', 'bg-secondary-500', 'bg-secondary-600', 'bg-secondary-700', 'bg-secondary-800', 'bg-secondary-900',
    'bg-success-50', 'bg-success-100', 'bg-success-200', 'bg-success-300', 'bg-success-400', 'bg-success-500', 'bg-success-600', 'bg-success-700', 'bg-success-800', 'bg-success-900',
    'bg-warning-50', 'bg-warning-100', 'bg-warning-200', 'bg-warning-300', 'bg-warning-400', 'bg-warning-500', 'bg-warning-600', 'bg-warning-700', 'bg-warning-800', 'bg-warning-900',
    'bg-error-50', 'bg-error-100', 'bg-error-200', 'bg-error-300', 'bg-error-400', 'bg-error-500', 'bg-error-600', 'bg-error-700', 'bg-error-800', 'bg-error-900',
    'bg-info-50', 'bg-info-100', 'bg-info-200', 'bg-info-300', 'bg-info-400', 'bg-info-500', 'bg-info-600', 'bg-info-700', 'bg-info-800', 'bg-info-900',
    'bg-grey-50', 'bg-grey-100', 'bg-grey-200', 'bg-grey-300', 'bg-grey-400', 'bg-grey-500', 'bg-grey-600', 'bg-grey-700', 'bg-grey-800', 'bg-grey-900',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        // 'h1': ['var(--font-size-h1)', { lineHeight: '1.1' }],
        // 'h2': ['var(--font-size-h2)', { lineHeight: '1.1' }],
        // 'h3': ['var(--font-size-h3)', { lineHeight: '1.1' }],
        // 'h4': ['var(--font-size-h4)', { lineHeight: '1.1' }],
        // 'h5': ['var(--font-size-h5)', { lineHeight: '1.1' }],
        // 'h6': ['var(--font-size-h6)', { lineHeight: '1.1' }],
        // 'subtitle1': ['var(--font-size-subtitle1)', { lineHeight: '1.2' }],
        // 'subtitle2': ['var(--font-size-subtitle2)', { lineHeight: '1.2' }],
        // 'body1': ['var(--font-size-body1)', { lineHeight: '1.5' }],
        // 'body2': ['var(--font-size-body2)', { lineHeight: '1.5' }],
        // 'button': ['var(--font-size-button)', { lineHeight: '1.5' }],
        // 'caption': ['var(--font-size-caption)', { lineHeight: '1.5' }],
        // 'overline': ['var(--font-size-overline)', { lineHeight: '1.5' }],
      },
      fontFamily: {
        sans: ['Work Sans', 'Arial', 'Helvetica', 'sans-serif'],
      },
    }
  },
  plugins: [],
} as any;

export default config
