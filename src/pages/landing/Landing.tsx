import { About, Experience, Hero, Projects, Contact } from "./sections";
import "./Landing.scss";

export const Landing = ({}) => {
	return (
		<div className="landing-page">
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Contact />
		</div>
	);
};
