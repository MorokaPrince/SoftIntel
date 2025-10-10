
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
