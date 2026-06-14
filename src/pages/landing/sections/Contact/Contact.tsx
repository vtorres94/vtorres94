import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import "./Contact.scss";

interface IState {
  name: string;
  email: string;
  subject: string;
  message: string;
  nameError: boolean;
  emailError: boolean;
  subjectError: boolean;
  messageError: boolean;
}

const subjects = [
  "Fulltime Position",
  "Part-time Position",
  "Freelance",
  "Project",
  "Collaboration",
  "Other",
];

export const Contact = () => {
  const [state, setState] = useState<IState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    nameError: false,
    emailError: false,
    subjectError: false,
    messageError: false,
  });

  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showError = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = state;
    const nameError = name === "";
    const emailError = email === "";
    const subjectError = subject === "";
    const messageError = message === "";

    setState((s) => ({ ...s, nameError, emailError, subjectError, messageError }));

    if (nameError || emailError || subjectError || messageError) {
      showError("FILL ALL FIELDS TO CONTINUE");
      return;
    }

    const text = `Hi Vladimir, I'm ${name}\nEmail: ${email}\nI'm interested in: ${subject}\nDescription: ${message}`;
    window.open(`https://wa.me/524921818826?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact-section" className="contact">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="section-label">INSERT COIN</p>
          <h2 className="section-title">CONTACT ME</h2>
        </motion.div>

        <motion.div
          className="contact__layout"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <div className="field-group">
              <div className={`field ${state.nameError ? "field--error" : ""}`}>
                <label className="field__label">NAME</label>
                <input
                  type="text"
                  className="field__input"
                  placeholder="YOUR NAME"
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value, nameError: false })}
                />
              </div>
              <div className={`field ${state.emailError ? "field--error" : ""}`}>
                <label className="field__label">EMAIL</label>
                <input
                  type="email"
                  className="field__input"
                  placeholder="YOUR EMAIL"
                  onChange={(e) => setState({ ...state, email: e.target.value, emailError: false })}
                />
              </div>
            </div>

            <div className={`field ${state.subjectError ? "field--error" : ""}`}>
              <label className="field__label">SUBJECT</label>
              <select
                className="field__input field__select"
                value={state.subject}
                onChange={(e) => setState({ ...state, subject: e.target.value, subjectError: false })}
              >
                <option value="">SELECT SUBJECT</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>{s.toUpperCase()}</option>
                ))}
              </select>
            </div>

            <div className={`field ${state.messageError ? "field--error" : ""}`}>
              <label className="field__label">MESSAGE</label>
              <textarea
                className="field__input field__textarea"
                placeholder="YOUR MESSAGE..."
                rows={5}
                onChange={(e) => setState({ ...state, message: e.target.value, messageError: false })}
              />
            </div>

            <button type="submit" className="btn-fighter btn-fighter--primary contact__submit">
              SEND MESSAGE <FaWhatsapp />
            </button>
          </form>

          <div className="contact__info">
            <div className="fighter-card contact__card">
              <p className="section-label" style={{ marginBottom: 20 }}>QUICK ACCESS</p>
              <a href="https://www.linkedin.com/in/vladimir-tordavi" target="_blank" rel="noreferrer" className="contact__link">
                <span className="contact__link-label">LINKEDIN</span>
                <span className="contact__link-value">vladimir-tordavi</span>
              </a>
              <a href="https://github.com/vtorres94" target="_blank" rel="noreferrer" className="contact__link">
                <span className="contact__link-label">GITHUB</span>
                <span className="contact__link-value">vtorres94</span>
              </a>
              <a href="mailto:vladimir.tordavi@gmail.com" className="contact__link">
                <span className="contact__link-label">EMAIL</span>
                <span className="contact__link-value">vladimir.tordavi@gmail.com</span>
              </a>
              <a href="https://wa.me/524921818826" target="_blank" rel="noreferrer" className="contact__link">
                <span className="contact__link-label">WHATSAPP</span>
                <span className="contact__link-value">+52 492 181 8826</span>
              </a>
            </div>
          </div>
        </motion.div>

        {toastMsg && (
          <motion.div
            className="contact__toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {toastMsg}
          </motion.div>
        )}
      </div>
    </section>
  );
};
