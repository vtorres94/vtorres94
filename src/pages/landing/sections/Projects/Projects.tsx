import { motion } from "framer-motion";
import DATA from "../../../../static/projects.json";
import "./Projects.scss";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  logo: string;
  link: string;
}

const ProjectCard = ({ project, index, mode }: { project: ProjectItem; index: number; mode: "story" | "arcade" }) => (
  <motion.div
    className={`project-card project-card--${mode}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true, amount: 0.1 }}
    onClick={() => window.open(project.link, "_blank")}
    whileHover={{ scale: 1.02 }}
  >
    <span className="project-card__mode">{mode === "story" ? "STORY" : "ARCADE"}</span>
    <div className="project-card__logo">
      <img src={project.logo} alt={project.title} />
    </div>
    <div className="project-card__info">
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>
    </div>
    <span className="project-card__cta">▶ OPEN</span>
  </motion.div>
);

export const Projects = () => {
  const { personalProjects, freelanceProjects } = DATA;

  return (
    <section id="projects-section" className="projects">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="section-label">STAGE SELECT</p>
          <h2 className="section-title">PROJECTS</h2>
        </motion.div>

        <div className="projects__subsection">
          <h3 className="projects__mode-title projects__mode-title--story">
            <span>STORY MODE</span>
            <span className="mode-badge">PERSONAL</span>
          </h3>
          <div className="projects__grid projects__grid--story">
            {personalProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} mode="story" />
            ))}
          </div>
        </div>

        <div className="projects__subsection">
          <h3 className="projects__mode-title projects__mode-title--arcade">
            <span>ARCADE MODE</span>
            <span className="mode-badge">FREELANCE</span>
          </h3>
          <div className="projects__grid projects__grid--arcade">
            {freelanceProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} mode="arcade" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
