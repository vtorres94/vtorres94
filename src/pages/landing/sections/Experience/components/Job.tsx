import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IJob } from "../../../../../models/job.model";

interface IProps {
  job: IJob;
  index: number;
}

export const Job = ({ job, index }: IProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="job-card fighter-card"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="job-card__header">
        <div className="job-card__logo">
          <img src={job.logo} alt={job.company} />
        </div>
        <div className="job-card__info">
          <p className="job-card__period">
            {job.start} — {job.end}
          </p>
          <h3 className="job-card__company">{job.company}</h3>
          <p className="job-card__role">{job.job}</p>
          <p className="job-card__location">{job.location}</p>
        </div>
        <button
          className="job-card__toggle"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "collapse" : "expand"}
        >
          <span>{expanded ? "−" : "+"}</span>
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            className="job-card__responsibilities"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {job.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
