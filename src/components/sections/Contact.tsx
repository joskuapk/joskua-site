"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, captchaToken }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full px-6 max-w-3xl mx-auto text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Let’s Work Together
      </h2>
      <p className="text-light-blue mb-10">
        Have a project in mind? Let’s talk.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="px-4 py-3 rounded border border-lemon-green bg-transparent placeholder-light-blue text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="px-4 py-3 rounded border border-lemon-green bg-transparent placeholder-light-blue text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="px-4 py-3 rounded border border-lemon-green bg-transparent placeholder-light-blue text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={(token) => setCaptchaToken(token)}
          theme="dark"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-lemon-green text-deep-blue rounded font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
        {status === "success" && (
          <p className="text-green-400">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
