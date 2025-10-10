"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Linkedin,
  Twitter,
  Facebook,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
import { NavigationItem, SocialLink } from "@/types";
import ScatteredLogo from "@/components/ui/ScatteredLogo";

const navigationItems: NavigationItem[] = [
   { id: "home", label: "Home", href: "/" },
   { id: "about", label: "About Us", href: "/about" },
   { id: "services", label: "Services", href: "/services" },
   { id: "resources", label: "Resources", href: "/resources" },
   { id: "contact", label: "Contact", href: "/contact" },
 ];

const services: NavigationItem[] = [
   { id: "web-design", label: "Web Design", href: "/services#web-design" },
   { id: "mobile-apps", label: "Mobile Apps", href: "/services#mobile-apps" },
   { id: "digital-marketing", label: "Digital Marketing", href: "/services#digital-marketing" },
   { id: "compliance", label: "Compliance Tools", href: "/services#compliance" },
   { id: "consulting", label: "IT Consulting", href: "/services#consulting" },
 ];

const socialLinks: SocialLink[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    url: "https://wa.me/27794484159",
    icon: "WhatsApp",
    active: true,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "#",
    icon: "LinkedIn",
    comingSoon: true,
  },
  {
    id: "twitter",
    name: "Twitter/X",
    url: "#",
    icon: "Twitter",
    comingSoon: true,
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "#",
    icon: "Facebook",
    comingSoon: true,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in learning more about SoftIntel's intelligent software solutions.";
    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      {/* Scattered Logos in Footer */}
      <ScatteredLogo size="md" position="bottom-left" opacity={0.15} tint="white" />
      <ScatteredLogo size="sm" position="bottom-right" opacity={0.12} tint="white" />
      <ScatteredLogo size="lg" position="top-right" opacity={0.08} tint="white" />
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg overflow-hidden">
                  <Image
                    src="/SoftIntel3.gif"
                    alt="SoftIntel Logo"
                    width={64}
                    height={64}
                    className="object-contain rounded-xl drop-shadow-lg"
                  />
                </div>
              </div>
              <div>
                <h3 className="heading-sans text-2xl text-white">
                  Moroka & Associates
                </h3>
                <p className="text-primary-100 text-base font-medium">
                  Digital Business Solutions
                </p>
              </div>
            </div>
            <p className="text-primary-100 leading-relaxed">
              Professional digital transformation partner for South African businesses.
              We deliver innovative technology solutions that drive sustainable growth across Africa.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = {
                  WhatsApp: MessageCircle,
                  LinkedIn: Linkedin,
                  Twitter: Twitter,
                  Facebook: Facebook,
                }[social.icon] as React.ComponentType<{ size: number }>;

                if (social.active) {
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-500 hover:bg-green-400 rounded-lg flex items-center justify-center transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                      aria-label={social.name}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                }

                return (
                  <div
                    key={social.id}
                    className="relative w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center opacity-60 cursor-not-allowed text-gray-600"
                    title={`${social.name} - Coming Soon`}
                  >
                    <IconComponent size={18} />
                    <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs px-1 py-0.5 rounded-full font-bold text-[8px]">
                      Soon
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-100">
                    Limpopo, South Africa
                  </p>
                  <p className="text-primary-200 text-sm">
                    Serving clients across Africa
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary-300" />
                <a
                  href="tel:+27794484159"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  +27 79 448 4159
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary-300" />
                <a
                  href="mailto:itsolutions@morokaandassociates.com"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  itsolutions@morokaandassociates.com
                </a>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full justify-center"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-100 text-sm">
              © {currentYear} Moroka & Associates Digital Solutions. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-100">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-40 border-2 border-white/20"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;