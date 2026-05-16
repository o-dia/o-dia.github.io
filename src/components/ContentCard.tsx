import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ContentCardProps {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  children?: ReactNode;
}

export function ContentCard({
  eyebrow,
  title,
  description,
  href,
  children,
}: ContentCardProps) {
  const body = (
    <article className="group h-full rounded-lg border border-graphite-line bg-ink/[0.045] p-5 shadow-surface transition duration-300 hover:border-ember/50 hover:bg-ink/[0.07]">
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="mt-4 text-xl font-semibold leading-tight text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink-muted">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );

  if (!href) {
    return body;
  }

  return (
    <Link
      to={href}
      className="block h-full rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
    >
      {body}
    </Link>
  );
}
