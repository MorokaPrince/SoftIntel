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
  Award,
  Users,
  Target,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function Home() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in learning more about Moroka & Associates' professional business solutions.";
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
      <section className="relative bg-gradient-to-br from-background via-background-secondary to-background-tertiary pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden">
        <AnimatedBackground
          variant="hero"
          theme="blue"
          backgroundImage="/neural-network"
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
              <CheckCircle className="w-4 h-4 mr-2 text-accent-400" />
              SOUTH AFRICA'S DIGITAL TRANSFORMATION PARTNER
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-hero text-white mb-6"
            >
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Professional Digital Solutions
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-professional text-lg md:text-xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              Moroka & Associates empowers South African businesses with cutting-edge digital transformation, custom software development, and strategic consulting that drives sustainable growth and competitive advantage.
            </motion.p>

            {/* Value Proposition Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base"
            >
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Target className="w-4 h-4 mr-2 text-primary-400" />
                <span className="text-slate-300">Tailored Solutions</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Award className="w-4 h-4 mr-2 text-accent-400" />
                <span className="text-slate-300">Expert Team</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2 text-primary-400" />
                <span className="text-slate-300">Proven Results</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-professional bg-gradient-to-br from-background-secondary via-background to-background-secondary relative overflow-hidden py-20">
        <AnimatedBackground
          variant="section"
          theme="dark"
          backgroundImage="/circuit-board"
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
              Comprehensive solutions designed to transform your business operations
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Digital Transformation",
                description: "Comprehensive digital solutions that modernize your business operations and drive growth",
                features: ["Process Automation", "Cloud Migration", "System Integration", "Digital Strategy"],
                caseStudy: "Increased efficiency by 40% for retail client",
              },
              {
                icon: <Smartphone className="w-10 h-10" />,
                title: "Custom Software Development",
                description: "Tailored software solutions designed to solve unique business challenges",
                features: ["Web Applications", "Mobile Apps", "Enterprise Systems", "API Development"],
                caseStudy: "Built custom CRM reducing manual work by 60%",
              },
              {
                icon: <BarChart3 className="w-10 h-10" />,
                title: "Business Intelligence",
                description: "Data-driven insights and analytics to inform strategic decision making",
                features: ["Data Analytics", "Reporting Dashboards", "Market Research", "Performance Metrics"],
                caseStudy: "Improved decision-making speed by 50%",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-neutral-800/50 transition-all duration-300 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 group"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center text-primary-400 mb-6"
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

                {/* Case Study Highlight */}
                <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-3 mb-4">
                  <p className="text-primary-300 text-sm font-medium">💼 Case Study</p>
                  <p className="text-slate-300 text-sm">{service.caseStudy}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-professional-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Trust Indicators */}
      <section className="py-16 bg-gradient-to-br from-background via-background-secondary to-background relative">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Partnering with businesses across South Africa to drive digital transformation
            </p>
          </motion.div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center max-w-6xl mx-auto">
            {[
              { name: "Retail Corp", industry: "Retail" },
              { name: "TechStart", industry: "Technology" },
              { name: "FinanceFlow", industry: "Finance" },
              { name: "HealthTech", industry: "Healthcare" },
              { name: "EduPlatform", industry: "Education" },
              { name: "LogiChain", industry: "Logistics" },
            ].map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-neutral-700/30 transition-all duration-300 hover:border-primary-500/30"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{client.name}</h4>
                  <p className="text-slate-400 text-xs">{client.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-professional bg-gradient-to-br from-background via-background-secondary to-background relative overflow-hidden">
        <AnimatedBackground
          variant="intense"
          theme="dark"
          backgroundImage="/data-center"
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
            <h2 className="heading-display text-3xl md:text-4xl text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-professional text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Get started with a free consultation and discover how our professional business solutions can help your business innovate and succeed.
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
