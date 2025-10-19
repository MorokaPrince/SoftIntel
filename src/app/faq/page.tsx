"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ScatteredLogo from "@/components/ui/ScatteredLogo";

const faqs = [
  {
    id: 1,
    question: "How quickly can you start my project?",
    answer:
      "We can typically begin new projects within 1-2 weeks, depending on complexity and our current schedule. Urgent projects can often start sooner.",
  },
  {
    id: 2,
    question: "Do you work with international clients?",
    answer:
      "Absolutely! We work with clients across Africa and globally, offering remote collaboration tools and flexible communication schedules.",
  },
  {
    id: 3,
    question: "What information do you need to get started?",
    answer:
      "We need your project requirements, goals, target audience, and any existing branding guidelines. A discovery call helps us understand your vision better.",
  },
  {
    id: 4,
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer comprehensive maintenance packages, regular updates, and ongoing support to ensure your solution continues to perform optimally.",
  },
  {
    id: 5,
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing based on project scope, complexity, and timeline. We provide detailed quotes after understanding your requirements during a consultation.",
  },
  {
    id: 6,
    question: "How do you ensure project quality?",
    answer:
      "We follow industry best practices, conduct thorough testing, maintain code standards, and provide regular updates throughout the development process.",
  },
];

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <AnimatedBackground />
      <ScatteredLogo />

      {/* Header */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-colors"
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === faq.id ? null : faq.id)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform ${
                      expandedId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 border-t border-white/10 bg-white/5"
                  >
                    <p className="text-slate-300">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Didn't find your answer?
            </h2>
            <p className="text-slate-300 mb-6">
              Contact our team directly for personalized assistance.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

