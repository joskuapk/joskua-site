type PortfolioCardProps = {
  title: string;
  description: string;
  metric: string;
  emphasis: string;
};

export default function PortfolioCard({
  title,
  description,
  metric,
  emphasis,
}: PortfolioCardProps) {
  return (
    <article className="negocios-portfolio-card">
      <div>
        <p className="negocios-portfolio-card__metric">{metric}</p>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <span>{emphasis}</span>
    </article>
  );
}
