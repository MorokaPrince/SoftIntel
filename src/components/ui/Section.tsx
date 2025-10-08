"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "slate" | "gradient" | "dark";
  padding?: "sm" | "md" | "lg" | "xl";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  center?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  background = "white",
  padding = "lg",
  maxWidth = "xl",
  center = false,
}) => {
  const backgroundClasses = {
    white: "bg-white",
    slate: "bg-slate-50",
    gradient: "bg-gradient-to-br from-slate-50 via-white to-blue-50/30",
    dark: "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900",
  };

  const paddingClasses = {
    sm: "py-12",
    md: "py-16",
    lg: "py-20",
    xl: "py-24",
  };

  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    "2xl": "max-w-8xl",
    full: "max-w-full",
  };

  return (
    <section
      className={`
        ${backgroundClasses[background]}
        ${paddingClasses[padding]}
        relative overflow-hidden
        ${className}
      `}
    >
      <div
        className={`
          container mx-auto px-6
          ${maxWidthClasses[maxWidth]}
          ${center ? "text-center" : ""}
        `}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
