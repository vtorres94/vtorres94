import { useContext } from "react";
import { JobsContext } from "../../../../contexts/JobsContext";
import { Job } from "./components/Job";
import "./Experience.scss";

export const Experience = ({}) => {
	const jobs = useContext(JobsContext);

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
