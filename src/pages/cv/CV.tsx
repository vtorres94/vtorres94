import "./CV.scss";

const contact = {
  phone: "+52 492 181 8826",
  linkedin: "linkedin.com/in/vladimir-tordavi",
  website: "vladimir-torres.miraidev.com",
  email: "vladimir.tordavi@gmail.com",
};

const summary = `Full Stack Developer with 6+ years of experience building enterprise web
applications and reactive microservices. Currently specializing in Java 21 / Spring
WebFlux for BIAN-compliant financial microservices at Diners Club Ecuador. Practices
agentic and spec-driven development with AI coding tools (Kiro, Claude Code) —
steering files, spec definition, and playbooks — to accelerate delivery and reduce
rework. Strong across the full stack: React / TypeScript on the
frontend, Node.js and Java on the backend, with solid DevOps practices (Docker,
Kubernetes, Azure Pipelines, AWS).`;

const experience = [
  {
    company: "DIGITAL CHALLENGERS",
    subtitle: "Client: Diners Club Ecuador",
    role: "Sr Java Developer — BIAN Microservices",
    location: "Remote",
    period: "Feb 2025 – Present",
    bullets: [
      "Developing BIAN-compliant reactive microservices for Diners Club Ecuador's core banking platform.",
      "Java 21 · Spring Boot 3.5 · Spring WebFlux — non-blocking I/O (Mono/Flux) for high-concurrency financial operations.",
      "Implemented Hexagonal Architecture (Ports & Adapters) ensuring full domain isolation and independent testability.",
      "Event-driven architecture: implemented and tested AWS SQS message queues for async inter-service communication in MSL (outbound messaging) flows.",
      "Infrastructure: AWS EC2 provisioning, Kubernetes cluster deployments, Azure Pipelines CI/CD, AWS KMS encryption/decryption.",
      "Agentic & spec-driven workflow: authored steering files providing persistent context to coding agents across the full microservice lifecycle; created BIAN spec and mapping documents to guide implementation from requirements to deployment.",
      "Applied playbook-driven methodology — structured domain analysis and spec definition before agent execution, reducing hallucinations and rework.",
      "Tooling: Kiro (Amazon) and Claude Code (Anthropic) for spec generation, code scaffolding, and implementation acceleration; configured MCP servers to integrate project context and external tools into the agentic workflow.",
    ],
  },
  {
    company: "CWVL CONSULTORÍA",
    role: "Full Stack Developer",
    location: "Aguascalientes, México",
    period: "Oct 2021 – Nov 2024",
    bullets: [
      "Led the IT team; built a full tool ecosystem that increased end-client trust by 30%.",
      "Developed a custom CRM (React + Node.js + PostgreSQL) for franchisee lead management, improving operational efficiency by 80%.",
      "Built parameterized React landing pages for franchisees with dynamic URL-based data, improving engagement by 30%.",
      "Developed a React SPA with interactive state map for franchisee search.",
      "Integrated WhatsApp API into a Node.js microservice linked to a chatbot for automated lead distribution, increasing sales by 30%.",
      "Configured and deployed ISSABEL PBX on AWS EC2 (Linux Red Hat) for telemarketing, reducing lead acquisition costs by 75%.",
      "Negotiated SIP trunk agreements achieving a 71% reduction in per-call cost ($0.21 → $0.06).",
      "Dockerized all projects; configured GCP Cloud Storage for CRM file management.",
    ],
  },
  {
    company: "OUTDEV GLOBAL",
    role: "Full Stack Developer",
    location: "Guadalajara, Jalisco",
    period: "May 2021 – Oct 2021",
    bullets: [
      "Developed backend modules in Django for the Investment Smart System (SII).",
      "Built the SII mobile application using Flutter.",
      "Successfully deployed SII to both the App Store and Google Play Store.",
    ],
  },
  {
    company: "CIESOFT",
    role: "Internship Full Stack Developer",
    location: "Zacatecas, Zac",
    period: "Oct 2019 – Jul 2020",
    bullets: [
      "Developed backend modules in Java for the Hospital Management System (BlueHealth).",
      "Built frontend components for BlueHealth using ReactJS.",
    ],
  },
];

const skills = [
  {
    category: "Backend",
    items: "Java 21 · Spring Boot · Spring WebFlux · Project Reactor · Node.js · Express · Python · Django · REST · SOLID · Hexagonal Architecture · BIAN",
  },
  {
    category: "Frontend",
    items: "React · TypeScript · Next.js · SCSS · HTML5",
  },
  {
    category: "Database",
    items: "PostgreSQL · MongoDB · MySQL",
  },
  {
    category: "DevOps & Cloud",
    items: "Docker · Kubernetes · Azure Pipelines · AWS (EC2 · S3 · SQS · KMS · Lambda) · GCP · CI/CD · Linux",
  },
  {
    category: "Agentic & AI-Assisted Dev",
    items: "Claude Code (Anthropic) · Kiro (Amazon) · Agentic Coding · Spec-Driven Development · MCP (configuration & integration) · Steering Files · AI Playbooks · Planning-First Methodology",
  },
  {
    category: "Tools & Methods",
    items: "Git · GitHub · GitLab · JIRA · SCRUM · Kanban · Postman · Swagger · Figma · Unit Testing · Jest",
  },
];

const education = [
  {
    institution: "INSTITUTO TECNOLÓGICO SUPERIOR DE JEREZ",
    degree: "Computer Systems Technician",
    location: "Jeréz, Zac",
    period: "2017 – 2021",
  },
];

const freelanceProjects = [
  "MIRAIDEV (miraidev.com) — Tech agency",
  "TORDAVI International (tordavi.com) — Business consulting",
  "LOZART (lozartceramica.com) — Artisan ceramics e-commerce",
  "ZENTRO PRANA (zentroprana.com) — Wellness center",
  "MANPRO SERVICE (manproservice.com) — Professional services",
  "HOTEL SAN JUDAS TADEO (hotelsanjudastadeo.com) — Hospitality",
  "BB CONSULTORES (bbconsultores.com) — Business consulting",
  "RF ELECTROMECÁNICA (rfelectromecanica.com) — Industrial services",
  "MEMBE (membe.mx) — Digital membership platform",
];

const softSkills = "Proactive · Leadership · Good Communication · Self-Taught · Clean Coder · Resilient · Hard Worker · Problem Solver";

const PDF_NAME = "CV@TORRES_DAVILA_MIGUEL_VLADIMIR.pdf";

export const CV = () => {
  return (
    <>
      <a
        className="cv-download-btn no-print"
        href={`/assets/${PDF_NAME}`}
        download={PDF_NAME}
      >
        ↓ DOWNLOAD PDF
      </a>
      <div className="cv-page">
        {/* ── Header ── */}
        <header className="cv-header">
          <h1 className="cv-name">Miguel Vladimir Torres Dávila</h1>
          <p className="cv-title">Full Stack Developer · Agentic & Spec-Driven Workflows</p>
          <div className="cv-contact">
            <span>{contact.phone}</span>
            <span className="cv-sep">·</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span className="cv-sep">·</span>
            <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer">{contact.linkedin}</a>
            <span className="cv-sep">·</span>
            <a href={`https://${contact.website}`} target="_blank" rel="noreferrer">{contact.website}</a>
          </div>
        </header>

        {/* ── Summary ── */}
        <section className="cv-section">
          <p className="cv-summary">{summary}</p>
        </section>

        {/* ── Experience ── */}
        <section className="cv-section">
          <h2 className="cv-section-title">EXPERIENCE</h2>
          {experience.map((job) => (
            <div key={job.company} className="cv-job">
              <div className="cv-job__header">
                <span className="cv-job__company">{job.company}</span>
                {job.subtitle && <span className="cv-job__subtitle"> — {job.subtitle}</span>}
                <span className="cv-job__meta"> | {job.location} | {job.period}</span>
              </div>
              <div className="cv-job__role">{job.role}</div>
              <ul className="cv-job__bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ── Tech Skills ── */}
        <section className="cv-section">
          <h2 className="cv-section-title">TECH SKILLS</h2>
          <div className="cv-skills">
            {skills.map((s) => (
              <div key={s.category} className="cv-skill-row">
                <span className="cv-skill-row__cat">{s.category}:</span>
                <span className="cv-skill-row__items">{s.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Soft Skills ── */}
        <section className="cv-section">
          <h2 className="cv-section-title">SOFT SKILLS</h2>
          <p className="cv-text">{softSkills}</p>
        </section>

        {/* ── Education ── */}
        <section className="cv-section">
          <h2 className="cv-section-title">EDUCATION</h2>
          {education.map((e) => (
            <div key={e.institution} className="cv-edu">
              <div className="cv-edu__header">
                <strong>{e.institution}</strong>
                <span>{e.location} · {e.period}</span>
              </div>
              <div className="cv-edu__degree">{e.degree}</div>
            </div>
          ))}
        </section>

        {/* ── Languages ── */}
        <section className="cv-section">
          <h2 className="cv-section-title">LANGUAGES</h2>
          <ul className="cv-list">
            <li>Spanish — Native</li>
            <li>English — B1 Intermediate</li>
          </ul>
        </section>

        {/* ── Projects ── */}
        <section className="cv-section">
          <h2 className="cv-section-title">FREELANCE PROJECTS</h2>
          <p className="cv-text cv-text--label">MIRAIDEV (miraidev.com) — Freelance agency managing client web projects:</p>
          <ul className="cv-list cv-list--compact">
            {freelanceProjects.slice(1).map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};
