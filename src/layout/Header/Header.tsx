import { useNavigate } from "react-router";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./Header.scss";

export const Header = ({}) => {
	const navigate = useNavigate();
	const socials: any = [
		{
			icon: <FaGithub className="github" />,
			link: "https://github.com/vtorres94/",
		},
		{
			icon: <FaLinkedinIn className="linkedin" />,
			link: "https://www.linkedin.com/in/vladimir-tordavi",
		},
		{
			icon: <FaWhatsapp className="whatsapp" />,
			link: "https://wa.me/5214492284747",
		},
		{
			icon: <IoIosMail className="email" />,
			link: "mailto:vladimir.tordavi@gmail.com",
		},
	];

	const menu = [
		{ link: "#about-section", name: "About" },
		{ link: "#projects-section", name: "Projects" },
		{ link: "#contact-section", name: "Contact" },
	];

	return (
		<nav>
			<div className="socials">
				{socials.map((social: any, index: number) => {
					return (
						<a
							className={social.className}
							key={`${index}-${social.icon}`}
							href={social.link}
							target="_blank"
						>
							{social.icon}
						</a>
					);
				})}
			</div>
			<div className="menu">
				<a className="home-option" onClick={() => navigate("/")}>
					Home
				</a>
				{menu.map((section, index) => {
					return (
						<a key={`${index}-${section.name}`} href={section.link}>
							{section.name}
						</a>
					);
				})}
			</div>
		</nav>
	);
};
