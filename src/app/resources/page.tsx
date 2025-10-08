"use client";

import { motion } from "framer-motion";
import {
   Calendar,
   Clock,
   User,
   ArrowRight,
   Search,
   BookOpen,
   Star,
   TrendingUp,
   Shield,
   Code,
   Cloud,
   Smartphone,
   Users,
 } from "lucide-react";
import Image from "next/image";
import { BlogPost } from "@/types";
import ScatteredLogo from "@/components/ui/ScatteredLogo";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const blogPosts: BlogPost[] = [
   {
     id: "digital-compliance-tools",
     title: "Digital Compliance Tools for SA Businesses",
     excerpt: "Streamline regulatory compliance with automated digital solutions. Reduce manual work and ensure FSCA & CIPC compliance effortlessly.",
     content: "Full article content here...",
     author: "May Rakgama",
     date: "2024-09-15",
     readTime: "3 min read",
     tags: ["Compliance", "Digital Tools", "South Africa"],
     image: "/plexus-scifi-background_280538-7858.jpg",
     slug: "digital-compliance-tools-south-africa",
   },
   {
     id: "cloud-migration-guide",
     title: "Cloud Migration Guide for African SMEs",
     excerpt: "Step-by-step cloud migration strategy. Cost-effective solutions for African businesses with proven ROI and enhanced security.",
     content: "Full article content here...",
     author: "Moroka Tech Team",
     date: "2024-09-10",
     readTime: "4 min read",
     tags: ["Cloud", "Migration", "SMEs"],
     image: "/plexus-scifi-background_280538-7858.jpg",
     slug: "cloud-migration-guide-african-smes",
   },
   {
     id: "cybersecurity-trends",
     title: "Cybersecurity Trends 2024: Essential Protection",
     excerpt: "Latest cybersecurity threats and protection strategies. Keep your business data secure with practical, actionable insights.",
     content: "Full article content here...",
     author: "Security Team",
     date: "2024-09-05",
     readTime: "3 min read",
     tags: ["Cybersecurity", "Trends", "Protection"],
     image: "/plexus-scifi-background_280538-7858.jpg",
     slug: "cybersecurity-trends-2024",
   },
   {
     id: "mobile-app-development",
     title: "Building Scalable Mobile Apps: Quick Guide",
     excerpt: "Essential best practices for mobile app development. Choose the right tech stack and scale efficiently from day one.",
     content: "Full article content here...",
     author: "Development Team",
     date: "2024-08-28",
     readTime: "4 min read",
     tags: ["Mobile", "Development", "Best Practices"],
     image: "/plexus-scifi-background_280538-7858.jpg",
     slug: "building-scalable-mobile-apps",
   },
   {
     id: "digital-transformation",
     title: "Digital Transformation: African Success Stories",
     excerpt: "Real African businesses that transformed digitally. Learn from local success stories and apply proven strategies.",
     content: "Full article content here...",
     author: "May Rakgama",
     date: "2024-08-20",
     readTime: "5 min read",
     tags: ["Digital Transformation", "Case Studies", "Africa"],
     image: "/plexus-scifi-background_280538-7858.jpg",
     slug: "digital-transformation-success-stories",
   },
   {
     id: "web-development-trends",
     title: "Web Development Trends 2024: Key Updates",
     excerpt: "Essential web development trends shaping 2024. Modern frameworks, performance tips, and emerging technologies.",
     content: "Full article content here...",
     author: "Tech Team",
     date: "2024-08-15",
     readTime: "3 min read",
     tags: ["Web Development", "Trends", "Technology"],
     image: "/ict-information-communications-technology-concept-server-room-background_161452-7815.jpg",
     slug: "web-development-trends-2024",
   },
 ];

const categories = [
   { name: "All", icon: BookOpen, count: blogPosts.length },
   { name: "Digital Marketing", icon: TrendingUp, count: 1 },
   { name: "Cloud Solutions", icon: Cloud, count: 1 },
   { name: "Cybersecurity", icon: Shield, count: 1 },
   { name: "Mobile Development", icon: Smartphone, count: 1 },
   { name: "Web Development", icon: Code, count: 1 },
 ];

const featuredInsights = [
   {
     icon: TrendingUp,
     title: "Digital Adoption in Africa",
     description: "African businesses embracing digital transformation",
     stat: "85%",
     statLabel: "planning digital investments",
   },
   {
     icon: Users,
     title: "Client Satisfaction",
     description: "Excellence in service delivery",
     stat: "98%",
     statLabel: "client satisfaction rate",
   },
   {
     icon: Star,
     title: "Project Success",
     description: "Successful project deliveries since 2024",
     stat: "9+",
     statLabel: "projects completed",
   },
 ];

export default function ResourcesPage() {
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

💬 This inquiry was sent from the SoftIntel Resources page`;

    window.open(
      `https://wa.me/27794484159?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleWhatsAppContact = () => {
    const message = `💬 Hi! I'd like to CONTACT SoftIntel for more information.

📋 Inquiry Type: [General inquiry/Specific question]
💼 Company: [Your company name]
📧 Contact: [Your email]
📱 Phone: [Your phone number]
🎯 Subject: [What you'd like to know about]

💬 I'm interested in learning more about SoftIntel services!

---
Best regards,
Potential Client

💬 This inquiry was sent from the SoftIntel Resources page`;

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
          backgroundImage="/plexus-scifi-background_280538-7858.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
            >
              <BookOpen className="w-4 h-4 mr-2 text-green-400" />
              RESOURCES & INSIGHTS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-hero font-black text-white mb-4 leading-[0.9]"
            >
              STAY AHEAD WITH{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                INDUSTRY INSIGHTS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed max-w-4xl mx-auto font-medium"
            >
              Expert insights on digital transformation, compliance, and modern development practices.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-lg mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-blue-300 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-16 pr-6 py-4 border-2 border-blue-300/50 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Insights - With GIF Background */}
      <section className="relative py-8 tech-bg-secondary overflow-hidden">
        {/* GIF Background - Small Size */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-logo-subtle bg-logo-2" />
        </div>

        {/* Rich Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-blue-50/85 to-indigo-50/90"></div>
        <div className="absolute inset-0 geometric-bg opacity-5"></div>
        <div className="absolute inset-0 digital-grid opacity-10"></div>

        {/* Floating Elements */}
        <div className="absolute top-5 left-5 w-12 h-12 border border-blue-200/30 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-5 right-5 w-10 h-10 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-lg blur-sm animate-pulse delay-500"></div>

        {/* Scattered Logos */}
        <ScatteredLogo size="sm" position="top-left" opacity={0.1} tint="blue" />
        <ScatteredLogo size="md" position="bottom-right" opacity={0.08} tint="indigo" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-3">Featured Insights</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Key statistics and trends shaping African digital transformation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredInsights.map((insight, index) => {
              const IconComponent = insight.icon;
              return (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {insight.description}
                  </p>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {insight.stat}
                  </div>
                  <div className="text-sm text-slate-500">
                    {insight.statLabel}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Filter - With GIF Background */}
      <section className="py-6 tech-bg-primary relative">
        {/* GIF Background - Small Size */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-cover bg-logo-reverse bg-logo-4" />
        </div>
        <div className="absolute inset-0 circuit-bg opacity-30"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-white hover:bg-primary-50 text-neutral-700 hover:text-primary-600 px-4 py-2 rounded-lg transition-colors animate-cyberpunk-border"
                >
                  <IconComponent size={18} />
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs bg-neutral-200 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Blog Posts Grid - Compact */}
      <section className="relative py-16 tech-bg-primary overflow-hidden">
        {/* Rich Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-purple-900/95"></div>
        <div className="absolute inset-0 digital-grid opacity-20"></div>
        <div className="absolute inset-0 circuit-bg opacity-15"></div>
        <div className="absolute inset-0 geometric-bg opacity-10"></div>

        {/* Floating Tech Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-blue-400/20 rounded-lg animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 left-1/4 w-12 h-12 border-2 border-indigo-400/30 rounded-full animate-spin-slow"></div>

        {/* Scattered Logos */}
        <ScatteredLogo size="lg" position="center-left" opacity={0.06} tint="white" />
        <ScatteredLogo size="sm" position="top-right" opacity={0.1} tint="purple" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-3">Latest Insights</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Expert analysis and industry updates</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-slate-500 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.readTime}</span>
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Compact */}
      <section className="py-10 tech-bg-accent text-white relative">
        <div className="absolute inset-0 digital-grid opacity-20"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-3">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Get latest articles, insights, and exclusive content delivered to your inbox.
            </p>

            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-700 hover:bg-primary-800 px-6 py-3 rounded-r-lg font-medium transition-colors"
              >
                Subscribe
              </motion.button>
            </div>

            <p className="text-sm text-primary-200 mt-3">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-10 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-3">
              Need Expert Consultation?
            </h2>
            <p className="text-xl text-neutral-600 mb-6 max-w-2xl mx-auto">
              Get personalized advice tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppConsultation}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppContact}
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}