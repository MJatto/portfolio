import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="project-page">
        <section className="container project-hero">
          <a className="back-link" href="/#projects">
            ← Back to projects
          </a>

          <p className="eyebrow">Project case study</p>
          <h1>{project.title}</h1>
          <p className="project-lead">{project.description}</p>

          <div className="tags">
            {project.technologies.map((technology) => (
              <span className="tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={project.repository}
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
        </section>

        <section className="container case-study-grid">
          <article className="card case-study-card">
            <p className="eyebrow">Problem</p>
            <h2>What this project was designed to solve</h2>
            <p>{project.caseStudy.problem}</p>
          </article>

          <article className="card case-study-card">
            <p className="eyebrow">Solution</p>
            <h2>How I approached the implementation</h2>
            <p>{project.caseStudy.solution}</p>
          </article>

          <article className="card case-study-card case-study-wide">
            <p className="eyebrow">Architecture</p>
            <h2>System flow</h2>
            <div className="architecture-flow">
              {project.caseStudy.architecture.map((step, index) => (
                <div className="architecture-step" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="card case-study-card">
            <p className="eyebrow">Challenges</p>
            <h2>What required the most engineering work</h2>
            <ul>
              {project.caseStudy.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </article>

          <article className="card case-study-card">
            <p className="eyebrow">Lessons learned</p>
            <h2>What I took away from the build</h2>
            <ul>
              {project.caseStudy.lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
