import { Link, useParams } from "react-router-dom";
import { Metadata } from "../components/Metadata";
import { findWritingBySlug } from "../content/writing";
import { NotFound } from "./NotFound";

export function WritingDetail() {
  const { slug } = useParams();
  const entry = findWritingBySlug(slug);

  if (!entry) {
    return <NotFound />;
  }

  const { Component, metadata } = entry;

  return (
    <>
      <Metadata title={metadata.title} description={metadata.description} />
      <article className="mx-auto max-w-3xl">
        <Link className="text-link" to="/writing">
          Back to writing
        </Link>
        <header className="mt-10 border-b border-graphite-line pb-10">
          <p className="eyebrow">
            {metadata.theme} / {metadata.date}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-ink sm:text-6xl">
            {metadata.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-muted">
            {metadata.description}
          </p>
        </header>
        <div className="prose-content">
          <Component />
        </div>
      </article>
    </>
  );
}
