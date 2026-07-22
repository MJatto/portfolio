import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects that combine software and delivery engineering."
          copy="Each project now includes a dedicated case-study page covering the problem, architecture, implementation, challenges, and lessons learned."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="card project-card" key={project.title}>
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.technologies.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={`/projects/${project.slug}`}>Read case study →</a>
                <a href={project.repository} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
