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
    const message = "Hi! I'm interested in learning more about NovaTek's advanced technology solutions.";
    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-neutral-50/50"></div>
      {/* Clean Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center">
                  <Image
                    src="/logo-novatek.svg"
                    alt="NovaTek"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  NovaTek
                </h3>
                <p className="text-neutral-600 text-sm font-medium">
                  Advanced Technology Solutions
                </p>
              </div>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              Premier technology partner for South African businesses.
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
                      className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                }

                return (
                  <div
                    key={social.id}
                    className="relative w-10 h-10 bg-neutral-300 rounded-lg flex items-center justify-center opacity-60 cursor-not-allowed"
                    title={`${social.name} - Coming Soon`}
                  >
                    <IconComponent size={18} />
                    <div className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs px-1 py-0.5 rounded-full font-bold text-[8px]">
                      Soon
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-neutral-900">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-neutral-900">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-neutral-900">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-neutral-700">
                    Limpopo, South Africa
                  </p>
                  <p className="text-neutral-600 text-sm">
                    Serving clients across Africa
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-600" />
                <a
                  href="tel:+27794484159"
                  className="text-neutral-700 hover:text-primary-600 transition-colors"
                >
                  +27 79 448 4159
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-600" />
                <a
                  href="mailto:info@novatek.co.za"
                  className="text-neutral-700 hover:text-primary-600 transition-colors"
                >
                  info@novatek.co.za
                </a>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-all duration-300 w-full justify-center font-medium"
              >
                <MessageCircle size={18} />
                <span>Let's Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-600 text-sm">
              © {currentYear} NovaTek. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-neutral-600">
              <Link href="/privacy" className="hover:text-primary-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary-600 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;