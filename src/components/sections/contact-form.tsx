"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EASE } from "@/lib/utils";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const valid =
    form.name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.message.trim().length > 4;

  return (
    <div className="rounded-3xl border border-white/10 bg-charcoal-800/40 p-7 md:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE.expo }}
            className="flex flex-col items-center py-12 text-center"
          >
            <CheckCircle2 className="h-14 w-14 text-gold-400" />
            <h3 className="mt-5 font-display text-2xl text-ivory">Message sent</h3>
            <p className="mt-3 max-w-sm text-pretty text-mist">
              Thank you for reaching out. A member of our team will respond within
              one business day.
            </p>
            <Button className="mt-7" variant="outline" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={(e) => {
              e.preventDefault();
              if (valid) setSent(true);
            }}
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Labeled label="Full name">
                <input
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Ada Okonkwo"
                  className="field"
                  required
                />
              </Labeled>
              <Labeled label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="you@company.com"
                  className="field"
                  required
                />
              </Labeled>
            </div>
            <Labeled label="Subject">
              <input
                value={form.subject}
                onChange={(e) => set("subject", e.target.value)}
                placeholder="Conference enquiry"
                className="field"
              />
            </Labeled>
            <Labeled label="Message">
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Tell us about your event"
                className="field resize-none"
                required
              />
            </Labeled>
            <Button type="submit" disabled={!valid} className="mt-1 w-full sm:w-auto">
              Send message
              <Send className="h-4 w-4" />
            </Button>
          </motion.form>
        )}
      </AnimatePresence>

      <style>{`
        .field {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          padding: 0.85rem 1rem;
          color: #F4F1E9;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .field::placeholder { color: #6B7385; }
        .field:focus { border-color: rgba(214,178,107,0.6); }
      `}</style>
    </div>
  );
}

function Labeled({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-mist">{label}</span>
      {children}
    </label>
  );
}
