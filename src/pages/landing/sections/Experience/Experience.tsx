import { Job } from "./components/Job";
import cwvl from "../../../../assets/cwvl.jpg";
import outdev from "../../../../assets/outdev.jpg";
import ciesoft from "../../../../assets/ciesoft.jpg";
import "./Experience.scss";

export const Experience = ({}) => {
	const jobs = [
		{
			id: "job-3",
			company: "CWVL Consultoría",
			job: "Full Stack Developer",
			start: "Oct 2021",
			end: "Oct 2024",
			description: "",
			thechnologies: [],
			logo: cwvl,
			location: "Aguascalientes, Ags",
			responsabilities: [
				"Developed a custom CRM system using React for lead management, increasing operational efficiency by 80% (https://app.cwvlconsultoria.com).",
				"Built parameterized landing pages with React and Node.js, improving franchisee engagement by 30% (https://franquicias.cwvlconsultoria.com/id).",
				"Designed and implemented a React-based SPA with interactive maps for franchisee search by state, enhancing user accessibility (https://map.cwvlconsultoria.com).",
				"Automated WhatsApp marketing through a Node.js microservice linked to a chatbot, increasing sales by 30%.",
				"Deployed Moodle for franchisee training management, streamlining coordination efforts (https://academy.cwvlconsultoria.com). ",
				"Configured a GCP bucket and integrated its API into our backend system to manage CRM file storage efficiently. ",
				"Dockerized all projects to optimize development and deployment processes, ensuring consistency across environments. ",
				"Integrated PostgreSQL for client data standardization, enabling advanced segmentation and improved business intelligence strategies. ",
				"Configured an EC2 instance on AWS with Linux Red Hat to deploy ISSABEL PBX, reducing telemarketing campaign costs by 75%. ",
			],
		},
		{
			id: "job-2",
			company: "OUTDEV GLOBAL",
			job: "Full Stack Developer",
			start: "May 2020",
			end: "Oct 2021",
			description: "",
			thechnologies: [],
			logo: outdev,
			location: "Guadalajara, Jal",
			responsabilities: [
				"Developed backend modules in Django for the Investment Smart System (SII).",
				"Created the mobile application for SII using Flutter, enhancing user accessibility.",
				"Successfully deployed the SII app to both the App Store and Play Store.",
			],
		},
		{
			id: "job-1",
			company: "CIESOFT",
			job: "Internship Full Stack Developer",
			start: "Oct 2021",
			end: "Oct 2024",
			description: "",
			thechnologies: [],
			logo: ciesoft,
			location: "Zacatecas, Zac",
			responsabilities: [
				"Developed backend modules in Java for the Hospital Management System (Blue Health).",
				"Built several frontend components for Blue Health using ReactJS.",
			],
		},
	];
	return (
		<div className="experience-section">
			<h2>EXPERIENCE</h2>
			<div className="jobs">
				{jobs.map((job) => {
					return <Job key={job.id} job={job} />;
				})}
			</div>
		</div>
	);
};
