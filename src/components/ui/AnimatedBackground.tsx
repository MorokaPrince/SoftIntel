"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleBackground from "./ParticleBackground";
import ScatteredLogo from "./ScatteredLogo";

interface AnimatedBackgroundProps {
  variant?: "hero" | "section" | "subtle" | "intense";
  theme?: "blue" | "indigo" | "purple" | "dark" | "light";
  includeParticles?: boolean;
  includeLogos?: boolean;
  includeGrid?: boolean;
  includeGradient?: boolean;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = "section",
  theme = "blue",
  includeParticles = true,
  includeLogos = true,
  includeGrid = true,
  includeGradient = true,
  backgroundImage,
  className = "",
  children,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Professional variant settings - Dark Theme Optimized
  const variantSettings = {
    hero: {
      particleCount: mounted && window.innerWidth < 768 ? 8 : 15,
      particleIntensity: "medium" as const,
      logoCount: 1,
      gradientOpacity: "from-background/80 via-background-secondary/60 to-background-tertiary/80",
    },
    section: {
      particleCount: mounted && window.innerWidth < 768 ? 5 : 10,
      particleIntensity: "low" as const,
      logoCount: 1,
      gradientOpacity: "from-background-secondary/85 via-background-tertiary/70 to-background/85",
    },
    subtle: {
      particleCount: mounted && window.innerWidth < 768 ? 3 : 6,
      particleIntensity: "low" as const,
      logoCount: 0,
      gradientOpacity: "from-background-tertiary/90 via-background-secondary/80 to-background-tertiary/90",
    },
    intense: {
      particleCount: mounted && window.innerWidth < 768 ? 10 : 20,
      particleIntensity: "medium" as const,
      logoCount: 1,
      gradientOpacity: "from-background/70 via-primary-900/40 to-background-secondary/70",
    },
  };

  const themeSettings = {
    blue: {
      particleColor: "blue" as const,
      logoTint: "blue" as const,
      gridColor: "rgba(37, 99, 235, 0.04)",
    },
    indigo: {
      particleColor: "indigo" as const,
      logoTint: "indigo" as const,
      gridColor: "rgba(99, 102, 241, 0.04)",
    },
    purple: {
      particleColor: "purple" as const,
      logoTint: "purple" as const,
      gridColor: "rgba(147, 51, 234, 0.04)",
    },
    dark: {
      particleColor: "white" as const,
      logoTint: "white" as const,
      gridColor: "rgba(255, 255, 255, 0.02)",
    },
    light: {
      particleColor: "slate" as const,
      logoTint: "slate" as const,
      gridColor: "rgba(100, 116, 139, 0.03)",
    },
  };

  const settings = variantSettings[variant];
  const themeConfig = themeSettings[theme];

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Background Image with Ken Burns Effect */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            scale: [1, 1.05, 1.02, 1],
            x: [0, -2, 1, 0],
            y: [0, -1, 2, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
              backgroundImage?.includes('server-room-background_161452-7815') ? 'bg-tech-server-room' :
              backgroundImage?.includes('plexus-scifi-background_280538-7858') ? 'bg-tech-plexus' :
              backgroundImage?.includes('ict-information-communications-technology-concept-server-room-background_161452-7815') ? 'bg-tech-ict-concept' :
              backgroundImage?.includes('ict-information-communications-technology-modern-server-room-background-virtual-screen_161452-3091') ? 'bg-tech-ict-modern' :
              'bg-tech-default'
            }`}
          />
          {/* Fallback CSS class approach */}
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 ${
              backgroundImage?.includes('server-room-background_161452-7815') ? 'bg-tech-1' :
              backgroundImage?.includes('plexus-scifi-background_280538-7858') ? 'bg-tech-2' :
              backgroundImage?.includes('server-room-background-virtual-screen_161452-3091') ? 'bg-tech-3' :
              'bg-tech-1'
            }`}
          />
        </motion.div>
      )}

      {/* Gradient Overlay */}
      {includeGradient && (
        <div className={`absolute inset-0 bg-gradient-to-br ${settings.gradientOpacity}`} />
      )}

      {/* Animated Grid Pattern */}
      {includeGrid && (
        <motion.div
          className="absolute inset-0 animated-grid"
          animate={{
            backgroundPosition: ["0px 0px", "20px 20px", "0px 0px"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Particle System */}
      {includeParticles && (
        <ParticleBackground
          particleCount={settings.particleCount}
          color={themeConfig.particleColor}
          intensity={settings.particleIntensity}
          animation="float"
        />
      )}

      {/* Scattered Logos */}
      {includeLogos && (
        <>
          {Array.from({ length: settings.logoCount }).map((_, index) => {
            const positions = ["top-left", "top-right", "bottom-left", "bottom-right", "center-left", "center-right"];
            const sizes = ["sm", "md", "lg"];
            return (
              <ScatteredLogo
                key={index}
                size={sizes[index % sizes.length] as "sm" | "md" | "lg"}
                position={positions[index % positions.length] as "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right"}
                opacity={0.08 - index * 0.02}
                tint={themeConfig.logoTint}
                animate={true}
                glowEffect={true}
                pulseEffect={true}
              />
            );
          })}
        </>
      )}

      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border border-blue-400/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-10 w-12 h-12 border-2 border-indigo-400/30 rounded-full"
        animate={{
          rotate: [0, -360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default AnimatedBackground;
