"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Hook this up to your email/API endpoint of choice.
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-[var(--hc-sky)] p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-[var(--hc-blue)] mb-4" size={40} />
        <h3 className="font-display text-xl font-semibold text-[var(--hc-navy)] mb-2">
          Message sent
        </h3>
        <p className="text-sm text-[var(--hc-slate)]">
          Thank you for reaching out. Our admissions team will respond within
          one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" id="name" placeholder="Jane Mwakalinga" required />
        <Field label="Phone Number" id="phone" placeholder="+255 7XX XXX XXX" type="tel" required />
      </div>
      <Field label="Email Address" id="email" placeholder="you@example.com" type="email" required />
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[var(--hc-navy)] mb-1.5">
          Subject
        </label>
        <select
          id="subject"
          className="w-full rounded-xl border border-[var(--hc-line)] px-4 py-3 text-sm bg-white focus:border-[var(--hc-blue)] outline-none"
          defaultValue="Admissions Inquiry"
        >
          <option>Admissions Inquiry</option>
          <option>General Question</option>
          <option>Campus Tour Request</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--hc-navy)] mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          placeholder="Tell us a bit about your child and what you'd like to know..."
          className="w-full rounded-xl border border-[var(--hc-line)] px-4 py-3 text-sm bg-white focus:border-[var(--hc-blue)] outline-none resize-none"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
        Send Message <Send size={16} />
      </button>
    </form>
  );
}

function Field({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[var(--hc-navy)] mb-1.5">
        {label}
      </label>
      <input
        id={id}
        className="w-full rounded-xl border border-[var(--hc-line)] px-4 py-3 text-sm bg-white focus:border-[var(--hc-blue)] outline-none"
        {...props}
      />
    </div>
  );
}