import { IJob } from "../../../../../models/job.model";

interface IProps {
	job: IJob;
}

export const Job = ({ job }: IProps) => {
	return (
		<div className="job">
			<div>
				<img src={job.logo} />
			</div>
			<h3>{job.company}</h3>
		</div>
	);
};
