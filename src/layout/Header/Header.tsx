import { useState } from "react";
import { useNavigate } from "react-router";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.scss";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/vtorres94/", label: "github" },
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/vladimir-tordavi/", label: "linkedin" },
  { icon: <FaWhatsapp />, link: "https://wa.me/524921818826", label: "whatsapp" },
  { icon: <IoIosMail />, link: "mailto:vladimir.tordavi@gmail.com", label: "email" },
];

const menu = [
  { link: "#about-section", name: "ABOUT" },
  { link: "#skills-section", name: "SKILLS" },
  { link: "#experience-section", name: "EXP" },
  { link: "#projects-section", name: "PROJECTS" },
  { link: "#contact-section", name: "CONTACT" },
];

export const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="site-nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <button className="site-nav__logo" onClick={() => { navigate("/"); setOpen(false); }}>
        <span className="logo-bracket">[</span>
        V.<span className="logo-neon">TORRES</span>
        <span className="logo-bracket">]</span>
      </button>

      <div className="site-nav__desktop">
        <div className="site-nav__links">
          {menu.map((item) => (
            <a key={item.name} href={item.link} className="nav-link">
              {item.name}
            </a>
          ))}
        </div>
        <div className="site-nav__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.link} target="_blank" rel="noreferrer" className={`social-icon social-icon--${s.label}`}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <button className="site-nav__burger" onClick={() => setOpen(!open)} aria-label="menu">
        <span className={open ? "open" : ""} />
        <span className={open ? "open" : ""} />
        <span className={open ? "open" : ""} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="site-nav__mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {menu.map((item) => (
              <a key={item.name} href={item.link} className="nav-link" onClick={() => setOpen(false)}>
                {item.name}
              </a>
            ))}
            <div className="mobile-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.link} target="_blank" rel="noreferrer" className={`social-icon social-icon--${s.label}`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
