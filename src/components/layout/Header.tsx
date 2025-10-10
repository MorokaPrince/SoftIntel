"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { NavigationItem } from "@/types";
import ThemeSelector from "@/components/ui/ThemeSelector";

const navigationItems: NavigationItem[] = [
   { id: "home", label: "Home", href: "/" },
   { id: "about", label: "About", href: "/about" },
   { id: "services", label: "Services", href: "/services" },
   { id: "resources", label: "Resources", href: "/resources" },
   { id: "contact", label: "Contact", href: "/contact" },
 ];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleWhatsAppClick = () => {
    const message = `🚀 Welcome to May & Moroka Digital Solutions! 🚀

I'm interested in your professional digital solutions and would like to discuss:

📋 Service Requirements: General inquiry about your services
💼 Company: Not specified
📧 Contact: Available for consultation
📱 Phone: Available for consultation
💰 Budget Range: To be discussed
⏰ Timeline: Flexible

I'm ready to grow my business with your professional technology solutions!

Best regards,
Potential Client

---
💬 This inquiry was sent from the SoftIntel website header`;

    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar - Black Theme */}
      <div className="bg-neutral-900 text-white py-3 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-blue-400" />
                <span>+27 79 448 4159</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-blue-400" />
                <span>info@softintel.co.za</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
               <span className="text-slate-300">Follow us:</span>
               <div className="flex space-x-3">
                 <a
                   href="#"
                   className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
                   aria-label="LinkedIn"
                 >
                   LinkedIn
                 </a>
                 <a
                   href="#"
                   className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
                   aria-label="Twitter"
                 >
                   Twitter
                 </a>
               </div>
               <div className="border-l border-white/20 h-6 mx-2"></div>
               <ThemeSelector />
             </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Black Theme */}
      <div className="bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Professional Logo */}
            <Link href="/" className="flex items-center space-x-6 group">
              <div className="relative">
                {/* Professional logo container - Blue & Silver Theme */}
                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-primary-600/10 to-primary-800/10 border border-primary-400/30 relative overflow-hidden backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Professional Logo Image */}
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="relative z-10"
                  >
                    <Image
                      src="/SoftIntel3.gif"
                      alt="SoftIntel - Intelligent Software Solutions"
                      width={64}
                      height={64}
                      className="object-contain rounded-xl drop-shadow-lg brightness-110 contrast-105"
                    />
                  </motion.div>

                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400/20 to-primary-600/20"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>

              <div className="text-left">
                <motion.h1
                  className="heading-sans text-2xl md:text-3xl text-white leading-tight cursor-pointer"
                  whileHover={{ scale: 1.02, x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    SoftIntel
                  </span>
                </motion.h1>
                <motion.div
                  className="text-professional-md text-slate-300 leading-tight"
                  whileHover={{ scale: 1.02, x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  Intelligence Solutions
                </motion.div>
                <motion.p
                  initial={{ opacity: 0.8 }}
                  animate={{
                    opacity: [0.8, 1, 0.8],
                    textShadow: [
                      "0 0 0px rgba(59, 130, 246, 0)",
                      "0 0 10px rgba(59, 130, 246, 0.5)",
                      "0 0 0px rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-professional-sm text-slate-400 mt-1 italic font-medium"
                >
                  Driven by Innovation, Defined by Intelligence
                </motion.p>
              </div>
            </Link>

            {/* Desktop Navigation - Black Theme */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-slate-300 hover:text-blue-400 font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </button>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button - Black Theme */}
            <button
              type="button"
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-800 transition-colors text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Black Theme */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block text-slate-300 hover:text-blue-400 font-medium transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Chat</span>
                  </button>
                  <Link
                    href="/contact"
                    className="w-full block text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Free Quote
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;