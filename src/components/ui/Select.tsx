"use client";

import { forwardRef, SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "default" | "professional";
  error?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", variant = "default", error = false, children, ...props }, ref) => {
    const baseClasses = "w-full px-4 py-3 rounded-lg transition-all duration-200 bg-white appearance-none";
    
    const variantClasses = {
      default: "border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
      professional: "border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm",
    };

    const errorClasses = error
      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
      : "";

    return (
      <div className="relative">
        <select
          ref={ref}
          className={`
            ${baseClasses}
            ${variantClasses[variant]}
            ${errorClasses}
            ${className}
          `}
          {...props}
        >
          {children}
        </select>
        <ChevronDown 
          size={20} 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" 
        />
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
