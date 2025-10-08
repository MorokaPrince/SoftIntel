// MMDS Website Utilities

import { ContactFormData } from "@/types";

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (South African numbers)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+27|27|0)[6-8][0-9]{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

// Format currency (South African Rand)
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(amount);
};

// Format date
export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

// Generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Debounce function
export const debounce = <T extends (...args: never[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function
export const throttle = <T extends (...args: never[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Validate contact form
export const validateContactForm = (data: ContactFormData): string[] => {
  const errors: string[] = [];

  if (!data.name.trim()) {
    errors.push("Name is required");
  }

  if (!data.email.trim()) {
    errors.push("Email is required");
  } else if (!isValidEmail(data.email)) {
    errors.push("Please enter a valid email address");
  }

  if (!data.phone.trim()) {
    errors.push("Phone number is required");
  } else if (!isValidPhone(data.phone)) {
    errors.push("Please enter a valid South African phone number");
  }

  if (!data.service) {
    errors.push("Please select a service");
  }

  if (!data.message.trim()) {
    errors.push("Message is required");
  }

  return errors;
};

// Generate WhatsApp URL with enhanced form data
export const generateWhatsAppURL = (message: string): string => {
   const phoneNumber = "+27794484159"; // MMDS WhatsApp number - 0794484159
   const encodedMessage = encodeURIComponent(message);
   return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
 };

// Generate enhanced WhatsApp message with form data
export const generateWhatsAppMessage = (formData: ContactFormData): string => {
  const { name, company, email, phone, service, budget, timeline, message } = formData;

  return `🌟 MAY & MOROKA DIGITAL SOLUTIONS - NEW INQUIRY 🌟

📋 CONTACT INFORMATION:
👤 Name: ${name || "Not specified"}
🏢 Company: ${company || "Not specified"}
📧 Email: ${email || "Not specified"}
📱 Phone: ${phone || "Not specified"}

💼 PROJECT DETAILS:
🔧 Service Required: ${service || "Not specified"}
💰 Budget Range: ${budget || "To be discussed"}
⏰ Timeline: ${timeline || "Flexible"}

📝 PROJECT DESCRIPTION:
${message || "No additional details provided"}

---
💬 This inquiry was sent from the MMDS website contact form.
📅 Generated: ${new Date().toLocaleString('en-ZA')}

We're excited to help transform your business with our professional digital solutions!

Best regards,
MMDS Team
🚀 Professional IT Solutions Partner`;
};

// Generate WhatsApp URL with form data
export const generateWhatsAppURLWithFormData = (formData: ContactFormData): string => {
  const message = generateWhatsAppMessage(formData);
  return generateWhatsAppURL(message);
};

// Generate email subject and body
export const generateEmailContent = (data: ContactFormData) => {
  const subject = `Service Request: ${data.service} - ${data.company}`;
  const body = `
New service request from ${data.name}

Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}
Budget Range: ${data.budget}
Timeline: ${data.timeline}

Message:
${data.message}

---
This message was sent from the MMDS website contact form.
  `.trim();

  return { subject, body };
};

// Smooth scroll to element
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// Check if element is in viewport
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Copy text to clipboard
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy text: ", err);
    return false;
  }
};

// Generate random ID
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// Format file size
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};