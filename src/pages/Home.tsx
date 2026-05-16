import { Link } from "react-router-dom";
import { ContentCard } from "../components/ContentCard";
import { Metadata } from "../components/Metadata";
import { SubscribeForm } from "../components/SubscribeForm";
import { projects } from "../content/projects/projects";
import { publishedWritingEntries } from "../content/writing";

export function Home() {
  const selectedWriting = publishedWritingEntries.slice(0, 2);
  const selectedProjects = projects.slice(0, 2);

  return (
    <>
      <Metadata />
      <section className="grid min-h-[72vh] items-end gap-10 pb-12 pt-16 lg:grid-cols-[1.08fr_0.72fr]">
        <div>
          <p className="eyebrow">Writing / Projects </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] text-ink sm:text-7xl lg:text-8xl">
            A public field for careful work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-muted sm:text-xl">
            I am building a place for essays, project notes, and case studies
            about technology, economics, and the way ideas become durable
            work.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="button-primary" to="/writing">
              Read the writing
            </Link>
            <Link className="button-secondary" to="/projects">
              View projects
            </Link>
            <Link className="button-secondary" to="/about">
              About me
            </Link>
          </div>
        </div>
        <div className="surface-panel p-6">
          <p className="eyebrow">Current frame</p>
          <p className="mt-5 text-2xl font-semibold leading-snug text-ink">
            Refined, technical, editorial, and easy to keep alive.
          </p>
          <p className="mt-5 text-sm leading-7 text-ink-muted">
            This first version sets up the architecture: MDX writing, project
            data, a static subscription adapter, and a restrained WebGL layer
            that supports the content without overpowering it.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Selected writing</p>
          <Link className="text-link" to="/writing">
            All writing
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {selectedWriting.map((entry) => (
            <ContentCard
              key={entry.metadata.slug}
              eyebrow={`${entry.metadata.theme} / ${entry.metadata.date}`}
              title={entry.metadata.title}
              description={entry.metadata.description}
              href={`/writing/${entry.metadata.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Selected projects</p>
          <Link className="text-link" to="/projects">
            All projects
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {selectedProjects.map((project) => (
            <ContentCard
              key={project.title}
              eyebrow={project.status}
              title={project.title}
              description={project.description}
            >
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </ContentCard>
          ))}
        </div>
      </section>

      <SubscribeForm />
    </>
  );
}
