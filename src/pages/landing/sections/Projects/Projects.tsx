import { Slider } from "./components/Slider/Slider";
import "./Projects.scss";

export const Projects = ({}) => {
	const projects = [
		{
			id: "p-1",
			title: "MIRAIDEV",
			description: "",
			logo: "/src/assets/miraidev.png",
			link: "https://miraidev.tech",
		},
		{
			id: "p-2",
			title: "PLENNIA",
			description: "",
			logo: "/src/assets/plennia.png",
			link: "https://plennia.mx",
		},
		{
			id: "p-3",
			title: "LOZART",
			description: "",
			logo: "/src/assets/lozart.png",
			link: "https://lozartceramica.com",
		},
		{
			id: "p-4",
			title: "ZENTRO PRANA",
			description: "",
			logo: "/src/assets/zentroprana.png",
			link: "https://zentroprana.com",
		},
		{
			id: "p-5",
			title: "PUNTO CHULETA",
			description: "",
			logo: "/src/assets/puntochuleta.png",
			link: "https://puntochuleta.com",
		},
		{
			id: "p-6",
			title: "TORDAVI INTERNATIONAL",
			description: "",
			logo: "/src/assets/tordavi.png",
			link: "https://tordavi.com",
		},
	];

	return (
		<div className="projects-section">
			<h2>PROJECTS</h2>
			<Slider items={projects} />
		</div>
	);
};
