"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  MessageCircle,
  Phone,
  Mail,
  Settings,
  Smartphone,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function Home() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in learning more about SoftIntel's intelligent software solutions.";
    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleGetQuote = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Professional Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background-secondary to-background-tertiary pt-20 pb-16 overflow-hidden">
        <AnimatedBackground
          variant="hero"
          theme="blue"
          backgroundImage="/ict-information-communications-technology-concept-server-room-background_161452-7815.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />

        <div className="container-safe relative z-10">
          <div className="text-center content-wrapper">
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
            >
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              PROFESSIONAL SOFTWARE SOLUTIONS
            </motion.div>

            {/* Main Headline - Enhanced Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-hero text-white mb-6"
            >
              Intelligent Software{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              for Tomorrow
            </motion.h1>

            {/* Professional Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-professional text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              SoftIntel delivers intelligent software solutions, web applications, and digital transformation services that help businesses innovate, grow, and scale globally.
            </motion.p>

            {/* Professional CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={handleGetQuote}
                className="btn-professional-primary btn-hover-scale btn-hover-glow"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={handleWhatsAppClick}
                className="btn-professional-secondary btn-hover-scale"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </motion.div>

            {/* Professional Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">9+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">2024</div>
                <div className="text-sm text-slate-400">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar - Horizontal Layout */}
      <section className="bg-neutral-900 border-y border-white/10 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition-colors">
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">+27 79 448 4159</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition-colors">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">itsolutions@morokaandassociates.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition-colors">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">Serving Africa & Beyond</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Professional Services Section - Horizontal Layout */}
      <section className="section-professional bg-gradient-to-br from-background-secondary via-background to-background-secondary relative overflow-hidden py-20">
        <AnimatedBackground
          variant="section"
          theme="dark"
          backgroundImage="/plexus-scifi-background_280538-7858.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
            >
              <Settings className="w-5 h-5 mr-2" />
              Our Expertise
            </motion.div>
            <h2 className="heading-display text-3xl md:text-4xl text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-professional text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive software solutions designed to transform your business operations
            </p>
          </div>

          {/* Horizontal Services Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Web Design & Development",
                description: "Modern, responsive websites and web applications that drive results",
                features: ["Corporate Websites", "E-commerce", "Landing Pages", "Web Portals"],
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile Applications",
                description: "Custom business apps and SaaS systems for mobile platforms",
                features: ["iOS & Android Apps", "Business Portals", "SaaS Solutions", "API Integration"],
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Digital Marketing",
                description: "Complete digital marketing solutions to grow your business online",
                features: ["SEO Optimization", "Social Media", "Google Ads", "Content Marketing"],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-neutral-800/50 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="heading-sans text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-professional text-slate-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-professional-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Professional CTA Section */}
      <section className="section-professional bg-gradient-to-br from-background via-background-secondary to-background relative overflow-hidden">
        <AnimatedBackground
          variant="intense"
          theme="dark"
          backgroundImage="/ict-information-communications-technology-modern-server-room-background-virtual-screen_161452-3091.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Transform Your Business Today
            </motion.div>

            <h2 className="heading-display text-3xl md:text-4xl text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-professional text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Get started with a free consultation and discover how our intelligent software solutions
              can help your business innovate and succeed in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetQuote}
                className="btn-professional-primary"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={handleWhatsAppClick}
                className="btn-professional-secondary"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
