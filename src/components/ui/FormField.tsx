"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FormFieldProps {
  label: string;
  children: ReactNode;
  error?: string;
  required?: boolean;
  className?: string;
  description?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  children,
  error,
  required = false,
  className = "",
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`space-y-2 ${className}`}
    >
      <label className="block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {description && (
        <p className="text-xs text-slate-500 -mt-1">{description}</p>
      )}
      
      <div className="relative">
        {children}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-xs mt-1 flex items-center"
          >
            <span className="mr-1">⚠</span>
            {error}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default FormField;
