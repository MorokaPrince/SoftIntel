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
                Start Your Digital Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={handleWhatsAppClick}
                className="btn-professional-secondary btn-hover-scale"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Our Experts
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
              <Target className="w-5 h-5 mr-2 text-primary-400" />
              SPECIALIZED DIGITAL SOLUTIONS
            </motion.div>
            <h2 className="heading-display text-3xl md:text-4xl text-white mb-6">
              Enterprise-Grade Digital Solutions
            </h2>
            <p className="text-professional text-lg text-slate-300 max-w-2xl mx-auto">
              From system integration to cloud infrastructure, we deliver tailored technology solutions that drive real business results
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <Settings className="w-10 h-10" />,
                title: "System Integration & Automation",
                description: "Streamline your business processes with intelligent automation and seamless system integration",
                features: ["Workflow Automation", "Legacy System Integration", "Process Optimization", "Custom APIs"],
                caseStudy: "Automated invoicing system saving 30 hours/week",
              },
              {
                icon: <BarChart3 className="w-10 h-10" />,
                title: "Business Intelligence & Analytics",
                description: "Transform your data into actionable insights with advanced analytics and reporting solutions",
                features: ["Real-time Dashboards", "Predictive Analytics", "Data Warehousing", "Performance Monitoring"],
                caseStudy: "Improved forecasting accuracy by 65%",
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Cloud Solutions & Infrastructure",
                description: "Modernize your IT infrastructure with scalable cloud solutions and robust hosting",
                features: ["Cloud Migration", "DevOps Implementation", "24/7 Monitoring", "Disaster Recovery"],
                caseStudy: "Reduced infrastructure costs by 40%",
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

      {/* Client Trust Indicators & Testimonials */}
      <section className="py-20 bg-gradient-to-br from-background via-background-secondary to-background relative">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by South African Businesses
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              See how we've helped businesses across South Africa achieve their digital transformation goals
            </p>
          </motion.div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center max-w-6xl mx-auto mb-20">
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

          {/* Testimonials Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Thabo Mthembu",
                role: "CEO",
                company: "AfriTech Solutions",
                content: "Moroka & Associates transformed our entire IT infrastructure. Their cloud migration saved us 40% in operational costs while improving our system reliability.",
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
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-neutral-800/50 transition-all duration-300 hover:border-primary-500/30"
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
                <p className="text-slate-300 mb-4 leading-relaxed">"{testimonial.content}"</p>
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
      <section className="py-20 bg-gradient-to-br from-background-secondary via-background to-background-secondary relative">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
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
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-neutral-800/50 transition-all duration-300 hover:border-primary-500/30 h-full">
                  {/* Step Number */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto`}>
                    {process.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                    {process.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {process.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-center">
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
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Digital Journey?</h3>
              <p className="text-slate-300 mb-6">Every successful project begins with a conversation. Let's discuss how we can transform your business.</p>
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
