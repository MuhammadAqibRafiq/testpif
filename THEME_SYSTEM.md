# MUI-Inspired Theming System for Next.js

A comprehensive design system built with Next.js and Tailwind CSS that provides MUI-like theming capabilities with dynamic light/dark mode switching.

## Features

- 🎨 **Dynamic Theming**: Light and dark mode with smooth transitions
- 🎯 **MUI-Inspired Design**: Consistent design tokens and component APIs
- 🎪 **Color System**: Complete color palette with semantic naming
- 📝 **Typography System**: MUI typography scale with proper hierarchy
- 🧩 **Component Library**: Reusable UI components with theme support
- 🔧 **TypeScript Support**: Full type safety and IntelliSense
- 💾 **Persistent Themes**: Theme preference saved to localStorage
- 🌐 **System Preference**: Respects user's system theme preference

## Quick Start

### 1. Theme Provider Setup

Wrap your app with the `ThemeProvider` in your root layout:

\`\`\`tsx
// app/layout.tsx
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
\`\`\`

### 2. Using the Theme Hook

Access theme functionality in any component:

\`\`\`tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { mode, toggleTheme, isDark } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {mode}
    </button>
  );
}
\`\`\`

## Design System

### Color System

The color system follows MUI's approach with semantic color names and consistent shades:

\`\`\`tsx
// Primary colors (50-900)
bg-primary-500    // Main primary color
bg-primary-100    // Light primary
bg-primary-900    // Dark primary

// Semantic colors
bg-success-500    // Success actions
bg-error-500      // Error states
bg-warning-500    // Warning messages
bg-info-500       // Information

// Text colors
text-text-primary        // Main text (light mode)
text-text-primary-dark   // Main text (dark mode)
text-text-secondary      // Secondary text
text-text-disabled       // Disabled text
\`\`\`

### Typography System

Use the `Typography` component with MUI-like variants:

\`\`\`tsx
import Typography from '@/components/ui/Typography';

// Headings
<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>

// Body text
<Typography variant="body1">Main body text</Typography>
<Typography variant="body2">Secondary body text</Typography>

// Special variants
<Typography variant="subtitle1">Subtitle 1</Typography>
<Typography variant="button">Button text</Typography>
<Typography variant="caption">Caption text</Typography>
<Typography variant="overline">Overline text</Typography>
\`\`\`

### Button Component

The `Button` component supports multiple variants and colors:

\`\`\`tsx
import Button from '@/components/ui/Button';

// Variants
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>

// Colors
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="info">Info</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// Full width
<Button fullWidth>Full Width</Button>
\`\`\`

## Component APIs

### ThemeProvider

\`\`\`tsx
interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: 'light' | 'dark';
}
\`\`\`

### useTheme Hook

\`\`\`tsx
interface ThemeContextType {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (mode: 'light' | 'dark') => void;
  isDark: boolean;
}
\`\`\`

### Typography Component

\`\`\`tsx
interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 
           'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 
           'button' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 
         'warning' | 'info' | 'textPrimary' | 'textSecondary' | 
         'textDisabled' | 'inherit';
  align?: 'left' | 'center' | 'right' | 'justify';
  gutterBottom?: boolean;
  noWrap?: boolean;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}
\`\`\`

### Button Component

\`\`\`tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}
\`\`\`

## Customization

### Adding Custom Colors

Extend the color system in `tailwind.config.ts`:

\`\`\`ts
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        custom: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... add more shades
          900: '#0c4a6e',
        },
      },
    },
  },
};
\`\`\`

### Custom Typography Variants

Add new typography variants:

\`\`\`ts
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      fontSize: {
        'custom': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      },
    },
  },
};
\`\`\`

### Custom Component Variants

Extend component variants by modifying the component files:

\`\`\`tsx
// Example: Adding a new button variant
const getColorClasses = () => {
  const colorMap = {
    // ... existing colors
    custom: {
      contained: 'bg-custom-500 hover:bg-custom-600 text-white',
      outlined: 'border border-custom-500 text-custom-500',
      text: 'text-custom-500 hover:bg-custom-50',
    },
  };
  return colorMap[color][variant];
};
\`\`\`

## Best Practices

### 1. Consistent Color Usage

- Use semantic color names (`primary`, `success`, `error`) instead of specific shades
- Leverage the color system's built-in dark mode support
- Maintain color contrast ratios for accessibility

### 2. Typography Hierarchy

- Use appropriate heading levels (h1-h6) for document structure
- Reserve `body1` for main content and `body2` for secondary content
- Use `subtitle1` and `subtitle2` for section headers

### 3. Component Composition

- Combine components to create complex UI patterns
- Use the `as` prop in Typography to change semantic meaning
- Leverage the theme context for conditional styling

### 4. Dark Mode Considerations

- Test all components in both light and dark modes
- Ensure sufficient contrast ratios
- Use semantic color names that adapt automatically

## File Structure

\`\`\`
src/
├── contexts/
│   └── ThemeContext.tsx          # Theme provider and hook
├── components/
│   ├── ui/
│   │   ├── Button.tsx            # Button component
│   │   ├── Typography.tsx        # Typography component
│   │   └── ThemeToggle.tsx       # Theme toggle component
│   └── Navbar/
│       └── Navbar.tsx            # Navigation component
├── app/
│   ├── layout.tsx                # Root layout with ThemeProvider
│   └── page.tsx                  # Demo page
└── tailwind.config.ts            # Tailwind configuration
\`\`\`

## Migration Guide

### From CSS Modules

Replace CSS module classes with Tailwind classes:

\`\`\`tsx
// Before
<div className={styles.container}>

// After
<div className="bg-background-default dark:bg-background-dark">
\`\`\`

### From MUI

The API is designed to be familiar to MUI users:

\`\`\`tsx
// MUI
<Typography variant="h1" color="primary">

// This system
<Typography variant="h1" color="primary">
\`\`\`

## Troubleshooting

### Theme Not Persisting

Ensure the `ThemeProvider` is wrapping your entire app and localStorage is available.

### Colors Not Working

Check that your `tailwind.config.ts` includes the custom color definitions and that the content paths are correct.

### TypeScript Errors

Make sure all component imports use the correct paths and that TypeScript is properly configured.

## Contributing

When adding new components or features:

1. Follow the existing naming conventions
2. Include TypeScript interfaces
3. Add dark mode support
4. Update this documentation
5. Test in both light and dark modes

## License

This theming system is part of your Next.js project and follows the same license terms.
