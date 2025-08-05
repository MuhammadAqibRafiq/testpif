'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  className = '',
  ...props
}) => {
  const { isDark } = useTheme();

  // Base classes
  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-medium rounded-full',
    'transition-all duration-200',
    'focus:outline-none',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ];

  // Size classes
  const sizeClasses = {
    small: 'px-[20px] py-[8px] text-[14px] font-medium h-[36px]',
    medium: 'px-[32px] py-[16px] text-base font-semibold h-[56px]',
    large: 'px-[48px] py-[24px] text-lg font-medium',
  };

  // Color classes for different variants
  const getColorClasses = () => {
    const colorMap = {
      primary: {
        contained: 'btn-primary-contained',
        outlined: 'border border-primary-50 text-primary-50 hover:text-primary-10 hover:bg-primary-50 dark:hover:bg-primary-900/20',
        text: 'text-primary-50 hover:bg-primary-10 dark:hover:bg-primary-900/20',
      },
      secondary: {
        contained: 'bg-secondary-500 hover:bg-secondary-600 text-white',
        outlined: 'border border-secondary-500 text-secondary-500 hover:bg-secondary-50 dark:hover:bg-secondary-900/20',
        text: 'text-secondary-500 hover:bg-secondary-50 dark:hover:bg-secondary-900/20',
      },
      success: {
        contained: 'bg-success-500 hover:bg-success-600 text-white',
        outlined: 'border border-success-500 text-success-500 hover:bg-success-50 dark:hover:bg-success-900/20',
        text: 'text-success-500 hover:bg-success-50 dark:hover:bg-success-900/20',
      },
      error: {
        contained: 'bg-error-500 hover:bg-error-600 text-white',
        outlined: 'border border-error-500 text-error-500 hover:bg-error-50 dark:hover:bg-error-900/20',
        text: 'text-error-500 hover:bg-error-50 dark:hover:bg-error-900/20',
      },
      warning: {
        contained: 'bg-warning-500 hover:bg-warning-600 text-white',
        outlined: 'border border-warning-500 text-warning-500 hover:bg-warning-50 dark:hover:bg-warning-900/20',
        text: 'text-warning-500 hover:bg-warning-50 dark:hover:bg-warning-900/20',
      },
      info: {
        contained: 'bg-info-500 hover:bg-info-600 text-white',
        outlined: 'border border-info-500 text-info-500 hover:bg-info-50 dark:hover:bg-info-900/20',
        text: 'text-info-500 hover:bg-info-50 dark:hover:bg-info-900/20',
      },
    };

    return colorMap[color][variant];
  };

  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';

  // Combine all classes
  const combinedClasses = [
    ...baseClasses,
    sizeClasses[size],
    getColorClasses(),
    widthClasses,
    className,
  ].join(' ');

  return (
    <button
      className={combinedClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button; 