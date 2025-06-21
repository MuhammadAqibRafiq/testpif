import type { Config } from 'tailwindcss'

const colors = ['primary', 'secondary', 'success', 'warning', 'error', 'info'];
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const safelist = colors.flatMap(color => shades.map(shade => `bg-${color}-${shade}`));

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-primary-50', 'bg-primary-100', 'bg-primary-200', 'bg-primary-300', 'bg-primary-400', 'bg-primary-500', 'bg-primary-600', 'bg-primary-700', 'bg-primary-800', 'bg-primary-900',
    'bg-secondary-50', 'bg-secondary-100', 'bg-secondary-200', 'bg-secondary-300', 'bg-secondary-400', 'bg-secondary-500', 'bg-secondary-600', 'bg-secondary-700', 'bg-secondary-800', 'bg-secondary-900',
    'bg-success-50', 'bg-success-100', 'bg-success-200', 'bg-success-300', 'bg-success-400', 'bg-success-500', 'bg-success-600', 'bg-success-700', 'bg-success-800', 'bg-success-900',
    'bg-warning-50', 'bg-warning-100', 'bg-warning-200', 'bg-warning-300', 'bg-warning-400', 'bg-warning-500', 'bg-warning-600', 'bg-warning-700', 'bg-warning-800', 'bg-warning-900',
    'bg-error-50', 'bg-error-100', 'bg-error-200', 'bg-error-300', 'bg-error-400', 'bg-error-500', 'bg-error-600', 'bg-error-700', 'bg-error-800', 'bg-error-900',
    'bg-info-50', 'bg-info-100', 'bg-info-200', 'bg-info-300', 'bg-info-400', 'bg-info-500', 'bg-info-600', 'bg-info-700', 'bg-info-800', 'bg-info-900',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Color System (MUI-like)
      colors: {
        // Primary Colors
        primary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3', // Main primary color
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        // Secondary Colors
        secondary: {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0', // Main secondary color
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
        },
        // Success Colors
        success: {
          50: '#e8f5e8',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50', // Main success color
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
        // Warning Colors
        warning: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107', // Main warning color
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
        },
        // Error Colors
        error: {
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#f44336', // Main error color
          600: '#e53935',
          700: '#d32f2f',
          800: '#c62828',
          900: '#b71c1c',
        },
        // Info Colors
        info: {
          50: '#e1f5fe',
          100: '#b3e5fc',
          200: '#81d4fa',
          300: '#4fc3f7',
          400: '#29b6f6',
          500: '#03a9f4', // Main info color
          600: '#039be5',
          700: '#0288d1',
          800: '#0277bd',
          900: '#01579b',
        },
        // Grey Colors (MUI-like)
        grey: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        // Background Colors
        background: {
          default: '#ffffff',
          paper: '#fafafa',
          dark: '#121212',
          'dark-paper': '#1e1e1e',
        },
        // Text Colors
        text: {
          primary: 'rgba(0, 0, 0, 0.87)',
          secondary: 'rgba(0, 0, 0, 0.6)',
          disabled: 'rgba(0, 0, 0, 0.38)',
          'primary-dark': 'rgba(255, 255, 255, 0.87)',
          'secondary-dark': 'rgba(255, 255, 255, 0.6)',
          'disabled-dark': 'rgba(255, 255, 255, 0.38)',
        },
      },
      // Typography System (MUI-like)
      // fontFamily: {
      //   sans: ['Roboto', 'system-ui', 'sans-serif'],
      //   mono: ['Roboto Mono', 'monospace'],
      // },
      fontSize: {
        // MUI Typography variants
        'h1': ['6rem', { lineHeight: '1.167', letterSpacing: '-0.01562em' }],
        'h2': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.00833em' }],
        'h3': ['3rem', { lineHeight: '1.167', letterSpacing: '0em' }],
        'h4': ['2.125rem', { lineHeight: '1.235', letterSpacing: '0.00735em' }],
        'h5': ['1.5rem', { lineHeight: '1.334', letterSpacing: '0em' }],
        'h6': ['1.25rem', { lineHeight: '1.6', letterSpacing: '0.0075em' }],
        'subtitle1': ['1rem', { lineHeight: '1.75', letterSpacing: '0.00938em' }],
        'subtitle2': ['0.875rem', { lineHeight: '1.57', letterSpacing: '0.00714em' }],
        'body1': ['1rem', { lineHeight: '1.5', letterSpacing: '0.00938em' }],
        'body2': ['0.875rem', { lineHeight: '1.43', letterSpacing: '0.01071em' }],
        'button': ['0.875rem', { lineHeight: '1.75', letterSpacing: '0.02857em', fontWeight: '500' }],
        'caption': ['0.75rem', { lineHeight: '1.66', letterSpacing: '0.03333em' }],
        'overline': ['0.75rem', { lineHeight: '2.66', letterSpacing: '0.08333em', fontWeight: '400' }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        'semi-bold': '600',
        bold: '700',
      },
      // Spacing System (MUI-like)
      spacing: {
        // MUI spacing units (8px base)
        'xs': '0.25rem',    // 4px
        'sm': '0.5rem',     // 8px
        'md': '1rem',       // 16px
        'lg': '1.5rem',     // 24px
        'xl': '2rem',       // 32px
        '2xl': '3rem',      // 48px
        '3xl': '4rem',      // 64px
        '4xl': '5rem',      // 80px
        '5xl': '6rem',      // 96px
      },
      // Border Radius System
      borderRadius: {
        'xs': '0.125rem',   // 2px
        'sm': '0.25rem',    // 4px
        'md': '0.375rem',   // 6px
        'lg': '0.5rem',     // 8px
        'xl': '0.75rem',    // 12px
        '2xl': '1rem',      // 16px
        'full': '9999px',
      },
      // Shadow System (MUI-like)
      boxShadow: {
        'xs': '0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.24)',
        'sm': '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.24)',
        'md': '0px 1px 8px 0px rgba(0, 0, 0, 0.12), 0px 3px 4px 0px rgba(0, 0, 0, 0.24)',
        'lg': '0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 4px 5px 0px rgba(0, 0, 0, 0.24)',
        'xl': '0px 1px 14px 0px rgba(0, 0, 0, 0.12), 0px 6px 10px 0px rgba(0, 0, 0, 0.24)',
        '2xl': '0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 8px 15px 0px rgba(0, 0, 0, 0.24)',
      },
      // Z-Index System
      zIndex: {
        'modal': 1300,
        'tooltip': 1500,
        'snackbar': 1400,
        'drawer': 1200,
        'app-bar': 1100,
        'fab': 1050,
      },
      // Animation System
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config 