"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface EnhancedLogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  variant?: "default" | "minimal" | "glow" | "rainbow" | "tech";
  animated?: boolean;
  className?: string;
  showText?: boolean;
  textPosition?: "right" | "bottom" | "none";
}

const EnhancedLogo: React.FC<EnhancedLogoProps> = ({
  size = "md",
  variant = "default",
  animated = true,
  className = "",
  showText = false,
  textPosition = "right",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Array of available logo variations including new SoftIntel logo
   const logoVariations = [
     "/SoftIntel3.gif", // Primary animated logo
     "/SoftIntel1.png",
     "/SoftIntel2.jpeg",
     "/SoftIntel4.mp4",
     "/SoftIntel5.mp4",
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
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
    hero: "w-64 h-64",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl",
    hero: "text-8xl",
  };

  // Cycle through different logo variations
  useEffect(() => {
    if (animated && variant === "rainbow") {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % logoVariations.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [animated, variant]);

  const getVariantStyles = () => {
    switch (variant) {
      case "minimal":
        return "bg-transparent border-2 border-blue-400/30";
      case "glow":
        return "bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-2 border-blue-400/50 shadow-blue-500/25 shadow-lg";
      case "rainbow":
        return "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border-2 border-rainbow shadow-rainbow";
      case "tech":
        return "bg-gradient-to-br from-slate-900/90 to-blue-900/90 border-2 border-cyan-400/50 shadow-cyan-500/25 shadow-lg backdrop-blur-sm";
      default:
        return "bg-white/10 backdrop-blur-sm border-2 border-blue-300/40 shadow-xl";
    }
  };

  const renderLogoContent = () => (
    <motion.div
      className={`relative ${sizeClasses[size]} rounded-2xl ${getVariantStyles()} flex items-center justify-center overflow-hidden group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={animated ? { scale: 1.05 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background effects */}
      {animated && (
        <>
          {/* Pulsing background */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-indigo-400/10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Rotating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
              style={{
                top: `${15 + 70 * Math.sin(i * 45 * Math.PI / 180)}%`,
                left: `${15 + 70 * Math.cos(i * 45 * Math.PI / 180)}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}

      {/* Main logo */}
      <motion.div
        className="relative z-10"
        animate={animated ? {
          rotate: isHovered ? [0, 360] : 0,
          scale: isHovered ? [1, 1.1, 1] : [1, 1, 1],
        } : {}}
        transition={{
          duration: 0.6,
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      >
        <Image
           src={logoVariations[currentImageIndex]}
           alt="SoftIntel Logo"
           width={size === 'sm' ? 32 : size === 'md' ? 48 : size === 'lg' ? 80 : size === 'xl' ? 120 : 160}
           height={size === 'sm' ? 32 : size === 'md' ? 48 : size === 'lg' ? 80 : size === 'xl' ? 120 : 160}
           className="object-contain drop-shadow-lg"
           style={{
             filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1) contrast(1)',
             transition: 'filter 0.3s ease',
           }}
         />
      </motion.div>

      {/* Hover glow effect */}
      {isHovered && animated && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1.5 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-indigo-400/20 blur-xl"
        />
      )}

      {/* Tech variant special effects */}
      {variant === "tech" && animated && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse animate-delay-1000" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse animate-delay-500" />
        </div>
      )}
    </motion.div>
  );

  const renderTextContent = () => (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <motion.h1
        className={`${textSizeClasses[size]} font-black text-blue-700 leading-tight`}
        whileHover={{ scale: 1.02, x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          animate={animated ? {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          } : {}}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent bg-300%"
        >
          SoftIntel
        </motion.span>
      </motion.h1>
      <motion.span
        className={`${textSizeClasses[size].replace('text-', 'text-').replace('lg', 'xl').replace('xl', '2xl').replace('2xl', '4xl').replace('4xl', '6xl').replace('6xl', '8xl')} font-black text-indigo-600 leading-tight`}
        whileHover={{ scale: 1.02, x: 3 }}
        transition={{ duration: 0.2 }}
      >
        Intelligence Solutions
      </motion.span>
    </motion.div>
  );

  if (showText) {
    if (textPosition === "right") {
      return (
        <motion.div
          className="flex items-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {renderLogoContent()}
          {renderTextContent()}
        </motion.div>
      );
    } else if (textPosition === "bottom") {
      return (
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {renderLogoContent()}
          {renderTextContent()}
        </motion.div>
      );
    }
  }

  return renderLogoContent();
};

export default EnhancedLogo;