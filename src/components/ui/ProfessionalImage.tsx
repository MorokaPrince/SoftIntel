"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProfessionalImageProps {
  src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  placeholder?: "tech" | "business" | "team" | "data" | "cloud" | "mobile";
  priority?: boolean;
}

const placeholderImages = {
  tech: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
  business: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
  data: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
  cloud: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
  mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
};

const ProfessionalImage: React.FC<ProfessionalImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  placeholder = "tech",
  priority = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageSrc = src || placeholderImages[placeholder];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden ${className}`}
    >
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-slate-400 text-sm font-medium">Loading...</div>
        </div>
      )}
      
      <Image
        src={imageError ? placeholderImages[placeholder] : imageSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImageError(true);
          setIsLoading(false);
        }}
      />
    </motion.div>
  );
};

export default ProfessionalImage;
