"use client";

import { useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export const ThemeScript = () => {
  const { themeColors } = useTheme();

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--theme-background', themeColors.background);
    root.style.setProperty('--theme-background-secondary', themeColors.backgroundSecondary);
    root.style.setProperty('--theme-background-tertiary', themeColors.backgroundTertiary);
    root.style.setProperty('--theme-foreground', themeColors.foreground);
    root.style.setProperty('--theme-primary', themeColors.primary);
    root.style.setProperty('--theme-primary-light', themeColors.primaryLight);
    root.style.setProperty('--theme-primary-dark', themeColors.primaryDark);
    root.style.setProperty('--theme-accent', themeColors.accent);
    root.style.setProperty('--theme-accent-light', themeColors.accentLight);
    root.style.setProperty('--theme-accent-dark', themeColors.accentDark);
    root.style.setProperty('--theme-success', themeColors.success);
    root.style.setProperty('--theme-warning', themeColors.warning);
    root.style.setProperty('--theme-error', themeColors.error);
    root.style.setProperty('--theme-silver', themeColors.silver);
    root.style.setProperty('--theme-silver-light', themeColors.silverLight);
    root.style.setProperty('--theme-silver-dark', themeColors.silverDark);
  }, [themeColors]);

  return null;
};