"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  color?: "blue" | "indigo" | "purple" | "white" | "slate";
  intensity?: "low" | "medium" | "high";
  animation?: "float" | "drift" | "pulse" | "spiral";
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 20,
  color = "blue",
  intensity = "medium",
  animation = "float",
  className = "",
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const colorClasses = {
    blue: "bg-blue-400/20",
    indigo: "bg-indigo-400/20",
    purple: "bg-purple-400/20",
    white: "bg-white/20",
    slate: "bg-slate-400/20",
  };

  const intensitySettings = {
    low: { opacity: 0.1, sizeRange: [2, 6] },
    medium: { opacity: 0.2, sizeRange: [3, 8] },
    high: { opacity: 0.3, sizeRange: [4, 12] },
  };

  const animationVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
    },
    drift: {
      x: [0, 100, -50, 0],
      y: [0, -30, 20, 0],
      rotate: [0, 90, 180, 270, 360],
    },
    pulse: {
      scale: [1, 1.5, 1],
      opacity: [0.2, 0.8, 0.2],
    },
    spiral: {
      x: [0, 50, 0, -50, 0],
      y: [0, -50, -100, -50, 0],
      rotate: [0, 360],
      scale: [1, 1.2, 1],
    },
  };

  useEffect(() => {
    // Performance optimization: reduce particles on mobile
    const isMobile = window.innerWidth < 768;
    const adjustedParticleCount = isMobile ? Math.min(particleCount, 10) : particleCount;

    const newParticles: Particle[] = [];
    const settings = intensitySettings[intensity];

    for (let i = 0; i < adjustedParticleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (settings.sizeRange[1] - settings.sizeRange[0]) + settings.sizeRange[0],
        opacity: Math.random() * settings.opacity + 0.1,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
      });
    }

    setParticles(newParticles);
  }, [particleCount, intensity]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${colorClasses[color]} blur-sm`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={animationVariants[animation]}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
