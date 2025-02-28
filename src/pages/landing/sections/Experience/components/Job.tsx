import { useNavigate } from "react-router";
import { IJob } from "../../../../../models/job.model";

interface IProps {
	job: IJob;
}

export const Job = ({ job }: IProps) => {
	const navigate = useNavigate();

	return (
		<div className="job" onClick={() => navigate(`/job/${job.id}`)}>
			<div>
				<img src={job.logo} />
			</div>
			<h3>{job.company}</h3>
			<h5>{job.job}</h5>
			<p>
				{job.start} - {job.end}
			</p>
		</div>
	);
};
