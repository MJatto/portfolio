export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: readonly string[];
  repository: string;
  caseStudy: {
    problem: string;
    solution: string;
    architecture: readonly string[];
    challenges: readonly string[];
    lessons: readonly string[];
  };
};

export const projects: readonly Project[] = [
  {
    slug: "cloud-native-java-platform",
    title: "Cloud-Native Java Platform on AWS",
    description:
      "A production-style Java Spring Boot application containerized with Docker and deployed to Amazon EKS through an automated Jenkins pipeline, with infrastructure provisioned using Terraform.",
    technologies: [
      "Java",
      "Spring Boot",
      "AWS EKS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Jenkins",
    ],
    repository: "https://github.com/MJatto",
    caseStudy: {
      problem:
        "The goal was to create a repeatable delivery platform for a Java application rather than relying on manual server configuration and one-off deployments.",
      solution:
        "I containerized the Spring Boot application, provisioned AWS infrastructure with Terraform, deployed the workload to Kubernetes on EKS, and automated application delivery through Jenkins.",
      architecture: [
        "Developer pushes source code",
        "Jenkins builds and tests the application",
        "Docker image is created",
        "Image is published to a registry",
        "Kubernetes deployment is updated",
        "Amazon EKS runs the application",
        "Ingress and load balancing expose the service",
      ],
      challenges: [
        "Coordinating infrastructure provisioning with application deployment",
        "Configuring Kubernetes services and ingress correctly",
        "Managing authentication between Jenkins, AWS, and the cluster",
      ],
      lessons: [
        "Infrastructure and application delivery should be versioned together",
        "Kubernetes troubleshooting requires understanding networking, identity, and application health",
        "Small pipeline stages make failures easier to diagnose",
      ],
    },
  },
  {
    slug: "flask-cicd-automation",
    title: "Flask CI/CD Automation",
    description:
      "A Python Flask application deployed to Linux infrastructure through Jenkins and reusable Ansible roles, including dependency installation, application configuration, and service management.",
    technologies: ["Python", "Flask", "Jenkins", "Ansible", "Linux", "SQLite"],
    repository: "https://github.com/MJatto",
    caseStudy: {
      problem:
        "Manual application setup on Linux servers was slow, inconsistent, and difficult to reproduce.",
      solution:
        "I created reusable Ansible roles for provisioning and configuration, then connected them to a Jenkins pipeline that automated application packaging and deployment.",
      architecture: [
        "Developer commits Flask application changes",
        "Jenkins checks out and validates the code",
        "Application artifact is prepared",
        "Ansible identifies the target server",
        "Roles install dependencies and configure the host",
        "Systemd starts and manages the application",
      ],
      challenges: [
        "Designing reusable Ansible roles instead of one large playbook",
        "Handling environment-specific paths and service configuration",
        "Ensuring database initialization remained repeatable",
      ],
      lessons: [
        "Configuration management reduces drift between environments",
        "System services provide more reliable application lifecycle management",
        "Clear role boundaries make automation easier to maintain",
      ],
    },
  },
  {
    slug: "aws-lambda-file-processor",
    title: "AWS Lambda File Processor",
    description:
      "A serverless file-processing workflow using AWS Lambda, S3, API Gateway, IAM, Python, and Terraform to create a repeatable cloud deployment.",
    technologies: [
      "AWS Lambda",
      "S3",
      "API Gateway",
      "Terraform",
      "Python",
      "IAM",
    ],
    repository: "https://github.com/MJatto",
    caseStudy: {
      problem:
        "The project needed an event-driven file-processing workflow without maintaining persistent servers.",
      solution:
        "I used AWS Lambda for compute, S3 for storage and event triggers, API Gateway for HTTP access, IAM for controlled permissions, and Terraform for repeatable provisioning.",
      architecture: [
        "Client uploads a file or sends a request",
        "Amazon S3 stores the object",
        "S3 event invokes AWS Lambda",
        "Python function processes the file",
        "CloudWatch captures logs",
        "API Gateway exposes an HTTP entry point",
      ],
      challenges: [
        "Designing least-privilege IAM permissions",
        "Packaging and deploying Lambda code consistently",
        "Connecting event triggers and API integrations through Terraform",
      ],
      lessons: [
        "Serverless platforms reduce operational overhead for event-driven workloads",
        "IAM design is central to cloud security",
        "Infrastructure as code makes cloud integrations easier to reproduce",
      ],
    },
  },
  {
    slug: "realtime-chat-application",
    title: "Real-Time Chat Application",
    description:
      "A Node.js and Socket.IO application deployed on Amazon EC2 behind Nginx, automated with Jenkins and Ansible, and managed as a persistent Linux service.",
    technologies: [
      "Node.js",
      "Socket.IO",
      "AWS EC2",
      "Nginx",
      "Jenkins",
      "Ansible",
    ],
    repository: "https://github.com/MJatto",
    caseStudy: {
      problem:
        "The application required persistent real-time connections and a deployment approach that could recover from process or server restarts.",
      solution:
        "I deployed the Socket.IO application to EC2, configured Nginx as a reverse proxy, used a process manager for application lifecycle management, and automated host configuration with Ansible and Jenkins.",
      architecture: [
        "Browser opens a WebSocket connection",
        "Nginx receives and proxies traffic",
        "Node.js and Socket.IO manage real-time events",
        "Process manager keeps the app running",
        "Jenkins triggers deployment updates",
        "Ansible configures the EC2 host",
      ],
      challenges: [
        "Correctly proxying WebSocket traffic through Nginx",
        "Managing persistent application processes",
        "Automating deployment without interrupting the service unnecessarily",
      ],
      lessons: [
        "Real-time systems require different proxy and connection considerations",
        "Process supervision improves service reliability",
        "Deployment automation should account for application availability",
      ],
    },
  },
] as const;
