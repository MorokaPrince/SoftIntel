"use client";

import { motion } from "framer-motion";
import {
    Globe,
    Smartphone,
    Shield,
    Settings,
    ArrowRight,
    CheckCircle,
    Users,
    Code,
    MessageCircle,
    TrendingUp,
  } from "lucide-react";
import { Service } from "@/types";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const services: Service[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Professional websites that showcase your business and convert visitors into customers. Perfect for any South African business looking to establish a strong online presence.",
    features: [
      "Modern, responsive design",
      "Mobile-optimized layouts",
      "SEO-ready structure",
      "Contact forms & WhatsApp integration",
      "Google Maps integration",
      "Social media links",
      "Basic analytics setup",
      "1 year hosting included"
    ],
    icon: "Globe",
    ctaText: "Get Your Website",
    startingPrice: "R7,500",
  },
  {
    id: "ecommerce-stores",
    title: "E-commerce Stores",
    description: "Complete online stores with payment processing, inventory management, and secure checkout. Start selling your products online with confidence.",
    features: [
      "Complete online store setup",
      "Payment gateway integration",
      "Inventory management system",
      "Secure SSL certificate",
      "Product catalog & categories",
      "Customer accounts & orders",
      "Mobile payment support",
      "Basic marketing tools"
    ],
    icon: "Smartphone",
    ctaText: "Start Selling Online",
    startingPrice: "R15,000",
  },
  {
    id: "business-apps",
    title: "Business Applications",
    description: "Custom software applications that streamline your operations and improve efficiency. From simple tools to complex business systems.",
    features: [
      "Custom business applications",
      "Database design & setup",
      "User management systems",
      "Reporting dashboards",
      "API integrations",
      "Mobile-responsive interface",
      "Data backup & security",
      "Training & documentation"
    ],
    icon: "Code",
    ctaText: "Build Your App",
    startingPrice: "R25,000",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Complete digital marketing solutions including SEO, social media management, and online advertising to grow your business online.",
    features: [
      "Search engine optimization (SEO)",
      "Social media management",
      "Google Ads & Facebook Ads",
      "Content marketing strategy",
      "Email marketing campaigns",
      "Analytics & reporting",
      "Brand identity development",
      "Online reputation management"
    ],
    icon: "Globe",
    ctaText: "Boost Your Online Presence",
    startingPrice: "R12,000",
  },
  {
    id: "compliance-solutions",
    title: "Compliance Solutions",
    description: "Stay compliant with South African regulations including FSCA, CIPC, and other industry requirements with automated compliance tools.",
    features: [
      "FSCA compliance dashboards",
      "CIPC integration tools",
      "Automated regulatory reporting",
      "Document management systems",
      "Risk assessment tools",
      "Audit trail systems",
      "Compliance monitoring",
      "Regulatory update alerts"
    ],
    icon: "Shield",
    ctaText: "Stay Compliant",
    startingPrice: "R18,000",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description: "Expert IT consultation to optimize your technology stack, improve security, and plan for future growth with personalized recommendations.",
    features: [
      "Technology stack assessment",
      "Security audit & recommendations",
      "Digital transformation planning",
      "System integration planning",
      "Cloud migration strategies",
      "Cost optimization analysis",
      "Implementation roadmap",
      "Ongoing support planning"
    ],
    icon: "Settings",
    ctaText: "Get Expert Advice",
    startingPrice: "R5,000",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, understand your business goals, and create a comprehensive project plan.",
  },
  {
    step: "02",
    title: "Design & Development",
    description: "Our expert team designs and builds your solution using cutting-edge technologies and best practices.",
  },
  {
    step: "03",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your solution meets the highest standards of quality and performance.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "We deploy your solution and provide ongoing support to ensure continued success.",
  },
];

const technologies = [
   { name: "React", icon: "⚛️" },
   { name: "Next.js", icon: "▲" },
   { name: "TypeScript", icon: "🔷" },
   { name: "Node.js", icon: "🟢" },
   { name: "Python", icon: "🐍" },
   { name: "AWS", icon: "☁️" },
   { name: "MongoDB", icon: "🍃" },
   { name: "PostgreSQL", icon: "🐘" },
 ];

const completedProjects = [
   {
     name: "AgrIntel",
     description: "Advanced farming management system with crop monitoring, yield prediction, and resource optimization for agricultural businesses.",
     industry: "Agriculture",
     status: "Completed",
     year: "2024",
     features: ["Real-time crop monitoring", "Weather integration", "Resource optimization", "Mobile app"]
   },
   {
     name: "TTL",
     description: "Tshomisano Tech Logistic - Comprehensive courier management platform with route optimization and real-time tracking.",
     industry: "Logistics",
     status: "Completed",
     year: "2024",
     features: ["Route optimization", "Real-time tracking", "Fleet management", "Customer portal"]
   },
   {
     name: "BETBEE",
     description: "Sports betting prediction and analytics dashboard with real-time odds comparison and betting insights.",
     industry: "Sports & Gaming",
     status: "Completed",
     year: "2024",
     features: ["Live odds tracking", "Prediction algorithms", "Analytics dashboard", "Mobile responsive"]
   },
   {
     name: "ComplIntel",
     description: "Compliance and audit management application with automated reporting and regulatory compliance tracking.",
     industry: "Financial Services",
     status: "Completed",
     year: "2024",
     features: ["Automated reporting", "Compliance tracking", "Audit trails", "Regulatory alerts"]
   },
   {
     name: "MedTech Pro",
     description: "Healthcare management system for clinics and medical practices with patient records and appointment scheduling.",
     industry: "Healthcare",
     status: "Completed",
     year: "2024",
     features: ["Patient management", "Appointment scheduling", "Medical records", "Telemedicine integration"]
   }
 ];

const projectsInProgress = [
   {
     name: "EduPlatform SA",
     description: "Educational platform for South African schools with online learning management and assessment tools.",
     industry: "Education",
     status: "In Development",
     progress: "75%"
   },
   {
     name: "RetailFlow",
     description: "E-commerce platform with inventory management and multi-channel selling capabilities.",
     industry: "E-commerce",
     status: "In Development",
     progress: "60%"
   },
   {
     name: "PropertyHub",
     description: "Real estate management platform with property listings, tenant management, and maintenance tracking.",
     industry: "Real Estate",
     status: "In Development",
     progress: "45%"
   },
   {
     name: "FinanceAI",
     description: "AI-powered financial planning and budgeting application for individuals and small businesses.",
     industry: "FinTech",
     status: "In Development",
     progress: "30%"
   }
 ];

export default function ServicesPage() {
  const getProgressClass = (progress: string) => {
    const percentage = parseInt(progress.replace('%', ''));
    return `progress-${percentage}`;
  };

  const handleWhatsAppQuote = () => {
    const message = `🚀 Hi! I'm interested in getting a FREE QUOTE from NovaTek.

📋 Service Requirements: [Please specify your needs]
💼 Company: [Your company name]
📧 Contact: [Your email]
📱 Phone: [Your phone number]
💰 Budget Range: [Your budget range]
⏰ Timeline: [Your preferred timeline]

💬 I'm ready to discuss my project requirements!

---
Best regards,
Potential Client

💬 This inquiry was sent from the NovaTek Services page`;

    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleWhatsAppConsultation = () => {
    const message = `📅 Hi! I'd like to SCHEDULE A CONSULTATION with NovaTek.

📋 Consultation Type: [General/Specific service]
💼 Company: [Your company name]
📧 Contact: [Your email]
📱 Phone: [Your phone number]
🎯 Focus Area: [What you'd like to discuss]
⏰ Preferred Time: [Your availability]

💬 I'm looking forward to discussing how NovaTek can help my business!

---
Best regards,
Potential Client

💬 This inquiry was sent from the NovaTek Services page`;

    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleServiceInquiry = (service: Service) => {
    const message = `🚀 Hi! I'm interested in ${service.title} from NovaTek.

📋 Service: ${service.title}
💰 Starting Price: ${service.startingPrice || 'Custom quote'}
💼 Company: [Your company name]
📧 Contact: [Your email]
📱 Phone: [Your phone number]
⏰ Timeline: [Your preferred timeline]

📝 Service Features I'm interested in:
${service.features.slice(0, 4).map(feature => `• ${feature}`).join('\n')}

💬 I'd like to discuss this service in more detail!

---
Best regards,
Potential Client

💬 This inquiry was sent from the NovaTek Services page`;

    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section - Enhanced Design */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20 pb-16 overflow-hidden">
        <AnimatedBackground
          variant="hero"
          theme="dark"
          backgroundImage="/ict-information-communications-technology-modern-server-room-background-virtual-screen_161452-3091.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-lg animate-bounce delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-7xl mx-auto">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-sm font-semibold mb-12 shadow-2xl"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              PREMIUM DIGITAL SOLUTIONS • INNOVATIVE TECHNOLOGY • PROVEN RESULTS
            </motion.div>

            {/* Main Headline - Ultra Modern Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              TRANSFORM YOUR{" "}
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                DIGITAL FUTURE
              </span>
              <span className="text-4xl md:text-6xl lg:text-7xl block mt-2 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                TODAY
              </span>
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto font-light"
            >
              Cutting-edge digital solutions that propel businesses into the future with{" "}
              <span className="font-semibold text-white">AI-powered innovation</span>,{" "}
              <span className="font-semibold text-cyan-300">seamless automation</span>, and{" "}
              <span className="font-semibold text-purple-300">unparalleled performance</span>.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -5, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-12 py-6 rounded-xl font-bold text-lg transition-all duration-500 shadow-xl hover:shadow-emerald-500/50 flex items-center justify-center min-w-[280px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <MessageCircle className="w-8 h-8 mr-4" />
                START YOUR JOURNEY
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -5, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-12 py-6 rounded-xl font-bold text-lg transition-all duration-500 shadow-xl hover:shadow-orange-500/50 flex items-center justify-center min-w-[280px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <ArrowRight className="w-8 h-8 mr-4" />
                BOOK CONSULTATION
              </motion.button>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200 font-medium">Trusted Businesses</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">5+</div>
                <div className="text-blue-200 font-medium">Years Experience</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200 font-medium">Premium Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Services Showcase - Ultra Modern Design */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(120,119,198,0.05),transparent_50%)] opacity-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,_rgba(120,119,198,0.03),transparent_50%)]"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 services-grid-pattern"></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-cyan-200/40 to-blue-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-2xl animate-bounce delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              COMPREHENSIVE SERVICE PORTFOLIO
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                SOLUTIONS THAT
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                DRIVE RESULTS
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              From concept to deployment, we deliver end-to-end digital solutions that transform businesses and accelerate growth in the digital age.
            </p>
          </motion.div>

          {/* Service Categories Grid - Enhanced Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const iconMap: Record<string, typeof Globe> = {
                Globe,
                Smartphone,
                Shield,
                Settings,
                Code,
              };

              const IconComponent = iconMap[service.icon] || Globe;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{
                    y: -20,
                    scale: 1.05,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-blue-200/50 overflow-hidden"
                >
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                    <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-3xl"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.6 }
                      }}
                      className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-xl group-hover:shadow-blue-500/50 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <IconComponent size={32} className="relative z-10" />
                    </motion.div>

                    {/* Service Title */}
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm font-medium line-clamp-3">
                      {service.description}
                    </p>

                    {/* Enhanced Features List */}
                    <div className="space-y-3 mb-8">
                      {service.features.slice(0, 5).map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.1 }}
                          className="flex items-start group/feature"
                        >
                          <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-3 mt-0.5 shadow-sm group-hover/feature:shadow-green-400/50 transition-shadow duration-300">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-slate-700 font-medium leading-relaxed group-hover/feature:text-slate-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                      {service.features.length > 5 && (
                        <div className="text-sm text-blue-600 font-semibold">
                          +{service.features.length - 5} more features
                        </div>
                      )}
                    </div>

                    {/* Pricing Section */}
                    <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200/50">
                      <div>
                        <motion.span
                          className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                          whileHover={{ scale: 1.1 }}
                        >
                          {service.startingPrice}
                        </motion.span>
                        <div className="text-xs text-slate-500 font-medium">Starting price</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-600 bg-white px-3 py-1 rounded-full font-semibold border border-slate-200">
                          One-time
                        </div>
                      </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleServiceInquiry(service)}
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/40 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative z-10">{service.ctaText}</span>
                      <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Portfolio Section - With GIF Background */}
      <section className="relative py-8 tech-bg-accent overflow-hidden">
        {/* GIF Background - Medium Size */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-cover bg-logo-medium bg-logo-2" />
        </div>

        {/* Rich Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95"></div>
        <div className="absolute inset-0 geometric-bg opacity-10"></div>
        <div className="absolute inset-0 digital-grid opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="heading-h1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-poppins-black mb-4">
              OUR PROJECT PORTFOLIO
            </h2>
            <p className="heading-h3 text-blue-100 max-w-4xl mx-auto font-inter-semibold mb-6">
              Real solutions for real businesses - NovaTek delivers intelligent software solutions with proven results
            </p>
            <div className="flex justify-center items-center gap-8 text-blue-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">5</div>
                <div className="text-sm">Completed</div>
              </div>
              <div className="w-px h-12 bg-blue-400"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">4</div>
                <div className="text-sm">In Progress</div>
              </div>
              <div className="w-px h-12 bg-blue-400"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">2024</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </motion.div>

          {/* Completed Projects */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Completed Projects
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                        {project.name}
                      </h4>
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                        {project.industry}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center text-xs text-blue-200">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Projects in Progress */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Projects in Development
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectsInProgress.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {project.name}
                      </h4>
                      <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-semibold">
                        {project.progress}
                      </span>
                    </div>

                    <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                        {project.industry}
                      </span>
                    </div>

                    <div className="w-full bg-blue-900/30 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full transition-all duration-500 ${getProgressClass(project.progress)}`}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Process Section - Ultra Modern Design */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(120,119,198,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.05),transparent_70%)]"></div>

        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 process-circuit-pattern"></div>
        </div>

        {/* Connection Lines - Animated */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1200 400">
            <path d="M100,200 Q300,100 500,200 T900,200 T1100,200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M200,150 Q400,50 600,150 T1000,150" stroke="rgba(120,119,198,0.4)" strokeWidth="1" fill="none" strokeDasharray="3,3">
              <animate attributeName="stroke-dashoffset" values="0;-12" dur="1.5s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>

        {/* Floating Nodes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-blue-400 rounded-full animate-pulse delay-700 shadow-lg shadow-blue-400/50"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-indigo-400 rounded-full animate-pulse delay-1000 shadow-lg shadow-indigo-400/50"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/30 text-cyan-100 px-8 py-4 rounded-full text-sm font-semibold mb-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
              STREAMLINED DEVELOPMENT METHODOLOGY
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                OUR PROCESS
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                PERFECTION
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
              A meticulously crafted, battle-tested methodology that transforms ideas into exceptional digital experiences through systematic excellence.
            </p>
          </motion.div>

          {/* Enhanced Process Flow */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <div className="flex justify-between items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400/50 to-blue-400/50 mx-4"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse delay-300"></div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400/50 to-indigo-400/50 mx-4"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse delay-600"></div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 mx-4"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-pulse delay-900"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 text-center overflow-hidden"
                >
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Animated Ring */}
                  <div className="absolute inset-4 rounded-3xl border-2 border-cyan-400/20 group-hover:border-cyan-400/50 transition-all duration-500"></div>

                  <div className="relative z-10">
                    {/* Enhanced Step Number */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                      className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-black text-xl mb-6 mx-auto shadow-2xl group-hover:shadow-cyan-400/50 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative z-10">{step.step}</span>
                    </motion.div>

                    {/* Step Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-blue-100 text-base font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mt-6 flex justify-center">
                      <div className={`w-2 h-2 rounded-full animate-pulse ${
                        index === 0 ? 'bg-cyan-400' :
                        index === 1 ? 'bg-blue-400' :
                        index === 2 ? 'bg-purple-400' : 'bg-pink-400'
                      }`}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "99%", label: "Project Success Rate" },
              { number: "50+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" },
              { number: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section - With GIF Background */}
      <section className="py-8 tech-bg-secondary relative">
        {/* GIF Background - Small Size */}
        <div className="absolute inset-0 opacity-18">
          <div className="absolute inset-0 bg-cover bg-logo-small bg-logo-4" />
        </div>
        <div className="absolute inset-0 digital-grid opacity-30"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-3 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              TECHNOLOGIES WE USE
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-semibold"
            >
              We leverage cutting-edge technologies to build robust, scalable solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center p-3 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-transparent hover:border-blue-200"
              >
                <div className="text-2xl md:text-3xl mb-1">{tech.icon}</div>
                <div className="text-xs md:text-sm font-bold text-slate-800">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - With GIF Background */}
      <section className="py-8 tech-bg-accent text-white relative">
        {/* GIF Background - Medium Size */}
        <div className="absolute inset-0 opacity-35">
          <div className="absolute inset-0 bg-cover bg-logo-subtle bg-logo-2" />
        </div>
        <div className="absolute inset-0 digital-grid opacity-25"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              INDUSTRIES WE SERVE
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-semibold"
            >
              Our solutions are tailored for diverse industries across Africa
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Financial Services",
              "Healthcare",
              "E-commerce",
              "Education",
              "Manufacturing",
              "Real Estate",
              "Logistics",
              "Government",
              "Non-Profit",
              "Startups",
              "SMEs",
              "Enterprise",
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-center space-x-3 p-3 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
              >
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="font-bold text-sm md:text-base">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary CTA Section - Ultra Modern Design */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(120,119,198,0.05),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(120,119,198,0.03),transparent_50%)]"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 cta-grid-pattern"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-green-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-2xl animate-bounce delay-500"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-3 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              READY TO START YOUR DIGITAL TRANSFORMATION?
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-700 mb-6 max-w-3xl mx-auto font-semibold">
              Let&apos;s discuss your project requirements and create a custom solution
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppQuote}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-green-500/50"
              >
                GET FREE QUOTE
                <ArrowRight className="w-6 h-6 inline ml-3" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppConsultation}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-orange-500/50"
              >
                SCHEDULE CONSULTATION
              </motion.button>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}