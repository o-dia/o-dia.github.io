import { ContentCard } from "../components/ContentCard";
import { Metadata } from "../components/Metadata";
import { projects } from "../content/projects/projects";

export function Projects() {
  return (
    <>
      <Metadata
        title="Projects"
        description="Project notes and case-study cards from Omar Dia."
      />
      <section className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1 className="page-title">Case studies and build logs.</h1>
        <p className="page-copy">
          Projects start as structured cards. When a project needs a fuller
          story, it can graduate into a dedicated MDX case study.
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
