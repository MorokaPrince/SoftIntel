"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import { NavigationItem } from "@/types";

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
    const message = `🚀 Welcome to NovaTek! 🚀

I'm interested in your advanced technology solutions and would like to discuss:

📋 Service Requirements: General inquiry about your services
💼 Company: Not specified
📧 Contact: Available for consultation
📱 Phone: Available for consultation
💰 Budget Range: To be discussed
⏰ Timeline: Flexible

I'm ready to grow my business with your innovative technology solutions!

Best regards,
Potential Client

---
💬 This inquiry was sent from the NovaTek website header`;

    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl shadow-2xl border-b border-primary-500/30"
            : "bg-transparent"
        }`}
      >

       {/* Main Navigation */}
       <div className={`${isScrolled ? 'py-2' : 'py-3'} transition-all duration-500`}>
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-center">
           {/* Logo */}
           <Link href="/" className="flex items-center space-x-3 group">
             <div className="relative">
               <motion.div
                 className={`${
                   isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                 } rounded-xl flex items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600 transition-all duration-500 shadow-lg`}
                 whileHover={{ scale: 1.05, rotate: 2 }}
                 transition={{ duration: 0.3 }}
               >
                 <Image
                   src="/logo-novatek.svg"
                   alt="NovaTek"
                   width={isScrolled ? 20 : 28}
                   height={isScrolled ? 20 : 28}
                   className="object-contain"
                 />
               </motion.div>
               {/* Glow effect */}
               <motion.div
                 className="absolute inset-0 rounded-xl bg-primary-400/20 blur-lg"
                 animate={{ opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 2, repeat: Infinity }}
               />
             </div>

             <div className={`text-left ${isScrolled && 'hidden md:block'} transition-all duration-300`}>
               <motion.h1
                 className="text-xl md:text-2xl font-bold text-white leading-tight tracking-tight"
                 whileHover={{ scale: 1.02 }}
                 transition={{ duration: 0.2 }}
               >
                 NovaTek
               </motion.h1>
               <motion.p
                 className="text-xs text-primary-300 font-medium"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: isScrolled ? 0 : 1 }}
                 transition={{ duration: 0.3 }}
               >
                 Digital Innovation
               </motion.p>
             </div>
           </Link>

           {/* Desktop Navigation */}
           <nav className="hidden lg:flex items-center space-x-1">
             {navigationItems.map((item) => (
               <Link
                 key={item.id}
                 href={item.href}
                 className="relative px-4 py-2 text-white hover:text-primary-300 font-medium transition-all duration-300 group"
               >
                 {item.label}
                 <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
               </Link>
             ))}
           </nav>

           {/* CTA Button */}
           <div className="hidden lg:flex items-center space-x-4">
             <Link
               href="/contact"
               className="relative bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-2.5 rounded-xl transition-all duration-300 font-semibold shadow-xl hover:shadow-primary-500/25 transform hover:-translate-y-0.5 overflow-hidden group"
             >
               <span className="relative z-10">Contact Us</span>
               <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             </Link>
           </div>

             {/* Modern Mobile Menu Button */}
             <button
               type="button"
               onClick={toggleMenu}
               className="lg:hidden relative p-2 rounded-xl hover:bg-white/10 transition-all duration-300 text-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-background"
               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
             >
               <motion.div
                 animate={{ rotate: isMenuOpen ? 180 : 0 }}
                 transition={{ duration: 0.3 }}
               >
                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </motion.div>
             </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-primary-500/20 shadow-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block text-white hover:text-primary-500 font-medium transition-colors py-3 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-6 space-y-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg transition-all duration-300 font-medium shadow-novatek"
                  >
                    <MessageCircle size={18} />
                    <span>Let&apos;s Talk</span>
                  </button>
                  <Link
                    href="/contact"
                    className="w-full block text-center bg-accent-800 hover:bg-accent-700 text-white px-4 py-3 rounded-lg transition-all duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
};

export default Header;