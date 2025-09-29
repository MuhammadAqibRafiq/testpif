'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeDebug: React.FC = () => {
  const { mode, isDark } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-grey-800 border border-grey-200 dark:border-grey-700 rounded-lg p-4 shadow-lg z-50">
      <div className="text-sm font-mono">
        <div>Mode: <span className="font-bold">{mode}</span></div>
        <div>isDark: <span className="font-bold">{isDark ? 'true' : 'false'}</span></div>
        <div>Class: <span className="font-bold">{isDark ? 'dark' : 'light'}</span></div>
      </div>
    </div>
  );
};

export default ThemeDebug;
