import Link from "next/link";

type PortfolioCardProps = {
  title: string;
  metric: string;
  emphasis: string;
  projectLabel: string;
  projectResult: string;
  clientContextLabel: string;
  clientContext: string[];
  href: string;
  linkLabel: string;
};

export default function PortfolioCard({
  title,
  metric,
  emphasis,
  projectLabel,
  projectResult,
  clientContextLabel,
  clientContext,
  href,
  linkLabel,
}: PortfolioCardProps) {
  return (
    <article className="negocios-portfolio-card">
      <div>
        <p className="negocios-portfolio-card__metric">{metric}</p>
        <h3>{title}</h3>
      </div>
      <div className="negocios-portfolio-card__section">
        <h4>{projectLabel}</h4>
        <p>{projectResult}</p>
      </div>
      <div className="negocios-portfolio-card__section">
        <h4>{clientContextLabel}</h4>
        <ul>
          {clientContext.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="negocios-portfolio-card__footer">
        <span>{emphasis}</span>
        <Link
          href={href}
          className="negocios-case-link"
          target="_blank"
          rel="noreferrer"
        >
          {linkLabel}
          <span aria-hidden="true"> ↗</span>
        </Link>
      </div>
    </article>
  );
}
