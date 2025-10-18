"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowRight,
  Globe,
  MessageCircle,
  Settings,
  BarChart3,
  Award,
  Target,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { enhancedScrollAnimations } from "@/utils/scrollAnimations";

export default function Home() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in learning more about NovaTek's advanced technology solutions.";
    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleGetQuote = () => {
    window.location.href = "/contact";
  };

  useEffect(() => {
    // Initialize enhanced scroll animations with exit effects
    const { entryObserver, exitObserver } = enhancedScrollAnimations.init({
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      once: true,
    });

    // Cleanup observers on unmount
    return () => {
      entryObserver.disconnect();
      exitObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* NovaTek Hero Section - Dark Professional Theme */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-background via-background-secondary to-background-tertiary pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden">
        <div className="container-safe relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Badge/Announcement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse"></span>
              Transforming Businesses Through Technology
            </motion.div>

            {/* Main Headline - Enhanced NovaTek Style */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              Building{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500">
                  Smart Digital
                </span>
                <motion.svg
                  className="absolute -bottom-3 left-0 w-full h-4"
                  viewBox="0 0 100 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <motion.path
                    d="M2 8C20 4, 40 4, 58 8C76 12, 96 12, 98 8"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00E6FF" />
                      <stop offset="50%" stopColor="#00C4FF" />
                      <stop offset="100%" stopColor="#00E6FF" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>{" "}
              <span className="text-slate-100">Solutions</span>
            </motion.h1>

            {/* NovaTek Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto font-light"
            >
              NovaTek is a forward-thinking digital transformation company that helps clients harness the power of technology. We design, develop, and integrate digital platforms that connect people, data, and ideas for the modern enterprise.
            </motion.p>

            {/* Professional CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={handleGetQuote}
                className="group relative bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 text-white px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                variant="outline"
                onClick={handleWhatsAppClick}
                className="group border-2 border-primary-400 text-primary-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm bg-white/5"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Let&apos;s Talk
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
                { number: "99%", label: "Success Rate" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-accent-900/10" />
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* Clean Services Section - NovaTek Dark Style */}
      <section className="py-12 md:py-16 bg-background-secondary relative">
        <div className="absolute inset-0 bg-novatek-gradient opacity-30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 bg-software-development"
        ></div>
        <div className="container-safe relative z-10">
          <div className="text-center mb-12">
            <h2 className="animate-fade-in-initial text-3xl md:text-4xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="animate-fade-in-initial text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We partner with South African businesses to solve complex challenges through intelligent digital solutions that drive measurable results.
            </p>
          </div>

          {/* Clean Services Grid */}
          <div className="stagger-container grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Settings className="w-8 h-8" />,
                title: "System Integration",
                description: "Seamlessly connect your existing systems and automate workflows to eliminate inefficiencies and reduce manual work.",
                features: ["Legacy System Integration", "Workflow Automation", "Process Optimization", "Custom API Development"],
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Business Intelligence",
                description: "Transform raw data into strategic insights with advanced analytics platforms that inform better decision-making.",
                features: ["Real-time Dashboards", "Predictive Analytics", "Data Warehousing", "Performance Monitoring"],
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Cloud Infrastructure",
                description: "Modernize your IT foundation with scalable cloud solutions that ensure reliability, security, and cost-effectiveness.",
                features: ["Cloud Migration Strategy", "Infrastructure Management", "24/7 Monitoring", "Disaster Recovery"],
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-background/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-novatek transition-all duration-300 border border-primary-500/20 group hover:border-primary-500/40 hover-effect-lift"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400 mb-4 group-hover:bg-primary-500/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-initial text-center mt-12">
            <Link href="/services">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-novatek hover-effect-scale">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Client Trust Indicators & Testimonials */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-background via-background-secondary to-background relative">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Trusted by South African Businesses
            </h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto">
              See how we&apos;ve helped businesses across South Africa achieve their digital transformation goals
            </p>
          </motion.div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center max-w-5xl mx-auto mb-12">
            {[
              { name: "AfriTech Solutions", industry: "Technology" },
              { name: "Limpopo Logistics", industry: "Logistics" },
              { name: "Mpumalanga Manufacturing", industry: "Manufacturing" },
              { name: "Gauteng Financial Services", industry: "Finance" },
              { name: "Cape Town Retail Group", industry: "Retail" },
              { name: "Durban Health Systems", industry: "Healthcare" },
            ].map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-neutral-700/30 transition-all duration-300 hover:border-primary-500/30"
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

          {/* Testimonials Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Thabo Mthembu",
                role: "CEO",
                company: "AfriTech Solutions",
                content: "NovaTek transformed our entire IT infrastructure. Their technology solutions saved us 40% in operational costs while improving our system reliability.",
                rating: 5
              },
              {
                name: "Sarah van der Merwe",
                role: "Operations Director",
                company: "Limpopo Logistics",
                content: "The automation solutions they implemented streamlined our entire supply chain process. We've seen a 60% reduction in manual errors and faster delivery times.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-neutral-800/50 transition-all duration-300 hover:border-primary-500/30"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex text-primary-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Process Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-background-secondary via-background to-background-secondary relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 bg-circuit-board"
        ></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Our Proven Process
            </h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto">
              We follow a structured approach to ensure every project delivers exceptional results
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We start by understanding your business needs, current systems, and digital transformation goals through comprehensive analysis.",
                icon: <Target className="w-8 h-8" />,
                color: "from-primary-500 to-primary-600"
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "Our experts develop a customized digital strategy and detailed project roadmap tailored to your specific requirements.",
                icon: <Settings className="w-8 h-8" />,
                color: "from-accent-500 to-accent-600"
              },
              {
                step: "03",
                title: "Design & Development",
                description: "We build robust, scalable solutions using cutting-edge technologies and best practices for optimal performance.",
                icon: <Globe className="w-8 h-8" />,
                color: "from-primary-600 to-accent-600"
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Seamless deployment followed by ongoing support, monitoring, and optimization to ensure long-term success.",
                icon: <Award className="w-8 h-8" />,
                color: "from-accent-600 to-primary-500"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-neutral-800/50 transition-all duration-300 hover:border-primary-500/30 h-full">
                  {/* Step Number */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto`}>
                    {process.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-10 h-10 bg-gradient-to-br ${process.color} rounded-lg flex items-center justify-center text-white mb-3 mx-auto`}>
                    {process.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 text-center">
                    {process.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-center text-sm">
                    {process.description}
                  </p>
                </div>

                {/* Connection Line (except for last item) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Process Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-xl p-6 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Digital Journey?</h3>
              <p className="text-slate-300 mb-6">Every successful project begins with a conversation. Let&apos;s discuss how we can transform your business.</p>
              <Button className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-3 rounded-lg transition-all duration-300">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-professional bg-gradient-to-br from-background via-background-secondary to-background relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 bg-data-visualization"
        ></div>
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
