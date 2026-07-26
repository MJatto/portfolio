import SectionHeader from "@/components/ui/SectionHeader";

const principles = [
  {
    title: "Automate repetitive work",
    copy: "Manual processes are useful once. Repeatable workflows should become scripts, pipelines, or infrastructure code.",
  },
  {
    title: "Make deployments predictable",
    copy: "A good delivery process should produce the same outcome regardless of who runs it.",
  },
  {
    title: "Build for observability",
    copy: "Logs, metrics, health checks, and useful documentation reduce recovery time when systems fail.",
  },
  {
    title: "Secure access by default",
    copy: "Identity, permissions, secrets, and network boundaries should be considered during design—not after deployment.",
  },
  {
    title: "Document decisions",
    copy: "Good documentation preserves context, accelerates onboarding, and makes troubleshooting less dependent on individuals.",
  },
  {
    title: "Improve incrementally",
    copy: "Reliable systems are often built through small, measurable improvements rather than one large rewrite.",
  },
];

export default function EngineeringPrinciples() {
  return (
    <section className="section" id="principles">
      <div className="container">
        <SectionHeader
          eyebrow="Engineering principles"
          title="How I think about reliable systems."
          copy="The tools change. The principles behind maintainable infrastructure and software are more durable."
        />

        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article className="card principle-card" key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
