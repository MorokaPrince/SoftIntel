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
  TrendingUp,
  Lightbulb,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import { CompanyValue, TeamMember } from "@/types";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const companyValues: CompanyValue[] = [
  {
    id: "innovation",
    title: "Innovation",
    description: "Cutting-edge technologies for future-ready solutions",
    icon: "Zap",
  },
  {
    id: "integrity",
    title: "Integrity",
    description: "Transparent practices and ethical business conduct",
    icon: "Shield",
  },
  {
    id: "excellence",
    title: "Excellence",
    description: "Exceptional quality that exceeds expectations",
    icon: "Award",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: "Strong partnerships with clients and team members",
    icon: "Users",
  },
];

const teamMembers: TeamMember[] = [
  {
    id: "may-rakgama",
    name: "May Rakgama",
    role: "Founder & CEO",
    bio: "Visionary leader driving digital transformation across Africa",
    image: "/SoftIntel1.png",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "bohosi-ramokoka",
    name: "Bohosi Ramokoka",
    role: "CTO",
    bio: "Technical architect specializing in scalable solutions",
    image: "/SoftIntel2.jpeg",
    socialLinks: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "mpho-hamisi",
    name: "Mpho Hamisi",
    role: "Head of Operations",
    bio: "Operations expert ensuring seamless project delivery",
    image: "/SoftIntel3.gif",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "olwethu-ndlovu",
    name: "Olwethu Ndlovu",
    role: "Lead Developer",
    bio: "Full-stack developer creating innovative applications",
    image: "/SoftIntel4.mp4",
    socialLinks: {
      linkedin: "#",
      github: "#",
    },
  },
];

const milestones = [
  {
    year: "2024",
    title: "Foundation",
    description: "NovaTek was established in Limpopo, South Africa",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "First Projects",
    description: "Successfully delivered initial client solutions",
    icon: TrendingUp,
  },
  {
    year: "2025",
    title: "Expansion",
    description: "Growing team and expanding service offerings",
    icon: Lightbulb,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20 pb-16 overflow-hidden">
        <AnimatedBackground
          variant="hero"
          theme="indigo"
          includeParticles={true}
          includeGrid={true}
          includeGradient={true}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
            >
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              TRANSFORMING BUSINESSES ACROSS AFRICA
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NovaTek
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 mb-8 leading-relaxed"
            >
              Empowering African businesses with innovative technology solutions that drive growth, efficiency, and digital transformation across the continent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              From humble beginnings to becoming a trusted technology partner across Africa
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="glass" className="text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                      <IconComponent size={32} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card variant="gradient" className="h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mr-4">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower African businesses with accessible, professional digital solutions that simplify operations, ensure compliance, and drive sustainable growth across the continent.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card variant="gradient" className="h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be Africa&apos;s trusted digital solutions provider, recognized globally for exceptional quality and commitment to empowering businesses across the continent.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
            >
              <Heart className="w-4 h-4 mr-2" />
              Our Foundation
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              The principles that guide everything we do and shape our commitment to excellence
            </motion.p>
          </div>

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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="glass" className="text-center h-full hover:scale-105 transition-transform duration-300">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 mx-auto"
                    >
                      <IconComponent size={28} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              The passionate professionals behind NovaTek&apos;s innovative solutions
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="glass" className="text-center h-full hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join the growing number of African businesses that trust NovaTek to deliver exceptional technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}