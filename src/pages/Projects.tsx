import { ContentCard } from "../components/ContentCard";
import { Metadata } from "../components/Metadata";
import { projects } from "../content/projects/projects";

export function Projects() {
  return (
    <>
      <Metadata
        title="Projects"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <section className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1 className="page-title">Github repos.</h1>
        <p className="page-copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ContentCard
            key={project.title}
            eyebrow={project.status}
            title={project.title}
            description={project.description}
            href={project.href}
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
    </>
  );
}
