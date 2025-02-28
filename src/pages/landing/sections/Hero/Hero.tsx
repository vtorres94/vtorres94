import "./Hero.scss";

export const Hero = ({}) => {
	return (
		<div className="hero">
			<div className="info">
				<h3>
					<span>SOFTWARE</span> DEVELOPER
				</h3>
				<h1>
					VLADIMIR <span>TORRES</span>
				</h1>
				<div className="button-group">
					<button
						onClick={() =>
							window.open(
								"https://www.linkedin.com/in/vladimir-tordavi",
								"_blank"
							)
						}
					>
						Hire Me
					</button>
					<button
						onClick={() =>
							window.open(
								"/assets/CV@TORRES_DAVILA_MIGUEL_VLADIMIR.pdf",
								"_blank"
							)
						}
					>
						Downlowad CV
					</button>
				</div>
			</div>
			<div className="image">
				<img src="/assets/me.jpg" />
			</div>
		</div>
	);
};
