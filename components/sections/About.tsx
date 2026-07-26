import SectionHeader from "@/components/ui/SectionHeader";
const path = [["01","Computer Science","Bachelor's degree with a Statistics minor"],["02","Enterprise IT","Technical support, identity, endpoints, and cloud operations"],["03","Automation","PowerShell, Jenkins, Ansible, and repeatable workflows"],["04","Cloud & DevOps","AWS, Azure, Terraform, Docker, and Kubernetes"]];
export default function About() {
  return <section className="section" id="about"><div className="container">
    <SectionHeader eyebrow="About" title="I connect operational experience with modern engineering." copy="My professional background is grounded in enterprise IT and financial services. My engineering work extends that foundation into infrastructure as code, automated delivery, cloud platforms, and backend applications." />
    <div className="about-grid"><article className="card about-card"><h3>How I work</h3><p>I enjoy taking manual, fragile, or repetitive processes and turning them into reliable systems. That can mean automating access workflows, provisioning infrastructure with Terraform, deploying a containerized application, or documenting a troubleshooting process so the next incident is resolved faster.</p><p>I&apos;m targeting DevOps, cloud, platform, infrastructure, and backend engineering roles where I can keep growing while contributing practical production experience.</p></article>
    <div className="path">{path.map(([n,t,c]) => <div className="path-step" key={n}><div className="path-number">{n}</div><div><strong>{t}</strong><span>{c}</span></div></div>)}</div></div>
  </div></section>;
}
