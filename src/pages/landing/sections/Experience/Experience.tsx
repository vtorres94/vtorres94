import { useContext } from "react";
import { motion } from "framer-motion";
import { JobsContext } from "../../../../contexts/JobsContext";
import { Job } from "./components/Job";
import "./Experience.scss";

export const Experience = () => {
  const jobs = useContext(JobsContext);

  return (
    <section id="experience-section" className="experience">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="section-label">STORY MODE</p>
          <h2 className="section-title">EXPERIENCE</h2>
        </motion.div>

        <div className="experience__timeline">
          {jobs.map((job, i) => (
            <Job key={job.id} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
