import { motion } from "framer-motion";
import DATA from "../../../../static/skills.json";
import "./Skills.scss";

export const Skills = () => {
  return (
    <section id="skills-section" className="skills">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="section-label">MOVE LIST</p>
          <h2 className="section-title">SKILLS</h2>
        </motion.div>

        <div className="skills__grid">
          {DATA.categories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              className="skill-category fighter-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.12, duration: 0.6 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="skill-category__header">
                <span className="skill-category__tag" style={{ color: cat.color }}>
                  {cat.tag}
                </span>
                <h3 className="skill-category__label">{cat.label}</h3>
              </div>

              <div className="skill-category__list">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item__meta">
                      <span className="skill-item__name">{skill.name}</span>
                      <span className="skill-item__level" style={{ color: cat.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar__fill"
                        style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: ci * 0.12 + si * 0.08 + 0.3, duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
