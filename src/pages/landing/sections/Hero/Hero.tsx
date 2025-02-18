import "./Hero.scss";
import profile_image from "../../../../assets/me.jpg";
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
					<button>Hire Me</button>
					<button>Downlowad CV</button>
				</div>
			</div>
			<div className="image">
				<img src={profile_image} />
			</div>
		</div>
	);
};
