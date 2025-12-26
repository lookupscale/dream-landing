"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { ArrowRight, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-bg-dark text-zinc-900 dark:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
              Get in touch
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
              We're here to help you get the most out of Dream. Drop us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="relative bg-white dark:bg-[#0c0c0c] border border-zinc-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-premium"
          >
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12"
              >
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Message sent!</h2>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8">
                  Thank you for reaching out. We'll be in touch soon.
                </p>
                <Button 
                  onClick={() => setStatus("idle")}
                  variant="secondary"
                  size="md"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-500 uppercase tracking-widest pl-1">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/30 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-500 uppercase tracking-widest pl-1">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/30 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-500 uppercase tracking-widest pl-1">Message</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/30 transition-all resize-none"
                  />
                </div>

                <Button
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full h-15 gap-3 shadow-premium shadow-brand-primary/20 group"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>

                {status === "error" && (
                  <p className="text-center text-red-500 text-sm font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
