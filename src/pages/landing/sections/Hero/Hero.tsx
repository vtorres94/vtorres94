import { motion } from "framer-motion";
import "./Hero.scss";

const stats = [
  { label: "EXP", value: "6 YEARS" },
  { label: "CLASS", value: "FULL STACK" },
  { label: "BASE", value: "MEXICO" },
];

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <motion.div
          className="hero__left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="player-badge">1P</span>

          <p className="hero__role">SOFTWARE DEVELOPER</p>

          <h1 className="hero__name">
            VLADIMIR<br />
            <span className="neon">TORRES</span>
          </h1>

          <div className="hero__stats">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              >
                <span className="stat__label">{s.label}</span>
                <span className="stat__value">{s.value}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <button
              className="btn-fighter btn-fighter--primary"
              onClick={() => window.open("https://www.linkedin.com/in/vladimir-tordavi", "_blank")}
            >
              HIRE ME
            </button>
            <button
              className="btn-fighter btn-fighter--secondary"
              onClick={() => window.open("/assets/CV@TORRES_DAVILA_MIGUEL_VLADIMIR.pdf", "_blank")}
            >
              DOWNLOAD CV
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <div className="portrait-frame">
            <span className="portrait-select">▶ SELECT</span>
            <div className="portrait-img">
              <img src="/assets/me.jpg" alt="Vladimir Torres" />
            </div>
            <div className="portrait-corner portrait-corner--tl" />
            <div className="portrait-corner portrait-corner--br" />
          </div>
        </motion.div>
      </div>

      <div className="hero__scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};
