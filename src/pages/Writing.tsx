import { Link } from "react-router-dom";
import { Metadata } from "../components/Metadata";
import { publishedWritingEntries } from "../content/writing";

const groupedWriting = publishedWritingEntries.reduce<
  Record<string, typeof publishedWritingEntries>
>((groups, entry) => {
  groups[entry.metadata.theme] = groups[entry.metadata.theme] ?? [];
  groups[entry.metadata.theme].push(entry);
  return groups;
}, {});

export function Writing() {
  return (
    <>
      <Metadata
        title="Writing"
        description="Essays and notes, grouped by theme."
      />
      <section className="page-intro">
        <p className="eyebrow">Writing</p>
        <h1 className="page-title">Essays, notes, and working arguments.</h1>
        <p className="page-copy">
          Writing lives in MDX files so new pieces can be added by creating a
          file, exporting metadata, and writing the essay in place.
        </p>
      </section>

      <div className="space-y-12">
        {Object.entries(groupedWriting).map(([theme, entries]) => (
          <section key={theme}>
            <div className="section-heading">
              <h2 className="section-title">{theme}</h2>
              <span className="text-sm text-ink-soft">{entries.length} pieces</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {entries.map((entry) => (
                <Link
                  key={entry.metadata.slug}
                  to={`/writing/${entry.metadata.slug}`}
                  className="rounded-lg border border-graphite-line bg-ink/[0.045] p-5 transition hover:border-ember/50 hover:bg-ink/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                >
                  <p className="eyebrow">{entry.metadata.date}</p>
                  <h3 className="mt-4 text-xl font-semibold text-ink">
                    {entry.metadata.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-muted">
                    {entry.metadata.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
