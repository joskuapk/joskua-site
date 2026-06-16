"use client";

import { useEffect } from "react";

type WhatsAppRedirectProps = {
  href: string;
  label: string;
};

export default function WhatsAppRedirect({
  href,
  label,
}: WhatsAppRedirectProps) {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.location.href = href;
    }, 800);

    return () => window.clearTimeout(timeout);
  }, [href]);

  return (
    <section className="negocios-whatsapp-redirect">
      <a href={href} className="negocios-button" rel="noreferrer">
        {label}
      </a>
    </section>
  );
}
