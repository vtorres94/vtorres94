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
              Software Developer with <span className="neon">6+ years</span> of experience
              building scalable web applications. I specialize in{" "}
              <span className="neon">React</span>,{" "}
              <span className="neon">TypeScript</span>, and{" "}
              <span className="neon">Node.js</span> — crafting full-stack
              solutions from database to UI.
            </p>
            <p>
              I architect <span className="neon">RESTful APIs</span>, containerize with{" "}
              <span className="neon">Docker</span>, and deploy on{" "}
              <span className="neon">AWS</span> &amp; <span className="neon">GCP</span>.
              Experienced in microservices, CI/CD pipelines, and agile environments
              where performance and reliability are non-negotiable.
            </p>
            <p>
              I lead freelance projects end-to-end — from architecture decisions
              to production deployments — for clients across{" "}
              <span className="neon">Mexico</span> and beyond.
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
