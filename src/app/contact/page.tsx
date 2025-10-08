"use client";

import { motion } from "framer-motion";
import {
   Phone,
   Mail,
   MapPin,
   MessageCircle,
   Clock,
   Send,
   CheckCircle,
   ArrowRight,
   Calendar,
   Users,
   Building2,
   Award,
   Shield,
   Headphones,
   Twitter,
   Linkedin,
   Instagram,
   Facebook,
 } from "lucide-react";
import { useState } from "react";
import { ContactFormData } from "@/types";
import { validateContactForm, generateWhatsAppURL } from "@/utils";
import toast from "react-hot-toast";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const contactInfo = [
   {
     icon: Phone,
     title: "Phone",
     details: "+27 79 448 4159",
     description: "Call us for immediate assistance",
     action: "tel:+27794484159",
   },
  {
    icon: Mail,
    title: "Email",
    details: "itsolutions@morokaandassociates.com",
    description: "Send us an email anytime",
    action: "mailto:itsolutions@morokaandassociates.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Limpopo, South Africa",
    description: "Serving clients across Africa",
    action: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 8:00 AM - 6:00 PM",
    description: "24/7 support for urgent matters",
    action: "#",
  },
];

const services = [
  "Web Design & Development",
  "Mobile Applications",
  "Digital Marketing",
  "Business Compliance Tools",
  "IT Consulting & Support",
  "Cloud Solutions",
  "Other",
];

const budgetRanges = [
  "R10,000 - R50,000",
  "R50,000 - R200,000",
  "R200,000+",
  "Let's discuss",
];

const timelines = [
  "Urgent (1 month)",
  "Medium (3 months)",
  "Flexible (6+ months)",
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const errors = validateContactForm(formData);
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      setIsSubmitting(false);
      return;
    }

    try {
      // Send to backend API
      const response = await fetch("http://localhost:3006/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in SoftIntel services.

Name: ${formData.name || "Not specified"}
Company: ${formData.company || "Not specified"}
Service: ${formData.service || "Not specified"}
Budget: ${formData.budget || "Not specified"}
Timeline: ${formData.timeline || "Not specified"}

Message: ${formData.message || "No additional message"}`;

    window.open(generateWhatsAppURL(message), "_blank");
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Enhanced Professional Hero Section - Black Theme */}
      <section className="relative pt-16 pb-8 overflow-hidden bg-black">
        <AnimatedBackground
          variant="hero"
          theme="dark"
          backgroundImage="/ict-information-communications-technology-modern-server-room-background-virtual-screen_161452-3091.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
            >
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              PROFESSIONAL IT SOLUTIONS
            </motion.div>

            {/* Main Headline - Black Theme */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-hero text-white mb-8 leading-[1.1]"
            >
              Let&apos;s Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                Digital Future
              </span>
            </motion.h1>

            {/* Professional Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-4xl mx-auto font-medium"
            >
              Partner with our expert team to build innovative solutions that drive growth and scale your business.
            </motion.p>

            {/* Professional CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-w-[200px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start WhatsApp Chat
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-w-[200px]"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500"
            >
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-600" />
                Trusted by 50+ Businesses
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-blue-600" />
                5+ Years Experience
              </div>
              <div className="flex items-center">
                <Headphones className="w-4 h-4 mr-2 text-indigo-600" />
                24/7 Support Available
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Contact Info Cards */}
      <section className="relative py-8 tech-bg-secondary overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-50/95"></div>
        <div className="absolute inset-0 geometric-bg opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4"
            >
              Get in Touch with Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Choose your preferred way to connect with us. We&apos;re here to help you succeed.
            </motion.p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200/50 hover:border-blue-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-6 mx-auto shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">
                    {info.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2 text-center">
                    {info.details}
                  </p>
                  <p className="text-slate-600 text-sm text-center leading-relaxed">
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Section - Coming Soon */}
      <section className="relative py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 geometric-bg opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Follow us on social media for updates, insights, and industry news
            </p>
          </motion.div>

          <div className="flex justify-center items-center gap-8">
            {/* WhatsApp - Active */}
            <motion.a
              href="https://wa.me/27794484159"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center space-y-3 p-6 bg-green-50 rounded-2xl border-2 border-green-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:bg-green-600 transition-colors duration-300">
                <MessageCircle size={28} />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-slate-900 mb-1">WhatsApp</h3>
                <p className="text-sm text-slate-600">Chat with us</p>
              </div>
            </motion.a>

            {/* Twitter - Coming Soon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-center space-y-3 p-6 bg-slate-100 rounded-2xl border-2 border-slate-200 opacity-60"
            >
              <div className="w-16 h-16 bg-slate-400 rounded-full flex items-center justify-center text-white relative">
                <Twitter size={28} />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-900">Soon</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-slate-500 mb-1">Twitter</h3>
                <p className="text-sm text-slate-400">Coming Soon</p>
              </div>
            </motion.div>

            {/* LinkedIn - Coming Soon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center space-y-3 p-6 bg-slate-100 rounded-2xl border-2 border-slate-200 opacity-60"
            >
              <div className="w-16 h-16 bg-slate-400 rounded-full flex items-center justify-center text-white relative">
                <Linkedin size={28} />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-900">Soon</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-slate-500 mb-1">LinkedIn</h3>
                <p className="text-sm text-slate-400">Coming Soon</p>
              </div>
            </motion.div>

            {/* Facebook - Coming Soon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col items-center space-y-3 p-6 bg-slate-100 rounded-2xl border-2 border-slate-200 opacity-60"
            >
              <div className="w-16 h-16 bg-slate-400 rounded-full flex items-center justify-center text-white relative">
                <Facebook size={28} />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-900">Soon</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-slate-500 mb-1">Facebook</h3>
                <p className="text-sm text-slate-400">Coming Soon</p>
              </div>
            </motion.div>

            {/* Instagram - Coming Soon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col items-center space-y-3 p-6 bg-slate-100 rounded-2xl border-2 border-slate-200 opacity-60"
            >
              <div className="w-16 h-16 bg-slate-400 rounded-full flex items-center justify-center text-white relative">
                <Instagram size={28} />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-900">Soon</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-slate-500 mb-1">Instagram</h3>
                <p className="text-sm text-slate-400">Coming Soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Contact Form & Info Section */}
      <section className="relative py-8 tech-bg-primary overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-blue-50/95"></div>
        <div className="absolute inset-0 circuit-bg opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl border border-slate-200/50"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-3">
                  Send us a Message
                </h2>
                <p className="text-slate-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                      placeholder="+27 XX XXX XXXX"
                      required
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="block text-sm font-semibold text-slate-700">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <label htmlFor="timeline" className="block text-sm font-semibold text-slate-700">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white resize-none"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need. The more details you provide, the better we can assist you."
                    required
                  />
                </div>

                {/* Enhanced Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-500 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-3" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Enhanced Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                  Why Choose SoftIntel?
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We&apos;re committed to delivering intelligent software solutions that drive real business results globally.
                </p>
              </div>

              {/* Professional Features List */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Expert Consultation
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Schedule a free consultation with our experienced team to discuss your project requirements and get tailored recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Instant WhatsApp Support
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Get immediate responses to your questions via WhatsApp. Our team is available during business hours for quick assistance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Rapid Response Guarantee
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We guarantee a response to all inquiries within 24 hours during business days, often much sooner.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-3">
                  Need Immediate Assistance?
                </h4>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  For urgent matters or technical emergencies, connect with us instantly via WhatsApp for the fastest response.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start WhatsApp Chat
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="relative py-8 tech-bg-accent text-white overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95"></div>

        {/* Digital Grid Overlay */}
        <div className="absolute inset-0 digital-grid opacity-10"></div>

        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 circuit-bg opacity-8"></div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 geometric-bg opacity-5"></div>

        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-lg animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-indigo-400/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-lg blur-lg animate-pulse delay-500"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Don&apos;t wait to unlock your digital potential. Connect with our expert team today and let&apos;s build something extraordinary together.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center min-w-[220px]"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Start WhatsApp Chat
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center min-w-[220px]"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-3" />
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-blue-200"
            >
              <div className="flex items-center">
                <Building2 className="w-4 h-4 mr-2" />
                50+ Successful Projects
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                5+ Years of Excellence
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                100% Client Satisfaction
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}