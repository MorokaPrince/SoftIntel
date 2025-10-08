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
    const message = `🚀 Hi! I'm interested in getting a FREE QUOTE from SoftIntel.

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

💬 This inquiry was sent from the SoftIntel Services page`;

    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleWhatsAppConsultation = () => {
    const message = `📅 Hi! I'd like to SCHEDULE A CONSULTATION with SoftIntel.

📋 Consultation Type: [General/Specific service]
💼 Company: [Your company name]
📧 Contact: [Your email]
📱 Phone: [Your phone number]
🎯 Focus Area: [What you'd like to discuss]
⏰ Preferred Time: [Your availability]

💬 I'm looking forward to discussing how SoftIntel can help my business!

---
Best regards,
Potential Client

💬 This inquiry was sent from the SoftIntel Services page`;

    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleServiceInquiry = (service: Service) => {
    const message = `🚀 Hi! I'm interested in ${service.title} from SoftIntel.

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

💬 This inquiry was sent from the SoftIntel Services page`;

    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section - Black Theme */}
      <section className="relative bg-black pt-20 pb-16 overflow-hidden">
        <AnimatedBackground
          variant="hero"
          theme="dark"
          backgroundImage="/ict-information-communications-technology-modern-server-room-background-virtual-screen_161452-3091.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
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

            {/* Main Headline - Much Larger & More Impactful */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-hero font-black text-white mb-6 leading-[0.9]"
            >
              COMPREHENSIVE DIGITAL SOLUTIONS FOR{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                MODERN BUSINESSES
              </span>
            </motion.h1>

            {/* Professional Subtitle - Concise & Impactful */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto font-medium"
            >
              Professional digital solutions that transform businesses and drive growth across Africa.
            </motion.p>

            {/* Professional CTA Buttons - More Vibrant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-green-500/50 flex items-center justify-center min-w-[280px]"
              >
                <MessageCircle className="w-7 h-7 mr-3" />
                START WHATSAPP CHAT
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center min-w-[280px]"
              >
                <ArrowRight className="w-7 h-7 mr-3" />
                SCHEDULE CONSULTATION
              </motion.button>
            </motion.div>

            {/* Trust Indicators - More Prominent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center items-center gap-12 text-lg text-blue-200 font-semibold"
            >
              <div className="flex items-center">
                <Shield className="w-6 h-6 mr-3 text-green-400" />
                TRUSTED BY 50+ BUSINESSES
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-3 text-blue-400" />
                5+ YEARS EXPERIENCE
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-yellow-400" />
                24/7 SUPPORT AVAILABLE
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid - With GIF Background */}
      <section className="relative py-8 tech-bg-secondary overflow-hidden">
        {/* GIF Background - Small Size */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-logo-subtle bg-logo-2" />
        </div>

        {/* Rich Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-blue-50/85 to-indigo-50/90"></div>
        <div className="absolute inset-0 geometric-bg opacity-8"></div>
        <div className="absolute inset-0 digital-grid opacity-15"></div>

        {/* Floating Elements */}
        <div className="absolute top-5 left-5 w-12 h-12 border border-blue-200/40 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-5 right-5 w-10 h-10 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-lg blur-sm animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="heading-h1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-poppins-black">OUR SERVICE OFFERINGS</h2>
            <p className="heading-h3 text-slate-700 max-w-4xl mx-auto font-inter-semibold">Professional solutions tailored to your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-white/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 to-indigo-600/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-2xl group-hover:shadow-blue-500/40"
                    >
                      <IconComponent size={28} />
                    </motion.div>

                    <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 service-title">
                      {service.title}
                    </h3>

                    <p className="text-slate-700 mb-4 leading-relaxed text-sm md:text-base font-medium service-description">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-center text-xs md:text-sm text-slate-700 font-medium" style={{ fontFamily: '"Inter", "Poppins", sans-serif', fontWeight: '500' }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mb-4">
                      <motion.span
                        className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.1 }}
                        style={{ fontFamily: '"Poppins", "Inter", sans-serif', fontWeight: '900', letterSpacing: '-0.02em' }}
                      >
                        From {service.startingPrice}
                      </motion.span>
                      <span className="text-xs text-slate-600 bg-slate-200 px-2 py-1 rounded-full font-semibold service-price">One-time payment</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleServiceInquiry(service)}
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl group-hover:shadow-blue-500/40"
                      style={{ fontFamily: '"Poppins", "Inter", sans-serif', fontWeight: '800', letterSpacing: '-0.005em' }}
                    >
                      {service.ctaText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
              Real solutions for real businesses - SoftIntel delivers intelligent software solutions with proven results
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

      {/* Process Section - With GIF Background */}
      <section className="py-8 tech-bg-primary relative">
        {/* GIF Background - Medium Size */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-cover bg-logo-medium bg-logo-1" />
        </div>
        <div className="absolute inset-0 circuit-bg opacity-40"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
            >
              OUR DEVELOPMENT PROCESS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-semibold"
            >
              A proven methodology that ensures quality, efficiency, and successful project delivery
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-black text-lg mb-3 mx-auto shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-100 text-sm md:text-base font-medium">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
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

      {/* CTA Section - With GIF Background */}
      <section className="py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
        {/* GIF Background - Small Size */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-cover bg-logo-reverse bg-logo-1" />
        </div>
        <div className="container mx-auto px-4 text-center">
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
      </section>
    </div>
  );
}