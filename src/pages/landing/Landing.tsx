import { About, Experience, Hero, Projects, Contact, Skills } from "./sections";
import "./Landing.scss";

export const Landing = () => {
  return (
    <main className="landing-page">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};
