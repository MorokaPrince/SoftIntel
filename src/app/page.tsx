"use client";

import { motion } from "framer-motion";
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
      {/* Clean Hero Section - So Interactive Style */}
      <section className="relative bg-white pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden">
        <div className="container-safe relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Headline - Clean & Bold */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight"
            >
              We craft{" "}
              <span className="text-primary-600 relative">
                digital experiences
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6C20 2, 40 2, 58 6C76 10, 96 10, 98 6" stroke="#E89F4C" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              that drive results
            </motion.h1>

            {/* Clean Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-600 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Moroka & Associates partners with ambitious South African businesses to create innovative digital solutions that transform operations and accelerate growth across Africa.
            </motion.p>

            {/* Clean CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={handleGetQuote}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 transform hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={handleWhatsAppClick}
                className="border-2 border-neutral-300 text-neutral-700 hover:border-primary-600 hover:text-primary-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Let's Talk
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50"></div>
        </div>
      </section>

      {/* Clean Services Section - So Interactive Style */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-safe">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
            >
              What We Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            >
              We partner with South African businesses to solve complex challenges through intelligent digital solutions that drive measurable results.
            </motion.p>
          </div>

          {/* Clean Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 group hover:border-primary-200"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-200 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-neutral-700">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/services">
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
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
