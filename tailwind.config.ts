import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // NovaTek Dark Theme Background Colors
        background: {
          DEFAULT: "#0A0A0A", // Charcoal Black
          secondary: "#1C1C1C", // Dark Gray
          tertiary: "#2A2A2A", // Medium Dark Gray
        },
        foreground: {
          DEFAULT: "#FFFFFF", // Pure White
        },
        // NovaTek Primary Colors - Electric Cyan
        primary: {
          50: "#E6FFFE",
          100: "#CCFFFD",
          200: "#99FFFB",
          300: "#66FFF9",
          400: "#33FFF7",
          500: "#00E6FF", // Electric Cyan (Main)
          600: "#00C4FF", // Lighter Neon Blue
          700: "#00B8CC", // Darker Cyan
          800: "#009BB3", // Deep Cyan
          900: "#007E99", // Darkest Cyan
          950: "#006180", // Very Dark Cyan
        },
        // NovaTek Accent Colors - Dark Navy/Charcoal
        accent: {
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#666666", // Medium Gray
          600: "#4D4D4D", // Dark Gray
          700: "#333333", // Darker Gray
          800: "#1C1C1C", // Very Dark Gray
          900: "#0A0A0A", // Charcoal Black
          950: "#000000", // Pure Black
        },
        // NovaTek Secondary Colors - Gradient Support
        secondary: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9", // Supporting Blue
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
          950: "#082F49",
        },
        // NovaTek Utility Colors
        success: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981", // Success Green
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
          950: "#022C22",
        },
        warning: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B", // Warning Orange
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          950: "#451A03",
        },
        error: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444", // Error Red
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          950: "#450A0A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      // NovaTek Brand Gradients
      backgroundImage: {
        'novatek-gradient': 'linear-gradient(90deg, #0A0A0A, #1C1C1C)',
        'novatek-primary': 'linear-gradient(90deg, #00E6FF, #00C4FF)',
        'novatek-dark': 'linear-gradient(135deg, #0A0A0A 0%, #1C1C1C 50%, #2A2A2A 100%)',
        'novatek-hero': 'linear-gradient(135deg, #0A0A0A 0%, #1C1C1C 100%)',
      },
      // NovaTek Box Shadows
      boxShadow: {
        'novatek': '0 4px 20px rgba(0, 230, 255, 0.15)',
        'novatek-lg': '0 10px 40px rgba(0, 230, 255, 0.2)',
        'novatek-xl': '0 20px 60px rgba(0, 230, 255, 0.25)',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;