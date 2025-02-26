import { Card } from "antd";
import { Slider } from "./components/Slider/Slider";
import DATA from "../../../../static/projects.json";
import "./Projects.scss";

export const Projects = ({}) => {
	const { personalProjects, freelanceProjects } = DATA;

	return (
		<div id="projects-section" className="projects-section">
			<h2>PROJECTS</h2>
			<div className="personal-projects">
				{personalProjects.map((project) => {
					return (
						<Card
							key={project.id}
							hoverable
							className="personal-project"
							onClick={() => window.open(project.link)}
							cover={
								<img alt={project.title} src={project.logo} />
							}
						>
							<Card.Meta
								title={project.title}
								description={project.description}
							/>
						</Card>
					);
				})}
			</div>
			<h2>FREELANCE</h2>
			<Slider items={freelanceProjects} />
		</div>
	);
};
