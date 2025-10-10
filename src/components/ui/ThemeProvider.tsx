"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light-vibrant' | 'warm-professional' | 'modern-teal-coral';

interface ThemeColors {
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  foreground: string;
  primary: string;
  primaryLight: string;
  primaryDark: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  success: string;
  warning: string;
  error: string;
  silver: string;
  silverLight: string;
  silverDark: string;
}

const themeColors: Record<Theme, ThemeColors> = {
  'light-vibrant': {
    background: '#F8FAFC',
    backgroundSecondary: '#F1F5F9',
    backgroundTertiary: '#E2E8F0',
    foreground: '#1E293B',
    primary: '#FF6B35',
    primaryLight: '#FF8C66',
    primaryDark: '#E85A2B',
    accent: '#00B4D8',
    accentLight: '#33C7E6',
    accentDark: '#0096B8',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    silver: '#6B7280',
    silverLight: '#9CA3AF',
    silverDark: '#4B5563',
  },
  'warm-professional': {
    background: '#FEF9F3',
    backgroundSecondary: '#FDF4E6',
    backgroundTertiary: '#FCEBD3',
    foreground: '#2D1810',
    primary: '#E89F4C',
    primaryLight: '#F4B266',
    primaryDark: '#D4943F',
    accent: '#2F6F4E',
    accentLight: '#4A8B6B',
    accentDark: '#1F4A33',
    success: '#059669',
    warning: '#D97706',
    error: '#DC2626',
    silver: '#8B7355',
    silverLight: '#B8997A',
    silverDark: '#6B5B47',
  },
  'modern-teal-coral': {
    background: '#FCFBF9',
    backgroundSecondary: '#F7F6F3',
    backgroundTertiary: '#F0EDE4',
    foreground: '#2D3748',
    primary: '#FF7A59',
    primaryLight: '#FF9A7F',
    primaryDark: '#E86A4A',
    accent: '#0ABAB5',
    accentLight: '#3ACDC7',
    accentDark: '#08A19C',
    success: '#38B2AC',
    warning: '#ED8936',
    error: '#E53E3E',
    silver: '#718096',
    silverLight: '#A0AEC0',
    silverDark: '#4A5568',
  },
};

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleAutoRotate: () => void;
  isAutoRotating: boolean;
  themeColors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('warm-professional');
  const [isAutoRotating, setIsAutoRotating] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('softintel-theme') as Theme;
    if (savedTheme && Object.keys(themeColors).includes(savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('softintel-theme', newTheme);
    setIsAutoRotating(false);
  };

  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  useEffect(() => {
    if (isAutoRotating) {
      const themes: Theme[] = ['light-vibrant', 'warm-professional', 'modern-teal-coral'];
      const interval = setInterval(() => {
        setThemeState((currentTheme) => {
          const currentIndex = themes.indexOf(currentTheme);
          const nextIndex = (currentIndex + 1) % themes.length;
          const nextTheme = themes[nextIndex];
          localStorage.setItem('softintel-theme', nextTheme);
          return nextTheme;
        });
      }, 30000); // 30 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoRotating]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleAutoRotate,
    isAutoRotating,
    themeColors: themeColors[theme],
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};