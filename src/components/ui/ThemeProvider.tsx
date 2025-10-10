"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'ocean' | 'sunset' | 'forest';

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
  light: {
    background: '#F8F9FA',
    backgroundSecondary: '#E9ECEF',
    backgroundTertiary: '#DEE2E6',
    foreground: '#212529',
    primary: '#6C757D',
    primaryLight: '#ADB5BD',
    primaryDark: '#495057',
    accent: '#20C997',
    accentLight: '#51CF66',
    accentDark: '#17A085',
    success: '#28A745',
    warning: '#FFC107',
    error: '#DC3545',
    silver: '#6C757D',
    silverLight: '#ADB5BD',
    silverDark: '#495057',
  },
  ocean: {
    background: '#003366',
    backgroundSecondary: '#004080',
    backgroundTertiary: '#0066CC',
    foreground: '#FFFFFF',
    primary: '#0066CC',
    primaryLight: '#4A90E2',
    primaryDark: '#003366',
    accent: '#20B2AA',
    accentLight: '#48D1CC',
    accentDark: '#008B8B',
    success: '#32CD32',
    warning: '#FFD700',
    error: '#FF6347',
    silver: '#B0C4DE',
    silverLight: '#E0FFFF',
    silverDark: '#708090',
  },
  sunset: {
    background: '#FF4500',
    backgroundSecondary: '#FF6347',
    backgroundTertiary: '#FFD700',
    foreground: '#FFFFFF',
    primary: '#FF4500',
    primaryLight: '#FF6347',
    primaryDark: '#B22222',
    accent: '#9370DB',
    accentLight: '#BA55D3',
    accentDark: '#663399',
    success: '#32CD32',
    warning: '#FFD700',
    error: '#DC143C',
    silver: '#F0E68C',
    silverLight: '#FFFACD',
    silverDark: '#DAA520',
  },
  forest: {
    background: '#228B22',
    backgroundSecondary: '#32CD32',
    backgroundTertiary: '#90EE90',
    foreground: '#FFFFFF',
    primary: '#228B22',
    primaryLight: '#32CD32',
    primaryDark: '#006400',
    accent: '#8B4513',
    accentLight: '#D2691E',
    accentDark: '#654321',
    success: '#32CD32',
    warning: '#F0E68C',
    error: '#DC143C',
    silver: '#F5DEB3',
    silverLight: '#FFF8DC',
    silverDark: '#DEB887',
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
  const [theme, setThemeState] = useState<Theme>('light');
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
      const themes: Theme[] = ['light', 'ocean', 'sunset', 'forest'];
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