"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient" | "professional";
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
  shadow?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  padding = "lg",
  shadow = "lg",
}) => {
  const baseClasses = "rounded-xl transition-all duration-300";
  
  const variantClasses = {
    default: "bg-background-secondary/50 backdrop-blur-sm border border-white/10",
    glass: "bg-background-tertiary/80 backdrop-blur-sm border border-white/20",
    gradient: "bg-gradient-to-br from-background-secondary to-background-tertiary border border-white/10",
    professional: "bg-background-secondary/60 backdrop-blur-sm border border-primary-400/20",
  };

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const shadowClasses = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
  };

  const hoverClasses = hover
    ? "hover:shadow-xl hover:-translate-y-1 hover:border-primary-400/30 hover:bg-background-secondary/70"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${shadowClasses[shadow]}
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;
