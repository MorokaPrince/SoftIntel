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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary-500/20"
            : "bg-transparent"
        }`}
      >

       {/* Main Navigation */}
       <div className={`${isScrolled ? 'py-3' : 'py-4'} bg-background/95 backdrop-blur-md transition-all duration-300`}>
       <div className="container mx-auto px-4">
         <div className="flex justify-between items-center">
           {/* Logo */}
           <Link href="/" className="flex items-center space-x-4 group">
             <div className="relative">
               <motion.div
                 className={`${
                   isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                 } rounded-lg flex items-center justify-center bg-primary transition-all duration-300`}
                 whileHover={{ scale: 1.05 }}
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
             </div>

             <div className={`text-left ${isScrolled && 'hidden md:block'} transition-all duration-300`}>
               <motion.h1
                 className="text-xl md:text-2xl font-bold text-white leading-tight"
                 whileHover={{ scale: 1.02 }}
                 transition={{ duration: 0.2 }}
               >
                 NovaTek
               </motion.h1>
             </div>
           </Link>

           {/* Desktop Navigation */}
           <nav className="hidden lg:flex items-center space-x-8">
             {navigationItems.map((item) => (
               <Link
                 key={item.id}
                 href={item.href}
                 className="text-white hover:text-primary-500 font-medium transition-colors relative group"
               >
                 {item.label}
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
               </Link>
             ))}
           </nav>

           {/* CTA Button */}
           <div className="hidden lg:flex items-center">
             <Link
               href="/contact"
               className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-novatek"
             >
               Contact Us
             </Link>
           </div>

            {/* Clean Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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