"use client";

import React from "react";
import { motion } from "framer-motion";
import {
     Users,
     Target,
     Heart,
     Award,
     Globe,
     Shield,
     Zap,
     CheckCircle,
     MessageCircle,
     ArrowRight,
     Handshake,
     Building,
   } from "lucide-react";
import Image from "next/image";
import { CompanyValue, TeamMember } from "@/types";
import Button from "@/components/ui/Button";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const companyValues: CompanyValue[] = [
  {
    id: "innovation",
    title: "Innovation",
    description: "We embrace cutting-edge technologies to deliver future-ready solutions that drive business transformation.",
    icon: "Zap",
  },
  {
    id: "integrity",
    title: "Integrity",
    description: "We build trust through transparent practices, honest communication, and ethical business conduct.",
    icon: "Shield",
  },
  {
    id: "excellence",
    title: "Excellence",
    description: "We are committed to delivering exceptional quality in every project, exceeding expectations consistently.",
    icon: "Award",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: "We believe in the power of teamwork, fostering strong partnerships with our clients and within our team.",
    icon: "Users",
  },
];

const teamMembers: TeamMember[] = [
   {
     id: "may-rakgama",
     name: "May Rakgama",
     role: "",
     bio: "",
     image: "/plexus-scifi-background_280538-7858.jpg",
     socialLinks: {
       linkedin: "#",
       twitter: "#",
     },
   },
   {
     id: "bohosi-ramokoka",
     name: "Bohosi Ramokoka",
     role: "",
     bio: "",
     image: "/ict-information-communications-technology-modern-server-room-background-virtual-screen_161452-3091.jpg",
     socialLinks: {
       linkedin: "#",
       github: "#",
     },
   },
   {
     id: "mpho-hamisi",
     name: "Mpho Hamisi",
     role: "",
     bio: "",
     image: "/plexus-scifi-background_280538-7858.jpg",
     socialLinks: {
       linkedin: "#",
       twitter: "#",
     },
   },
   {
     id: "olwethu-ndlovu",
     name: "Olwethu Ndlovu",
     role: "",
     bio: "",
     image: "/ict-information-communications-technology-modern-server-room-background-virtual-screen_161452-3091.jpg",
     socialLinks: {
       linkedin: "#",
       github: "#",
     },
   },
 ];

const stats = [
   { number: "9+", label: "Total Projects" },
   { number: "5", label: "Completed Projects" },
   { number: "4+", label: "In Development" },
   { number: "2024", label: "Founded" },
 ];

const stakeholders = [
   {
     id: "caiphus-olifant",
     name: "Caiphus Olifant",
     role: "Marketing Partner",
     organization: "Strategic Marketing Solutions",
     bio: "Expert marketing strategist specializing in digital campaigns and brand development for technology companies across South Africa.",
     image: "/plexus-scifi-background_280538-7858.jpg",
     type: "partner",
   },
   {
     id: "lawrence-thipe",
     name: "Lawrence Thipe",
     role: "Business Development Consultant",
     organization: "Thipe Consulting",
     bio: "Seasoned business development consultant with extensive networks across African markets and deep understanding of ICT sector growth opportunities.",
     image: "/ict-information-communications-technology-modern-server-room-background-virtual-screen_161452-3091.jpg",
     type: "partner",
   },
 ];

const governmentPartners = [
   {
     name: "Department of Communications and Digital Technologies",
     abbreviation: "DCDT",
     focus: "Digital infrastructure and ICT policy",
   },
   {
     name: "State Information Technology Agency",
     abbreviation: "SITA",
     focus: "Government ICT services and digital transformation",
   },
   {
     name: "National Electronic Media Institute of South Africa",
     abbreviation: "NEMISA",
     focus: "Digital skills development and training",
   },
   {
     name: "Independent Communications Authority of South Africa",
     abbreviation: "ICASA",
     focus: "Telecommunications and broadcasting regulation",
   },
 ];

export default function AboutPage() {

   return (
    <div className="min-h-screen">
      {/* Enhanced Professional Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background-secondary to-background-tertiary pt-20 pb-16 overflow-hidden">
        <AnimatedBackground
          variant="hero"
          theme="indigo"
          backgroundImage="/ict-information-communications-technology-concept-server-room-background_161452-7815.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />


        <div className="container-safe relative z-10">
          <div className="text-center content-wrapper">
            {/* Professional Badge - Identical to Home */}
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
              About SoftIntel{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Intelligence Solutions
              </span>
            </motion.h1>

            {/* Professional Subtitle - Enhanced Typography */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-large text-slate-300 mb-10 text-container"
            >
              Learn more about our company history, values, and the passionate team behind
              SoftIntel&apos;s intelligent software solutions for businesses worldwide.
            </motion.p>

            {/* Professional CTA Buttons - Identical to Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => window.location.href = "/contact"}
                className="btn-professional-primary"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/27794484159", "_blank")}
                className="btn-professional-secondary"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </motion.div>

            {/* Professional Trust Indicators - Identical to Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-sm text-slate-400">Satisfaction Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section - Dark Theme */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-background via-background-secondary to-background">
        <AnimatedBackground
          variant="section"
          theme="dark"
          backgroundImage="/plexus-scifi-background_280538-7858.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              📊 Our Impact in Numbers 📈
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Measurable results that speak to our commitment to excellence
            </motion.p>
          </motion.div>

          {/* Horizontal Stats Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative text-center p-6 rounded-xl bg-neutral-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-blue-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <motion.div
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(59, 130, 246, 0.5)",
                        "0 0 10px rgba(59, 130, 246, 0.8)",
                        "0 0 0px rgba(59, 130, 246, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div
                    className="text-slate-300 font-semibold text-sm md:text-base"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.label}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Dark Theme Horizontal Layout */}
      <section className="py-16 bg-gradient-to-br from-background-secondary via-background-tertiary to-background-secondary relative">
        <AnimatedBackground
          variant="section"
          theme="dark"
          backgroundImage="/plexus-scifi-background_280538-7858.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center"
            >
              Our Story
            </motion.h2>

            {/* Story Content in Horizontal Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white mb-6 mx-auto">
                  <span className="font-bold text-xl">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">The Beginning</h3>
                <p className="text-slate-300 text-sm leading-relaxed text-center">
                  May & Moroka Digital Solutions was born from a vision to democratize access to world-class software engineering expertise across Africa.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white mb-6 mx-auto">
                  <span className="font-bold text-xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Growth Journey</h3>
                <p className="text-slate-300 text-sm leading-relaxed text-center">
                  Starting as a one-person operation in Limpopo, South Africa, MMDS quickly grew into a trusted partner for digital transformation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-6 mx-auto">
                  <span className="font-bold text-xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Africa & Beyond</h3>
                <p className="text-slate-300 text-sm leading-relaxed text-center">
                  Today, we serve clients across the continent, crafting solutions with deep understanding of African business and global best practices.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section - Dark Theme */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background-secondary to-background overflow-hidden">
        <AnimatedBackground
          variant="intense"
          theme="dark"
          backgroundImage="/ict-information-communications-technology-modern-server-room-background-virtual-screen_161452-3091.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
            >
              <Heart className="w-4 h-4 mr-2" />
              Our Foundation
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              The principles that guide everything we do and shape our commitment to excellence
            </motion.p>
          </div>

          {/* Horizontal Values Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {companyValues.map((value, index) => {
              const iconMap = {
                Zap,
                Shield,
                Award,
                Users,
              } as const;
              const IconComponent = iconMap[value.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.05 }}
                  className="group relative text-center p-8 rounded-2xl bg-neutral-900/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-blue-500/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-2xl"
                    >
                      <IconComponent size={36} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section - Dark Theme Horizontal Layout */}
      <section className="py-16 bg-gradient-to-br from-background-secondary via-background-tertiary to-background-secondary relative">
        <AnimatedBackground
          variant="section"
          theme="dark"
          backgroundImage="/plexus-scifi-background_280538-7858.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-blue-500/30"
              >
                <div className="text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover mx-auto mb-4 border-2 border-blue-400"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders & Partners Section - Dark Theme Carousel */}
      <section className="py-16 bg-gradient-to-br from-background-secondary via-background-tertiary to-background-secondary relative">
        <AnimatedBackground
          variant="section"
          theme="dark"
          backgroundImage="/plexus-scifi-background_280538-7858.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center"
          >
            Our Stakeholders & Partners
          </motion.h2>

          {/* Partners Carousel */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              <Handshake className="w-6 h-6 inline mr-2" />
              Strategic Partners
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {stakeholders.map((stakeholder, index) => (
                <motion.div
                  key={stakeholder.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-blue-500/30"
                >
                  <div className="text-center">
                    <Image
                      src={stakeholder.image}
                      alt={stakeholder.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover mx-auto mb-4 border-2 border-blue-400"
                    />
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {stakeholder.name}
                    </h4>
                    <p className="text-blue-400 font-medium mb-2 text-sm">
                      {stakeholder.role}
                    </p>
                    <p className="text-slate-400 text-xs mb-3">
                      {stakeholder.organization}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {stakeholder.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Government Partners */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              <Building className="w-6 h-6 inline mr-2" />
              Government ICT Partners
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {governmentPartners.map((partner, index) => (
                <motion.div
                  key={partner.abbreviation}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-neutral-800/30 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-green-500/30 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {partner.abbreviation}
                  </h4>
                  <p className="text-slate-300 text-sm mb-2">
                    {partner.name}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {partner.focus}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Dark Theme Horizontal Cards */}
      <section className="py-16 bg-gradient-to-br from-background via-background-secondary to-background text-white relative">
        <AnimatedBackground
          variant="section"
          theme="dark"
          backgroundImage="/ict-information-communications-technology-modern-server-room-background-virtual-screen_161452-3091.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 mr-4 text-blue-400" />
                <h3 className="text-2xl font-heading font-bold">Our Mission</h3>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                To empower African businesses with accessible, professional digital solutions
                that simplify operations, ensure compliance, and drive sustainable growth across the continent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 mr-4 text-green-400" />
                <h3 className="text-2xl font-heading font-bold">Our Vision</h3>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                To be Africa&apos;s trusted digital solutions provider, recognized globally
                for exceptional quality and commitment to empowering businesses across the continent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Theme */}
      <section className="py-20 bg-gradient-to-br from-background-secondary via-background-tertiary to-background-secondary relative">
        <AnimatedBackground
          variant="intense"
          theme="dark"
          backgroundImage="/ict-information-communications-technology-concept-server-room-background_161452-7815.jpg"
          includeParticles={true}
          includeLogos={true}
          includeGrid={true}
          includeGradient={true}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join the growing number of African businesses that trust MMDS
              to deliver exceptional software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 px-8 py-4 rounded-lg font-medium transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}