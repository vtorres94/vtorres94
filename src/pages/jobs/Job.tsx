import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { JobsContext } from "../../contexts/JobsContext";

export const Job = ({}) => {
	const { id } = useParams();
	const [job, setJob] = useState<any>({});
	const jobs = useContext(JobsContext);

	useEffect(() => {
		setJob(jobs.find((job: any) => job.id === id));
	}, [id]);

	return (
		<div>
			<h1>{job.company}</h1>
			<p>{job.description}</p>
		</div>
	);
};
