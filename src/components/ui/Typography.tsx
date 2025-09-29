'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'displayLarge' | 'displayMedium' | 'displayMediumItalic' | 'bodyXLargeSB' | 'bodyXLargeM' | 'bodyXLargeR' | 'bodyLargeSB' | 'bodyLargeM' | 'bodyLargeR' | 'bodyMediumSB' | 'bodyMediumM' | 'bodyMediumR' | 'bodySmallSB' | 'bodySmallM' | 'bodySmallR' | 'bodyXSmallSB' | 'bodyXSmallM' | 'bodyXSmallR' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'textPrimary' | 'textSecondary' | 'textDisabled' | 'inherit';
  align?: string | { [breakpoint: string]: 'left' | 'center' | 'right' | 'justify' };
  gutterBottom?: boolean;
  noWrap?: boolean;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'bodyXLargeSB',
  color = 'textPrimary',
  align = 'left',
  gutterBottom = false,
  noWrap = false,
  children,
  className = '',
  as,
  ...props
}) => {
  const { isDark } = useTheme();

  // Get the appropriate HTML element based on variant
  const getElement = (): React.ElementType => {
    if (as) return as;
    
    const elementMap: Record<string, React.ElementType> = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      displayLarge:'p',
      displayMedium:'p',
      displayMediumItalic:'p',
      bodyXLargeSB: 'p',
      bodyXLargeM: 'p',
      bodyXLargeR: 'p',
      bodyLargeSB: 'p',
      bodyLargeM: 'p',
      bodyLargeR: 'p',
      bodyMediumSB: 'p',
      bodyMediumM: 'p',
      bodyMediumR: 'p',
      bodySmallSB: 'p',
      bodySmallM: 'p',
      bodySmallR: 'p',
      bodyXSmallSB: 'p',
      bodyXSmallM: 'p',
      bodyXSmallR: 'p',
      subtitle1: 'h6',
      subtitle2: 'h6',
      body1: 'p',
      body2: 'p',
      button: 'span',
      caption: 'span',
      overline: 'span',
    };
    
    return elementMap[variant];
  };

  // Base classes
  const baseClasses = [
    'font-sans',
    'transition-colors duration-200',
  ];

  // Variant classes (using MUI typography scale)
  const variantClasses = {
    h1: 'text-h1 font-bold',
    h2: 'text-h2 font-bold',
    h3: 'text-h3 font-bold',
    h4: 'text-h4 font-bold',
    h5: 'text-h5 font-bold',
    h6: 'text-h6 font-bold',
    displayLarge: 'text-displayLarge font-bold',
    displayMedium:'text-displayMedium font-bold',
    displayMediumItalic:'text-displayMedium font-normal italic',
    bodyXLargeSB: 'text-bodyXLarge font-semibold',
    bodyXLargeM: 'text-bodyXLarge font-medium',    
    bodyXLargeR: 'text-bodyXLarge font-regular',    
    bodyLargeSB: 'text-bodyLarge font-semibold',
    bodyLargeM: 'text-bodyLarge font-medium',    
    bodyLargeR: 'text-bodyLarge font-regular',    
    bodyMediumSB: 'text-bodyMedium font-semibold',
    bodyMediumM: 'text-bodyMedium font-medium',    
    bodyMediumR: 'text-bodyMedium font-regular',   
    bodySmallSB: 'text-bodySmall font-semibold',
    bodySmallM: 'text-bodySmall font-medium',    
    bodySmallR: 'text-bodySmall font-regular',   
    bodyXSmallSB: 'text-bodyXSmall font-semibold',
    bodyXSmallM: 'text-bodyXSmall font-medium',    
    bodyXSmallR: 'text-bodyXSmall font-regular',   
    subtitle1: 'text-base font-normal',
    subtitle2: 'text-sm font-normal',
    body1: 'text-base font-normal',
    body2: 'text-sm font-normal',
    button: 'text-sm font-medium',
    caption: 'text-xs font-normal',
    overline: 'text-xs font-normal uppercase',
  };

  // Color classes
  const getColorClasses = () => {
    const colorMap = {
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
      success: 'text-success-500',
      error: 'text-error-500',
      warning: 'text-warning-500',
      info: 'text-info-500',
      textPrimary: 'text-[var(--text-primary)]',
      textSecondary: 'text-[var(--text-secondary)]',
      textDisabled: 'text-[var(--text-disabled)]',
      inherit: 'text-inherit',
    };
    
    return colorMap[color];
  };

  // Alignment classes
  // const alignClasses = {
  //   left: 'text-left',
  //   center: 'text-center',
  //   right: 'text-right',
  //   justify: 'text-justify',
  // };

  // Additional classes
  const additionalClasses = [
    gutterBottom ? 'mb-2' : '',
    noWrap ? 'whitespace-nowrap overflow-hidden text-ellipsis' : '',
  ];

  // Combine all classes
  const combinedClasses = [
    ...baseClasses,
    variantClasses[variant],
    getColorClasses(),
    // alignClasses[align],
    ...additionalClasses,
    className,
  ].filter(Boolean).join(' ');

  const Element = getElement();

  return React.createElement(Element, { className: combinedClasses, ...props }, children);
};

export default Typography;
