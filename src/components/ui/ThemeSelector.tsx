"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Play, Pause } from 'lucide-react';
import { useTheme, Theme } from './ThemeProvider';

interface ThemeSelectorProps {
  className?: string;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ className = '' }) => {
  const { theme, setTheme, toggleAutoRotate, isAutoRotating } = useTheme();

  const themes: { key: Theme; name: string; colors: string[] }[] = [
    {
      key: 'light',
      name: 'Light',
      colors: ['#F8F9FA', '#E9ECEF', '#6C757D', '#20C997'],
    },
    {
      key: 'ocean',
      name: 'Ocean Depths',
      colors: ['#003366', '#0066CC', '#20B2AA', '#4A90E2'],
    },
    {
      key: 'sunset',
      name: 'Sunset Horizon',
      colors: ['#FF4500', '#FFD700', '#9370DB', '#FF6347'],
    },
    {
      key: 'forest',
      name: 'Forest Whisper',
      colors: ['#228B22', '#90EE90', '#8B4513', '#32CD32'],
    },
  ];

  const currentTheme = themes.find(t => t.key === theme) || themes[0];

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center space-x-2">
        {/* Theme Selector Dropdown */}
        <div className="relative">
          <label htmlFor="theme-selector" className="sr-only">
            Select Theme
          </label>
          <select
            id="theme-selector"
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
            className="appearance-none bg-neutral-800/50 backdrop-blur-sm border border-white/10 text-white px-3 py-2 pr-8 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
          >
            {themes.map((themeOption) => (
              <option key={themeOption.key} value={themeOption.key}>
                {themeOption.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <Palette className="w-4 h-4 text-blue-400" />
          </div>
        </div>

        {/* Auto-Rotate Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleAutoRotate}
          className={`p-2 rounded-lg transition-all duration-300 ${
            isAutoRotating
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-neutral-800/50 text-slate-400 border border-white/10 hover:border-blue-500/30'
          }`}
          title={isAutoRotating ? 'Pause auto-rotation' : 'Start auto-rotation (30s intervals)'}
        >
          {isAutoRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </motion.button>
      </div>

      {/* Theme Preview */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 mt-2 p-3 bg-neutral-900/90 backdrop-blur-sm border border-white/10 rounded-lg min-w-[200px] z-50"
        >
          <div className="flex items-center space-x-2 mb-2">
            <Palette className="w-4 h-4 text-blue-400" />
            <span className="text-white text-sm font-medium">{currentTheme.name}</span>
          </div>
          <div className="flex space-x-1">
            {currentTheme.colors.map((color, index) => (
              <motion.div
                key={`${theme}-${index}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="w-6 h-6 rounded-full border-2 border-white/20"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          {isAutoRotating && (
            <div className="mt-2 text-xs text-green-400 flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              Auto-rotating themes
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;