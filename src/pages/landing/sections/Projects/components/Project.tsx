interface IProps {
	project: any;
}

export const Project = ({ project }: IProps) => {
	return (
		<a className="project" href={project.link} target="_blank">
			<div className="logo">
				<img src={project.logo} />
			</div>
		</a>
	);
};
