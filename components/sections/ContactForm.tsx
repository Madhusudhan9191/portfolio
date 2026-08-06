"use client";

import { useState } from "react";
import { useToast } from "@/components/effects/ToastProvider";
import Magnetic from "@/components/effects/Magnetic";

export default function ContactForm() {
  const { show } = useToast();
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!values.name || !values.email || !values.message) return;

    setSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/madhusuravaram91@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: `New Portfolio Message from ${values.name}`,
        }),
      });

      if (res.ok) {
        show("Message sent successfully! Madhusudhan will receive it in his email.");
        setValues({ name: "", email: "", message: "" });
      } else {
        show("Failed to send message. Please try emailing directly.");
      }
    } catch {
      show("Network error. Please try emailing directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div>
        <label htmlFor="cf-name" className="mono mb-2 block text-xs" style={{ color: "var(--text-dimmer)" }}>
          Name
        </label>
        <input
          id="cf-name"
          required
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          placeholder="Your name"
          className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-colors focus:border-[var(--primary)]"
          style={{ borderColor: "var(--border)", background: "var(--glass)", color: "var(--text)" }}
        />
      </div>
      <div>
        <label htmlFor="cf-email" className="mono mb-2 block text-xs" style={{ color: "var(--text-dimmer)" }}>
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          required
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          placeholder="you@company.com"
          className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-colors focus:border-[var(--primary)]"
          style={{ borderColor: "var(--border)", background: "var(--glass)", color: "var(--text)" }}
        />
      </div>
      <div>
        <label htmlFor="cf-msg" className="mono mb-2 block text-xs" style={{ color: "var(--text-dimmer)" }}>
          Message
        </label>
        <textarea
          id="cf-msg"
          required
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          placeholder="What are you building?"
          rows={5}
          className="w-full resize-y rounded-xl border px-4 py-3.5 text-sm outline-none transition-colors focus:border-[var(--primary)]"
          style={{ borderColor: "var(--border)", background: "var(--glass)", color: "var(--text)" }}
        />
      </div>
      <Magnetic
        as="button"
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl py-3.5 text-center text-sm font-semibold disabled:opacity-50"
        style={{ background: "var(--text)", color: "var(--bg)" }}
      >
        {submitting ? "Sending..." : "Send Message"}
      </Magnetic>
    </form>
  );
}
