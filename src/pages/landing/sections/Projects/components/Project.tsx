interface IProps {
	project: any;
}

export const Project = ({ project }: IProps) => {
	return (
		<div className="project">
			<div className="logo">
				<img src={project.logo} />
			</div>
		</div>
	);
};
