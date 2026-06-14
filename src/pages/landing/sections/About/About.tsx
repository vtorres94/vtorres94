import { motion } from "framer-motion";
import "./About.scss";

const traits = [
  { label: "PROBLEM SOLVER", icon: "⚡" },
  { label: "AGILE MINDSET", icon: "🔄" },
  { label: "CLEAN CODE", icon: "🎯" },
  { label: "TEAM PLAYER", icon: "🤝" },
  { label: "RESILIENCE", icon: "🛡️" },
  { label: "SHARP UNDERSTANDING", icon: "🧠" },
  { label: "HARD WORKER", icon: "🔥" },
];

export const About = () => {
  return (
    <section id="about-section" className="about">
      <motion.div
        className="section-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="section-label">CHARACTER BIO</p>
        <h2 className="section-title">ABOUT ME</h2>

        <div className="about__grid">
          <div className="about__text fighter-card">
            <p>
              Full Stack Developer with <span className="neon">6+ years</span> of experience
              building enterprise web applications and reactive microservices. Currently
              specializing in <span className="neon">Java 21</span> /{" "}
              <span className="neon">Spring WebFlux</span> for{" "}
              <span className="neon">BIAN</span>-compliant financial microservices
              at Diners Club Ecuador.
            </p>
            <p>
              I work with AI through <span className="neon">specs, not chat</span>.
              I author steering files and domain specs that give{" "}
              <span className="neon">Kiro</span> and{" "}
              <span className="neon">Claude Code</span> the context to generate
              production-ready code from the first pass — structured playbooks,
              not improvised prompts.
            </p>
            <p>
              Strong across the full stack: <span className="neon">React</span> /{" "}
              <span className="neon">TypeScript</span> on the frontend,{" "}
              <span className="neon">Node.js</span> and{" "}
              <span className="neon">Java</span> on the backend, with solid DevOps
              practices — <span className="neon">Docker</span>,{" "}
              <span className="neon">Kubernetes</span>,{" "}
              <span className="neon">Azure Pipelines</span>,{" "}
              <span className="neon">AWS</span>.
            </p>
          </div>

          <div className="about__traits">
            {traits.map((t, i) => (
              <motion.div
                key={t.label}
                className="trait-card fighter-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="trait-card__icon">{t.icon}</span>
                <span className="trait-card__label">{t.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
