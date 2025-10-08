"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ScatteredLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
  opacity?: number;
  animate?: boolean;
  tint?: "blue" | "indigo" | "purple" | "slate" | "white";
  glowEffect?: boolean;
  pulseEffect?: boolean;
}

const ScatteredLogo: React.FC<ScatteredLogoProps> = ({
  size = "md",
  position = "top-left",
  opacity = 0.1,
  animate = true,
  tint = "blue",
  glowEffect = true,
  pulseEffect = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of available images/GIFs/Videos for variety - prioritizing new SoftIntel3.gif
   const logoVariations = [
     "/SoftIntel3.gif", // New primary animated logo
     "/SoftIntel1.png",
     "/SoftIntel2.jpeg",
     "/SoftIntel4.mp4",
     "/SoftIntel5.mp4",
     "/SoftIntel Logo 1.gif",
     "/SoftIntel Logo 2.gif",
     "/SoftIntel Logo 4.gif",
     "/logo.png",
     "/images/Sleek Blue and Silver Company Logo.png",
     "/images/3d8ea488ac7be1f83dec39cbf8edc6f3.gif",
     "/images/5da04f8387ab1bea3f9f11296902c6d2.gif",
     "/images/462c6f5f67c13830cd9fcdbfc7b55ded.gif",
     "/images/future_of_tech_bloggif.gif",
     "/images/giphy.gif",
     "/images/800x600.gif",
     "/images/a9176696b8740c402d84b55374ea0107_w200.gif",
     "/images/c5056fe916b043776e98d6149847ffbd_w200.gif"
   ];

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  const positionClasses = {
    "top-left": "top-10 left-10",
    "top-right": "top-10 right-10",
    "bottom-left": "bottom-10 left-10",
    "bottom-right": "bottom-10 right-10",
    "center-left": "top-1/2 left-10 -translate-y-1/2",
    "center-right": "top-1/2 right-10 -translate-y-1/2",
  };

  const tintClasses = {
    blue: "from-blue-600/20 to-blue-700/20",
    indigo: "from-indigo-600/20 to-indigo-700/20",
    purple: "from-purple-600/20 to-purple-700/20",
    slate: "from-slate-600/20 to-slate-700/20",
    white: "from-white/20 to-white/30",
  };

  const borderTintClasses = {
    blue: "border-blue-400/30",
    indigo: "border-indigo-400/30",
    purple: "border-purple-400/30",
    slate: "border-slate-400/30",
    white: "border-white/30",
  };

  const glowTintClasses = {
    blue: "shadow-blue-500/50",
    indigo: "shadow-indigo-500/50",
    purple: "shadow-purple-500/50",
    slate: "shadow-slate-500/50",
    white: "shadow-white/30",
  };

  // Cycle through different logo variations with performance optimization
  useEffect(() => {
    if (animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % logoVariations.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [animate, logoVariations.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{
        opacity: opacity,
        scale: isHovered ? 1.2 : 1,
        rotate: 0
      }}
      transition={{
        duration: 0.8,
        delay: Math.random() * 2,
        scale: { duration: 0.3 }
      }}
      className={`absolute ${positionClasses[position]} z-10`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={animate ? {
          rotate: [0, 360],
          scale: pulseEffect ? [1, 1.05, 1] : [1, 1, 1],
          y: [0, -2, 0],
        } : {}}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className={`
          ${sizeClasses[size]}
          bg-gradient-to-br ${tintClasses[tint]}
          backdrop-blur-md
          rounded-2xl
          flex items-center justify-center
          border-2 ${borderTintClasses[tint]}
          shadow-2xl
          ${glowEffect ? glowTintClasses[tint] : ''}
          ${isHovered ? 'shadow-3xl' : ''}
          transition-all duration-300
          relative overflow-hidden
          group
        `}
        style={{
          mixBlendMode: 'multiply',
          filter: 'opacity(0.8) contrast(1.1)',
          background: isHovered
            ? `linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.3))`
            : undefined,
        }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
          />
          <motion.div
            animate={{
              x: [100, 0, 100],
              y: [50, 0, 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute w-1 h-1 bg-indigo-400 rounded-full"
          />
        </div>

        {/* Main logo */}
        <motion.div
          animate={isHovered ? {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          } : {}}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          {logoVariations[currentImageIndex].endsWith('.mp4') ? (
            <video
              src={logoVariations[currentImageIndex]}
              width={size === 'sm' ? 24 : size === 'md' ? 32 : size === 'lg' ? 48 : 64}
              height={size === 'sm' ? 24 : size === 'md' ? 32 : size === 'lg' ? 48 : 64}
              className={`object-contain drop-shadow-lg rounded-lg ${isHovered ? 'video-filter-hover' : 'video-filter-normal'}`}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <Image
              src={logoVariations[currentImageIndex]}
              alt="SoftIntel Logo"
              width={size === 'sm' ? 24 : size === 'md' ? 32 : size === 'lg' ? 48 : 64}
              height={size === 'sm' ? 24 : size === 'md' ? 32 : size === 'lg' ? 48 : 64}
              className="object-contain drop-shadow-lg"
              style={{
                filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1) contrast(1)',
                transition: 'filter 0.3s ease',
              }}
            />
          )}
        </motion.div>

        {/* Hover glow effect */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1.5 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-indigo-400/20 blur-xl"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default ScatteredLogo;
