"use client";

import { useEffect } from "react";

const vcfDownloadHref = "/api/vcf";

const contactLinks = [
  {
    label: "Phone",
    value: "+52 55 4565 0464",
    href: "tel:+525545650464",
  },
  {
    label: "Email",
    value: "joskua.olivares@gmail.com",
    href: "mailto:joskua.olivares@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/joskua-olivares",
    href: "https://www.linkedin.com/in/joskua-olivares",
  },
  {
    label: "GitHub",
    value: "github.com/joskuapk",
    href: "https://github.com/joskuapk",
  },
  {
    label: "Portfolio",
    value: "joskua.space",
    href: "https://joskua.space",
  },
];

export default function VcfDownloadRedirect() {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = vcfDownloadHref;
      link.download = "Joskua_Olivares.vcf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }, 1200);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section className="vcf-download-page" aria-labelledby="vcf-title">
      <div className="vcf-download-panel">
        <div className="vcf-download-intro">
          <p className="negocios-eyebrow">Joskua Olivares</p>
          <h1 id="vcf-title">Contacto</h1>
          <p>
            La tarjeta de contacto se descargara automaticamente. Tambien
            puedes usar estos enlaces para conectar conmigo.
          </p>
        </div>

        <div className="vcf-contact-links" aria-label="Contact links">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="vcf-contact-link"
              target={
                link.href.startsWith("http") && !link.href.includes("joskua.space")
                  ? "_blank"
                  : undefined
              }
              rel={
                link.href.startsWith("http") && !link.href.includes("joskua.space")
                  ? "noreferrer"
                  : undefined
              }
            >
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>

        <a href={vcfDownloadHref} className="negocios-button">
          Descargar contacto
        </a>
      </div>
    </section>
  );
}
