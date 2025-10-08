"use client";

import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "professional";
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", variant = "default", error = false, ...props }, ref) => {
    const baseClasses = "w-full px-4 py-3 rounded-lg transition-all duration-200 bg-white";
    
    const variantClasses = {
      default: "border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
      professional: "border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm",
    };

    const errorClasses = error
      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
      : "";

    return (
      <input
        ref={ref}
        className={`
          ${baseClasses}
          ${variantClasses[variant]}
          ${errorClasses}
          ${className}
        `}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
