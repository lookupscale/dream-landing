"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { ContactForm } from "@/components/ui";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark text-zinc-900 dark:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
              Get in <span className="text-brand-primary font-bold">touch</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
              We're here to help you get the most out of Dream. Drop us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
